/**
 * Formspree "Website Enquiry Form" (Studira Systems Website project).
 * Set `NEXT_PUBLIC_FORMSPREE_CONTACT_ENDPOINT` to the exact form URL from Formspree
 * (e.g. https://formspree.io/f/xxxxxxxx) in local `.env` and Cloudflare build variables.
 */
export const FORMSPREE_CONTACT_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ENDPOINT ?? "";
