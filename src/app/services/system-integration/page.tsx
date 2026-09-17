import { GobirdFooter } from "@/components/layout/GobirdFooter";
import { GobirdHeader } from "@/components/layout/GobirdHeader";
import { ServicesHero } from "@/components/services-hero/services-hero";
import { NumberList } from "@/components/number-list/number-list";
import { BuildBox } from "@/components/buildbox/buildbox";
import { ProcessBox } from "@/components/process-box/process-box";

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
        title={<>The Imct</>}
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
            title: "Reduced errors ",
            description:
              "Automation eliminates manual entry mistakes. Data is consistent and trustworthy.",
            color: "blue",
          },
          {
            number: "02",
            phase: "",
            title: "Design",
            description:
              "What took hours now happens in minutes. Approvals move faster. Reports appear instantly.",
            color: "gray",
          },
          {
            number: "03",
            phase: "",
            title: "Better visibility",
            description:
              "Process status is transparent in real-time. You see where things are stuck and why. ",
            color: "gray",
          },
          {
            number: "04",
            phase: "Team time recovered",
            title: "Optimize",
            description:
              "Your people focus on judgment calls and strategy, not administrative overhead. ",
            color: "gray",
          },
        ]}
      />

      <GobirdFooter />
    </div>
  );
}
