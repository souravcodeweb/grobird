import React from "react";

interface NumuiProps {
  className?: string;
}

const approachItems = [
  {
    number: "01",
    title: "We map your current workflow in detail.",
    description:
      "We identify where manual work lives, quantify its cost, and understand the constraints.",
    side: "right",
  },
  {
    number: "02",
    title: "We design the automated workflow.",
    description:
      "We ensure it reduces work without adding complexity or governance overhead.",
    side: "left",
  },
  {
    number: "03",
    title: "We build and test thoroughly.",
    description:
      "We deploy in phases, validate results with real data, and refine based on feedback.",
    side: "right",
  },
  {
    number: "04",
    title: "We train and monitor.",
    description:
      "Forecast accuracy improves through data integration and visibility.",
    side: "left",
  },
];

export function Numui({ className = "" }: NumuiProps) {
  return (
    <section
      className={[
        "relative w-full overflow-hidden bg-[#3484EE] px-[45px] py-[55px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Background Abstract Shape */}
      <div className="pointer-events-none absolute right-[5%] top-[17%] h-[620px]  opacity-[0.14]">
        <svg
          viewBox="0 0 380 620"
          className="h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M155 15C220 45 275 90 255 145C238 191 150 205 133 255C112 315 185 350 235 390C289 433 313 484 277 535C247 577 189 598 130 610"
            stroke="#005BD6"
            strokeWidth="55"
            strokeLinecap="round"
          />

          <path
            d="M181 35C243 82 277 118 248 168C224 211 157 224 145 275C130 330 194 363 243 405C286 442 300 486 274 524"
            stroke="#005BD6"
            strokeWidth="28"
            strokeLinecap="round"
          />

          <path
            d="M105 45C160 88 197 120 182 163C165 210 105 226 95 274C84 326 134 355 176 385"
            stroke="#1670DD"
            strokeWidth="14"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full">
        {/* Heading */}
        <h2 className="font-[family-name:var(--font-sora)] text-[56px] font-[400] leading-[1.2] tracking-[-0.03em]">
          <span className="text-white/60">Our </span>
          <span className="text-white">Approach</span>
        </h2>

        {/* Steps */}
        <div className="relative mt-[43px]">
          {/* Right Background Panel */}
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[52%] bg-white/[0.08]" />

          {approachItems.map((item, index) => {
            const isRight = item.side === "right";

            return (
              <div
                key={item.number}
                className="relative grid h-[300px] grid-cols-2 border-t border-white/[0.10]"
              >
                {/* Number / Left Side */}
                <div
                  className={[
                    "relative flex items-start px-[30px] pt-[27px]",
                    isRight ? "" : "items-center pt-0",
                  ].join(" ")}
                >
                  {isRight ? (
                    <span className="font-[family-name:var(--font-sora)] text-[100px] font-[700] leading-none tracking-[-0.06em] text-white">
                      {item.number}
                    </span>
                  ) : (
                    <div className="max-w-[450px]">
                      <h3 className="font-[family-name:var(--font-sora)] text-[28px] font-[600] leading-[1.25] text-white">
                        {item.title}
                      </h3>

                      <p className="mt-[13px] font-[family-name:var(--font-inter)] text-[16px] font-[400] leading-[1.55] text-white/55">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Right Side */}
                <div
                  className={[
                    "relative flex px-[30px]",
                    isRight ? "items-start pt-[48px]" : "items-center pt-0",
                  ].join(" ")}
                >
                  {isRight ? (
                    <div className="max-w-[450px]">
                      <h3 className="font-[family-name:var(--font-sora)] text-[28px] font-[600] leading-[1.25] text-white">
                        {item.title}
                      </h3>

                      <p className="mt-[13px] font-[family-name:var(--font-inter)] text-[16px] font-[400] leading-[1.55] text-white/55">
                        {item.description}
                      </p>
                    </div>
                  ) : (
                    <span className="font-[family-name:var(--font-sora)] text-[100px] font-[700] leading-none tracking-[-0.06em] text-white">
                      {item.number}
                    </span>
                  )}
                </div>
              </div>
            );
          })}

          {/* Bottom Border */}
          <div className="h-[1px] w-full bg-white/[0.10]" />
        </div>
      </div>
    </section>
  );
}
