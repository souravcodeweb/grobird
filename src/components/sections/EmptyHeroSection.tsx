import type { ReactNode } from "react";

interface EmptyHeroSectionProps {
  children?: ReactNode;
  className?: string;
}

export function EmptyHeroSection({
  children,
  className = "",
}: EmptyHeroSectionProps) {
  return (
    <section
      className={[
        "relative w-full min-h-[100vh] overflow-hidden bg-[#010C1B]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </section>
  );
}
