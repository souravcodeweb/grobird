import { GobirdFooter } from "@/components/layout/GobirdFooter";
import { GobirdHeader } from "@/components/layout/GobirdHeader";
import { NumberList } from "@/components/number-list/number-list";
import { ServicesHero } from "@/components/services-hero/services-hero";
import { SubFooter } from "@/components/subfooter/subfooter";
import { BuildBox } from "@/components/buildbox/buildbox";

const operationalDiscoverySteps = [
  {
    number: "01",
    title: "You have a process no off-the-shelf tool covers",
    description:
      "Whether it's a unique workflow, proprietary business logic, or a combination of operations that exist nowhere else, custom software is the right move. ",
  },
  {
    number: "02",
    title: "Integration matters more than functionality",
    description:
      "Your data lives in multiple systems. You need them to talk to each other seamlessly. Custom software bridges the gap. ",
  },
  {
    number: "03",
    title: "You need to own the logic",
    description:
      "Licensing costs, vendor lock-in, and feature updates outside your control erode your margins and agility. Custom software means you own the code. ",
  },
  {
    number: "04",
    title: "Off-the-shelf would require rewriting your process",
    description:
      "If fitting generic software means restructuring your operation, custom is cheaper and faster than the alternative. ",
  },
];

export default function CustomSoftwarePage() {
  return (
    <div className="min-h-screen bg-[#010C1B] text-white">
      <GobirdHeader />

      <main>
        <ServicesHero
          className="w-full min-h-[70vh] bg-[#000000]"
          eyebrow="Custom Software for Business Operations"
          headingLines={["Software That Fits", "", "Your Operation"]}
          backgroundImage="/sdbg1.png"
          description={
            <>
              Your operation is unique. But generic software treats you like
              every
              <br />
              other company. The result: features you don&apos;t need, workflows
              that <br /> don&apos;t match reality, and integration nightmares.
            </>
          }
          descriptionPosition="left"
        />

        <NumberList
          className="w-full bg-[#000000]"
          showGlow={false}
          heading={
            <>
              When Custom Software <br />
            </>
          }
          headingHighlight="Makes Sense"
          items={operationalDiscoverySteps}
        />

        <BuildBox />

        <SubFooter
          className="w-full"
          titleLine1="Let's explore whether custom software is"
          titleLine2="the right next step"
          titleHighlight=" for your operation."
          backgroundImage="/custom-software-subbg.png"
          description={
            <>
              Start your discovery today. We deliver a decision-ready roadmap in
              four weeks — no vendor bias, <br /> no guesswork.
            </>
          }
          buttonText="Start a Custom Software Discussion "
        />
      </main>

      <GobirdFooter />
    </div>
  );
}
