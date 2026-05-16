/**
 * Site config for SEO, JSON-LD, sitemap, and Google Ads.
 * Set REACT_APP_SITE_URL in .env for production (e.g. https://finlytiqllp.com).
 */
export const SITE_URL = process.env.REACT_APP_SITE_URL || (typeof window !== 'undefined' ? window.location.origin : 'https://finlytiqllp.com');

export const BUSINESS = {
  name: 'Finlytiq LLP',
  legalName: 'Finlytiq LLP',
  description: 'Tax, GST, compliance and advisory services in Hyderabad, Telangana. Income Tax filing, GST registration & returns, company incorporation, trademark, VCFO.',
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
  address: {
    streetAddress: 'Plot 8/2, 4th Floor, HUDA Techni Enclave, Near Raidurg Metro, Madhapur',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500081',
    addressCountry: 'IN',
  },
  geo: {
    latitude: 17.4484,
    longitude: 78.3908,
  },
  contact: {
    email: 'team.finlytiq@gmail.com',
    phone: '+919603799411',
    phoneSecondary: '+919701557017',
  },
  areaServed: ['Hyderabad', 'Telangana', 'India'],
  priceRange: '₹₹',
};
