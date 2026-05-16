import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/logo512.png',
  schema,
  noIndex = false,
}) => {
  const siteName = 'Finlytiq LLP';
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Chartered Accountants – Hyderabad`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={`https://finlytiqllp.com${canonical}`} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* OG */}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={`https://finlytiqllp.com${ogImage}`} />
      {canonical && <meta property="og:url" content={`https://finlytiqllp.com${canonical}`} />}

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}

      {/* Structured data */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
