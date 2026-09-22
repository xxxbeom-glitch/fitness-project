import { catalogEntries } from '../src/debug/ui-catalog';

describe('DEV-001 debug UI catalog shell', () => {
  it('exposes a deterministic bootstrap catalog entry without MVP screens', () => {
    expect(catalogEntries).toHaveLength(1);
    expect(catalogEntries[0]?.id).toBe('bootstrap-shell');
    expect(catalogEntries.some((entry) => entry.frameName.startsWith('0'))).toBe(
      false,
    );
  });
});
