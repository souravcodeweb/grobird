import type { ReactNode } from "react";

export type NumberListItem = {
  number: string;
  title: string;
  description: string;
};

interface NumberListProps {
  items: NumberListItem[];
  heading?: ReactNode;
  headingHighlight?: string;
  description?: ReactNode;
  className?: string;
  showGlow?: boolean;
}

export function NumberList({
  items,
  heading = "How it works",
  headingHighlight,
  description,
  className = "",
  showGlow = true,
}: NumberListProps) {
  return (
    <section
      className={[
        "relative w-full overflow-hidden bg-[#000000] px-[50px] py-[10px] text-white",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {showGlow ? (
        <div
          className="pointer-events-none absolute inset-0 z-0"
          aria-hidden="true"
          style={{
            background: `
            radial-gradient(
              ellipse 55% 50% at 10% 82%,
              rgba(82, 92, 255, 0.78) 0%,
              rgba(63, 72, 210, 0.55) 18%,
              rgba(39, 43, 125, 0.32) 34%,
              rgba(20, 24, 70, 0.16) 48%,
              rgba(0, 0, 0, 0) 70%
            ),
            radial-gradient(
              ellipse 45% 40% at 62% 38%,
              rgba(70, 48, 180, 0.22) 0%,
              rgba(35, 25, 100, 0.12) 35%,
              rgba(0, 0, 0, 0) 70%
            ),
            radial-gradient(
              ellipse 35% 35% at 28% 65%,
              rgba(67, 90, 255, 0.18) 0%,
              rgba(0, 0, 0, 0) 70%
            )
          `,
          }}
        />
      ) : null}

      <div className="relative z-10 mx-auto w-full">
        <h2 className="font-[family-name:var(--font-sora)] text-[52px] font-[400] leading-[1.08] tracking-[-0.06em]">
          {typeof heading === "string" &&
          headingHighlight &&
          heading.endsWith(headingHighlight) ? (
            <>
              {heading.slice(0, -headingHighlight.length)}
              <span className="text-[#FF884C]">{headingHighlight}</span>
            </>
          ) : headingHighlight ? (
            <>
              {heading}{" "}
              <span className="text-[#FF884C]">{headingHighlight}</span>
            </>
          ) : (
            heading
          )}
        </h2>

        {description ? (
          <p className="mt-5 max-w-[700px] font-[family-name:var(--font-inter)] text-[16px] font-[400] leading-[1.75] text-white/70">
            {description}
          </p>
        ) : null}

        <div className="mt-[70px] grid w-full grid-cols-1 gap-x-[45px] lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="w-full">
            {items.map((item) => (
              <div
                key={item.number}
                className="grid min-h-[110px] w-full grid-cols-[56px_1fr] items-center border-t border-[#E4E4E45E]"
              >
                <span className="font-[family-name:var(--font-sora)] text-[22px] font-[400] text-white/60">
                  {item.number}.
                </span>
                <h3 className="font-[family-name:var(--font-sora)] text-[32px] font-[400] leading-[1.3] tracking-[-0.04em] text-white">
                  {item.title}
                </h3>
              </div>
            ))}
            <div className="w-full border-t border-[#E4E4E45E]" />
          </div>

          <div className="hidden lg:block">
            {items.map((item) => (
              <div
                key={item.number}
                className="flex min-h-[110px] items-center"
              >
                <p className="font-[family-name:var(--font-geist)] text-[14px] font-[400] leading-[1.55] text-[#737373]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-2 lg:hidden">
            {items.map((item) => (
              <div
                key={item.number}
                className="border-t border-[#E4E4E45E] py-6"
              >
                <p className="font-[family-name:var(--font-geist)] text-[14px] font-[400] leading-[1.55] text-[#737373]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
