import type { ReactNode } from "react";

interface InNumberUiItem {
  number: string;
  label: string;
  title: ReactNode;
  description: ReactNode;
  outcomeLabel?: string;
  outcome: ReactNode;
}

interface InNumberUiProps {
  className?: string;
  heading?: ReactNode;
  items?: InNumberUiItem[];
  backgroundImage?: string;
}

const defaultItems: InNumberUiItem[] = [
  {
    number: "01",
    label: "COMPLIANCE",
    title: (
      <>
        Automated <span className="text-white">compliance</span>
        <br />
        workflows
      </>
    ),
    description:
      "Verification, screening, and approval flows that flag risks and accelerate clean customers — no human in the loop for standard cases.",
    outcome: "80% reduction in manual review",
  },
  {
    number: "02",
    label: "RECONCILIATION",
    title: (
      <>
        Transaction <span className="text-white">reconciliation</span>
        <br />
        systems
      </>
    ),
    description:
      "Real-time matching across payment partners and internal records. Exceptions surface immediately with full context, not days later.",
    outcome: "99.9% match accuracy",
  },
  {
    number: "03",
    label: "INTEGRATION",
    title: (
      <>
        Data integration <span className="text-white">platforms</span>
      </>
    ),
    description:
      "One source of truth across your core system, payment processors, and reporting. No more manual syncing, no more version conflicts.",
    outcome: "Eliminates ~12 hrs/week of manual work",
  },
  {
    number: "04",
    label: "AUTOMATION",
    title: (
      <>
        Customer-facing <span className="text-white">automation</span>
      </>
    ),
    description:
      "Self-service KYC, dispute resolution, and account management that reduces your support load while improving customer experience.",
    outcome: "40% support ticket deflection",
  },
];

