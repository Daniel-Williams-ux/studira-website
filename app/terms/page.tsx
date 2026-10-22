import { LegalDocumentPage } from "@/components/legal/legal-document-page";
import { TERMS_OF_USE } from "@/lib/legal/terms-content";
import { pageMetadata } from "@/lib/site/metadata";

export const metadata = pageMetadata(
  "Terms of Use",
  "Terms governing use of the Studira Systems Limited corporate website.",
);

export default function TermsPage() {
  return <LegalDocumentPage {...TERMS_OF_USE} />;
}
