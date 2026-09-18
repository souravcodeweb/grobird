import { GobirdFooter } from "@/components/layout/GobirdFooter";
import { GobirdHeader } from "@/components/layout/GobirdHeader";
import { ServicesHero } from "@/components/services-hero/services-hero";
import { NumberList } from "@/components/number-list/number-list";
import { BuildBox } from "@/components/buildbox/buildbox";
import { ProcessBox } from "@/components/process-box/process-box";
import { SubFooter } from "@/components/subfooter/subfooter";

const operationalDiscoverySteps = [
  {
    number: "01",
    title: "CRM and ERP ",
    description:
      "Customer information syncs with operational and financial systems so everyone sees the same picture.",
  },
  {
    number: "02",
    title: "Accounting platforms and operational systems",
    description:
      "Transaction data flows automatically, eliminating manual entry and reconciliation. ",
  },
  {
    number: "03",
    title: "Marketing, sales, and operations ",
    description:
      "Lead data, customer interactions, and operational needs align across teams.",
  },
  {
    number: "04",
    title: "External systems and internal tools ",
    description:
      "Vendor APIs, partner systems, and external data sources connect to your internal operation. ",
  },
  {
    number: "05",
    title: "Custom applications and legacy systems",
    description:
      "Whether old or new, internal or external, we create the integrations that make them work together. ",
  },
];

export default function SystemIntegrationPage() {
  return (
    <div className="min-h-screen bg-[#010C1B] text-white">
      <GobirdHeader />

      <main />

      <ServicesHero
        className="w-full min-h-[70vh] bg-[#000000]"
        eyebrow="SYSTEMS INTEGRATION"
        headingLines={["One Source of Truth.", "", "No More Data Silos."]}
        backgroundImage="/sdbg1.png"
        description={
          <>
            Your company uses multiple systems. Sales lives in a CRM. Operations{" "}
            <br />
            in an ERP. Accounting in a separate platform. Finance in another.{" "}
            <br />
            Information gets duplicated, manually synced, and inevitably falls
            out of sync.
          </>
        }
        descriptionPosition="left"
      />

      <section className="relative w-full overflow-hidden bg-[#000000] px-[40px] py-[105px]">
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
            Fragmented systems create fragmented workflows. A
            <br />
            customer updates an order in your CRM, but inventory
            <br />
            doesn&apos;t know.{" "}
            <span className="text-white/50">
              Operations works with stale data.
              <br />
              Forecasts suffer.
            </span>
          </p>

          {/* Second Text */}
          <p className="mt-[38px] font-[family-name:var(--font-sora)] text-[36px] font-[400] leading-[1.45] tracking-[-0.035em] text-white/50">
            Real integration changes that. Data enters once,
            <br />
            updates everywhere. Your team has consistent
            <br />
            information. Decisions are better. Execution is faster.
          </p>
        </div>
      </section>

      {/* number list */}

      <NumberList
        className="w-full bg-[#000000]"
        showGlow={false}
        heading={<>What </>}
        headingHighlight="We Integrate"
        items={operationalDiscoverySteps}
      />

      {/* build box */}

      <BuildBox
        headingText="Integration"
        headingHighlight="Approaches"
        description={<> </>}
        items={[
          {
            title: <>API-based integrations</>,
            description:
              "We use standard APIs to create real-time, automated data flows between your platforms.",
            type: "workflow",
          },
          {
            title: <>ETL pipelines</>,
            description:
              "For systems without APIs or complex data transformation, we build custom extraction,  transformation, and loading processes. ",
            type: "approval",
          },
          {
            title: <>Webhooks and event-driven flows</>,
            description:
              "When something happens in one system, the other responds automatically.",
            type: "integration",
          },
          {
            title: <>Hybrid approaches</>,
            description:
              "Most real operations need a combination. We design integration architecture that fits your specific environment.  ",
            type: "reporting",
          },
        ]}
      />

      {/* process box */}

      <ProcessBox
        title={<>How We Deliver</>}
        description={
          <>
            Four structured phases that move from <br /> understanding to a
            decision-ready roadmap in <br /> four weeks.
          </>
        }
        items={[
          {
            number: "01",
            phase: "",
            title: "We audit your current systems and data flows.",
            description:
              "We understand your architecture and identify integration pain points. ",
            color: "blue",
          },
          {
            number: "02",
            phase: "",
            title: "We design a scalable integration strategy",
            description:
              "We map which data flows where, how often it needs to sync, and what transformations are required.",
            color: "gray",
          },
          {
            number: "03",
            phase: "",
            title: "We build and test incrementally. ",
            description:
              "We integrate one system pair at a time, validate data accuracy, and expand from there. ",
            color: "gray",
          },
          {
            number: "04",
            phase: "We monitor and optimize",
            title: "Optimize",
            description:
              "After launch, we track integration health and refine for performance and reliability.",
            color: "gray",
          },
        ]}
      />

      {/* subfooter */}
      <SubFooter
        className="w-full"
        titleLine1="Let's map your integration roadmap and"
        titleLine2="eliminate"
        titleHighlight=" data silos. "
        backgroundImage="/custom-software-subbg.png"
        description={
          <>
            Start your discovery today. We deliver a decision-ready roadmap in
            four weeks — no vendor bias, no <br /> guesswork.
          </>
        }
        buttonText=" Explore Automation Opportunities  "
      />

      <GobirdFooter />
    </div>
  );
}
