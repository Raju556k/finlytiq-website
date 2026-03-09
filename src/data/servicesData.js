/**
 * Single source of truth for services. Used by:
 * - Home page Services section
 * - /services index page
 * - Individual service landing pages (/services/:slug) for Google Ads & SEO
 */
export const services = [
  {
    slug: 'income-tax-filing',
    title: 'Income Tax Filing',
    icon: '📄',
    desc: 'Expert ITR filing (ITR-1 to ITR-7) for individuals, businesses, and startups.',
    metaTitle: 'Income Tax Filing & ITR Services in Hyderabad | Finlytiq',
    metaDescription: 'Get expert Income Tax filing and ITR (ITR-1 to ITR-7) services in Hyderabad. For individuals, businesses & startups. Contact Finlytiq LLP.',
    keywords: 'Income tax filing Hyderabad, ITR filing Telangana, income tax consultant Hyderabad, ITR-1 ITR-2 ITR-3 ITR-4, tax return filing',
    seoIntro: 'Looking for income tax filing or ITR services in Hyderabad or Telangana? We file ITR-1 to ITR-7 for individuals, businesses and startups.',
    details: [
      { name: 'ITR-1', info: 'For salaried individuals with income up to ₹50 lakh.' },
      { name: 'ITR-2', info: 'For individuals & HUFs not having income from business or profession.' },
      { name: 'ITR-3', info: 'For individuals & HUFs having income from business or profession.' },
      { name: 'ITR-4', info: 'For presumptive income from business & profession.' },
      { name: 'ITR-5/6/7', info: 'For firms, companies, trusts, etc.' },
    ],
  },
  {
    slug: 'gst-registration-returns',
    title: 'GST Registration & Returns',
    icon: '🧾',
    desc: 'Seamless GST registration, monthly/quarterly returns, and compliance.',
    metaTitle: 'GST Registration & GST Returns in Hyderabad | Finlytiq',
    metaDescription: 'GST registration, GSTR-1, GSTR-3B, GSTR-9 and compliance in Hyderabad. Expert GST services for businesses. Finlytiq LLP.',
    keywords: 'GST registration Hyderabad, GST filing Telangana, GSTR-1 GSTR-3B GSTR-9, GST consultant Hyderabad, GST return filing',
    seoIntro: 'GST registration and GST return filing in Hyderabad made easy. We handle GSTR-1, GSTR-3B, GSTR-9 and full GST compliance for businesses in Telangana.',
    details: [
      { name: 'GST Registration', info: 'For businesses with turnover above threshold or voluntary registration.' },
      { name: 'GST Returns', info: 'GSTR-1, GSTR-3B, GSTR-9, and more.' },
      { name: 'GST Audit', info: 'Annual GST audit and compliance.' },
    ],
  },
  {
    slug: 'virtual-cfo',
    title: 'Virtual CFO (VCFO)',
    icon: '👔',
    desc: 'Strategic financial leadership and reporting for your growing business.',
    metaTitle: 'Virtual CFO & Financial Advisory in Hyderabad | Finlytiq',
    metaDescription: 'Virtual CFO (VCFO) services in Hyderabad: financial planning, MIS reporting, investor relations. Finlytiq LLP.',
    keywords: 'Virtual CFO Hyderabad, VCFO services Telangana, part time CFO, financial advisory Hyderabad, MIS reporting',
    seoIntro: 'Virtual CFO (VCFO) services in Hyderabad and Telangana. Get strategic financial planning, MIS reporting and investor relations support.',
    details: [
      { name: 'Financial Planning', info: 'Budgeting, forecasting, and cash flow management.' },
      { name: 'MIS Reporting', info: 'Monthly/quarterly management reports.' },
      { name: 'Investor Relations', info: 'Support for fundraising and investor queries.' },
    ],
  },
  {
    slug: 'startup-advisory',
    title: 'Startup Advisory',
    icon: '💡',
    desc: 'Guidance on incorporation, funding, and compliance for startups.',
    metaTitle: 'Startup Advisory & Compliance in Hyderabad | Finlytiq',
    metaDescription: 'Startup advisory in Hyderabad: company incorporation, pitch decks, ROC & FEMA compliance. Finlytiq LLP.',
    keywords: 'Startup advisory Hyderabad, startup CA Telangana, company incorporation, pitch deck, ROC compliance, FEMA',
    seoIntro: 'Startup advisory and compliance in Hyderabad. From company incorporation and pitch decks to ROC and FEMA compliance for startups in Telangana.',
    details: [
      { name: 'Company Incorporation', info: 'Private Limited, LLP, OPC registration.' },
      { name: 'Pitch Decks', info: 'Investor-ready business plans and pitch decks.' },
      { name: 'Compliance', info: 'ROC, FEMA, and other regulatory compliance.' },
    ],
  },
  {
    slug: 'company-incorporation',
    title: 'Company Incorporation',
    icon: '🏢',
    desc: 'Private Limited, LLP, and OPC registration with end-to-end support.',
    metaTitle: 'Company Incorporation – Pvt Ltd, LLP, OPC in Hyderabad | Finlytiq',
    metaDescription: 'Company incorporation in Hyderabad: Private Limited, LLP, OPC registration. End-to-end support. Finlytiq LLP.',
    keywords: 'Company registration Hyderabad, private limited registration Telangana, LLP registration, OPC registration, company incorporation',
    seoIntro: 'Company incorporation in Hyderabad: Private Limited, LLP and OPC registration with end-to-end support. We serve startups and businesses across Telangana.',
    details: [
      { name: 'Private Limited', info: 'Best for startups and growing businesses.' },
      { name: 'LLP', info: 'Limited Liability Partnership registration.' },
      { name: 'OPC', info: 'One Person Company for solo founders.' },
    ],
  },
  {
    slug: 'trademark-registration',
    title: 'Trademark Registration',
    icon: '™️',
    desc: 'Protect your brand with hassle-free trademark registration.',
    metaTitle: 'Trademark Registration in Hyderabad | Finlytiq',
    metaDescription: 'Trademark search, application filing and objection handling in Hyderabad. Protect your brand. Finlytiq LLP.',
    keywords: 'Trademark registration Hyderabad, trademark filing Telangana, brand registration, trademark search, IP registration',
    seoIntro: 'Trademark registration in Hyderabad and Telangana. We handle trademark search, application filing and objection handling so you can protect your brand.',
    details: [
      { name: 'Trademark Search', info: 'Check availability and avoid conflicts.' },
      { name: 'Application Filing', info: 'End-to-end filing and documentation.' },
      { name: 'Objection Handling', info: 'Expert help for examination objections.' },
    ],
  },
  {
    slug: 'other-services',
    title: 'Other Services',
    icon: '🛠️',
    desc: 'Additional business and compliance services for your growth.',
    metaTitle: 'MSME, IEC, FSSAI & More Compliance in Hyderabad | Finlytiq',
    metaDescription: 'MSME registration, IEC code, FSSAI, firm registration, trust exemptions, society registration, DSC in Hyderabad. Finlytiq LLP.',
    keywords: 'MSME registration Hyderabad, IEC code, FSSAI registration, firm registration, 12A 80G trust, society registration, DSC',
    seoIntro: 'MSME registration, IEC code, FSSAI, firm registration, trust (12A, 80G), society registration and digital signature (DSC) in Hyderabad and Telangana.',
    details: [
      { name: 'MSME Registration', info: 'Get your business registered as MSME for government benefits.' },
      { name: 'IEC Code', info: 'Import Export Code registration for international trade.' },
      { name: 'Firm Registration', info: 'Partnership, Proprietorship, and other firm registrations.' },
      { name: 'Trust Income Tax Exemptions', info: 'Assistance with 12A, 80G, and other exemptions for trusts.' },
      { name: 'Society Registration', info: 'Register your society for legal recognition.' },
      { name: 'FSSAI Registration', info: 'Food business operator license and compliance.' },
      { name: 'Digital Signature', info: 'DSC for directors, partners, and authorized signatories.' },
    ],
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug) || null;
}
