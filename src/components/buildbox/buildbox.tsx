import React from "react";

interface BuildItem {
  title: React.ReactNode;
  description: string;
  type: "workflow" | "approval" | "integration" | "reporting";
}

interface BuildBoxProps {
  className?: string;
  headingText?: string;
  headingHighlight?: string;
  description?: React.ReactNode;
  items?: BuildItem[];
}

const defaultBuildItems: BuildItem[] = [
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
    type: "approval",
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
    type: "reporting",
  },
];

export function BuildBox({
  className = "",
  headingText = "What ",
  headingHighlight = "We Build",
  description = (
    <>
      Four structured phases that move from
      <br />
      understanding to a decision-ready roadmap in
      <br />
      four weeks.
    </>
  ),
  items = defaultBuildItems,
}: BuildBoxProps) {
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
          <span className="text-[#858382]">{headingText}</span>
          <span className="text-[#FF884C]">{headingHighlight}</span>
        </h2>

        <p className="pt-[2px] font-[family-name:var(--font-inter)] text-[15px] font-[400] leading-[1.65] text-white/35">
          {description}
        </p>
      </div>

      {/* Cards */}
      <div className="mt-[47px] grid w-full grid-cols-4 gap-[25px]">
        {items.map((item, index) => (
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

              {item.type === "approval" && <ApprovalVisual />}

              {item.type === "integration" && <IntegrationVisual />}

              {item.type === "reporting" && <ReportingVisual />}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================================================= */
/* Workflow Automation */
/* ================================================= */

function WorkflowVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#050505]">
      {/* Background glow */}
      <div className="absolute -left-[80px] bottom-[-100px] h-[300px] w-[300px] rounded-full bg-white/[0.025] blur-[30px]" />

      {/* Workflow Lines */}
      <div className="absolute left-[45px] top-[42px] h-[125px] w-[1px] bg-gradient-to-b from-transparent via-white/25 to-white/5" />

      <div className="absolute left-[45px] top-[42px] h-[1px] w-[115px] bg-gradient-to-r from-white/30 to-transparent" />

      <div className="absolute left-[45px] top-[104px] h-[1px] w-[155px] rotate-[18deg] bg-gradient-to-r from-white/20 to-transparent" />

      <div className="absolute left-[45px] top-[166px] h-[1px] w-[105px] bg-gradient-to-r from-white/20 to-transparent" />

      {/* Nodes */}
      <div className="absolute left-[39px] top-[35px] h-[13px] w-[13px] rounded-full border border-white/30 bg-[#111111]" />

      <div className="absolute left-[39px] top-[97px] h-[13px] w-[13px] rounded-full border border-white/30 bg-[#111111]" />

      <div className="absolute left-[39px] top-[159px] h-[13px] w-[13px] rounded-full border border-white/30 bg-[#111111]" />

      {/* Main automation node */}
      <div className="absolute right-[40px] top-[70px] flex h-[75px] w-[75px] items-center justify-center rounded-[14px] border border-white/15 bg-[#171717] shadow-[0_0_40px_rgba(255,255,255,0.05)]">
        <div className="h-[30px] w-[30px] rotate-45 rounded-[5px] bg-[#FF884C]" />
      </div>

      {/* Connection */}
      <div className="absolute left-[51px] top-[103px] h-[1px] w-[155px] bg-gradient-to-r from-white/20 via-white/20 to-[#FF884C]/50" />
    </div>
  );
}

/* ================================================= */
/* Approval Workflow */
/* ================================================= */

function ApprovalVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#070707]">
      {/* Large background circle */}
      <div className="absolute -bottom-[135px] left-[20px] h-[330px] w-[330px] rounded-full border border-white/[0.05]" />

      <div className="absolute -bottom-[95px] left-[60px] h-[250px] w-[250px] rounded-full border border-white/[0.04]" />

      {/* Approval cards */}
      <div className="absolute left-[38px] top-[40px] w-[215px] rounded-[8px] border border-white/10 bg-[#151515] px-[13px] py-[12px] shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-between">
          <span className="font-[family-name:var(--font-inter)] text-[9px] text-white/50">
            Purchase Request
          </span>

          <span className="h-[6px] w-[6px] rounded-full bg-[#FF884C]" />
        </div>

        <div className="mt-[12px] h-[5px] w-[130px] rounded-full bg-white/10" />

        <div className="mt-[7px] h-[5px] w-[90px] rounded-full bg-white/5" />
      </div>

      {/* Arrow */}
      <div className="absolute left-[140px] top-[100px] h-[55px] w-[1px] bg-gradient-to-b from-[#FF884C]/60 to-transparent" />

      {/* Approved card */}
      <div className="absolute bottom-[22px] right-[25px] w-[170px] rounded-[8px] border border-white/10 bg-[#181818] px-[12px] py-[11px]">
        <div className="flex items-center gap-[7px]">
          <div className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#FF884C] text-[10px] text-black">
            ✓
          </div>

          <span className="font-[family-name:var(--font-inter)] text-[9px] text-white/70">
            Approved
          </span>
        </div>

        <div className="mt-[10px] h-[4px] w-[100px] rounded-full bg-white/10" />
      </div>
    </div>
  );
}

