import {
  SolutionsCta,
  SolutionsDomainsSection,
  SolutionsEvidenceSection,
  SolutionsHero,
  SolutionsInView,
  SolutionsManagedTechnology,
  SolutionsMethodSection,
  SolutionsProblemSection,
  SolutionsWhatWeSolve,
} from "@/components/solutions";
import { sslBrand } from "@/lib/design-system/brand";
import { pageMetadata } from "@/lib/site/metadata";

export const metadata = pageMetadata(
  "Solutions",
  "/solutions",
  `${sslBrand.positioning} ${sslBrand.promise}`,
);

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <SolutionsProblemSection />
      <SolutionsWhatWeSolve />
      <SolutionsMethodSection />
      <SolutionsManagedTechnology />
      <SolutionsEvidenceSection />
      <SolutionsDomainsSection />
      <SolutionsCta />
      <SolutionsInView />
    </>
  );
}
