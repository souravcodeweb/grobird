import type { ReactNode } from "react";

type ProcessPhaseColor = "blue" | "orange" | "gray";

export interface ProcessPhase {
  number: string;
  phase: string;
  title: string;
  description: string;
  color: ProcessPhaseColor;
}

interface ProcessBoxProps {
  className?: string;
  title?: ReactNode;
  description?: ReactNode;
  items?: ProcessPhase[];
}

const defaultProcessItems: ProcessPhase[] = [
  {
    number: "01",
    phase: "PHASE 01",
    title: "Intake",
    description:
      "We understand your operation: team structure, current systems, key pain points, and business objectives. This shapes everything that follows.",
    color: "blue",
  },
  {
    number: "02",
    phase: "PHASE 02",
    title: "Deep Dive",
    description:
      "We interview operators, map workflows, document data flows, and identify gaps and redundancies across every layer of your process.",
    color: "orange",
  },
  {
    number: "03",
    phase: "PHASE 03",
    title: "Analysis",
    description:
      "We quantify the cost of current operations, model improvements, and prioritize solutions by impact, not assumption.",
    color: "blue",
  },
  {
    number: "04",
    phase: "PHASE 04",
    title: "Roadmap",
    description:
      "We deliver a clear, prioritized implementation plan with business case, timeline, and investment.",
    color: "orange",
  },
];

export function ProcessBox({
  className = "",
  title = (
    <>
      Our Discovery <span className="text-[#FF884C]">Process</span>
    </>
  ),
  description = (
    <>
      Four structured phases that move from <br />
      understanding to a decision-ready roadmap in <br />
      four weeks.
    </>
  ),
  items = defaultProcessItems,
}: ProcessBoxProps) {
  return (
    <section
      className={[
        "w-full overflow-hidden bg-[#000000] px-[40px] py-[100px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex w-full items-start justify-between gap-8">
        <h2 className="font-[family-name:var(--font-sora)] text-[52px] font-[400] leading-[1.15]">
          {title}
        </h2>
        <p className="font-[family-name:var(--font-inter)] text-[15px] font-[400] leading-[1.6] text-white/40">
          {description}
        </p>
      </div>

      <div className="mt-[120px] grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => {
          const accentColor =
            item.color === "orange"
              ? "#FF884C"
              : item.color === "gray"
              ? "#858382"
              : "#1683FF";

          return (
            <div
              key={item.number}
              className="relative min-h-[319px] overflow-hidden rounded-[12px] border border-white/[0.08] bg-[#111111] px-[23px] py-[25px]"
            >
              <div
                className="absolute left-0 right-0 top-0 h-[2px]"
                style={{ backgroundColor: accentColor }}
              />
              <div className="font-[family-name:var(--font-sora)] text-[48px] font-[800] leading-none tracking-[-0.05em] text-[#FFFFFF0A]">
                {item.number}
              </div>
              <div
                className="mt-[27px] font-[family-name:var(--font-sora)] text-[10px] font-[700] uppercase tracking-[0.12em]"
                style={{ color: accentColor }}
              >
                {item.phase}
              </div>
              <h3 className="mt-[16px] font-[family-name:var(--font-sora)] text-[20px] font-[600] leading-none text-white">
                {item.title}
              </h3>
              <p className="mt-[20px] font-[family-name:var(--font-inter)] text-[13px] font-[400] leading-[1.6] text-[#FFFFFF73]">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
