import { GobirdFooter } from "@/components/layout/GobirdFooter";
import { GobirdHeader } from "@/components/layout/GobirdHeader";
import { ServicesHero } from "@/components/services-hero/services-hero";
import { NumberList } from "@/components/number-list/number-list";
import { BuildBox } from "@/components/buildbox/buildbox";
import { ProcessBox } from "@/components/process-box/process-box";
import { Numui } from "@/components/numui/numui";
import { SubFooter } from "@/components/subfooter/subfooter";

const operationalDiscoverySteps = [
  {
    number: "01",
    title: "Manual data entry across systems",
    description:
      "Information lives in one tool but needs to exist in another. Your team copies and pastes, risking errors.",
  },
  {
    number: "02",
    title: "Approval routing without process",
    description:
      "Requests loop through email or spreadsheets. No one knows who should approve next or when things are stuck.",
  },
  {
    number: "03",
    title: "Repetitive manual calculations and formatting",
    description:
      "Your team spends time on work that could be automated with the right configuration.",
  },
  {
    number: "04",
    title: "Follow-up chasing and status reporting",
    description:
      "Without visibility, managers spend time asking for updates instead of acting on data.",
  },
];

export default function WorkflowAutomationPage() {
  return (
    <div className="min-h-screen bg-[#010C1B] text-white">
      <GobirdHeader />

      <main>
        {/* Hero */}
        <ServicesHero
          className="w-full min-h-[70vh] bg-[#000000]"
          eyebrow="Automate Business Processes"
          headingLines={[
            "Automate Manual",
            "Business Processes,",
            "Reclaim Your Team",
          ]}
          backgroundImage="/servicesautobg.png"
          description={
            <>
              Manual work kills productivity. Your team spends hours moving data{" "}
              <br />
              between systems, chasing approvals, and managing processes that{" "}
              <br />
              should run on their own.
            </>
          }
          descriptionPosition="left"
        />

        {/* What Slows You Down */}
        <NumberList
          className="w-full bg-[#000000]"
          showGlow={false}
          heading={<>What Slows</>}
          headingHighlight="You Down"
          items={operationalDiscoverySteps}
        />

        {/* What We Automate */}
        <BuildBox
          headingText="What "
          headingHighlight="We Automate"
          description={
            <>
              We turn repetitive operational work into
              <br />
              automated workflows that reduce manual effort
              <br />
              and keep your team moving.
            </>
          }
          items={[
            {
              title: <>Data synchronization</>,
              description:
                "When information changes in one system, it automatically updates everywhere it's needed.",
              type: "workflow",
            },
            {
              title: <>Approval workflows</>,
              description:
                "Requests route to the right person, escalate if needed, and create an audit trail without human orchestration. ",
              type: "approval",
            },
            {
              title: (
                <>
                  Report generation and <br /> distribution
                </>
              ),
              description:
                "Dashboards and reports update automatically and reach stakeholders on schedule. ",
              type: "integration",
            },
            {
              title: <>Trigger-based actions</>,
              description:
                "When something happens, the system responds automatically: send notification, create task, log data, fetch external info. ",
              type: "reporting",
            },
          ]}
        />

        {/* process */}

        <ProcessBox
          title={<>The Impact</>}
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

        {/* Number box   */}

        <Numui />

        {/* subooter */}

        <SubFooter
          className="w-full"
          titleLine1="Let's identify where automation will have"
          titleLine2="the biggest impact"
          titleHighlight=" on your operation. "
          backgroundImage="/custom-software-subbg.png"
          description={
            <>
              Start your discovery today. We deliver a decision-ready roadmap in
              four weeks — no vendor bias, no <br /> guesswork.
            </>
          }
          buttonText=" Explore Automation Opportunities  "
        />
      </main>

      <GobirdFooter />
    </div>
  );
}
