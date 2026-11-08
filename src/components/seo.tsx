import { Helmet } from "react-helmet-async";
import { appConfig } from "@/utils/app-config";
import { createOrganizationSchema } from "@/lib/seo-schemas";

export interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  keywords?: string[];
  ogType?: "website" | "article" | "profile";
  ogImage?: string;
  twitterCard?: "summary" | "summary_large_image";
  jsonLd?: object | object[];
  noindex?: boolean;
}

const SEO = ({
  title,
  description,
  canonicalUrl,
  keywords,
  ogType = "website",
  ogImage = appConfig.ogImage,
  twitterCard = "summary_large_image",
  jsonLd,
  noindex = false,
}: SEOProps) => {
  const siteUrl = appConfig.url;
  const fullUrl = canonicalUrl.startsWith("http")
    ? canonicalUrl
    : `${siteUrl}${canonicalUrl.startsWith("/") ? "" : "/"}${canonicalUrl}`;
  const fullImageUrl = ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`;

  // Organization schema is included by default across pages
  const baseOrgSchema = createOrganizationSchema();
  const allSchemas: object[] = [baseOrgSchema];

  if (jsonLd) {
    if (Array.isArray(jsonLd)) {
      allSchemas.push(...jsonLd);
    } else {
      allSchemas.push(jsonLd);
    }
  }

  const defaultKeywords = [
    "core banking software",
    "cooperative credit society software",
    "patsanstha software Maharashtra",
    "credit society software Pune",
    "NBFC loan management software",
    "pigmy deposit app",
    "sahakar audit software",
    "Manalix Technologies",
  ];

  const metaKeywords = keywords && keywords.length > 0 ? keywords.join(", ") : defaultKeywords.join(", ");

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Crawling Directives */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <>
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
          <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        </>
      )}

      {/* Author and Publisher */}
      <meta name="author" content={appConfig.legalName} />
      <meta name="publisher" content={appConfig.legalName} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:secure_url" content={fullImageUrl} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={appConfig.legalName} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={appConfig.socialLinks.twitter.replace("https://x.com/", "@")} />
      <meta name="twitter:creator" content={appConfig.socialLinks.twitter.replace("https://x.com/", "@")} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={title} />

      {/* JSON-LD Structured Data */}
      {allSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
