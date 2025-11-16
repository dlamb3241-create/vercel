import type { ReactNode } from "react";

export default function Section({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-content px-4 py-12 md:py-16">
        {children}
      </div>
    </section>
  );
}
