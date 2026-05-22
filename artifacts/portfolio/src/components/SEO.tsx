import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterHandle?: string;
  twitterCard?: "summary" | "summary_large_image";
  schemaMarkup?: object;
}

const SEO = ({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = "website",
  twitterHandle = "@utsadas",
  twitterCard = "summary_large_image",
  schemaMarkup,
}: SEOProps) => {
  const siteTitle = "Utsa Das | SEO & GEO Strategist";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = "Utsa Das is a Founder, SEO Strategist, and GEO Expert specializing in Technical SEO, AI Search Optimization, and Ecommerce Growth.";
  const metaDescription = description || defaultDescription;
  const url = "https://utsadas.com"; // Replace with actual domain
  const fullCanonical = canonical ? `${url}${canonical}` : url;
  const image = ogImage || `${url}/og-image.jpg`; // Replace with actual OG image

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:site_name" content="Utsa Das Portfolio" />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || metaDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || metaDescription} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
