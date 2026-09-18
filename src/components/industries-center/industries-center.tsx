import React from "react";

interface IndustriesCenterItem {
  title: string;
  description: React.ReactNode;
}

interface IndustriesCenterProps {
  className?: string;
  headingLine1?: string;
  headingLine2?: string;
  description?: React.ReactNode;
  items?: IndustriesCenterItem[];
}

const defaultItems: IndustriesCenterItem[] = [
  {
    title: "Eligibility verification is manual and slow",
    description: (
      <>
        Staff call insurers or search portals. Real-time
        <br />
        verification is rare.
      </>
    ),
  },
  {
    title: "Claims submission requires rework",
    description: <>Incomplete claims bounce. Staff resubmit manually.</>,
  },
  {
    title: "Prior authorization is a bottleneck",
    description: (
      <>
        Doctors wait for approvals. Paperwork gets lost.
        <br />
        Processes are opaque.
      </>
    ),
  },
  {
    title: "Patient communication is ad-hoc",
    description: (
      <>
        Billing questions loop through email or phone. Status
        <br />
        updates are manual.
      </>
    ),
  },
];

export function IndustriesCenter({
  className = "",
  headingLine1 = "Operations challenges",
  headingLine2 = "in healthcare.",
  description = (
    <>
      Every deliverable maps directly to a
      <br />
      recommendation in your analysis — no scope
      <br />
      drift.
    </>
  ),
  items = defaultItems,
}: IndustriesCenterProps) {
  return (
    <section
      className={["w-full bg-[#000000] px-[80px] py-[100px]", className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto w-full ">
        {/* TOP */}
        <div className="grid grid-cols-2">
          {/* LEFT HEADING */}
          <div>
            <h2 className="font-[family-name:var(--font-sora)] text-[48px] font-[400] leading-[1.05] tracking-[-0.045em]">
              <span className="block text-[#3F3D3F]">{headingLine1}</span>

              <span className="block text-white">{headingLine2}</span>
            </h2>
          </div>

          {/* RIGHT DESCRIPTION */}
          <div className="flex items-start justify-end pt-[10px]">
            <p className="w-[390px] font-[family-name:var(--font-inter)] text-[14px] font-[400] leading-[1.6] text-white">
              {description}
            </p>
          </div>
        </div>

        {/* CHALLENGES */}
        <div className="mt-[88px] w-full ">
          {items.map((item, index) => (
            <div
              key={index}
              className={[
                "grid min-h-[100px] grid-cols-2 items-center border-t border-white/[0.08]",
                index === items.length - 1 ? "border-b" : "",
              ].join(" ")}
            >
              {/* LEFT */}
              <div className="pr-[40px]">
                <h3 className="font-[family-name:var(--font-sora)] text-[22px] font-[500] leading-[1.3] tracking-[-0.025em] text-white">
                  {item.title}
                </h3>
              </div>

              {/* RIGHT */}
              <div className="pl-[290px]">
                <p className="font-[family-name:var(--font-inter)] text-[16px] font-[400] leading-[1.6] text-white/45">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
