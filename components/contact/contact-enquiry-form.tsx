"use client";

import { useCallback, useId, useRef, useState, type FormEvent } from "react";
import {
  CONTACT_ENQUIRY_TYPES,
  CONTACT_FEEDBACK,
  CONTACT_FORM,
  CONTACT_FORM_SUBJECT,
} from "@/lib/contact/content";
import { FORMSPREE_CONTACT_ENDPOINT } from "@/lib/contact/formspree";

type FormStatus = "idle" | "submitting" | "success" | "error";

type FieldErrors = {
  name?: string;
  email?: string;
  enquiry_type?: string;
  message?: string;
};

const inputClass =
  "min-h-11 w-full min-w-0 rounded-md border border-divider bg-surface px-3 py-2.5 text-[0.9375rem] leading-snug text-foreground shadow-none placeholder:text-foreground-muted motion-safe:transition-[border-color,box-shadow] motion-safe:duration-fast focus-visible:outline-none focus-visible:ssl-focus-ring disabled:cursor-not-allowed disabled:opacity-60";

const inputErrorClass = "border-[color-mix(in_srgb,#c45_55%,var(--divider))]";

const labelClass = "mb-1.5 block ssl-type-label text-foreground";

const submitClass =
  "group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-accent px-6 ssl-type-label text-accent-foreground motion-safe:transition-[background-color,opacity] motion-safe:duration-fast hover:bg-accent/92 active:bg-accent/85 focus-visible:ssl-focus-ring disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:min-w-[12rem]";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function validateFields(values: {
  name: string;
  email: string;
  enquiry_type: string;
  message: string;
}): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.name.trim()) {
    errors.name = "Enter your full name.";
  }
  if (!values.email.trim()) {
    errors.email = "Enter your work email address.";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.enquiry_type) {
    errors.enquiry_type = "Select what we can help with.";
  }
  if (!values.message.trim()) {
    errors.message = "Tell us about the problem or opportunity.";
  }
  return errors;
}

