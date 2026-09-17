import type { ReactNode } from "react";

interface ServicesHeroProps {
  children?: ReactNode;
  className?: string;
}

export function ServicesHero({ children, className = "" }: ServicesHeroProps) {
  return (
    <section
      className={[
        "relative h-[80vh] w-full overflow-hidden bg-[#010C1B] text-white",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        backgroundImage: 'url("/servicesod.png")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
      aria-label="Services hero"
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, rgba(1, 12, 27, 0.9) 0%, rgba(1, 12, 27, 0.7) 26%, rgba(1, 12, 27, 0.38) 56%, rgba(1, 12, 27, 0.12) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-[60px] py-[60px]">
        <div className="flex w-full items-center justify-between gap-12">
          {/* Left Content */}
          <div className="max-w-[700px] text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-[10px] border border-[#FF884C40] bg-transparent px-3 py-2 font-[family-name:var(--font-sora)] text-[11px] font-[600] uppercase tracking-[0.22em] text-[#FF884C]">
              <span className="h-2 w-2 rounded-full bg-[#FF884C]" />
              OPERATIONAL DISCOVERY · DIAGNOSE
            </div>

            <h1 className="font-[family-name:var(--font-sora)] text-[57px] font-[400] leading-[68px] tracking-[-0.06em]">
              <span className="block text-[#827E7E]">Know Your</span>

              <span className="block text-[#FFFFFF]">Bottlenecks</span>

              <span className="block text-[#FF884C]">Before You Build</span>
            </h1>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                className="inline-flex h-[55px] w-[288px] cursor-pointer items-center justify-center rounded-[10px] bg-[#FF884C] font-[family-name:var(--font-sora)] text-[15px] font-[600] text-white shadow-[0_10px_25px_rgba(255,136,76,0.35)] transition hover:bg-[#ff9a67]"
              >
                Request an Operational Audit
              </button>

              <button
                type="button"
                className="inline-flex h-[55px] w-[220px] cursor-pointer items-center justify-center rounded-[10px] border border-[#FFFFFF1A] bg-transparent font-[family-name:var(--font-sora)] text-[15px] font-[600] text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Learn the process
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="max-w-[420px] text-left">
            <p className="font-[family-name:var(--font-inter)] text-[16px] font-[400] leading-[1.7] text-white/80">
              Most technology projects fail because they solve the wrong
              problem. A company implements new software, but the underlying
              process remains broken. Data stays fragmented. Manual work
              persists. The tool sits unused. An operational audit changes that
              equation.
            </p>
          </div>
        </div>
      </div>

      {children}
    </section>
  );
}
