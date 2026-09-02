/** Public folder asset URL (respects Vite `base` if ever changed). */
export function publicUrl(file: string): string {
  const base = import.meta.env.BASE_URL;
  const path = file.replace(/^\//, '');
  return base.endsWith('/') ? `${base}${path}` : `${base}/${path}`;
}
