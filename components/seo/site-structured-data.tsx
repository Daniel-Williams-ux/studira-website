import { site, siteOrigin } from "@/lib/site/metadata";

const organizationId = `${siteOrigin}/#organization`;
const websiteId = `${siteOrigin}/#website`;

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": organizationId,
  name: site.companyName,
  url: siteOrigin,
  logo: `${siteOrigin}/images/brand/studira-icon.png`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+234-719-350-087",
      email: "info@studirasystems.com",
      contactType: "customer service",
      availableLanguage: ["English"],
    },
  ],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  name: site.siteName,
  url: siteOrigin,
  publisher: { "@id": organizationId },
};

export function SiteStructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
