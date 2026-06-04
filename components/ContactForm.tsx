"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
};

function Field({ label, id, ...rest }: FieldProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="eyebrow mb-3">
        {label}
      </label>
      <input
        id={id}
        {...rest}
        className="border-b border-border bg-transparent py-3 text-sm text-charcoal placeholder:text-muted focus:border-charcoal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-earth"
      />
    </div>
  );
}

const waNumber = siteConfig.contact.phone.replace(/\D/g, "");

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const name = get("name");
    const email = get("email");
    const phone = get("phone");
    const topic = get("topic") || "General enquiry";
    const message = get("message");

    const text = [
      "Hello Dermapathy, I'd like to book a consultation.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `Topic: ${topic}`,
      "",
      message,
    ].join("\n");

    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
    form.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-border bg-ivory p-8 sm:p-10"
      aria-label="Contact form"
    >
      <p className="eyebrow">Send a message</p>
      <h2 className="mt-4 font-serif text-2xl text-charcoal sm:text-[1.75rem]">
        Tell us a little about you.
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <Field
          id="name"
          name="name"
          label="Name"
          type="text"
          autoComplete="name"
          required
        />
        <Field
          id="email"
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          required
        />
        <Field
          id="phone"
          name="phone"
          label="Phone"
          type="tel"
          autoComplete="tel"
        />
        <div className="flex flex-col">
          <label htmlFor="topic" className="eyebrow mb-3">
            Topic
          </label>
          <select
            id="topic"
            name="topic"
            className="border-b border-border bg-transparent py-3 text-sm text-charcoal focus:border-charcoal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-earth"
            defaultValue=""
          >
            <option value="" disabled>
              Select an option
            </option>
            <option>Hair Transplant (FUE / Direct Hair Implantation)</option>
            <option>PRP Hair Therapy</option>
            <option>Scalp Treatment</option>
            <option>Skin Rejuvenation</option>
            <option>Acne &amp; Pigmentation</option>
            <option>Laser Treatments</option>
            <option>General enquiry</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="eyebrow mb-3 block">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full resize-none border border-border bg-transparent p-4 text-sm leading-7 text-charcoal focus:border-charcoal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-earth"
          placeholder="Briefly tell us what you're looking for…"
        />
      </div>

      <div className="mt-8 flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-xs text-muted">
          {sent
            ? "Opening WhatsApp — please press send there to reach us."
            : "This opens WhatsApp with your message ready to send. We reply within two working days — usually sooner."}
        </p>
        <button type="submit" className="btn-primary">
          Send via WhatsApp
        </button>
      </div>
    </form>
  );
}
