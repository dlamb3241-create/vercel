import Section from "@/components/Section";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Section className="bg-muted">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-teal uppercase mb-3">
              Enterprise Automation
            </p>

            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
              Automation systems engineered for large-scale operations.
            </h1>

            <p className="text-base md:text-lg text-gray-600 mb-6">
              We design and operate AI-driven workflows that reduce manual load,
              increase throughput, and eliminate process variance across
              multi-site enterprises.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/book/executive"
                className="px-5 py-3 rounded-full bg-teal text-white text-sm font-medium"
              >
                Schedule Executive Briefing
              </Link>

              <Link
                href="/enterprise"
                className="px-5 py-3 rounded-full border border-gray-300 text-sm font-medium"
              >
                View Enterprise Solutions
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 text-sm text-gray-700">
            <h2 className="text-base font-semibold mb-3">
              The Momentum Automation Framework™
            </h2>

            <ol className="space-y-1 list-decimal list-inside">
              <li>Operational mapping</li>
              <li>Decision flow modeling</li>
              <li>System orchestration design</li>
              <li>Pilot deployment</li>
              <li>Division rollout</li>
              <li>Automation governance</li>
            </ol>
          </div>
        </div>
      </Section>
    </>
  );
}
