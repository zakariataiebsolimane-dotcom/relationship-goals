/**
 * The public origin of this site, used for canonical links, og:url and the sitemap.
 * The site is prerendered to static HTML at build time, so the origin cannot come
 * from a request — it is fixed here (override with SITE_URL when building).
 */
export const SITE_URL = (process.env.SITE_URL || 'https://relationshipgoals.store').replace(/\/$/, '');

export const siteOrigin = (_request?: Request): string => SITE_URL;
