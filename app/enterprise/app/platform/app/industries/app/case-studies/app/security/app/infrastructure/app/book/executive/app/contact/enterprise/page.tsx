"use client";

import Section from "@/components/Section";
import { useState } from "react";

export default function EnterpriseContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = new FormData(e.currentTarget);
    const body = {
      company: form.get("company"),
      name: form.get("name"),
      email: form.get("email"),
      description: form.get("description")
    };

    try {
      const res = await fetch("/api/rfp", {
        method: "POST",
        body: JSON.stringify(body)
      });

      if (res.ok) setStatus("sent");
      else setStatus("error");
    } catch (e) {
      setStatus("error");
    }
  }

  return (
    <Section>
      <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
        Enterprise Contact / RFP Submission
      </h1>

      <p className="text-lg text-gray-600 max-w-2xl mb-10">
        Submit your project requirements, automation needs, procurement
        information, or RFP documentation. A member of our enterprise team will
        contact you within 24 hours.
      </p>

      <form
        onSubmit={submitForm}
        className="bg-white p-6 rounded-xl border shadow-sm max-w-xl space-y-4"
      >
        <div>
          <label className="text-sm font-medium">Company</label>
          <input
            type="text"
            name="company"
            required
            className="w-full border rounded-md px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border rounded-md px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border rounded-md px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Project Description</label>
          <textarea
            name="description"
            rows={5}
            required
            className="w-full border rounded-md px-3 py-2 mt-1"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="px-6 py-3 rounded-full bg-teal text-white text-sm font-medium"
        >
          {status === "sending" ? "Sending..." : "Submit Request"}
        </button>

        {status === "sent" && (
          <p className="text-green-600 text-sm mt-2">
            Thank you — your submission has been received.
          </p>
        )}

        {status === "error" && (
          <p className="text-red-600 text-sm mt-2">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </Section>
  );
}