export function ContactEnquiryForm() {
  const formId = useId();
  const statusRef = useRef<HTMLDivElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [enquiryType, setEnquiryType] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorDetail, setErrorDetail] = useState<string | null>(null);

  const nameId = `${formId}-name`;
  const emailId = `${formId}-email`;
  const organisationId = `${formId}-organisation`;
  const enquiryId = `${formId}-enquiry-type`;
  const messageId = `${formId}-message`;
  const honeypotId = `${formId}-gotcha`;

  const resetErrors = useCallback(() => {
    setFieldErrors({});
    setErrorDetail(null);
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    resetErrors();

    const values = {
      name,
      email,
      enquiry_type: enquiryType,
      message,
    };
    const errors = validateFields(values);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus("idle");
      return;
    }

    if (!FORMSPREE_CONTACT_ENDPOINT) {
      setStatus("error");
      setErrorDetail(CONTACT_FEEDBACK.configError);
      statusRef.current?.focus();
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(FORMSPREE_CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          organisation: organisation.trim() || undefined,
          enquiry_type: enquiryType,
          message: message.trim(),
          _subject: CONTACT_FORM_SUBJECT,
          _gotcha: honeypot,
        }),
      });

      let payload: { ok?: boolean; error?: string } | null = null;
      try {
        payload = (await response.json()) as { ok?: boolean; error?: string };
      } catch {
        payload = null;
      }

      if (!response.ok || payload?.ok === false) {
        setStatus("error");
        setErrorDetail(
          payload?.error
            ? CONTACT_FEEDBACK.errorBody
            : CONTACT_FEEDBACK.errorBody,
        );
        statusRef.current?.focus();
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setOrganisation("");
      setEnquiryType("");
      setMessage("");
      setHoneypot("");
      statusRef.current?.focus();
    } catch {
      setStatus("error");
      setErrorDetail(CONTACT_FEEDBACK.errorBody);
      statusRef.current?.focus();
    }
  };

  if (status === "success") {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="rounded-md border border-divider bg-surface-accent px-5 py-6 sm:px-6 sm:py-7"
      >
        <h2 className="text-[1.125rem] font-semibold leading-tight text-foreground">
          {CONTACT_FEEDBACK.successTitle}
        </h2>
        <p className="mt-2 max-w-[36rem] ssl-type-body leading-[1.5] text-text-secondary">
          {CONTACT_FEEDBACK.successBody}
        </p>
      </div>
    );
  }

  return (
    <div className="min-w-0 max-w-[40rem]">
      <header className="mb-6 flex flex-col gap-2 sm:mb-7">
        <h2 className="text-[1.25rem] font-semibold leading-tight tracking-[-0.02em] sm:text-[1.375rem]">
          {CONTACT_FORM.title}
        </h2>
        <p className="max-w-[34rem] ssl-type-body leading-[1.5] text-text-secondary">
          {CONTACT_FORM.intro}
        </p>
      </header>

      <div
        ref={statusRef}
        tabIndex={-1}
        aria-live="polite"
        aria-atomic="true"
        className="mb-4 empty:hidden"
      >
        {status === "error" && errorDetail ? (
          <div
            role="alert"
            className="rounded-md border border-[color-mix(in_srgb,#c45_35%,var(--divider))] bg-[color-mix(in_srgb,#c45_6%,var(--surface))] px-4 py-3"
          >
            <p className="font-semibold text-[0.9375rem]">{CONTACT_FEEDBACK.errorTitle}</p>
            <p className="mt-1 text-[0.875rem] leading-snug text-text-secondary">{errorDetail}</p>
          </div>
        ) : null}
      </div>

      <form
        noValidate
        onSubmit={handleSubmit}
        className="relative flex flex-col gap-5"
        aria-busy={status === "submitting"}
      >
        <div
          className="pointer-events-none absolute -left-[9999px] top-0 h-px w-px overflow-hidden opacity-0"
          aria-hidden="true"
        >
          <label htmlFor={honeypotId}>Leave blank</label>
          <input
            id={honeypotId}
            name="_gotcha"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4">
          <div className="min-w-0">
            <label htmlFor={nameId} className={labelClass}>
              Full name <span className="text-accent" aria-hidden="true">*</span>
            </label>
            <input
              id={nameId}
              name="name"
              type="text"
              required
              autoComplete="name"
              value={name}
              disabled={status === "submitting"}
              aria-invalid={Boolean(fieldErrors.name)}
              aria-describedby={fieldErrors.name ? `${nameId}-error` : undefined}
              className={[inputClass, fieldErrors.name ? inputErrorClass : ""].filter(Boolean).join(" ")}
              onChange={(event) => setName(event.target.value)}
            />
            {fieldErrors.name ? (
              <p id={`${nameId}-error`} className="mt-1.5 text-[0.8125rem] text-[color-mix(in_srgb,var(--ssl-graphite)_75%,#a33)]">
                {fieldErrors.name}
              </p>
            ) : null}
          </div>

          <div className="min-w-0">
            <label htmlFor={emailId} className={labelClass}>
              Work email <span className="text-accent" aria-hidden="true">*</span>
            </label>
            <input
              id={emailId}
              name="email"
              type="email"
              required
              autoComplete="email"
              inputMode="email"
              spellCheck={false}
              value={email}
              disabled={status === "submitting"}
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={fieldErrors.email ? `${emailId}-error` : undefined}
              className={[inputClass, fieldErrors.email ? inputErrorClass : ""].filter(Boolean).join(" ")}
              onChange={(event) => setEmail(event.target.value)}
            />
            {fieldErrors.email ? (
              <p id={`${emailId}-error`} className="mt-1.5 text-[0.8125rem] text-[color-mix(in_srgb,var(--ssl-graphite)_75%,#a33)]">
                {fieldErrors.email}
              </p>
            ) : null}
          </div>
        </div>

        <div className="min-w-0">
          <label htmlFor={organisationId} className={labelClass}>
            Organisation <span className="font-normal text-foreground-muted">(optional)</span>
          </label>
          <input
            id={organisationId}
            name="organisation"
            type="text"
            autoComplete="organization"
            value={organisation}
            disabled={status === "submitting"}
            className={inputClass}
            onChange={(event) => setOrganisation(event.target.value)}
          />
        </div>

        <div className="min-w-0">
          <label htmlFor={enquiryId} className={labelClass}>
            What can we help with? <span className="text-accent" aria-hidden="true">*</span>
          </label>
          <select
            id={enquiryId}
            name="enquiry_type"
            required
            value={enquiryType}
            disabled={status === "submitting"}
            aria-invalid={Boolean(fieldErrors.enquiry_type)}
            aria-describedby={fieldErrors.enquiry_type ? `${enquiryId}-error` : undefined}
            className={[
              inputClass,
              "appearance-none bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat pr-10",
              fieldErrors.enquiry_type ? inputErrorClass : "",
            ]
              .filter(Boolean)
              .join(" ")}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3E%3Cpath stroke='%23A7ADB4' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m4 6 4 4 4-4'/%3E%3C/svg%3E")`,
            }}
            onChange={(event) => setEnquiryType(event.target.value)}
          >
            <option value="" disabled>
              Select an enquiry type
            </option>
            {CONTACT_ENQUIRY_TYPES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {fieldErrors.enquiry_type ? (
            <p id={`${enquiryId}-error`} className="mt-1.5 text-[0.8125rem] text-[color-mix(in_srgb,var(--ssl-graphite)_75%,#a33)]">
              {fieldErrors.enquiry_type}
            </p>
          ) : null}
        </div>

        <div className="min-w-0">
          <label htmlFor={messageId} className={labelClass}>
            Tell us about the problem or opportunity…{" "}
            <span className="text-accent" aria-hidden="true">*</span>
          </label>
          <textarea
            id={messageId}
            name="message"
            required
            rows={5}
            value={message}
            disabled={status === "submitting"}
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={fieldErrors.message ? `${messageId}-error` : undefined}
            className={[
              inputClass,
              "min-h-[8.5rem] resize-y py-3",
              fieldErrors.message ? inputErrorClass : "",
            ]
              .filter(Boolean)
              .join(" ")}
            onChange={(event) => setMessage(event.target.value)}
          />
          {fieldErrors.message ? (
            <p id={`${messageId}-error`} className="mt-1.5 text-[0.8125rem] text-[color-mix(in_srgb,var(--ssl-graphite)_75%,#a33)]">
              {fieldErrors.message}
            </p>
          ) : null}
        </div>

        <div className="pt-1">
          <button type="submit" disabled={status === "submitting"} className={submitClass}>
            {status === "submitting" ? (
              <>
                <span
                  className="inline-block size-4 rounded-full border-2 border-accent-foreground/30 border-t-accent-foreground motion-safe:animate-spin"
                  aria-hidden="true"
                />
                {CONTACT_FEEDBACK.submittingLabel}
              </>
            ) : (
              <>
                {CONTACT_FEEDBACK.submitLabel}
                <span
                  aria-hidden="true"
                  className="motion-safe:transition-transform motion-safe:duration-fast group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5"
                >
                  →
                </span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
