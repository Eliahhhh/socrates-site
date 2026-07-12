"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-lg border border-gold/30 bg-white/5 p-8 text-center">
        <p className="font-display text-xl font-bold text-gold">
          Thank you!
        </p>
        <p className="mt-2 text-cream/80">
          We&apos;ve received your message and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="grid grid-cols-1 gap-5 sm:grid-cols-2"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-semibold text-cream/90">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="rounded-md border border-cream/25 bg-cream/5 px-4 py-2.5 text-cream placeholder:text-cream/40 outline-none focus:border-gold"
          placeholder="Your name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-sm font-semibold text-cream/90">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="rounded-md border border-cream/25 bg-cream/5 px-4 py-2.5 text-cream placeholder:text-cream/40 outline-none focus:border-gold"
          placeholder="(604) 555-0123"
        />
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="email" className="text-sm font-semibold text-cream/90">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-md border border-cream/25 bg-cream/5 px-4 py-2.5 text-cream placeholder:text-cream/40 outline-none focus:border-gold"
          placeholder="you@example.com"
        />
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label
          htmlFor="eventType"
          className="text-sm font-semibold text-cream/90"
        >
          Event Type
        </label>
        <select
          id="eventType"
          name="eventType"
          defaultValue="Wedding"
          className="rounded-md border border-cream/25 bg-cream/5 px-4 py-2.5 text-cream outline-none focus:border-gold"
        >
          <option className="text-navy" value="Wedding">
            Wedding
          </option>
          <option className="text-navy" value="Business Lunch">
            Business Lunch
          </option>
          <option className="text-navy" value="Birthday">
            Birthday
          </option>
          <option className="text-navy" value="Other">
            Other
          </option>
        </select>
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label
          htmlFor="message"
          className="text-sm font-semibold text-cream/90"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="resize-none rounded-md border border-cream/25 bg-cream/5 px-4 py-2.5 text-cream placeholder:text-cream/40 outline-none focus:border-gold"
          placeholder="Tell us about your event..."
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-gold px-8 py-3 text-base font-bold uppercase tracking-wide text-navy transition-colors hover:bg-gold/90 sm:col-span-2 sm:w-auto sm:justify-self-start"
      >
        Submit
      </button>
    </form>
  );
}