/* ================================================= */
/* Integration */
/* ================================================= */

function IntegrationVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#080401]">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 299 215"
        preserveAspectRatio="none"
      >
        <path
          d="M-20 55 C45 55 65 130 125 130 C185 130 200 30 320 60"
          fill="none"
          stroke="#FF4B21"
          strokeWidth="1"
          opacity="0.8"
        />

        <path
          d="M-20 105 C55 70 105 75 150 125 C200 180 245 110 320 105"
          fill="none"
          stroke="#FF3D20"
          strokeWidth="1"
          opacity="0.7"
        />

        <path
          d="M15 215 C70 145 95 135 150 125 C205 115 245 145 300 200"
          fill="none"
          stroke="#FF5428"
          strokeWidth="1"
          opacity="0.6"
        />

        <path
          d="M150 125 L150 215"
          fill="none"
          stroke="#FF4B21"
          strokeWidth="1"
          opacity="0.65"
        />
      </svg>

      {/* Nodes */}
      <div className="absolute left-[48px] top-[84px] h-[7px] w-[7px] rounded-full bg-[#FF5930] shadow-[0_0_10px_#FF5930]" />

      <div className="absolute left-1/2 top-[58%] h-[8px] w-[8px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF5930] shadow-[0_0_12px_#FF5930]" />

      <div className="absolute right-[48px] top-[85px] h-[7px] w-[7px] rounded-full bg-[#FF5930] shadow-[0_0_10px_#FF5930]" />

      {/* Central shape */}
      <div className="absolute bottom-[-42px] left-1/2 h-[105px] w-[105px] -translate-x-1/2 rotate-[30deg] bg-gradient-to-br from-[#ff5540] via-[#ff3212] to-[#8d1309] shadow-[0_0_50px_rgba(255,60,20,0.2)]" />
    </div>
  );
}

/* ================================================= */
/* Reporting & Notifications */
/* ================================================= */

function ReportingVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#030308]">
      {/* Glow */}
      <div className="absolute bottom-[-70px] left-[65px] h-[180px] w-[180px] rounded-full bg-purple-600/20 blur-[40px]" />

      <div className="absolute bottom-[-60px] right-[15px] h-[140px] w-[140px] rounded-full bg-blue-500/15 blur-[40px]" />

      {/* Dashboard */}
      <div className="absolute left-[32px] top-[45px] h-[180px] w-[235px] rounded-[14px] border border-white/10 bg-[#111111] p-[14px] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-between">
          <div>
            <div className="h-[6px] w-[75px] rounded-full bg-white/30" />
            <div className="mt-[5px] h-[4px] w-[50px] rounded-full bg-white/10" />
          </div>

          <div className="h-[20px] w-[20px] rounded-full bg-white/10" />
        </div>

        {/* Graph */}
        <div className="mt-[20px] flex h-[70px] items-end gap-[8px]">
          <div className="h-[25px] w-[18px] rounded-t-[3px] bg-white/10" />
          <div className="h-[40px] w-[18px] rounded-t-[3px] bg-white/15" />
          <div className="h-[32px] w-[18px] rounded-t-[3px] bg-white/10" />
          <div className="h-[58px] w-[18px] rounded-t-[3px] bg-[#FF884C]" />
          <div className="h-[47px] w-[18px] rounded-t-[3px] bg-white/15" />
          <div className="h-[65px] w-[18px] rounded-t-[3px] bg-white/20" />
        </div>

        {/* Notification */}
        <div className="absolute bottom-[12px] right-[12px] flex items-center gap-[5px] rounded-[4px] bg-[#FF884C] px-[7px] py-[4px]">
          <span className="text-[7px] font-[600] text-black">ALERT</span>
        </div>
      </div>
    </div>
  );
}
