/** Contact page copy (British English). */

export const CONTACT_HERO = {
  eyebrow: "CONTACT / START A CONVERSATION",
  title: "Tell us what needs to work better.",
  body:
    "Tell us about the problem, the organisation and what you need your technology to do.",
} as const;

export const CONTACT_FORM = {
  title: "Let's discuss your needs.",
  intro:
    "Share a few details below and we will follow up. Fields marked with an asterisk are required.",
} as const;

export const CONTACT_ENQUIRY_TYPES = [
  "Technology solutions for an organisation",
  "Product/platform enquiry",
  "Managed technology/infrastructure",
  "Partnership/other",
] as const;

export const CONTACT_FORM_SUBJECT = "New Studira Systems website enquiry";

export const CONTACT_FEEDBACK = {
  successTitle: "Enquiry sent",
  successBody:
    "Thank you — your message has been received. We will be in touch as soon as we can.",
  errorTitle: "Something went wrong",
  errorBody:
    "We could not send your enquiry. Please check your connection and try again.",
  submittingLabel: "Sending enquiry…",
  submitLabel: "Send enquiry",
  configError:
    "The contact form is not configured yet. Please try again later or contact us through another channel.",
} as const;
