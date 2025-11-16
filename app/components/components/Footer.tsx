import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="mx-auto max-w-content px-4 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-gray-500">
        <div>© {new Date().getFullYear()} Momentum Leads LLC</div>
        <div className="flex gap-4">
          <Link href="/security">Security</Link>
          <Link href="/infrastructure">Infrastructure</Link>
          <Link href="/legal/privacy">Privacy</Link>
          <Link href="/legal/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
