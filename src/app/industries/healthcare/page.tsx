import { GobirdFooter } from "@/components/layout/GobirdFooter";
import { GobirdHeader } from "@/components/layout/GobirdHeader";
import { IndustriesHero } from "@/components/industries-hero/industries-hero";
import { IndustriesCenter } from "@/components/industries-center/industries-center";
import { InNumberUi } from "@/components/innumberui/innumberui";

import { SubFooter } from "@/components/subfooter/subfooter";

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-[#010c1b] text-white">
      <GobirdHeader />

      <main>
        <IndustriesHero
          eyebrow=""
          headingLine1={
            <>
              Streamlined <br /> operations
            </>
          }
          headingLine2="for healthcare"
          headingHighlight="providers."
          backgroundImage="/in3bg.png"
          description={
            <>
              We&apos;ve built automation systems for healthcare organizations
              that <br />
              handle eligibility verification, claims processing, prior
              authorization <br /> workflows, and patient communication. Faster
              processing. Fewer <br /> errors. Better cash flow.
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

        <IndustriesCenter />

        <InNumberUi
          glowColor="orange"
          heading={
            <>
              <span className="text-[#5D5B5D]">How </span>
              <span className="text-white">GroBird Helps</span>
            </>
          }
          items={[
            {
              number: "01",
              label: "Fulfillment",
              title: (
                <>
                  Real-time eligibility <br />
                  <span className="text-white">verification</span>
                </>
              ),
              description:
                "Check insurance coverage and benefits instantly at point of service — before the patient sits down. Automated, accurate, and logged.",
              outcomeLabel: "OUTCOME",
              outcome: "14 min → under 30 sec",
            },

            {
              number: "02",
              label: "Routing",
              title: (
                <>
                  Automated claims <br />
                  <span className="text-white">assembly and submission</span>
                </>
              ),
              description:
                "Consolidate data from EMR, schedule, and billing into complete, validated claims. First-pass acceptance climbs. Manual rework drops to near zero.",
              outcomeLabel: "OUTCOME",
              outcome: "First-pass rate 94%",
            },

            {
              number: "03",
              label: "Realtime Track",
              title: (
                <>
                  Prior authorization
                  <span className="text-white"> workflows</span>
                </>
              ),
              description:
                "Automate request generation and real-time tracking across payers. Alert providers when approvals stall — with context, not just a flag.",
              outcomeLabel: "OUTCOME",
              outcome: "3–5 days → same-day for eligible",
            },

            {
              number: "04",
              label: "Automation",
              title: (
                <>
                  Patient portal for{" "}
                  <span className="text-white">self-service</span>
                </>
              ),
              description:
                "Patients see bills, check claim status, and access payment options without staff intervention. Inbound volume drops. Staff focus on care.",
              outcomeLabel: "OUTCOME",
              outcome: "40% reduction in call volume",
            },
          ]}
        />

        <SubFooter
          className="w-full"
          titleLine1="Let's map your operations and show"
          titleLine2="yyou what's ."
          titleHighlight=" automatable."
          backgroundImage="/subin.png"
          showRgbGlow={false}
          fullBackgroundImage
          description={
            <>
              No canned proposals. We start by understanding your specific{" "}
              <br />
              constraints, then tell you what&apos;s actually worth building.
            </>
          }
          buttonText="Build Your BI Strategy"
        />
      </main>

      <GobirdFooter />
    </div>
  );
}
