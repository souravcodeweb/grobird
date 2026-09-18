import { GobirdFooter } from "@/components/layout/GobirdFooter";
import { GobirdHeader } from "@/components/layout/GobirdHeader";
import { IndustriesHero } from "@/components/industries-hero/industries-hero";
import { OperationsChallenges } from "@/components/operations-challenges/operations-challenges";
import { InNumberUi } from "@/components/innumberui/innumberui";
import { SubFooter } from "@/components/subfooter/subfooter";

export default function LogisticsPage() {
  return (
    <div className="min-h-screen bg-[#010c1b] text-white">
      <GobirdHeader />

      <main>
        <IndustriesHero
          eyebrow=""
          headingLine1="End-to-End "
          headingLine2="Visibility Into Your"
          headingHighlight="Logistics Network"
          backgroundImage="/inbg.png"
          description={
            <>
              We&apos;ve built operational systems for logistics companies that
              automate <br /> order fulfillment, routing optimization, real-time
              tracking, and exception <br /> management. Systems that move
              volume efficiently and keep you <br /> ahead of problems.
            </>
          }
          metrics={[
            {
              value: "70%",
              line1: "Reduction in onboarding time",
              line2: "",
            },
            {
              value: "99.9%",
              line1: "Reconciliation accuracy",
              line2: "",
            },
            {
              value: "0×",
              line1: "Headcount added to scale 5×",
              line2: "",
            },
          ]}
        />

        <OperationsChallenges
          headingLine1="Operational challenges"
          headingLine2="in Logistics."
          tabs={[
            {
              number: "01",
              label: "Manual Order",
              active: true,
              width: "w-[155px]",
            },
            {
              number: "02",
              label: "Fragmented Carrier Management",
              width: "w-[300px]",
            },
            {
              number: "03",
              label: "Visibility Gaps",
              width: "w-[170px]",
            },
            {
              number: "04",
              label: "Exception Handling",
              width: "w-[200px]",
            },
          ]}
          challengeTitle={<>Manual order fulfillment creates bottlenecks</>}
          challengeDescription={
            <>
              Orders pile up faster than your team can process. Picking errors{" "}
              <br />
              increase. Time to ship extends.
            </>
          }
          costLabel="Typical cost"
          costText="Hours lost every day to manual coordination"
        />

        <InNumberUi
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
                  Automated order <br />
                  <span className="text-white">fulfillment</span>
                </>
              ),
              description:
                "Orders route to the right warehouse, picking is optimized, and shipment is generated automatically. ",
              outcomeLabel: "OUTCOME",
              outcome: "Faster order processing with fewer fulfillment errors.",
            },

            {
              number: "02",
              label: "Routing",
              title: (
                <>
                  Carrier integration and <br />
                  <span className="text-white">routing</span>
                </>
              ),
              description:
                "Connect to multiple carriers, compare rates in real-time, and automate carrier selection.",
              outcomeLabel: "OUTCOME",
              outcome: "99.9% match accuracy",
            },

            {
              number: "03",
              label: "Realtime Track",
              title: (
                <>
                  Real-time tracking and <br />
                  <span className="text-white">visibility</span>
                </>
              ),
              description:
                "Customers and your team track shipments live. Forecast delivery dates with accuracy. ",
              outcomeLabel: "OUTCOME",
              outcome: "Complete visibility from order to final delivery.",
            },

            {
              number: "04",
              label: "Automation ",
              title: (
                <>
                  Exception workflow <br /> automation
                </>
              ),
              description:
                "Damage, delays, and delivery failures are detected and routed to resolution without manual escalation. ",
              outcomeLabel: "OUTCOME",
              outcome: "40% support ticket deflection",
            },
          ]}
        />

        <SubFooter
          className="w-full"
          titleLine1="Let's talk about"
          titleLine2="your logistical"
          titleHighlight=" problems."
          backgroundImage="/orbg.png"
          showRgbGlow={false}
          fullBackgroundImage
          description={
            <>
              No canned proposals. We start by understanding your specific{" "}
              <br />
              constraints, then tell you what's actually worth building.
            </>
          }
          buttonText="Build Your BI Strategy"
        />
      </main>

      <GobirdFooter />
    </div>
  );
}
