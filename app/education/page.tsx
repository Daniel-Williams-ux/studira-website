import {
  EducationApproachSection,
  EducationCta,
  EducationHero,
  EducationInView,
  EducationProgrammesSection,
} from "@/components/education";
import { sslBrand } from "@/lib/design-system/brand";
import { pageMetadata } from "@/lib/site/metadata";

export const metadata = pageMetadata(
  "Education",
  "/education",
  `${sslBrand.businessModel[2]} — practical technology learning with guidance from Studira Systems.`,
);

export default function EducationPage() {
  return (
    <>
      <EducationHero />
      <EducationApproachSection />
      <EducationProgrammesSection />
      <EducationCta />
      <EducationInView />
    </>
  );
}
