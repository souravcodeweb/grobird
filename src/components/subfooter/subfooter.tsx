interface SubFooterProps {
  className?: string;
  titleLine1?: string;
  titleLine2?: string;
  titleHighlight?: string;
  description?: React.ReactNode;
  backgroundImage?: string;
  buttonText?: string;
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
}: SubFooterProps) {
  return (
    <section
      className={[
        "relative flex flex-col items-center justify-center overflow-hidden bg-[#000000] py-[150px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="relative z-10 text-center font-[family-name:var(--font-sora)] text-[45px] font-[400]">
        <span className="text-[#858382]">{titleLine1}</span>
        <br />
        <span className="text-white">{titleLine2}</span>
        <span className="text-[#FF884C]">{titleHighlight}</span>
      </h2>

      <p className="relative z-10 mt-[30px] text-center font-[family-name:var(--font-inter)] text-[16px] font-[400]">
        {description}
      </p>

      <button
        type="button"
        className="relative z-10 mt-[35px] h-[55px] w-[318px] cursor-pointer bg-[#FF884C] font-[family-name:var(--font-sora)] text-[15px] font-[400] text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#ff9a67]"
      >
        {buttonText}
      </button>
    </section>
  );
}
