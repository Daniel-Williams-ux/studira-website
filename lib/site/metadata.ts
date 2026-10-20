import type { Metadata } from "next";
import { sslBrand } from "@/lib/design-system/brand";

export const site = {
  siteName: "Studira Systems",
  companyName: "Studira Systems Limited",
  defaultTitle: "Studira Systems — Technology Systems for Real-World Problems",
  description: sslBrand.positioning,
} as const;

const openGraphBase = {
  siteName: site.siteName,
  locale: "en_GB",
  type: "website" as const,
};

export const rootMetadata: Metadata = {
  title: {
    default: site.defaultTitle,
    template: `%s | ${site.siteName}`,
  },
  description: site.description,
  applicationName: site.siteName,
  icons: {
    icon: "/images/brand/studira-icon.png",
    apple: "/images/brand/studira-icon.png",
  },
  openGraph: {
    ...openGraphBase,
    title: site.defaultTitle,
    description: site.description,
  },
  twitter: {
    card: "summary",
    title: site.defaultTitle,
    description: site.description,
  },
};

export function pageMetadata(pageTitle: string, description?: string): Metadata {
  const resolvedDescription = description ?? site.description;

  return {
    title: pageTitle,
    description: resolvedDescription,
    openGraph: {
      ...openGraphBase,
      title: `${pageTitle} | ${site.siteName}`,
      description: resolvedDescription,
    },
    twitter: {
      card: "summary",
      title: `${pageTitle} | ${site.siteName}`,
      description: resolvedDescription,
    },
  };
}
