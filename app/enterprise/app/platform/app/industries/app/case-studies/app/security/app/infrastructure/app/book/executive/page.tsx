import Section from "@/components/Section";

export default function ExecutiveBriefingPage() {
  return (
    <Section>
      <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
        Executive Automation Briefing
      </h1>

      <p className="text-lg text-gray-600 max-w-2xl mb-10">
        A 45-minute high-level briefing for enterprise leaders. We review your 
        current operational landscape, identify bottlenecks, and design the 
        pilot model that eliminates manual workload across divisions.
      </p>

      <div className="bg-white p-6 rounded-xl border shadow-sm max-w-xl">
        <h2 className="font-semibold mb-4 text-xl">Briefing Agenda</h2>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Operational mapping</li>
          <li>Bottleneck + labor analysis</li>
          <li>Cross-system workflow review</li>
          <li>Pilot automation design</li>
          <li>Expected ROI estimation</li>
          <li>Rollout strategy</li>
        </ul>

        <a
          href="https://calendly.com" 
          target="_blank"
          className="inline-block px-6 py-3 rounded-full bg-teal text-white text-sm font-medium"
        >
          Schedule Your Briefing
        </a>

        <p className="mt-4 text-xs text-gray-500">
          (Replace the Calendly link with your actual booking link.)
        </p>
      </div>
    </Section>
  );
}
