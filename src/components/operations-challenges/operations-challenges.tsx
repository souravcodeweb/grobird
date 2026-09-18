import React from "react";

interface OperationsChallengesTab {
  number: string;
  label: string;
  active?: boolean;
  width: string;
}

interface OperationsChallengesProps {
  className?: string;
  headingLine1?: string;
  headingLine2?: string;
  tabs?: OperationsChallengesTab[];
  challengeTitle?: React.ReactNode;
  challengeDescription?: React.ReactNode;
  costLabel?: string;
  costText?: string;
}

const defaultTabs: OperationsChallengesTab[] = [
  {
    number: "01",
    label: "KYC / AML",
    active: true,
    width: "w-[127px]",
  },
  {
    number: "02",
    label: "Reconciliation",
    width: "w-[130px]",
  },
  {
    number: "03",
    label: "Data Fragmentation",
    width: "w-[170px]",
  },
  {
    number: "04",
    label: "Scale",
    width: "w-[88px]",
  },
];

export function OperationsChallenges({
  className = "",
  headingLine1 = "Operations challenges",
  headingLine2 = "every fintech hits.",
  tabs = defaultTabs,
  challengeTitle = (
    <>
      Manual compliance checks throttle
      <br />
      onboarding
    </>
  ),
  challengeDescription = (
    <>
      Every KYC and AML check that requires a human slows your funnel.
      <br />
      Clean customers wait behind flagged ones. Your team spends hours on work
      <br />
      that should take seconds.
    </>
  ),
  costLabel = "Typical Cost",
  costText = "~4hrs avg. manual review per customer",
}: OperationsChallengesProps) {
  return (
    <section
      className={["w-full bg-[#000000] px-[80px] py-[80px]", className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto w-full">
        {/* Heading */}
        <div>
          <h2 className="font-[family-name:var(--font-sora)] text-[48px] font-[400] leading-[1.15] tracking-[-0.045em]">
            <span className="block text-[#4E4C4E]">{headingLine1}</span>

            <span className="block text-white">{headingLine2}</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="mt-[46px] flex items-center gap-[7px]">
          {tabs.map((tab) => (
            <button
              key={tab.number}
              type="button"
              className={[
                "flex h-[43px] items-center gap-[10px] px-[17px]",
                tab.width,
                tab.active
                  ? "border-t-[2px] border-[#FF884C] bg-[#341403]"
                  : "bg-[#292929]",
              ].join(" ")}
            >
              <span
                className={[
                  "font-[family-name:var(--font-sora)] text-[10px] font-[400]",
                  tab.active ? "text-white" : "text-white/30",
                ].join(" ")}
              >
                {tab.number}
              </span>

              <span
                className={[
                  "font-[family-name:var(--font-inter)] text-[12px] font-[400]",
                  tab.active ? "text-white" : "text-white/60",
                ].join(" ")}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-[55px] flex w-full items-center justify-between">
          {/* Left Content */}
          <div className="w-[520px]">
            <h3 className="font-[family-name:var(--font-sora)] text-[30px] font-[600] leading-[1.2] tracking-[-0.035em] text-white">
              {challengeTitle}
            </h3>

            <p className="mt-[24px] w-[700px] font-[family-name:var(--font-inter)] text-[16px] font-[400] leading-[1.8] text-white/45">
              {challengeDescription}
            </p>
          </div>

          {/* Right Cost Card */}
          <div className="flex h-[89px] w-[349px] flex-col justify-center bg-[#FF884C] px-[29px]">
            <span className="font-[family-name:var(--font-sora)] text-[10px] font-[500] uppercase tracking-[0.22em] text-white">
              {costLabel}
            </span>

            <p className="mt-[12px] font-[family-name:var(--font-inter)] text-[13px] font-[500] text-black">
              {costText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
