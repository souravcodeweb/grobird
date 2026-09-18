import { GobirdFooter } from "@/components/layout/GobirdFooter";
import { GobirdHeader } from "@/components/layout/GobirdHeader";
import { IndustriesHero } from "@/components/industries-hero/industries-hero";
import { IndustriesCenter } from "@/components/industries-center/industries-center";
import { InNumberUi } from "@/components/innumberui/innumberui";
import { SubFooter } from "@/components/subfooter/subfooter";

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen bg-[#010c1b] text-white">
      <GobirdHeader />

      <main />

      <IndustriesHero
        eyebrow=""
        headingLine1={<>Supply Chain </>}
        headingLine2="Visibility and "
        headingHighlight="Control"
        backgroundImage="/inlastbg.png"
        description={
          <>
            We've built supply chain systems for manufacturers that integrate{" "}
            <br />
            procurement, supplier management, production planning, and delivery.{" "}
            <br />
            Real-time visibility. Faster lead times. Lower inventory costs.
          </>
        }
        metrics={
          [
            // {
            //   value: "70%",
            //   line1: "Reduction in onboarding time",
            //   line2: "",
            // },
            // {
            //   value: "99.9%",
            //   line1: "Reconciliation accuracy",
            //   line2: "",
            // },
            // {
            //   value: "0×",
            //   line1: "Headcount added to scale 5×",
            //   line2: "",
            // },
          ]
        }
      />

      <IndustriesCenter
        headingLine1="Operations challenges "
        headingLine2="in Manufacturing"
        description={
          <>
            Every deliverable maps directly to a <br /> recommendation in your
            analysis— no scope <br /> drift.
          </>
        }
        items={[
          {
            title: "Supplier coordination is fragmented ",
            description: (
              <>
                Purchase orders go via email or disparate systems. Delivery
                tracking is manual.
              </>
            ),
          },
          {
            title: "Production planning lacks visibility",
            description: (
              <>
                You can't see supplier lead times or inventory position in one
                view.
              </>
            ),
          },
          {
            title: "Quality tracking and compliance is labor-intensive",
            description: (
              <>
                Inspections, documentation, and traceability require manual
                effort.
              </>
            ),
          },
          {
            title: "Demand forecasting is reactive",
            description: (
              <>Plans update slowly. Surprises lead to rush orders and waste.</>
            ),
          },
        ]}
      />

      <InNumberUi
        backgroundImage="/inlastbgimg.png"
        heading={
          <>
            <span className="text-[#5D5B5D]">How </span>
            <span className="text-white">GroBird Helps</span>
          </>
        }
        items={[
          {
            number: "01",
            label: "FULFILLMENT",
            title: (
              <>
                Document collection <br />
                <span className="text-white">automation</span>
              </>
            ),
            description:
              "Borrowers upload required documents through a secure portal. Automated validation identifies missing or incomplete information before it reaches the underwriting team.",
            outcomeLabel: "OUTCOME",
            outcome: "Faster document collection",
          },

          {
            number: "02",
            label: "UNDERWRITING",
            title: (
              <>
                Underwriting workflow <br />
                <span className="text-white">automation</span>
              </>
            ),
            description:
              "Bring application data, borrower information, and verification results together so underwriters can review complete applications without repetitive manual work.",
            outcomeLabel: "OUTCOME",
            outcome: "Faster underwriting decisions",
          },

          {
            number: "03",
            label: "INTEGRATION",
            title: (
              <>
                Third-party integrations
                <br />
                <span className="text-white">and workflows</span>
              </>
            ),
            description:
              "Connect credit bureaus, verification providers, banking systems, and other third-party services into a single origination workflow.",
            outcomeLabel: "OUTCOME",
            outcome: "Connected lending ecosystem",
          },

          {
            number: "04",
            label: "APPROVAL",
            title: (
              <>
                Loan approval <br />
                <span className="text-white">automation</span>
              </>
            ),
            description:
              "Route applications automatically based on lending rules, risk criteria, and approval requirements while keeping every decision and handoff visible.",
            outcomeLabel: "OUTCOME",
            outcome: "Faster loan closures",
          },
        ]}
      />

      <SubFooter
        className="w-full"
        titleLine1="Transform Supply   "
        titleLine2="Chain  "
        titleHighlight="Operations"
        backgroundImage="/subbgin.png"
        showRgbGlow={false}
        fullBackgroundImage={false}
        description={
          <>
            No canned proposals. We start by understanding your specific <br />
            constraints, then tell you what's actually worth building.
          </>
        }
        buttonText="Build Your BI Strategy"
      />

      <GobirdFooter />
    </div>
  );
}
