import { ContactEnquiryForm, ContactHero } from "@/components/contact";
import { pageMetadata, site } from "@/lib/site/metadata";

export const metadata = pageMetadata(
  "Contact",
  `Start a conversation with ${site.companyName} about technology solutions, products and managed infrastructure.`,
);

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section
        aria-labelledby="contact-form-heading"
        className="overflow-x-clip border-t border-divider bg-surface-light text-foreground"
      >
        <div className="ssl-container py-8 sm:py-10 lg:py-12 xl:py-14">
          <h2 id="contact-form-heading" className="sr-only">
            Enquiry form
          </h2>
          <ContactEnquiryForm />
        </div>
      </section>
    </>
  );
}
