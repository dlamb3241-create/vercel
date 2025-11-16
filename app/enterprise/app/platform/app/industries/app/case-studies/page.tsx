import Section from "@/components/Section";

export default function CaseStudiesPage() {
  return (
    <>
      <Section>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
          Case Studies
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mb-10">
          A collection of real automation outcomes, showing how enterprise
          organizations reduce manual workload, eliminate process friction, and
          increase throughput.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 border rounded-xl shadow-sm bg-white">
            <h3 className="font-semibold mb-2">
              47% Reduction in Manual Workload
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Multi-division operations automation.
            </p>
            <p className="text-xs text-teal font-medium">Enterprise Client</p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm bg-white">
            <h3 className="font-semibold mb-2">
              58% Faster Intake-to-Resolution
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Customer operations workflow transformation.
            </p>
            <p className="text-xs text-teal font-medium">Global Services Org</p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm bg-white">
            <h3 className="font-semibold mb-2">
              Unified 12+ Disconnected Workflows
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              System consolidation & orchestration mapping.
            </p>
            <p className="text-xs text-teal font-medium">Logistics Provider</p>
          </div>
        </div>
      </Section>

      <Section className="bg-muted">
        <h2 className="text-2xl font-semibold mb-4">
          More enterprise case studies coming soon.
        </h2>
        <p className="text-gray-700">
          As we finalize full enterprise automation rollouts, additional case
          studies will be published here.
        </p>
      </Section>
    </>
  );
}
