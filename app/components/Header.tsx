"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-content px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-full bg-teal" />
          <span className="font-semibold tracking-tight">
            Momentum Leads
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/enterprise">Enterprise</Link>
          <Link href="/platform">Platform</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/security">Security</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/dashboard" className="text-sm">
            Sign In
          </Link>
          <Link
            href="/book/executive"
            className="text-sm px-4 py-2 rounded-full bg-teal text-white font-medium"
          >
            Executive Briefing
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100">
          <div className="px-4 py-3 flex flex-col gap-2 text-sm">
            <Link href="/enterprise">Enterprise</Link>
            <Link href="/platform">Platform</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/security">Security</Link>
            <Link href="/dashboard">Sign In</Link>
            <Link href="/book/executive" className="font-medium text-teal">
              Executive Briefing
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
