import Section from "@/components/Section";

export default function IndustriesPage() {
  return (
    <>
      <Section>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
          Industries We Serve
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mb-10">
          We design automation systems for industries with complex operations,
          multi-site workflows, field coordination, and heavy system friction.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 border rounded-xl shadow-sm bg-white">
            <h3 className="font-semibold mb-2">Construction & Infrastructure</h3>
            <p className="text-sm text-gray-600">
              Work order automation, field operations, compliance workflows, 
              document automation, and multi-site coordination.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm bg-white">
            <h3 className="font-semibold mb-2">Logistics & Distribution</h3>
            <p className="text-sm text-gray-600">
              Dispatch automation, driver coordination, inventory flows, 
              route updates, and operational escalation systems.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm bg-white">
            <h3 className="font-semibold mb-2">Field Services & Operations</h3>
            <p className="text-sm text-gray-600">
              Scheduling, technician workflows, reporting automation, 
              ticket routing, and customer operations.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-muted">
        <h2 className="text-2xl font-semibold mb-4">
          Built for high-volume operational environments.
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Multi-step workflows</li>
          <li>Heavy manual work reduction</li>
          <li>Cross-system integrations</li>
          <li>Large multi-site operations</li>
          <li>Process standardization at scale</li>
        </ul>
      </Section>
    </>
  );
}
