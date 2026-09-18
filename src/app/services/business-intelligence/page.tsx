import { GobirdFooter } from "@/components/layout/GobirdFooter";
import { GobirdHeader } from "@/components/layout/GobirdHeader";
import { ServicesHero } from "@/components/services-hero/services-hero";
import { NumberList } from "@/components/number-list/number-list";
import { BuildBox } from "@/components/buildbox/buildbox";
import { SubFooter } from "@/components/subfooter/subfooter";
import { ModelBox } from "@/components/modelbox/modelbox";

const operationalDiscoverySteps = [
  {
    number: "01",
    title: "One source of truth ",
    description:
      " Data comes from your authoritative systems and updates in real time. No more conflicting versions of the same number. ",
  },
  {
    number: "02",
    title: "Role-specific dashboards",
    description:
      "Finance sees cash flow and margins. Operations sees capacity and throughput. Sales sees pipeline and conversion. Everyone sees what matters to them.",
  },
  {
    number: "03",
    title: "Predictive visibility",
    description:
      "You see trends before they become problems. Forecast cash position, capacity needs, and opportunities.",
  },
  {
    number: "04",
    title: "Faster decision-making",
    description:
      "Good data reduces meetings. People make decisions based on facts, not theories.  ",
  },
];

export default function BusinessIntelligencePage() {
  return (
    <div className="min-h-screen bg-[#010C1B] text-white">
      <GobirdHeader />

      <main />

      <ServicesHero
        className="w-full min-h-[70vh] bg-[#000000]"
        eyebrow="Business Intelligence"
        headingLines={["Real-Time Visibility", "", "Into Your Operation"]}
        backgroundImage="/sdbg1.png"
        description={
          <>
            Data scattered across systems doesn&apos;t help. Your team spends
            time <br />
            compiling spreadsheets instead of acting on <br /> insights. By the
            time you have a report, conditions have changed.
          </>
        }
        descriptionPosition="left"
      />

      {/* Integration Impact Section */}
      <section className="relative w-full overflow-hidden bg-[#000000] px-[40px] py-[205px]">
        {/* Subtle Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.20]"
          style={{
            backgroundImage: `
        linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)
      `,
            backgroundSize: "74px 74px",
          }}
        />

        {/* Blue Horizontal Glow */}
        <div
          className="pointer-events-none absolute left-[40%] top-[31%] h-[280px] w-[58%]"
          style={{
            background:
              "radial-gradient(ellipse at 72% 50%, rgba(215,232,255,0.95) 0%, rgba(139,185,255,0.75) 9%, rgba(67,125,218,0.45) 25%, rgba(30,67,130,0.22) 46%, transparent 72%)",
            filter: "blur(20px)",
          }}
        />

        {/* Blue Core */}
        <div
          className="pointer-events-none absolute right-[5%] top-[38%] h-[80px] w-[52%]"
          style={{
            background:
              "radial-gradient(ellipse at 82% 50%, rgba(235,244,255,0.95) 0%, rgba(170,207,255,0.7) 18%, rgba(81,139,231,0.35) 45%, transparent 75%)",
            filter: "blur(18px)",
          }}
        />

        {/* Dark Vignette */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 65% 48%, transparent 0%, rgba(0,0,0,0.18) 45%, rgba(0,0,0,0.72) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1050px] text-left">
          {/* First Text */}
          <p className="font-[family-name:var(--font-sora)] text-[36px] font-[400] leading-[1.45] tracking-[-0.035em] text-white/85">
            Business intelligence brings clarity. We design <br /> dashboards
            and reporting systems that give you live <br />
            <span className="text-white/50">
              visibility into your operation, your  metrics, and your
              performance.
            </span>
          </p>

          {/* Second Text */}
        </div>
      </section>

      <NumberList
        className="w-full bg-[#000000]"
        showGlow={false}
        heading={<>What Good </>}
        headingHighlight="BI Delivers"
        items={operationalDiscoverySteps}
      />

      <BuildBox
        headingText="What "
        headingHighlight="We Build"
        description={<> </>}
        items={[
          {
            title: <>Operational dashboards </>,
            description:
              "Real-time visibility into throughput, capacity, bottlenecks, and team performance.",
            type: "workflow",
          },
          {
            title: <>Financial dashboards</>,
            description:
              "Cash position, profitability, margins, and cash flow projections updated live. ",
            type: "approval",
          },
          {
            title: <>Sales and pipeline dashboards</>,
            description:
              "Opportunity status, conversion rates, forecast accuracy, and deal velocity.",
            type: "integration",
          },
          {
            title: <>Custom reporting portals</>,
            description:
              "Self-service analytics where your team filters data and builds their own views. ",
            type: "reporting",
          },
        ]}
      />

      <ModelBox
        heading={
          <>
            <span className="text-[#858382]">How </span>
            <span className="text-[#FF884C]">We Deliver</span>
          </>
        }
        items={[
          {
            number: "01",
            label: "STRATEGY FIRST",
            title: "Interview your leadership",
            description:
              "We interview your leadership to understand what they need to see and what decisions those metrics drive.",
            theme: "dark",
          },
          {
            number: "02",
            label: "DATA FIRST",
            title: "We audit your data",
            description:
              "We audit your data sources to identify what's reliable, what's not, and what transformation is needed.",
            theme: "blue",
          },
          {
            number: "03",
            label: "WORKFLOW FIRST",
            title: "We design dashboards",
            description:
              "We design dashboards around workflows, not charts. We show you the data you act on, in the order you need it.",
            theme: "blue",
          },
          {
            number: "04",
            label: "LONG-TERM SUCCESS",
            title: "We iterate based on usage",
            description:
              "As you learn to use the dashboards, we refine them and add new views.",
            theme: "dark",
          },
        ]}
      />

      <SubFooter
        className="w-full"
        titleLine1="Let's design the operational visibility your"
        titleLine2="leadership"
        titleHighlight=" team needs."
        backgroundImage="/custom-software-subbg.png"
        description={
          <>
            Start your discovery today. We deliver a decision-ready roadmap in
            four weeks — no vendor bias, no <br /> guesswork.
          </>
        }
        buttonText="Build Your BI Strategy"
      />

      <GobirdFooter />
    </div>
  );
}
