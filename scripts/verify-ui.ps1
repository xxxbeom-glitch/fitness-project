$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
Set-Location $projectRoot

$packageJsonPath = Join-Path $projectRoot "package.json"
if (-not (Test-Path $packageJsonPath)) {
    Write-Error "package.json이 없습니다. Expo bootstrap Issue 완료 후 실행하세요."
    exit 1
}

$package = Get-Content $packageJsonPath -Raw | ConvertFrom-Json

if (Test-Path (Join-Path $projectRoot "pnpm-lock.yaml")) {
    $runner = "pnpm"
    $runPrefix = @("run")
} elseif (Test-Path (Join-Path $projectRoot "yarn.lock")) {
    $runner = "yarn"
    $runPrefix = @()
} else {
    $runner = "npm"
    $runPrefix = @("run")
}

function Invoke-PackageScript {
    param(
        [string]$Name,
        [switch]$Required
    )

    $scripts = $package.scripts
    $exists = $null -ne $scripts -and $null -ne $scripts.PSObject.Properties[$Name]

    if (-not $exists) {
        if ($Required) {
            Write-Error "필수 package script '$Name'이 없습니다."
            exit 1
        }

        Write-Host "SKIP: optional script '$Name' not configured."
        return
    }

    Write-Host "`n>>> $runner $($runPrefix -join ' ') $Name"
    & $runner @runPrefix $Name
    if ($LASTEXITCODE -ne 0) {
        Write-Error "$Name failed."
        exit $LASTEXITCODE
    }
}

Write-Host "=== Tampin Verification ==="

Invoke-PackageScript -Name "typecheck" -Required
Invoke-PackageScript -Name "lint" -Required
Invoke-PackageScript -Name "test" -Required
Invoke-PackageScript -Name "test:ui"
Invoke-PackageScript -Name "android:verify"

Write-Host "`nPASS: configured static/lint/test verification completed."
Write-Host "Runtime/Device PASS는 별도 실제 실행 evidence가 있어야 합니다."
