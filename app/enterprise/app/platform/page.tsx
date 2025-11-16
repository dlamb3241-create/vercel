import Section from "@/components/Section";

export default function PlatformPage() {
  return (
    <>
      <Section className="bg-white">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
          The Momentum Automation Platform
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mb-10">
          A unified orchestration system designed for cross-system automation,
          reliability, and operational visibility across enterprise workflows.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 border rounded-xl shadow-sm bg-white">
            <h3 className="font-semibold mb-2">Orchestration Layer</h3>
            <p className="text-sm text-gray-600">
              Multi-system automation engine powered by n8n enterprise cluster
              with full monitoring and version control.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm bg-white">
            <h3 className="font-semibold mb-2">AI Decision Layer</h3>
            <p className="text-sm text-gray-600">
              AI-assisted decisions, rule-based logic, and fallback protections
              designed for high-stakes operational flows.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm bg-white">
            <h3 className="font-semibold mb-2">Integration Layer</h3>
            <p className="text-sm text-gray-600">
              ERP, CRM, ITSM, data warehouses, messaging, and legacy systems all
              connected into a unified workflow system.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm bg-white">
            <h3 className="font-semibold mb-2">Governance Layer</h3>
            <p className="text-sm text-gray-600">
              Access control, audit trails, change management, and observability
              built for enterprise compliance.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-muted">
        <h2 className="text-2xl font-semibold mb-4">
          Built for reliability, scale, and enterprise environments.
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>99.9% uptime orchestration backbone</li>
          <li>End-to-end encryption + secure data handling</li>
          <li>Versioned automation workflows</li>
          <li>Enterprise-grade monitoring & observability</li>
        </ul>
      </Section>
    </>
  );
}
