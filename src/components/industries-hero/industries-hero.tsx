import React from "react";

interface IndustriesHeroMetric {
  value: string;
  line1: string;
  line2: string;
}

interface IndustriesHeroProps {
  className?: string;

  eyebrow?: string;

  headingLine1?: React.ReactNode;
  headingLine2?: React.ReactNode;
  headingHighlight?: React.ReactNode;

  description?: React.ReactNode;

  backgroundImage?: string;

  metrics?: IndustriesHeroMetric[];
}

const defaultMetrics: IndustriesHeroMetric[] = [
  {
    value: "70%",
    line1: "Reduction in",
    line2: "onboarding time",
  },
  {
    value: "99.9%",
    line1: "Reconciliation",
    line2: "accuracy",
  },
  {
    value: "0×",
    line1: "Headcount added to",
    line2: "scale 5×",
  },
];

export function IndustriesHero({
  className = "",

  eyebrow,

  headingLine1 = "Operations built",
  headingLine2 = "for fintech",
  headingHighlight = "scale.",

  description = (
    <>
      Fintech operates at speed with zero room for error.
      <br />
      Your processing is real-time. Your compliance is non-
      <br />
      negotiable. Your customer experience drives retention.
      <br />
      Generic software doesn&apos;t cut it.
    </>
  ),

  backgroundImage = "/inhero.png",

  metrics = defaultMetrics,
}: IndustriesHeroProps) {
  return (
    <section
      className={[
        "relative flex min-h-[100vh] w-full overflow-hidden bg-[#000000]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* ================================================= */}
      {/* LEFT SIDE — 50% WIDTH */}
      {/* ================================================= */}

      <div className="relative flex w-1/2 min-w-0 items-center px-[88px]">
        {/* Full width content wrapper */}

        <div className="w-full">
          {/* Optional eyebrow */}

          {eyebrow && (
            <p className="mb-[22px] font-[family-name:var(--font-sora)] text-[10px] font-[500] uppercase tracking-[0.2em] text-[#FF884C]">
              {eyebrow}
            </p>
          )}

          {/* Heading */}

          <h1 className="w-full whitespace-nowrap font-[family-name:var(--font-sora)] text-[78px] font-[400] leading-[1.03] tracking-[-0.055em]">
            <span className="block text-[#5D5B5D]">{headingLine1}</span>

            <span className="block text-white">{headingLine2}</span>

            <span className="block text-[#FF884C]">{headingHighlight}</span>
          </h1>

          {/* Description */}

          <p className="mt-[34px] w-full whitespace-nowrap font-[family-name:var(--font-inter)] text-[18px] font-[400] leading-[1.7] text-white/60">
            {description}
          </p>
        </div>
      </div>

      {/* ================================================= */}
      {/* RIGHT SIDE — 50% WIDTH */}
      {/* ================================================= */}

      <div className="relative w-1/2 min-w-0 overflow-hidden">
        {/* Full width + full height image */}

        <div
          className="absolute inset-0 w-full overflow-hidden rounded-tl-[5px]"
          style={{
            backgroundImage: `url("${backgroundImage}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* ================================================= */}
          {/* TEXT METRICS */}
          {/* ================================================= */}

          <div className="absolute right-[80px] top-[310px] z-20 w-[155px] border border-white/[0.16]">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className={[
                  "flex h-[118px] flex-col justify-center px-[35px]",
                  index !== metrics.length - 1
                    ? "border-b border-white/[0.12]"
                    : "",
                ].join(" ")}
              >
                {/* Number */}

                <span className="font-[family-name:var(--font-sora)] text-[31px] font-[600] leading-none text-white">
                  {metric.value}
                </span>

                {/* Description */}

                <span className="mt-[8px] font-[family-name:var(--font-inter)] text-[10px] font-[400] leading-[1.35] text-white/75">
                  {metric.line1}
                  <br />
                  {metric.line2}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
