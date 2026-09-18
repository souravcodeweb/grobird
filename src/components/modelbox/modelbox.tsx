import React from "react";

interface ModelItem {
  number: string;
  label: string;
  title: string;
  description: React.ReactNode;
  theme: "dark" | "blue" | "orange" | "isOrange";
  backgroundColor?: string;
}

interface ModelBoxProps {
  className?: string;
  heading?: React.ReactNode;
  items?: ModelItem[];
}

const defaultItems: ModelItem[] = [
  {
    number: "01",
    label: "STRATEGY FIRST",
    title: "Interview your leadership",
    description:
      "We interview your leadership to understand what they need to see and what decisions those metrics drive.",
    theme: "dark",
  },
  {
    number: "02",
    label: "PROCESS FIRST",
    title: "We audit your data",
    description:
      "We audit your data sources to identify what's reliable, what's not, and what transformation is needed.",
    theme: "blue",
  },
  {
    number: "03",
    label: "THE BRAND LOOK",
    title: "We design dashboards",
    description:
      "We design dashboards around workflows, not charts. We show you the data you act on, in the order you need it.",
    theme: "blue",
  },
  {
    number: "04",
    label: "LONG-TERM SUCCESS",
    title: "We iterate based on usage",
    description:
      "As you learn to use the dashboards, we refine them and add new views.",
    theme: "dark",
  },
];

export function ModelBox({
  className = "",
  heading = (
    <>
      <span className="text-[#858382]">How </span>
      <span className="text-[#FF884C]">We Deliver</span>
    </>
  ),
  items = defaultItems,
}: ModelBoxProps) {
  return (
    <section
      className={[
        "w-full overflow-hidden bg-[#000000] px-[40px] py-[100px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Heading */}
      <h2 className="font-[family-name:var(--font-sora)] text-[52px] font-[400] leading-[1.15] tracking-[-0.04em]">
        {heading}
      </h2>

      {/* Cards */}
      <div className="mt-[88px] grid w-full grid-cols-2 gap-1.5">
        {items.map((item) => {
          const isBlue = item.theme === "blue";
          const isOrange = item.theme === "orange" || item.theme === "isOrange";

          return (
            <div
              key={item.number || item.title}
              className={[
                "relative h-[279px] overflow-hidden border border-white/[0.08]",
                item.backgroundColor
                  ? ""
                  : isBlue
                  ? "bg-[#5489F2]"
                  : isOrange
                  ? "bg-[#FF884C]"
                  : "bg-[#0B0B0B]",
              ].join(" ")}
              style={
                item.backgroundColor
                  ? { backgroundColor: item.backgroundColor }
                  : undefined
              }
            >
              {/* Bottom Accent */}
              <div
                className={[
                  "absolute bottom-0 left-0 right-0 h-[0.5px]",
                  isBlue ? "" : "bg-[#FF884C]",
                ].join(" ")}
              />

              {/* Content */}
              <div className="relative z-10 px-[48px] pt-[47px]">
                {/* Label */}
                <div
                  className={[
                    "font-[family-name:var(--font-sora)] text-[10px] font-[500] uppercase tracking-[0.22em]",
                    isBlue || isOrange ? "text-white/55" : "text-[#FF884C]",
                  ].join(" ")}
                >
                  {item.label}
                </div>

                {/* Title */}
                <h3 className="mt-[17px] font-[family-name:var(--font-sora)] text-[26px] font-[600] leading-[1.2] tracking-[-0.025em] text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className={[
                    "mt-[14px] font-[family-name:var(--font-inter)] text-[15px] font-[400] leading-[1.55]",
                    isBlue ? "text-white/75" : "text-white/40",
                  ].join(" ")}
                >
                  {item.description}
                </p>
              </div>

              {/* Large Number */}
              <div
                className={[
                  "absolute bottom-[7px] right-[25px] font-[family-name:var(--font-sora)] text-[100px] font-[700] leading-none tracking-[-0.08em]",
                  isBlue ? "text-white/[0.18]" : "text-white/[0.07]",
                ].join(" ")}
              >
                {item.number}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
