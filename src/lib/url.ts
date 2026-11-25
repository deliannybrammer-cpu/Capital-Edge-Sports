/**
 * Build an internal link that respects the site's base path
 * (e.g. "/Capital-Edge-Sports/" on GitHub Pages, "/" on a custom domain).
 *   url('/about/')  ->  '/Capital-Edge-Sports/about/'
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + path;
}
