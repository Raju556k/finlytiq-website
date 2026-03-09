import { SITE_URL, BUSINESS } from '../config/site';

export function getLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AccountingFirm',
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description: BUSINESS.description,
    url: BUSINESS.url,
    logo: BUSINESS.logo,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.streetAddress,
      addressLocality: BUSINESS.address.addressLocality,
      addressRegion: BUSINESS.address.addressRegion,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: BUSINESS.contact.email,
      telephone: BUSINESS.contact.phone,
      contactType: 'customer service',
      areaServed: BUSINESS.areaServed,
    },
    areaServed: BUSINESS.areaServed.map((name) => ({ '@type': 'Place', name })),
    priceRange: BUSINESS.priceRange,
  };
}

export function getServiceJsonLd(service, path) {
  const url = `${SITE_URL.replace(/\/$/, '')}${path.startsWith('/') ? path : `/${path}`}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: service.title,
    description: service.metaDescription || service.desc,
    provider: {
      '@id': `${SITE_URL}/#organization`,
    },
    areaServed: BUSINESS.areaServed.map((name) => ({ '@type': 'Place', name })),
    url,
  };
}
