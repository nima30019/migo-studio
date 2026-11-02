export function getAssetPath(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  // 1. Client-side check in browser:
  // If user is accessing via https://<username>.github.io/migo-studio/...
  if (typeof window !== 'undefined') {
    if (window.location.pathname.startsWith('/migo-studio')) {
      return `/migo-studio${normalizedPath}`;
    }
    return normalizedPath;
  }

  // 2. Build-time / SSG check:
  const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH ||
    (process.env.GITHUB_ACTIONS === 'true' ? '/migo-studio' : '');

  return `${basePath}${normalizedPath}`;
}