export function InNumberUi({
  className = "",
  heading,
  items: providedItems,
  backgroundImage,
}: InNumberUiProps) {
  const items = providedItems ?? defaultItems;

  return (
    <section
      className={[
        "relative w-full overflow-hidden bg-[#000000] px-[80px] py-[95px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* ================= CENTER BACKGROUND IMAGE ================= */}
      {backgroundImage && (
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[650px] w-[900px] -translate-x-1/2 -translate-y-1/2 bg-contain bg-center bg-no-repeat opacity-100"
          style={{
            backgroundImage: `url("${backgroundImage}")`,
          }}
        />
      )}

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto w-full">
        {/* Heading */}
        <h2 className="font-[family-name:var(--font-sora)] text-[48px] font-[400] leading-[1.2] tracking-[-0.04em]">
          {heading ?? (
            <>
              <span className="text-[#5D5B5D]">What we </span>
              <span className="text-white">build for you.</span>
            </>
          )}
        </h2>

        {/* GRID */}
        <div className="relative mt-[42px] w-full">
          {/* Center vertical divider */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 z-20 w-px -translate-x-1/2 bg-white/[0.10]" />

          {/* ROW 01 */}
          <div className="grid h-[321px] grid-cols-2 border-t border-white/[0.10]">
            {/* LEFT NUMBER BOX */}
            <div className="relative px-[45px] pt-[42px]">
              <span className="font-[family-name:var(--font-sora)] text-[100px] font-[600] leading-[0.9] tracking-[-0.075em] text-white">
                01
              </span>

              <span className="absolute right-[45px] top-[58px] font-[family-name:var(--font-sora)] text-[10px] font-[500] uppercase tracking-[0.22em] text-[#FF884C]">
                {items[0].label}
              </span>

              <div className="absolute bottom-[58px] left-[45px]">
                <span className="font-[family-name:var(--font-sora)] text-[10px] font-[500] uppercase tracking-[0.20em] text-[#FF884C]">
                  {items[0].outcomeLabel ?? "OUTCOME"}
                </span>

                <p className="mt-[8px] font-[family-name:var(--font-inter)] text-[16px] font-[400] text-white">
                  {items[0].outcome}
                </p>
              </div>
            </div>

            {/* RIGHT CONTENT BOX */}
            <div className="relative px-[45px] pt-[62px]">
              <h3 className="font-[family-name:var(--font-sora)] text-[28px] font-[500] leading-[1.15] tracking-[-0.04em] text-white/25">
                {items[0].title}
              </h3>

              <p className="mt-[22px] max-w-[350px] font-[family-name:var(--font-inter)] text-[16px] font-[400] leading-[1.65] text-white/45">
                {items[0].description}
              </p>
            </div>
          </div>

          {/* ROW 02 */}
          <div className="grid h-[321px] grid-cols-2 border-t border-white/[0.10]">
            {/* LEFT CONTENT BOX */}
            <div className="relative px-[45px] pt-[62px]">
              <h3 className="font-[family-name:var(--font-sora)] text-[28px] font-[500] leading-[1.15] tracking-[-0.04em] text-white/25">
                {items[1].title}
              </h3>

              <p className="mt-[22px] max-w-[350px] font-[family-name:var(--font-inter)] text-[16px] font-[400] leading-[1.65] text-white/45">
                {items[1].description}
              </p>
            </div>

            {/* RIGHT NUMBER BOX */}
            <div className="relative px-[45px] pt-[42px]">
              <span className="font-[family-name:var(--font-sora)] text-[100px] font-[600] leading-[0.9] tracking-[-0.075em] text-white">
                02
              </span>

              <span className="absolute right-[45px] top-[58px] font-[family-name:var(--font-sora)] text-[10px] font-[500] uppercase tracking-[0.22em] text-[#FF884C]">
                {items[1].label}
              </span>

              <div className="absolute bottom-[58px] left-[45px]">
                <span className="font-[family-name:var(--font-sora)] text-[10px] font-[500] uppercase tracking-[0.20em] text-[#FF884C]">
                  {items[1].outcomeLabel ?? "OUTCOME"}
                </span>

                <p className="mt-[8px] font-[family-name:var(--font-inter)] text-[16px] font-[400] text-white">
                  {items[1].outcome}
                </p>
              </div>
            </div>
          </div>

          {/* ROW 03 */}
          <div className="grid h-[321px] grid-cols-2 border-t border-white/[0.10]">
            {/* LEFT NUMBER BOX */}
            <div className="relative px-[45px] pt-[42px]">
              <span className="font-[family-name:var(--font-sora)] text-[100px] font-[600] leading-[0.9] tracking-[-0.075em] text-white">
                03
              </span>

              <span className="absolute right-[45px] top-[58px] font-[family-name:var(--font-sora)] text-[10px] font-[500] uppercase tracking-[0.22em] text-[#FF884C]">
                {items[2].label}
              </span>

              <div className="absolute bottom-[58px] left-[45px]">
                <span className="font-[family-name:var(--font-sora)] text-[10px] font-[500] uppercase tracking-[0.20em] text-[#FF884C]">
                  {items[2].outcomeLabel ?? "OUTCOME"}
                </span>

                <p className="mt-[8px] font-[family-name:var(--font-inter)] text-[16px] font-[400] text-white">
                  {items[2].outcome}
                </p>
              </div>
            </div>

            {/* RIGHT CONTENT BOX */}
            <div className="relative px-[45px] pt-[62px]">
              <h3 className="font-[family-name:var(--font-sora)] text-[28px] font-[500] leading-[1.15] tracking-[-0.04em] text-white/25">
                {items[2].title}
              </h3>

              <p className="mt-[22px] max-w-[350px] font-[family-name:var(--font-inter)] text-[16px] font-[400] leading-[1.65] text-white/45">
                {items[2].description}
              </p>
            </div>
          </div>

          {/* ROW 04 */}
          <div className="grid h-[321px] grid-cols-2 border-y border-white/[0.10]">
            {/* LEFT CONTENT BOX */}
            <div className="relative px-[45px] pt-[62px]">
              <h3 className="font-[family-name:var(--font-sora)] text-[28px] font-[500] leading-[1.15] tracking-[-0.04em] text-white/25">
                {items[3].title}
              </h3>

              <p className="mt-[22px] max-w-[350px] font-[family-name:var(--font-inter)] text-[16px] font-[400] leading-[1.65] text-white/45">
                {items[3].description}
              </p>
            </div>

            {/* RIGHT NUMBER BOX */}
            <div className="relative px-[45px] pt-[42px]">
              <span className="font-[family-name:var(--font-sora)] text-[100px] font-[600] leading-[0.9] tracking-[-0.075em] text-white">
                04
              </span>

              <span className="absolute right-[45px] top-[58px] font-[family-name:var(--font-sora)] text-[10px] font-[500] uppercase tracking-[0.22em] text-[#FF884C]">
                {items[3].label}
              </span>

              <div className="absolute bottom-[58px] left-[45px]">
                <span className="font-[family-name:var(--font-sora)] text-[10px] font-[500] uppercase tracking-[0.20em] text-[#FF884C]">
                  {items[3].outcomeLabel ?? "OUTCOME"}
                </span>

                <p className="mt-[8px] font-[family-name:var(--font-inter)] text-[16px] font-[400] text-white">
                  {items[3].outcome}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
