import { GobirdFooter } from "@/components/layout/GobirdFooter";
import { GobirdHeader } from "@/components/layout/GobirdHeader";
import { NumberList } from "@/components/number-list/number-list";
import { ProcessBox } from "@/components/process-box/process-box";
import { ServicesHero } from "@/components/services-hero/services-hero";
import { SubFooter } from "@/components/subfooter/subfooter";

const operationalDiscoverySteps = [
  {
    number: "01",
    title: "Where does manual work create bottlenecks?",
    description:
      "We map every step where people manage data by hand instead of systems doing it — quantifying the time lost and error rate introduced.",
  },
  {
    number: "02",
    title: "Which systems should talk but don't?",
    description:
      "We identify data that lives in silos and calculate the true cost of keeping it there — in duplicated effort, delayed decisions, and missed growth.",
  },
  {
    number: "03",
    title: "What's the true cost of your current approach?",
    description:
      "We quantify the time, errors, and growth friction your operational setup creates — numbers your CFO and Head of Operations can act on.",
  },
  {
    number: "04",
    title: "What's the right first step?",
    description:
      "We build a roadmap that fixes the bottleneck with the highest impact first. No guesswork. No vendor bias. Just prioritized clarity.",
  },
];

export default function OperationalDiscoveryPage() {
  return (
    <div className="min-h-screen bg-[#010C1B] text-white">
      <GobirdHeader />

      <main>
        {/* Hero Section */}
        <ServicesHero
          className="w-full min-h-[70vh]"
          primaryCta="Request an Operational Audit"
          secondaryCta="Learn the process"
          description="Most technology projects fail because they solve the wrong problem. A company implements new software, but the underlying process remains broken. Data stays fragmented. Manual work persists. The tool sits unused. An operational audit changes that equation."
        />

        {/* Operational Discovery Intro Section */}
        <section className="flex h-[643px] w-full items-center justify-center bg-[#000000] px-[30px]">
          <p className="max-w-[1100px] text-center font-[family-name:var(--font-sora)] text-[36px] font-[400] leading-[1.35] text-white">
            We diagnose the root of your operational <br />
            friction so solutions actually stick.{" "}
            <span className="text-white/25">
              Not the <br />
              symptom. Not the tool gap. The process <br />
              breakdown underneath it all.
            </span>
          </p>
        </section>

        <NumberList
          heading="What Is an Operational Audit?"
          headingHighlight="Operational Audit?"
          description={
            <>
              A systematic review of how your business processes work, where
              your
              <br />
              systems live, and how information flows between them. It answers
              <br />
              questions your team already lives with.
            </>
          }
          items={operationalDiscoverySteps}
        />

        <ProcessBox className="w-full" />

        {/* new section */}
        <section className="relative w-full overflow-hidden bg-[#FF884C] px-[65px] py-[105px] text-white">
          {/* Dot Pattern */}
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-[52%] opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(125,55,20,0.55) 1.5px, transparent 1.5px)",
              backgroundSize: "44px 44px",
            }}
          />

          <div className="relative z-10">
            {/* Heading + Intro */}
            <div className="flex w-full items-center justify-between">
              <h2 className="max-w-[500px] font-[family-name:var(--font-sora)] text-[55px] font-[400] leading-[1.2] tracking-[-0.05em]">
                <span className="text-white/70">Why Operational</span>
                <br />
                <span className="text-white">Audit First?</span>
              </h2>

              <p className=" font-[family-name:var(--font-inter)] text-[16px] font-[400] leading-[1.65] text-white">
                Too many companies buy software and hire consultants
                <br />
                without understanding what they&apos;re actually trying to fix.
                <br />
                An audit aligns everyone on the same diagnosis — before
                <br />
                you spend.
              </p>
            </div>

            {/* Three Cards */}
            <div className="mt-[75px] grid w-full grid-cols-3 gap-[10px]">
              {/* Card 01 */}
              <div className="h-[306px] w-[420px] rounded-[10px] border border-white/15 bg-white/[0.07] px-[24px] py-[30px]">
                <div className="inline-flex rounded-[4px] border border-white/25 px-[11px] py-[5px] font-[family-name:var(--font-sora)] text-[11px] font-[600] uppercase tracking-[0.08em] text-white">
                  CFO
                </div>

                <h3 className="mt-[27px] font-[family-name:var(--font-sora)] text-[22px] font-[700] leading-[1.3]">
                  Sees clear ROI
                </h3>

                <p className="mt-[15px] max-w-[260px] font-[family-name:var(--font-inter)] text-[14px] font-[400] leading-[1.6] text-white/80">
                  Every recommendation comes with a business case. Investment in
                  the audit pays for itself in avoided wasted software spend.
                </p>
              </div>

              {/* Card 02 */}
              <div className="h-[306px] w-[420px] rounded-[10px] border border-white/15 bg-white/[0.07] px-[24px] py-[30px]">
                <div className="inline-flex rounded-[4px] border border-white/25 px-[11px] py-[5px] font-[family-name:var(--font-sora)] text-[11px] font-[600] uppercase tracking-[0.08em] text-white">
                  HEAD OF OPERATIONS
                </div>

                <h3 className="mt-[27px] font-[family-name:var(--font-sora)] text-[22px] font-[700] leading-[1.3]">
                  Sees workflow clarity
                </h3>

                <p className="mt-[15px] max-w-[260px] font-[family-name:var(--font-inter)] text-[14px] font-[400] leading-[1.6] text-white/80">
                  Documented processes, mapped hand-offs, and identified
                  redundancies — with a fix priority your team can actually act
                  on.
                </p>
              </div>

              {/* Card 03 */}
              <div className="h-[306px] w-[420px] rounded-[10px] border border-white/15 bg-white/[0.07] px-[24px] py-[30px]">
                <div className="inline-flex rounded-[4px] border border-white/25 px-[11px] py-[5px] font-[family-name:var(--font-sora)] text-[11px] font-[600] uppercase tracking-[0.08em] text-white">
                  TECH TEAM
                </div>

                <h3 className="mt-[27px] font-[family-name:var(--font-sora)] text-[22px] font-[700] leading-[1.3]">
                  Sees integration
                  <br />
                  requirements
                </h3>

                <p className="mt-[15px] max-w-[260px] font-[family-name:var(--font-inter)] text-[14px] font-[400] leading-[1.6] text-white/80">
                  System-to-system data flow documented, gaps named, and
                  technical complexity scoped before a line of code is written.
                </p>
              </div>
            </div>

            {/* Investment Protection */}
            <div className="mt-[20px] flex h-[132px] w-full items-center justify-between rounded-[10px] border border-white/15 bg-white/[0.07] px-[34px]">
              <div>
                <div className="font-[family-name:var(--font-sora)] text-[11px] font-[600] uppercase tracking-[0.14em] text-white">
                  INVESTMENT PROTECTION
                </div>

                <p className="mt-[12px] font-[family-name:var(--font-sora)] text-[20px] font-[600] leading-[1.45] text-white">
                  With a clear diagnosis, the solutions you build address actual
                  problems, not
                  <br />
                  perceived ones.
                </p>
              </div>

              <button
                type="button"
                className="flex h-[51px] w-[51px] shrink-0 items-center justify-center rounded-full border border-white/80 text-[22px] text-white"
                aria-label="Learn more"
              >
                ↗
              </button>
            </div>
          </div>
        </section>

        <SubFooter className="w-full " />
      </main>

      <GobirdFooter />
    </div>
  );
}
