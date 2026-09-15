"use client";

import { useState, type FormEvent } from "react";

type FormState = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof FormState, string>>;

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const inputClass =
  "border-[1.5px] border-[#C9C9C9] bg-white px-4 py-[15px] font-sans text-base leading-[1.2] focus:border-ink focus:outline-none";

type Status = "idle" | "submitting" | "sent" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  function setField(key: keyof FormState, value: string) {
    setForm((s) => ({ ...s, [key]: value }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors: Errors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!EMAIL_RE.test(form.email.trim())) nextErrors.email = "Please enter a valid email address.";
    if (!form.subject.trim()) nextErrors.subject = "Please add a subject.";
    if (form.message.trim().length < 10) nextErrors.message = "Please tell us a little more (10 characters minimum).";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="grid gap-2">
        <label htmlFor="cf-name" className="font-sans text-[13px] font-semibold uppercase tracking-[0.1em]">
          Name
        </label>
        <input
          id="cf-name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={(e) => setField("name", e.target.value)}
          className={inputClass}
        />
        {errors.name && (
          <span role="alert" className="font-sans text-sm text-error">
            {errors.name}
          </span>
        )}
      </div>
      <div className="grid gap-2">
        <label htmlFor="cf-email" className="font-sans text-[13px] font-semibold uppercase tracking-[0.1em]">
          Email
        </label>
        <input
          id="cf-email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(e) => setField("email", e.target.value)}
          className={inputClass}
        />
        {errors.email && (
          <span role="alert" className="font-sans text-sm text-error">
            {errors.email}
          </span>
        )}
      </div>
      <div className="grid gap-2">
        <label htmlFor="cf-subject" className="font-sans text-[13px] font-semibold uppercase tracking-[0.1em]">
          Subject
        </label>
        <input
          id="cf-subject"
          type="text"
          value={form.subject}
          onChange={(e) => setField("subject", e.target.value)}
          className={inputClass}
        />
        {errors.subject && (
          <span role="alert" className="font-sans text-sm text-error">
            {errors.subject}
          </span>
        )}
      </div>
      <div className="grid gap-2">
        <label htmlFor="cf-message" className="font-sans text-[13px] font-semibold uppercase tracking-[0.1em]">
          Message
        </label>
        <textarea
          id="cf-message"
          rows={6}
          value={form.message}
          onChange={(e) => setField("message", e.target.value)}
          className={`${inputClass} resize-y leading-[1.45]`}
        />
        {errors.message && (
          <span role="alert" className="font-sans text-sm text-error">
            {errors.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="justify-self-start rounded-full bg-yellow px-8 py-[18px] font-sans text-[15px] font-bold hover:bg-yellow-hover disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
      {status === "sent" && (
        <p role="status" className="m-0 border-l-[3px] border-yellow bg-cream p-[16px_18px] font-serif text-[17px] leading-[1.5]">
          Thank you — your message has been recorded. We will reply to the email address you provided.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="m-0 border-l-[3px] border-error bg-cream p-[16px_18px] font-serif text-[17px] leading-[1.5]">
          {submitError}
        </p>
      )}
    </form>
  );
}
