import { LegalDocumentPage } from "@/components/legal/legal-document-page";
import { PRIVACY_POLICY } from "@/lib/legal/privacy-content";
import { pageMetadata } from "@/lib/site/metadata";

export const metadata = pageMetadata(
  "Privacy Policy",
  "/privacy",
  "How Studira Systems Limited handles information collected through its corporate website and contact form.",
);

export default function PrivacyPage() {
  return <LegalDocumentPage {...PRIVACY_POLICY} />;
}
