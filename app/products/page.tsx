import {
  FutureProductsSection,
  HealthcareDeployment,
  HealthcareProductSection,
  ProductArchitectureSection,
  ProductInView,
  ProductPhilosophySection,
  ProductsCta,
  ProductsHero,
  WorkforceProductSection,
} from "@/components/products";
import { pageMetadata } from "@/lib/site/metadata";

export const metadata = pageMetadata(
  "Products",
  "/products",
  "Technology products from Studira Systems — healthcare and workforce platforms built around real organisational problems.",
);

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductPhilosophySection />
      <HealthcareProductSection />
      <HealthcareDeployment />
      <WorkforceProductSection />
      <ProductArchitectureSection />
      <FutureProductsSection />
      <ProductsCta />
      <ProductInView />
    </>
  );
}
