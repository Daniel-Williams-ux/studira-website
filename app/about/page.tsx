import { AboutHero, AboutInView, AboutLeadershipSection, AboutOperateSection } from "@/components/about";
import { sslBrand } from "@/lib/design-system/brand";
import { pageMetadata } from "@/lib/site/metadata";

export const metadata = pageMetadata(
  "About",
  "/about",
  `${sslBrand.positioning} Learn how Studira Systems Limited builds products and managed technology solutions.`,
);

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutOperateSection />
      <AboutLeadershipSection />
      <AboutInView />
    </>
  );
}
