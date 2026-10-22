import type { Metadata } from "next";
import { sslBrand } from "@/lib/design-system/brand";

export const siteOrigin = "https://studirasystems.com";

/** Public indexable routes (path only, no trailing slash except home). */
export const publicRoutes = [
  "/",
  "/products",
  "/solutions",
  "/education",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
] as const;

export const site = {
  siteName: "Studira Systems",
  companyName: "Studira Systems Limited",
  defaultTitle: "Studira Systems — Technology Systems for Real-World Problems",
  description: sslBrand.positioning,
} as const;

const defaultSocialImagePath = "/images/brand/studira-systems-logo.png";

const sharedSocialImages = [
  {
    url: defaultSocialImagePath,
    alt: `${site.siteName} logo`,
  },
];

const openGraphBase = {
  siteName: site.siteName,
  locale: "en_GB",
  type: "website" as const,
  images: sharedSocialImages,
};

const twitterBase = {
  card: "summary_large_image" as const,
  images: [defaultSocialImagePath],
};

function canonicalForPath(path: string): Metadata["alternates"] {
  const normalized = path === "/" ? "/" : path.startsWith("/") ? path : `/${path}`;
  return { canonical: normalized };
}

function openGraphForPage(title: string, description: string, path: string) {
  const url = path === "/" ? siteOrigin : `${siteOrigin}${path.startsWith("/") ? path : `/${path}`}`;
  return {
    ...openGraphBase,
    title,
    description,
    url,
  };
}

function twitterForPage(title: string, description: string) {
  return {
    ...twitterBase,
    title,
    description,
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: site.defaultTitle,
    template: `%s | ${site.siteName}`,
  },
  description: site.description,
  applicationName: site.siteName,
  alternates: canonicalForPath("/"),
  icons: {
    icon: "/images/brand/studira-icon.png",
    apple: "/images/brand/studira-icon.png",
  },
  openGraph: openGraphForPage(site.defaultTitle, site.description, "/"),
  twitter: twitterForPage(site.defaultTitle, site.description),
};

export function pageMetadata(pageTitle: string, path: string, description?: string): Metadata {
  const resolvedDescription = description ?? site.description;
  const documentTitle = `${pageTitle} | ${site.siteName}`;

  return {
    title: pageTitle,
    description: resolvedDescription,
    alternates: canonicalForPath(path),
    openGraph: openGraphForPage(documentTitle, resolvedDescription, path),
    twitter: twitterForPage(documentTitle, resolvedDescription),
  };
}
