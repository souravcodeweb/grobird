import { GobirdFooter } from "@/components/layout/GobirdFooter";
import { GobirdHeader } from "@/components/layout/GobirdHeader";
import { IndustriesHero } from "@/components/industries-hero/industries-hero";
import { OperationsChallenges } from "@/components/operations-challenges/operations-challenges";
import { InNumberUi } from "@/components/innumberui/innumberui";
import { SubFooter } from "@/components/subfooter/subfooter";

export default function FintechPage() {
  return (
    <div className="min-h-screen bg-[#010C1B] text-white">
      <GobirdHeader />

      <main />

      <IndustriesHero />

      <OperationsChallenges />

      <InNumberUi />

      <SubFooter
        className="w-full"
        titleLine1="Let's design the operational visibility your"
        titleLine2="leadership"
        titleHighlight=" team needs."
        backgroundImage="/insub.png"
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
