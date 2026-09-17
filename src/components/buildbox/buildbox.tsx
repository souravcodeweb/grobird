import React from "react";

interface BuildBoxProps {
  className?: string;
}

const buildItems = [
  {
    title: (
      <>
        Workflow
        <br />
        Applications
      </>
    ),
    description:
      "Tools that automate manual processes, capture data at the right moment, and route work to the right person.",
    type: "workflow",
  },
  {
    title: (
      <>
        Operational
        <br />
        Dashboards
      </>
    ),
    description:
      "Real-time visibility into your operation: people, performance, bottlenecks, and capacity.",
    type: "dashboard",
  },
  {
    title: "Integration Layers",
    description:
      "Custom data pipelines that connect fragmented systems and keep information in sync.",
    type: "integration",
  },
  {
    title: "Specialized Tools",
    description:
      "Whatever your operation needs, from mobile apps for field teams to procurement systems for supply chain.",
    type: "specialized",
  },
];

export function BuildBox({ className = "" }: BuildBoxProps) {
  return (
    <section
      className={[
        "w-full overflow-hidden bg-[#000000] px-[40px] py-[85px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Heading + Description */}
      <div className="flex w-full items-start justify-between">
        <h2 className="font-[family-name:var(--font-sora)] text-[52px] font-[400] leading-[1.15] tracking-[-0.04em]">
          <span className="text-[#858382]">What </span>
          <span className="text-[#FF884C]">We Build</span>
        </h2>

        <p className=" pt-[2px] font-[family-name:var(--font-inter)] text-[15px] font-[400] leading-[1.65] text-white/35">
          Four structured phases that move from
          <br />
          understanding to a decision-ready roadmap in
          <br />
          four weeks.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-[47px] grid w-full grid-cols-4 gap-[25px]">
        {buildItems.map((item, index) => (
          <div
            key={index}
            className="relative h-[473px] w-[299px] overflow-hidden rounded-[10px] border border-white/[0.14] bg-[#050505]"
          >
            {/* Card Content */}
            <div className="relative z-20 px-[13px] pt-[17px]">
              <h3 className="font-[family-name:var(--font-sora)] text-[24px] font-[400] leading-[1.18] tracking-[-0.02em] text-white">
                {item.title}
              </h3>

              <p className="mt-[8px] max-w-[225px] font-[family-name:var(--font-inter)] text-[16px] font-[400] leading-[1.25] text-white/45">
                {item.description}
              </p>
            </div>

            {/* Visual Area */}
            <div className="absolute bottom-0 left-0 right-0 h-[215px] overflow-hidden">
              {item.type === "workflow" && <WorkflowVisual />}
              {item.type === "dashboard" && <DashboardVisual />}
              {item.type === "integration" && <IntegrationVisual />}
              {item.type === "specialized" && <SpecializedVisual />}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------ */
/* Workflow Applications Visual */
/* ------------------------------------------------ */

function WorkflowVisual() {
  return (
    <div className="relative h-full w-full">
      {/* Subtle radial rings */}
      <div
        className="absolute -bottom-[115px] -left-[35px] h-[330px] w-[330px] rounded-full"
        style={{
          background:
            "repeating-radial-gradient(circle at center, transparent 0px, transparent 45px, rgba(255,255,255,0.045) 46px, transparent 47px)",
        }}
      />

      {/* Small dots */}
      <div className="absolute left-[37px] top-[80px] h-[1px] w-[1px] bg-white/40" />
      <div className="absolute left-[64px] top-[142px] h-[1px] w-[1px] bg-white/30" />
      <div className="absolute right-[31px] top-[42px] h-[1px] w-[1px] bg-white/40" />

      {/* Connecting path */}
      <div className="absolute bottom-[52px] left-[100px] h-[100px] w-[2px] rotate-[42deg] origin-bottom bg-gradient-to-t from-white/5 via-white/30 to-white/50" />

      {/* Cube */}
      <div className="absolute bottom-[20px] right-[25px] h-[92px] w-[92px]">
        <div className="absolute left-0 top-0 h-[65px] w-[65px] rotate-[30deg] skew-y-[-25deg] bg-[#8e8e8e]" />

        <div className="absolute bottom-0 right-0 h-[65px] w-[65px] skew-y-[25deg] bg-[#222222]" />

        <div className="absolute left-[31px] top-[5px] h-[65px] w-[65px] rotate-[30deg] skew-y-[25deg] bg-[#c5c5c5]" />
      </div>
    </div>
  );
}

/* ------------------------------------------------ */
/* Operational Dashboard Visual */
/* ------------------------------------------------ */

function DashboardVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_60%_15%,#4a4a4a_0%,#1b1b1b_35%,#080808_75%)]">
      {/* Dashboard window */}
      <div className="absolute left-[27px] top-[52px] h-[230px] w-[290px] rounded-[25px] bg-[#111111] shadow-[0_0_50px_rgba(255,255,255,0.04)]">
        <div className="px-[48px] pt-[24px]">
          <h4 className="whitespace-nowrap font-[family-name:var(--font-sora)] text-[20px] font-[600] text-white">
            Welcome, Michelle
          </h4>

          <p className="mt-[3px] whitespace-nowrap font-[family-name:var(--font-inter)] text-[9px] text-white/40">
            Measure your advertising ROI and reach
          </p>

          {/* Stat Card */}
          <div className="mt-[20px] h-[85px] w-[205px] rounded-[7px] border border-white/10 bg-[#252525] px-[17px] py-[12px]">
            <div className="flex items-center gap-[5px] text-[9px] text-white/75">
              <span>●</span>
              <span>Pageviews</span>
            </div>

            <div className="mt-[10px] flex items-center gap-[8px]">
              <span className="font-[family-name:var(--font-sora)] text-[21px] font-[500] text-white">
                20K
              </span>

              <span className="rounded-[2px] bg-emerald-500/20 px-[4px] py-[2px] text-[7px] text-emerald-400">
                28.4%↗
              </span>
            </div>
          </div>

          {/* Second Card */}
          <div className="mt-[13px] h-[70px] w-[205px] rounded-[7px] border border-white/10 bg-[#252525]" />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------ */
/* Integration Layers Visual */
/* ------------------------------------------------ */

function IntegrationVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#080401]">
      {/* Orange / red network curves */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 275 215"
        preserveAspectRatio="none"
      >
        <path
          d="M-20 45 C 45 45, 95 145, 140 125 C 185 105, 220 20, 300 55"
          fill="none"
          stroke="#FF4B21"
          strokeWidth="1"
          opacity="0.8"
        />

        <path
          d="M-20 105 C 70 65, 175 65, 300 110"
          fill="none"
          stroke="#FF3D20"
          strokeWidth="1"
          opacity="0.85"
        />

        <path
          d="M20 215 C 60 150, 90 125, 140 125 C 195 125, 235 160, 275 205"
          fill="none"
          stroke="#FF5428"
          strokeWidth="1"
          opacity="0.65"
        />

        <path
          d="M140 125 L140 215"
          fill="none"
          stroke="#FF4B21"
          strokeWidth="1"
          opacity="0.7"
        />
      </svg>

      {/* Center node */}
      <div className="absolute left-1/2 top-[58%] h-[8px] w-[8px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF5930] shadow-[0_0_10px_#FF5930]" />

      {/* Bottom geometric shape */}
      <div className="absolute bottom-[-35px] left-1/2 h-[105px] w-[105px] -translate-x-1/2 rotate-[30deg] bg-gradient-to-br from-[#ff5540] via-[#ff3212] to-[#8d1309] shadow-[0_0_50px_rgba(255,60,20,0.2)]" />
    </div>
  );
}

/* ------------------------------------------------ */
/* Specialized Tools Visual */
/* ------------------------------------------------ */

function SpecializedVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#030308]">
      {/* Purple glow */}
      <div className="absolute bottom-[-55px] left-[80px] h-[150px] w-[150px] rounded-full bg-purple-600/30 blur-[35px]" />

      {/* Blue glow */}
      <div className="absolute bottom-[-40px] right-[25px] h-[110px] w-[110px] rounded-full bg-blue-500/20 blur-[35px]" />

      {/* Wireframe */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 275 215"
        preserveAspectRatio="none"
      >
        <path
          d="M30 130 L95 75 L160 150 L230 70 L275 125"
          fill="none"
          stroke="#8297b1"
          strokeWidth="1"
        />

        <path
          d="M30 130 L95 180 L160 150 L230 70 L275 125"
          fill="none"
          stroke="#8297b1"
          strokeWidth="1"
        />

        <path d="M95 75 L95 180" fill="none" stroke="#8297b1" strokeWidth="1" />

        <path
          d="M160 150 L160 210"
          fill="none"
          stroke="#8297b1"
          strokeWidth="1"
        />
      </svg>

      {/* 3D purple object */}
      <div className="absolute bottom-[-42px] left-[88px] h-[105px] w-[105px] rotate-[30deg]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff91ff] via-[#c62cff] to-[#34104f] shadow-[0_0_45px_rgba(210,50,255,0.3)]" />

        <div className="absolute -right-[25px] top-[25px] h-[75px] w-[25px] skew-y-[-30deg] bg-[#35104e]" />

        <div className="absolute -bottom-[25px] left-[25px] h-[25px] w-[80px] skew-x-[-30deg] bg-[#5d176e]" />
      </div>
    </div>
  );
}
