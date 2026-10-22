import type { MetadataRoute } from "next";
import { siteOrigin, publicRoutes } from "@/lib/site/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((path) => ({
    url: path === "/" ? siteOrigin : `${siteOrigin}${path}`,
  }));
}
