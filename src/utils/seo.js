/**
 * Update document head for SEO and Google Ads: title, description, canonical, Open Graph, keywords.
 * Call from useEffect; cleanup restores defaults.
 */
import { SITE_URL } from '../config/site';

const DEFAULT_TITLE = 'Finlytiq LLP';
const DEFAULT_DESCRIPTION = 'Finlytiq LLP – Tax, GST, Compliance & Advisory in Hyderabad, Telangana. Income Tax, GST returns, Company incorporation, Trademark, VCFO.';

function setMeta(nameOrProp, content, isProperty = false) {
  const attr = isProperty ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${nameOrProp}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, nameOrProp);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content || '');
  return el;
}

function setCanonical(url) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
  return el;
}

export function setPageSEO({ title, description, path = '', keywords }) {
  const fullUrl = path ? `${SITE_URL.replace(/\/$/, '')}${path.startsWith('/') ? path : `/${path}`}` : SITE_URL;

  document.title = title || DEFAULT_TITLE;
  setMeta('description', description || DEFAULT_DESCRIPTION);
  setCanonical(fullUrl);

  setMeta('og:title', title || DEFAULT_TITLE, true);
  setMeta('og:description', description || DEFAULT_DESCRIPTION, true);
  setMeta('og:url', fullUrl, true);
  setMeta('og:type', 'website', true);

  if (keywords && keywords.length) {
    setMeta('keywords', Array.isArray(keywords) ? keywords.join(', ') : keywords);
  }
}

export function resetPageSEO() {
  document.title = DEFAULT_TITLE;
  setMeta('description', DEFAULT_DESCRIPTION, false);
  setCanonical(SITE_URL);
  setMeta('og:title', DEFAULT_TITLE, true);
  setMeta('og:description', DEFAULT_DESCRIPTION, true);
  setMeta('og:url', SITE_URL, true);
  setMeta('og:type', 'website', true);
  setMeta('keywords', 'CA Hyderabad, tax consultant Hyderabad, GST filing Telangana, company registration Hyderabad, Finlytiq', false);
}

export { DEFAULT_TITLE, DEFAULT_DESCRIPTION };
