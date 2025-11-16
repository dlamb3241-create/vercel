import Section from "@/components/Section";

export default function InfrastructurePage() {
  return (
    <>
      <Section>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
          Infrastructure & Architecture
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mb-10">
          Our automation systems run on a modern, scalable, and secure cloud 
          architecture designed for enterprise-grade reliability and 
          high-volume workloads.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 border rounded-xl shadow-sm bg-white">
            <h3 className="font-semibold mb-2">Multi-Region Deployment</h3>
            <p className="text-sm text-gray-600">
              Traffic is routed across multiple regions with automatic failover 
              for high availability and resilience.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm bg-white">
            <h3 className="font-semibold mb-2">Event-Driven Automation</h3>
            <p className="text-sm text-gray-600">
              All workflows trigger through serverless events optimized for 
              speed, concurrency, and low latency.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm bg-white">
            <h3 className="font-semibold mb-2">Secure API Gateway</h3>
            <p className="text-sm text-gray-600">
              API traffic is secured with key rotation, encrypted transport, 
              rate limiting, and strict access policies.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm bg-white">
            <h3 className="font-semibold mb-2">Monitoring & Observability</h3>
            <p className="text-sm text-gray-600">
              Real-time metrics, structured logs, SLA tracking, and anomaly 
              alerts ensure reliable automation performance.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-muted">
        <h2 className="text-2xl font-semibold mb-4">
          Built for scale, reliability, and enterprise demands.
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Automatic scaling on global edge network</li>
          <li>Robust failover + redundancy systems</li>
          <li>Secure and isolated workloads</li>
          <li>Real-time logging and diagnostics</li>
          <li>Zero-downtime deployments</li>
        </ul>
      </Section>
    </>
  );
}
