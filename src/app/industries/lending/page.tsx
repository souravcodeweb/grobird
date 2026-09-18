import { GobirdFooter } from "@/components/layout/GobirdFooter";
import { GobirdHeader } from "@/components/layout/GobirdHeader";
import { IndustriesHero } from "@/components/industries-hero/industries-hero";
import { IndustriesCenter } from "@/components/industries-center/industries-center";
import { InNumberUi } from "@/components/innumberui/innumberui";
import { SubFooter } from "@/components/subfooter/subfooter";

export default function LendingPage() {
  return (
    <div className="min-h-screen bg-[#010c1b] text-white">
      <GobirdHeader />

      <main />

      <IndustriesHero
        eyebrow=""
        headingLine1={<>Loan</>}
        headingLine2="Origination at "
        headingHighlight="Scale"
        backgroundImage="/perbg.png"
        description={
          <>
            We&apos;ve built loan origination systems for lending platforms and
            banks <br />
            that automate underwriting, document collection, verification, and{" "}
            <br />
            approval routing. Faster closures. Lower cost per loan. Better{" "}
            <br />
            borrower experience.
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
        headingLine1="Operations challenges"
        headingLine2="in lending."
        description={
          <>
            Every deliverable maps directly to a <br /> recommendation in your
            analysis — no scope <br /> drift.
          </>
        }
        items={[
          {
            title: "Manual document collection slows origination",
            description: (
              <>
                Back-and-forth with borrowers for payslips, tax returns, bank
                statements.
              </>
            ),
          },
          {
            title: "Underwriting requires rework",
            description: (
              <>
                Incomplete applications bounce. Missing documents delay
                decisions.
              </>
            ),
          },
          {
            title: "Verification is labor-intensive",
            description: (
              <>
                Employment checks, income verification, and title review are
                manual.
              </>
            ),
          },
          {
            title: "Approval routing lacks transparency",
            description: (
              <>
                Borrowers don&apos;t know where their application is. Staff
                struggle to track status.
              </>
            ),
          },
        ]}
      />

      <InNumberUi
        backgroundImage="/incnbg.png"
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
        titleLine1="Build Your "
        titleLine2="Origination  "
        titleHighlight="System."
        backgroundImage="/subbg4.png"
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
