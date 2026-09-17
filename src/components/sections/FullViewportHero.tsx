import type { ReactNode } from "react";

interface FullViewportHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  primaryAction?: {
    label: string;
    href?: string;
  };
  secondaryAction?: {
    label: string;
    href?: string;
  };
  children?: ReactNode;
  className?: string;
}

export function FullViewportHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  children,
  className = "",
}: FullViewportHeroProps) {
  return (
    <section
      className={[
        "relative w-full min-h-[100vh] overflow-hidden bg-[#010C1B] text-white",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto flex min-h-[100vh] max-w-[1600px] items-center px-[25px] py-16">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-[720px]">
            {eyebrow ? (
              <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#FF884C]">
                {eyebrow}
              </p>
            ) : null}

            <h1 className="font-[family-name:var(--font-sora)] text-[clamp(2.8rem,5vw,5.2rem)] font-normal leading-[0.96] tracking-[-0.05em] text-white">
              {title}
            </h1>

            {description ? (
              <p className="mt-6 max-w-[640px] text-[16px] leading-[1.7] text-white/80">
                {description}
              </p>
            ) : null}

            {(primaryAction || secondaryAction) && (
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {primaryAction ? (
                  <a
                    href={primaryAction.href ?? "#"}
                    className="inline-flex items-center justify-center bg-[#FF884C] px-6 py-3 text-[15px] font-medium text-[#0B0B0B] transition hover:bg-[#ff9d6e]"
                  >
                    {primaryAction.label}
                  </a>
                ) : null}

                {secondaryAction ? (
                  <a
                    href={secondaryAction.href ?? "#"}
                    className="inline-flex items-center justify-center border border-white/20 px-6 py-3 text-[15px] font-medium text-white transition hover:border-white/50 hover:bg-white/5"
                  >
                    {secondaryAction.label}
                  </a>
                ) : null}
              </div>
            )}
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-8 rounded-full bg-[#1f5bff]/20 blur-[120px]" />
            <div className="relative w-full max-w-[620px] rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">
              {children ?? (
                <div className="rounded-[22px] border border-white/10 bg-[#071827] p-6">
                  <div className="mb-5 flex items-center justify-between text-[12px] uppercase tracking-[0.18em] text-white/60">
                    <span>Operational snapshot</span>
                    <span>LIVE</span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      ["Process gaps", "24%"],
                      ["Automation wins", "31%"],
                      ["Cycle time", "-18 days"],
                      ["Revenue lift", "+12.4%"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-white/10 bg-[#0d1d2d] p-4"
                      >
                        <p className="text-[12px] uppercase tracking-[0.14em] text-white/55">
                          {label}
                        </p>
                        <p className="mt-3 text-[28px] font-semibold text-white">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
