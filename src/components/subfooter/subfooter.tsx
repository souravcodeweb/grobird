import React from "react";

interface SubFooterProps {
  className?: string;
  titleLine1?: string;
  titleLine2?: string;
  titleHighlight?: string;
  description?: React.ReactNode;
  backgroundImage?: string;
  buttonText?: string;
  showRgbGlow?: boolean;
  fullBackgroundImage?: boolean;
  backgroundImageSide?: "left" | "right";
  stretchBackgroundImage?: boolean;
  backgroundImageAtBottom?: boolean;
}

export function SubFooter({
  className = "",
  titleLine1 = "Ready to understand where",
  titleLine2 = "your operational ",
  titleHighlight = " friction lives?",
  description = (
    <>
      Start your discovery today. We deliver a decision-ready roadmap <br />
      in four weeks — no vendor bias, no guesswork.
    </>
  ),
  backgroundImage = "/subbg1.png",
  buttonText = "Request an Operational Audit",
  showRgbGlow = true,
  fullBackgroundImage = false,
  backgroundImageSide = "right",
  stretchBackgroundImage = false,
  backgroundImageAtBottom = false,
}: SubFooterProps) {
  return (
    <section
      className={[
        "relative flex min-h-[520px] w-full items-center justify-center overflow-hidden",
        fullBackgroundImage ? "bg-transparent" : "bg-[#000000]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* ============================================ */}
      {/* BACKGROUND IMAGE */}
      {/* ============================================ */}

      <div
        className={`pointer-events-none absolute ${
          fullBackgroundImage
            ? "inset-0 h-full w-full"
            : `${backgroundImageSide === "left" ? "left-0" : "right-0"} ${
                backgroundImageAtBottom
                  ? "top-[80px] h-[calc(100%-80px)]"
                  : "-top-[80px] h-[calc(100%+80px)]"
              } w-[55%]`
        } operational-subfooter-image`}
        style={{
          backgroundImage: `url("${backgroundImage}")`,
          backgroundSize: stretchBackgroundImage ? "100% 100%" : "cover",
          backgroundPosition: fullBackgroundImage
            ? "center -48px"
            : "center top",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* ============================================ */}
      {/* DARK GRADIENT OVER IMAGE */}
      {/* ============================================ */}

      {!fullBackgroundImage && (
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(90deg, #000000 0%, #000000 28%, rgba(0,0,0,0.96) 40%, rgba(0,0,0,0.78) 52%, rgba(0,0,0,0.30) 70%, rgba(0,0,0,0) 100%)",
          }}
        />
      )}

      {/* ============================================ */}
      {/* BOTTOM RGB / BLUE GLOW */}
      {/* ============================================ */}

      {showRgbGlow && (
        <div
          className="pointer-events-none absolute bottom-[-210px] left-1/2 z-[2] h-[480px] w-[1200px] -translate-x-1/2 rounded-full blur-[90px]"
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                rgba(0, 102, 255, 0.60) 0%,
                rgba(0, 102, 255, 0.38) 25%,
                rgba(0, 102, 255, 0.18) 45%,
                rgba(0, 102, 255, 0.06) 62%,
                rgba(0, 102, 255, 0) 78%
              )
            `,
          }}
        />
      )}

      {/* ============================================ */}
      {/* SOFT RGB LIGHT RISING FROM BOTTOM */}
      {/* ============================================ */}

      {showRgbGlow && (
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 z-[2] h-[220px]"
          style={{
            background: `
              linear-gradient(
                to top,
                rgba(0, 102, 255, 0.20) 0%,
                rgba(0, 102, 255, 0.10) 30%,
                rgba(0, 102, 255, 0.03) 65%,
                rgba(0, 102, 255, 0) 100%
              )
            `,
          }}
        />
      )}

      {/* ============================================ */}
      {/* CONTENT */}
      {/* ============================================ */}

      <div className="relative z-10 flex w-full flex-col items-center justify-center text-center">
        {/* Heading */}

        <h2 className="font-[family-name:var(--font-sora)] text-[45px] font-[400] leading-[1.15] tracking-[-0.035em]">
          <span className="text-[#858382]">{titleLine1}</span>

          <br />

          <span className="text-white">{titleLine2}</span>

          <span className="text-[#FF884C]">{titleHighlight}</span>
        </h2>

        {/* Description */}

        <p className="relative z-10 mt-[30px] font-[family-name:var(--font-inter)] text-[16px] font-[400] leading-[1.6] text-white">
          {description}
        </p>

        {/* Button */}

        <button
          type="button"
          className="relative z-10 mt-[35px] h-[55px] w-[318px] cursor-pointer bg-[#FF884C] font-[family-name:var(--font-sora)] text-[15px] font-[400] text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#ff9a67]"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}
