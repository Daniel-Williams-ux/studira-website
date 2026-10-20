import { PageShell } from "@/components/layout/page-shell";
import { pageMetadata } from "@/lib/site/metadata";

export const metadata = pageMetadata("Contact");

export default function ContactPage() {
  return <PageShell title="Contact" />;
}
