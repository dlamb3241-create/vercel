import Section from "@/components/Section";

export default function EnterprisePage() {
  return (
    <>
      <Section className="bg-white">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
          Enterprise Automation Systems
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mb-10">
          We build and operate AI-driven workflow systems that standardize
          processes across multiple sites, divisions, and legacy systems.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">Operational Automation</h3>
            <p className="text-sm text-gray-600">
              Routing, approvals, escalations, validations.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">Customer Operations</h3>
            <p className="text-sm text-gray-600">
              Ticket automation, triage, SLA enforcement.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">Logistics + Field Ops</h3>
            <p className="text-sm text-gray-600">
              Dispatch automation, scheduling, documentation.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-muted">
        <h2 className="text-2xl font-semibold mb-4">
          Automate processes that drain enterprise resources.
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Legacy software handoffs</li>
          <li>Repetitive workflows across divisions</li>
          <li>Operational bottlenecks</li>
          <li>Manual data entry</li>
          <li>Multi-step approvals</li>
        </ul>
      </Section>
    </>
  );
}
