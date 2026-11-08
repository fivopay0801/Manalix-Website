import { appConfig } from "@/utils/app-config";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Creates Schema.org Organization structured data
 */
export const createOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${appConfig.url}/#organization`,
  name: appConfig.legalName,
  legalName: appConfig.legalName,
  alternateName: ["Manalix", "Manalix Technologies", "FivoPay"],
  url: appConfig.url,
  logo: {
    "@type": "ImageObject",
    url: appConfig.logo,
    caption: appConfig.legalName,
  },
  image: appConfig.ogImage,
  description: appConfig.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: appConfig.address.street,
    addressLocality: appConfig.address.city,
    addressRegion: appConfig.address.state,
    postalCode: appConfig.address.postalCode,
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: appConfig.phone,
      contactType: "customer service",
      email: appConfig.email,
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
    {
      "@type": "ContactPoint",
      telephone: appConfig.phone,
      contactType: "sales",
      email: appConfig.contactEmail,
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
  ],
  sameAs: [
    appConfig.socialLinks.linkedin,
    appConfig.socialLinks.twitter,
    appConfig.socialLinks.fivopay,
    appConfig.url,
  ],
});

/**
 * Creates Schema.org WebSite structured data with Sitelinks Searchbox
 */
export const createWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${appConfig.url}/#website`,
  url: appConfig.url,
  name: "Manalix",
  description: appConfig.description,
  publisher: {
    "@id": `${appConfig.url}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${appConfig.url}/blog?search={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
});

/**
 * Creates Schema.org SoftwareApplication structured data
 */
export interface SoftwareApplicationOptions {
  name?: string;
  description?: string;
  applicationCategory?: string;
  operatingSystem?: string;
  featureList?: string[];
  url?: string;
}

export const createSoftwareApplicationSchema = (options: SoftwareApplicationOptions = {}) => {
  const name = options.name || appConfig.productName;
  const description = options.description || appConfig.description;
  const url = options.url || appConfig.url;

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url,
    applicationCategory: options.applicationCategory || "FinanceApplication, BusinessApplication",
    operatingSystem: options.operatingSystem || "Cloud, Web, Android, iOS, Windows",
    softwareVersion: "3.2.0",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      description: "Free Live Demo & Custom Migration Consultation",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "138",
      reviewCount: "138",
      bestRating: "5",
      worstRating: "1",
    },
    provider: {
      "@id": `${appConfig.url}/#organization`,
    },
    featureList: options.featureList || [
      "Daily Pigmy Deposit Collection Android App with Bluetooth Thermal Receipt Printing",
      "Term Deposits (FD / RD / Re-investment) with Automated Interest Calculation",
      "Loan Origination & Servicing System (LOS/LMS) with Automated EMI & Penalty Calculation",
      "Gold Loan Weight Valuation & Property Mortgage Management",
      "Sahakar Commissioner 99-Parameter Statutory Audit Compliance (Class A Audit Ready)",
      "Real-time General Ledger, Day-book, Cash-book & Automated Balance Sheet",
      "Member Digital Passbook Mobile App & 2-Way SMS / WhatsApp Alerts",
      "Section 101/91 Overdue Recovery Notice Automation & NPA Classification",
      "Multi-Branch Cloud Architecture with Role-Based Access Control (Maker-Checker)",
    ],
  };
};

/**
 * Creates Schema.org FAQPage structured data
 */
export const createFAQSchema = (faqs: FAQItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

/**
 * Creates Schema.org BreadcrumbList structured data
 */
export const createBreadcrumbSchema = (breadcrumbs: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((bc, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: bc.name,
    item: bc.url.startsWith("http") ? bc.url : `${appConfig.url}${bc.url}`,
  })),
});

