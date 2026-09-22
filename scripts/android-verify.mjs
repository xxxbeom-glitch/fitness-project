import { existsSync, readdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const androidDir = join(root, 'android');

function run(command, args, label, cwd = root) {
  console.log(`\n>>> ${label}: ${command} ${args.join(' ')}`);
  const result = spawnSync(command, args, {
    cwd,
    encoding: 'utf8',
    shell: true,
    env: {
      ...process.env,
      NODE_ENV: process.env.NODE_ENV ?? 'development',
    },
  });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  return result.status ?? 1;
}

const lockfiles = ['package-lock.json', 'yarn.lock', 'pnpm-lock.yaml'].filter(
  (name) => existsSync(join(root, name)),
);

if (lockfiles.length !== 1 || lockfiles[0] !== 'package-lock.json') {
  console.error(
    `Expected exactly npm package-lock.json, found: ${lockfiles.join(', ') || '(none)'}`,
  );
  process.exit(1);
}

const configStatus = run(
  'npx',
  ['expo', 'config', '--type', 'public'],
  'expo config',
);
if (configStatus !== 0) {
  process.exit(configStatus);
}

if (!existsSync(androidDir)) {
  const prebuildStatus = run(
    'npx',
    ['expo', 'prebuild', '--platform', 'android', '--no-install'],
    'expo prebuild android',
  );
  if (prebuildStatus !== 0) {
    console.error(
      'Android prebuild failed — record Android compile as NOT VERIFIED.',
    );
    process.exit(prebuildStatus);
  }
}

const gradlew = join(androidDir, 'gradlew.bat');
if (!existsSync(gradlew)) {
  console.error('android/gradlew.bat missing after prebuild.');
  process.exit(1);
}

const assembleStatus = run(
  '.\\gradlew.bat',
  ['assembleDebug', '--no-daemon'],
  'gradle assembleDebug',
  androidDir,
);

if (assembleStatus !== 0) {
  process.exit(assembleStatus);
}

const javaRoot = join(androidDir, 'app', 'src', 'main', 'java');
const packageDirs = existsSync(javaRoot) ? readdirSync(javaRoot) : [];
console.log(
  `\nPASS: android assembleDebug completed. java package roots: ${packageDirs.join(', ')}`,
);
