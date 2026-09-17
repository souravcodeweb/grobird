interface ProcessBoxProps {
  className?: string;
}

export function ProcessBox({ className = "" }: ProcessBoxProps) {
  return (
    <section
      className={["bg-[#000000] flex flex-col px-[40px] py-[100px]", className]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Heading + Description */}
      <div className="flex w-full items-start justify-between">
        <h2 className="font-[family-name:var(--font-sora)] text-[52px] font-[400]">
          Our Discovery <span className="text-[#FF884C]">Process</span>
        </h2>

        <p className="font-[family-name:var(--font-inter)] text-[15px] font-[400] leading-[1.6] text-white/40">
          Four structured phases that move from <br />
          understanding to a decision-ready roadmap in <br />
          four weeks.
        </p>
      </div>

      {/* Process Boxes */}
      <div className="mt-[180px] flex w-full justify-between gap-[40px]">
        {/* Phase 01 */}
        <div className="relative h-[319px] w-[275px] shrink-0 overflow-hidden rounded-[12px] border border-white/[0.08] bg-[#111111] px-[23px] py-[25px]">
          <div className="absolute left-0 right-0 top-0 h-[2px] bg-[#1683FF]" />

          <div className="font-[family-name:var(--font-sora)] text-[48px] font-[800] leading-none tracking-[-0.05em] text-[#FFFFFF0A]">
            01
          </div>

          <div className="mt-[27px] font-[family-name:var(--font-sora)] text-[10px] font-[700] uppercase tracking-[0.12em] text-[#2B7CF2]">
            PHASE 01
          </div>

          <h3 className="mt-[16px] font-[family-name:var(--font-sora)] text-[20px] font-[600] leading-none text-white">
            Intake
          </h3>

          <p className="mt-[20px] font-[family-name:var(--font-inter)] text-[13px] font-[400] leading-[1.6] text-[#FFFFFF73]">
            We understand your operation: team structure, current systems, key
            pain points, and business objectives. This shapes everything that
            follows.
          </p>
        </div>

        {/* Phase 02 */}
        <div className="relative h-[319px] w-[275px] shrink-0 overflow-hidden rounded-[12px] border border-white/[0.08] bg-[#111111] px-[23px] py-[25px]">
          <div className="absolute left-0 right-0 top-0 h-[2px] bg-[#FF884C]" />

          <div className="font-[family-name:var(--font-sora)] text-[48px] font-[800] leading-none tracking-[-0.05em] text-[#FFFFFF0A]">
            02
          </div>

          <div className="mt-[27px] font-[family-name:var(--font-sora)] text-[10px] font-[700] uppercase tracking-[0.12em] text-[#FF884C]">
            PHASE 02
          </div>

          <h3 className="mt-[16px] font-[family-name:var(--font-sora)] text-[20px] font-[600] leading-none text-white">
            Deep Dive
          </h3>

          <p className="mt-[20px] font-[family-name:var(--font-inter)] text-[13px] font-[400] leading-[1.6] text-[#FFFFFF73]">
            We interview operators, map workflows, document data flows, and
            identify gaps and redundancies across every layer of your process.
          </p>
        </div>

        {/* Phase 03 */}
        <div className="relative h-[319px] w-[275px] shrink-0 overflow-hidden rounded-[12px] border border-white/[0.08] bg-[#111111] px-[23px] py-[25px]">
          <div className="absolute left-0 right-0 top-0 h-[2px] bg-[#1683FF]" />

          <div className="font-[family-name:var(--font-sora)] text-[48px] font-[800] leading-none tracking-[-0.05em] text-[#FFFFFF0A]">
            03
          </div>

          <div className="mt-[27px] font-[family-name:var(--font-sora)] text-[10px] font-[700] uppercase tracking-[0.12em] text-[#1683FF]">
            PHASE 03
          </div>

          <h3 className="mt-[16px] font-[family-name:var(--font-sora)] text-[20px] font-[600] leading-none text-white">
            Analysis
          </h3>

          <p className="mt-[20px] font-[family-name:var(--font-inter)] text-[13px] font-[400] leading-[1.6] text-[#FFFFFF73]">
            We quantify the cost of current operations, model improvements, and
            prioritize solutions by impact — not assumption.
          </p>
        </div>

        {/* Phase 04 */}
        <div className="relative h-[319px] w-[275px] shrink-0 overflow-hidden rounded-[12px] border border-white/[0.08] bg-[#111111] px-[23px] py-[25px]">
          <div className="absolute left-0 right-0 top-0 h-[2px] bg-[#FF884C]" />

          <div className="font-[family-name:var(--font-sora)] text-[48px] font-[800] leading-none tracking-[-0.05em] text-[#FFFFFF0A]">
            04
          </div>

          <div className="mt-[27px] font-[family-name:var(--font-sora)] text-[10px] font-[700] uppercase tracking-[0.12em] text-[#FF884C]">
            PHASE 04
          </div>

          <h3 className="mt-[16px] font-[family-name:var(--font-sora)] text-[20px] font-[600] leading-none text-white">
            Roadmap
          </h3>

          <p className="mt-[20px] font-[family-name:var(--font-inter)] text-[13px] font-[400] leading-[1.6] text-[#FFFFFF73]">
            We deliver a clear, prioritized implementation plan with business
            case, timeline, and investment. You leave with a diagnosis, not a
            sales pitch.
          </p>
        </div>
      </div>
    </section>
  );
}
