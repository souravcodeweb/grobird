"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

const navItems = ["Industries", "Partners", "About Us", "Blogs"];

const serviceItems = [
  {
    title: "Operational Discovery",
    description: "Identify bottlenecks and map your business processes.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5 stroke-current stroke-[1.8]"
      >
        <path d="M8 7.5V6.5M16 7.5V6.5M8 17.5V16.5M16 17.5V16.5M5.5 12.5H4.5M19.5 12.5H18.5M7.5 8.5h9M7.5 15.5h9M8.5 7.5h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2Z" />
      </svg>
    ),
  },
  {
    title: "Custom Software",
    description: "Purpose-built applications designed to scale with you.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-[22px] w-[22px] stroke-current stroke-[1.8]"
      >
        <path d="M9 7.5 7 9.5l2 2M15 7.5l2 2-2 2M13 6l-2 12" />
      </svg>
    ),
  },
  {
    title: "Workflow Automation",
    description: "Streamline operations and eliminate repetitive tasks.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-[22px] w-[22px] stroke-current stroke-[1.8]"
      >
        <path d="M7 8.5a4.5 4.5 0 1 1 9 0M7 15.5a4.5 4.5 0 1 1 9 0M6.5 9.5h11M6.5 14.5h11" />
      </svg>
    ),
  },
  {
    title: "System Integration",
    description: "Unify your tech stack for seamless data flow.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-[22px] w-[22px] stroke-current stroke-[1.8]"
      >
        <path d="M8.5 7h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Zm-1.5-2.5h10M10 15v2.5M14 15v2.5" />
      </svg>
    ),
  },
  {
    title: "Business Intelligence",
    description: "Transform raw data into clear, actionable insights.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-[22px] w-[22px] stroke-current stroke-[1.8]"
      >
        <path d="M7 18V9m5 9V5m5 13v-7M5.5 18.5h13" />
      </svg>
    ),
  },
  {
    title: "Managed Services",
    description: "Reliable maintenance for your infrastructure.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-[22px] w-[22px] stroke-current stroke-[1.8]"
      >
        <path d="M12 4.5v6.5M12 17.5v2M8.5 7.5 12 4l3.5 3.5M15.5 16.5 12 20l-3.5-3.5" />
      </svg>
    ),
  },
];

export default function Home() {
  const closeTimeout = useRef<number | null>(null);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const clearCloseTimer = () => {
    if (closeTimeout.current) {
      window.clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  };

  const handleOpen = () => {
    clearCloseTimer();
    setIsServicesOpen(true);
  };

  const handleClose = () => {
    clearCloseTimer();
    closeTimeout.current = window.setTimeout(() => {
      setIsServicesOpen(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-[#f3f3f1] text-black">
      <header className="sticky top-0 z-50 w-full bg-[#f3f3f1]">
        <div className="mx-auto flex h-[71px] max-w-[1600px] items-center justify-between gap-4 px-[25px] py-0">
          <div className="flex min-w-0 flex-1 items-center justify-start">
            <Image
              src="/logo.png"
              alt="Gobird logo"
              width={277}
              height={233}
              priority
              className="h-[30px] w-auto max-w-[120px] object-contain"
            />
          </div>

          <nav className="hidden flex-1 items-center justify-center gap-8 text-[16px] font-medium text-black md:flex">
            <div
              className="relative"
              onMouseEnter={handleOpen}
              onMouseLeave={handleClose}
              onFocus={handleOpen}
              onBlur={handleClose}
            >
              <button
                type="button"
                className="inline-flex cursor-pointer items-center gap-1 whitespace-nowrap align-middle transition hover:text-black/70"
                aria-expanded={isServicesOpen}
              >
                <span className="leading-none">Services</span>
                <IoIosArrowUp className="inline-block h-4 w-4 rotate-180 text-current" />
              </button>

              <div
                className={`absolute left-0 top-[calc(100%+10px)] w-[360px] origin-top rounded-t-none rounded-b-[20px] border border-[#eee8e4] bg-[#f5f4f2] p-3 shadow-[0_16px_30px_rgba(16,24,40,0.08)] transition-all duration-500 ease-out ${
                  isServicesOpen
                    ? "pointer-events-auto scale-100 opacity-100"
                    : "pointer-events-none scale-95 opacity-0"
                }`}
              >
                <div className="space-y-1">
                  {serviceItems.map((item) => (
                    <a
                      key={item.title}
                      href={
                        item.title === "Operational Discovery"
                          ? "/services/operational-discovery"
                          : "#"
                      }
                      className="flex cursor-pointer items-start gap-3 rounded-none px-2 py-2 transition hover:bg-white/40"
                    >
                      <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#F9F8FF] text-[#f0732c]">
                        {item.icon}
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-[16px] font-semibold leading-[1.3] tracking-[-0.02em] text-[#000000]">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-[14px] leading-[1.4] text-[#6F6C90]">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="inline-flex items-center gap-1 whitespace-nowrap align-middle transition hover:text-black/70"
              >
                <span className="leading-none">{item}</span>
              </a>
            ))}
          </nav>

          <div className="flex flex-1 items-center justify-end">
            <button className="h-[48px] min-w-[130px] cursor-pointer rounded-none border-0 bg-black px-4 text-[16px] font-medium text-white shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#1a1a1a] hover:shadow-[0_8px_18px_rgba(0,0,0,0.18)] active:translate-y-0">
              Contact us
            </button>
          </div>
        </div>
      </header>

      <main className="w-full bg-[#010C1B]">
        <section className="relative h-[calc(100vh-71px)] w-full border-b border-[#3B3B3B]">
          <div className="mx-auto flex h-[95%] max-w-[1600px]">
            <div className="flex w-1/2 items-center bg-[#010C1B] px-[25px]">
              <div className="flex flex-col items-start">
                <h1 className="font-[family-name:var(--font-sora)] text-[65.6px] font-normal leading-[1.05] tracking-[-0.04em] text-white">
                  <span className="block text-[#827E7E]">Operational</span>
                  <span className="block text-[#827E7E]">
                    Bottlenecks Don&apos;t Get
                  </span>
                  <span className="block text-[#FF884C]">
                    Better on Their Own
                  </span>
                </h1>
                <p className="mt-8 max-w-[650px] text-[15.1px] leading-[1.6] text-[#FFFFFF]">
                  <span className="block">
                    Most growing B2B companies reach a point where their people
                    and their processes no
                  </span>
                  <span className="block">
                    longer align. Spreadsheets replace systems. Manual work
                    crowds out strategy. Teams
                  </span>
                  <span className="block">
                    spend more time managing data than
                  </span>
                  <span className="block">
                    running operations. The cost is real: lost time, increased
                    errors, shrinking margins,
                  </span>
                  <span className="block">delayed growth.</span>
                </p>
                <button
                  type="button"
                  className="mt-8 flex h-[58px] w-[199.59px] cursor-pointer items-center justify-center gap-3 rounded-none border-0 bg-[#FFFFFF] text-[15.6px] text-[#000000] shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#FF884C] hover:text-white hover:shadow-[0_8px_18px_rgba(255,136,76,0.28)] active:translate-y-0"
                >
                  Book a demo
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 left-1/2 right-0 h-[95%] overflow-hidden bg-[#010C1B] pr-0">
            <div className="pointer-events-none absolute inset-0 grid grid-cols-6 grid-rows-7">
              {Array.from({ length: 42 }, (_, index) => (
                <div
                  key={index}
                  className={`border-[#242424] ${
                    index % 6 !== 5 ? "border-r" : ""
                  } ${index < 36 ? "border-b" : ""}`}
                />
              ))}
            </div>
            <Image
              src="/herobgr.png"
              alt=""
              width={1152}
              height={1536}
              priority
              className="absolute left-[calc(50%+44px)] top-[calc(50%+30px)] z-10 h-[92%] w-auto -translate-x-1/2 -translate-y-1/2 object-contain"
              style={{
                filter: "brightness(0.72) contrast(1.08) saturate(0.82)",
              }}
            />
          </div>
        </section>

        <section
          className="flex h-[601px] w-full flex-col items-start justify-center overflow-hidden bg-[#010C1B] px-[25px] pt-[72px]"
          aria-label="Blank section"
        >
          <div className="mx-auto grid w-full max-w-[1600px] grid-cols-2 items-start gap-x-[72px]">
            <p className="text-left text-[57px] font-[weight:400] leading-[1.2] tracking-[-0.04em] text-white">
              <span className="block text-[#858382]">Knowing the</span>
              <span className="block">
                <span className="text-[#858382]">problem</span>
                <span className="text-[#FF884C]"> isn&apos;t</span>
              </span>
              <span className="block text-[#FF884C]">the hard part.</span>
            </p>

            <div className="w-full pt-[300px]">
              <p className="w-full text-[32px] leading-[1.35] tracking-[-0.02em] text-[#E9E7E7]">
                <span className="text-[#E9E7E7]">
                  Most teams can already name what&apos;s broken.
                </span>
                <br />
                <span className="text-[#E9E7E7]">
                  The hard part is fixing{" "}
                  <span className="text-[#4B4949]">
                    it without disrupting what
                  </span>
                </span>
                <br />
                <span className="text-[#858382]">
                  already works. That&apos;s the part GroBird handles.
                </span>
              </p>
            </div>
          </div>

          <div className="mt-auto -ml-[25px] h-px w-[calc(100%+50px)] bg-[#3B3B3B]" />
        </section>

        <section
          className="relative flex w-full items-center gap-[60px] overflow-hidden bg-[#010C1B]"
          aria-label="New section"
        >
          <Image
            src="/perimg.png"
            alt=""
            width={388}
            height={537}
            className="h-[537px] w-[387.8px] self-start translate-y-[60px] object-cover"
          />
          <div className="flex self-start translate-y-[90px] flex-col items-start gap-[24px]">
            <Image
              src="/perlogo.png"
              alt=""
              width={229}
              height={77}
              className="h-[77px] w-[229px]"
            />
            <p className="max-w-[520px] text-[32px] leading-[1.35] text-[#E9E7E7]">
              <span className="whitespace-nowrap">
                Building an AI-driven decision intelligence platform required
              </span>{" "}
              <span className="whitespace-nowrap">
                complex engineering. Grobird acted as our true product
              </span>{" "}
              <span className="whitespace-nowrap">
                partners, developing the entire software architecture for
              </span>{" "}
              <span className="whitespace-nowrap">
                PresalesForce.ai from the ground up and delivering a seamless,
              </span>{" "}
              highly scalable product.
            </p>
            <button
              type="button"
              aria-label="Testimonial action"
              className="h-[40px] w-[595.67px] border border-[#3B3B3B] bg-transparent pl-[12px] text-left text-[16px] text-[#E9E7E7]"
            >
              <span className="text-[15.6px] font-[weight:500] text-[#A9A9A9]">
                Vaibhav
              </span>{" "}
              |{" "}
              <span className="text-[15.6px] font-[weight:500] text-[#FFFFFF]">
                Co-founder Presalesforce.ai
              </span>
            </button>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-[#3B3B3B]" />
        </section>

        <section
          className="flex h-auto min-h-[800px] w-full items-start justify-center overflow-hidden bg-[#010C1B] px-[25px] pt-[72px]"
          aria-label="New section"
        >
          <div className="flex flex-col items-center text-center">
            <h2 className="font-[family-name:var(--font-sora)] text-[57.4px] font-[weight:400] leading-[1.2] tracking-[-0.04em]">
              <span className="text-[#858382]">What We</span>{" "}
              <span className="text-[#FF884C]">Do</span>
            </h2>
            <p className="mt-6 translate-y-4 max-w-[900px] text-[16px] font-[weight:400] leading-[1.6] text-[#FFFFFF]">
              <span className="whitespace-nowrap">
                Operating at scale requires systems. But most platforms are
                built for generic companies, not yours.
              </span>{" "}
              <br />
              They&apos;re bloated, hard to use, or disconnected from the tools
              your team already uses.
              <br />
              We specialize in three types of technology delivery:
            </p>
            <div className="mt-12 flex gap-[24px]">
              <div className="group h-[561.55px] w-[413.33px] shrink-0 [perspective:1000px]">
                <div className="relative h-full w-full rounded-[24px] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 flex flex-col justify-end rounded-[24px] bg-[#FF884C] pb-[8px] pl-[15px] [backface-visibility:hidden]">
                    <span className="-translate-y-[25px] text-left text-[22px] font-[weight:600] leading-[1.2] tracking-[-0.03em] text-[#FFFFFF]">
                      Operational Discovery
                    </span>
                  </div>
                  <div className="absolute inset-0 flex flex-col items-start justify-center gap-[72px] overflow-hidden rounded-[24px] border border-[#3B3B3B] bg-[#000000] p-[38px] text-left [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
                    <h3 className="relative max-w-[330px] font-[family-name:var(--font-sora)] text-[22px] font-[weight:600] leading-[1.2] text-[#FFFFFF]">
                      Operational Discovery
                    </h3>
                    <p className="relative max-w-[330px] font-[family-name:var(--font-inter)] text-[20px] font-[weight:400] leading-[1.25] text-[#FFFFFF]">
                      We audit your processes, systems, and data flows to
                      identify where friction lives. Most companies skip this
                      step. We never do.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group h-[561.55px] w-[413.33px] shrink-0 [perspective:1000px]">
                <div className="relative h-full w-full rounded-[24px] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 flex flex-col justify-end rounded-[24px] border border-[#858382] bg-[#010C1B] pb-[8px] pl-[15px] [backface-visibility:hidden]">
                    <span className="-translate-y-[25px] text-left text-[22px] font-[weight:600] leading-[1.2] tracking-[-0.03em] text-[#FFFFFF]">
                      Systems Integration &amp; <br /> Business Intelligence
                    </span>
                  </div>
                  <div className="absolute inset-0 flex flex-col items-start justify-center gap-[72px] overflow-hidden rounded-[24px] bg-[#FF884C] p-[38px] text-left [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[size:48px_48px]" />
                    <h3 className="relative max-w-[330px] font-[family-name:var(--font-sora)] text-[22px] font-[weight:600] leading-[1.2] text-[#FFFFFF]">
                      Systems Integration &amp; Business Intelligence
                    </h3>
                    <p className="relative max-w-[330px] font-[family-name:var(--font-inter)] text-[20px] font-[weight:400] leading-[1.25] text-[#FFFFFF]">
                      Built on your processes, not someone else&apos;s template.
                      Whether it&apos;s connecting disconnected systems,
                      automating manual data flows, or building a tool that
                      doesn&apos;t exist yet, we deliver technology that fits
                      your operation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group h-[561.55px] w-[413.33px] shrink-0 [perspective:1000px]">
                <div className="relative h-full w-full rounded-[24px] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 flex flex-col justify-end rounded-[24px] bg-[#FF884C] pb-[8px] pl-[15px] [backface-visibility:hidden]">
                    <span className="-translate-y-[25px] text-left text-[22px] font-[weight:600] leading-[1.2] tracking-[-0.03em] text-[#FFFFFF]">
                      Custom Software &amp; <br /> Workflow Automation
                    </span>
                  </div>
                  <div className="absolute inset-0 flex flex-col items-start justify-center gap-[72px] overflow-hidden rounded-[24px] border border-[#3B3B3B] bg-[#000000] p-[38px] text-left [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
                    <h3 className="relative max-w-[330px] font-[family-name:var(--font-sora)] text-[22px] font-[weight:600] leading-[1.2] text-[#FFFFFF]">
                      Custom Software &amp; Workflow Automation
                    </h3>
                    <p className="relative max-w-[330px] font-[family-name:var(--font-inter)] text-[20px] font-[weight:400] leading-[1.25] text-[#FFFFFF]">
                      One source of truth. Your data lives in multiple systems,
                      but your team needs one clear picture. We connect
                      what&apos;s fragmented and make it visible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="relative flex h-auto w-full items-center justify-center overflow-hidden bg-[#010C1B] px-[25px] pt-[72px] pb-[72px]"
          aria-label="Why Choose GroBird section"
        >
          <div className="pointer-events-none absolute bottom-0 left-1/2 top-[180px] w-full max-w-[650px] -translate-x-1/2 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:62px_62px]" />
          <div className="pointer-events-none absolute left-1/2 right-1/2 top-[180px] z-[1] h-px w-full max-w-[650px] -translate-x-1/2 bg-[#010C1B]" />
          <div className="pointer-events-none absolute bottom-0 left-[calc(50%-325px)] top-[180px] z-[1] w-px bg-[#010C1B]" />
          <Image
            src="/b.png"
            alt=""
            width={243}
            height={370}
            className="pointer-events-none absolute left-1/2 top-[58%] z-0 h-[370px] w-[243px] -translate-x-1/2 -translate-y-1/2 object-contain opacity-20"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(29%) sepia(12%) saturate(650%) hue-rotate(190deg) brightness(90%) contrast(88%)",
            }}
          />
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-[57.4px] font-[weight:400] leading-[1.2] tracking-[-0.04em] text-[#858382]">
              Why Choose <span className="text-[#FF884C]">GroBird</span>
            </h2>
            <p className="mt-6 max-w-[900px] text-[16px] font-[weight:400] leading-[1.6] text-[#FFFFFF]">
              We think like operators, not vendors. We don&apos;t start with a
              tool. We start with your problem. We <br /> understand that
              technology serves operations, not the reverse.
            </p>
            <div className="mt-12 grid w-full max-w-[1300px] grid-cols-1 gap-y-6 text-left md:grid-cols-3 md:gap-x-[72px]">
              <div className="font-[family-name:var(--font-inter)] p-0 text-[20px] font-[weight:400] leading-[1.45] text-[#FFFFFF]">
                We build for outcomes, not features. Every system we create
                reduces operational cost, increases control, and creates room
                for your business to scale.
              </div>
              <div className="font-[family-name:var(--font-inter)] p-0 text-[20px] font-[weight:400] leading-[1.45] text-[#FFFFFF]">
                We work with the buying committee, not against it. We know your
                CFO cares about ROI, your Head of Operations cares about running
                the department smoothly, and your technical team cares about
                integration and maintainability. We address all three.
              </div>
              <div className="font-[family-name:var(--font-inter)] p-0 text-[20px] font-[weight:400] leading-[1.45] text-[#FFFFFF]">
                We stay invested after launch. Technology is only valuable if it
                keeps working. We offer ongoing support and optimization to
                protect your investment and adapt to growth.
              </div>
            </div>
            <div className="mt-[128px] flex gap-6">
              <div className="flex h-[198px] w-[386.67px] shrink-0 items-end justify-start gap-[12px] bg-[#DFDFDF] pb-[20px] pl-[15px] text-[#000000]">
                <span className="text-[50px] font-[200] leading-none opacity-[85%]">
                  85%
                </span>
                <span className="text-left text-[13px] font-[weight:600] leading-[1.2] text-[#000000]">
                  <span className="whitespace-nowrap">
                    IMPROVEMENT IN <br /> BUSINESS FORECASTING <br /> ACCURACY
                  </span>
                </span>
                <span className="flex h-[37px] w-[38.25px] shrink-0 translate-x-[24px] -translate-y-[16px] items-center justify-center bg-[#FF884C]">
                  <FaArrowRightLong className="text-[16px] text-[#000000]" />
                </span>
              </div>
              <div className="flex h-[198px] w-[386.67px] shrink-0 flex-col justify-between bg-[#DFDFDF] p-[15px] text-[#000000]">
                <p className="text-left text-[13px] font-[weight:600] leading-[1.2]">
                  GROBIRD DIDN&apos;T JUST WRITE CODE;
                  <br />
                  THEY{" "}
                  <span className="text-[#FF884C]">ENGINEERED THE CORE</span>
                  <br />
                  SOFTWARE BEHIND
                  <br />
                  PRESALESFORCE.AI.
                </p>
                <div className="flex items-end justify-between gap-2">
                  <Image
                    src="/perlogob.png"
                    alt="PresalesForce.ai logo"
                    width={100}
                    height={34}
                    className="h-[34px] w-[100px] object-contain object-left"
                  />
                  <div className="flex items-center gap-2 whitespace-nowrap text-[11.6px] font-[weight:400]">
                    <span>SATYA MURTHY</span>
                    <span className="h-[25px] w-px bg-[#000000]/40" />
                    <span>CO-FOUNDER, PSF</span>
                  </div>
                </div>
              </div>
              <div className="flex h-[198px] w-[386.67px] shrink-0 items-end justify-start gap-[12px] bg-[#DFDFDF] pb-[20px] pl-[15px] text-[#000000]">
                <span className="text-[50px] font-[200] leading-none opacity-[85%]">
                  35%
                </span>
                <span className="text-left text-[13px] font-[weight:600] leading-[1.2] text-[#000000]">
                  <span className="whitespace-nowrap">
                    FASTER DECISION- <br /> MAKING SPEED THROUGH <br /> DATA
                    INTEGRATION
                  </span>
                </span>
                <span className="flex h-[37px] w-[38.25px] shrink-0 translate-x-[24px] -translate-y-[16px] items-center justify-center bg-[#FF884C]">
                  <FaArrowRightLong className="text-[16px] text-[#000000]" />
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="flex h-auto w-full flex-col items-center justify-center bg-[#010C1B] px-[5px] py-[72px]"
          aria-label="Insights and Blogs section"
        >
          <h2 className="font-[family-name:var(--font-sora)] text-[57.4px] font-[weight:400] leading-[1.2] tracking-[-0.04em] text-[#858382]">
            Insights &amp; <span className="text-[#FF884C]">Blogs</span>
          </h2>
          <p className="mt-6 max-w-[900px] text-center font-[family-name:var(--font-inter)] text-[16px] font-[weight:400] leading-[1.6] text-[#FFFFFF]">
            We think like operators, not vendors. We don&apos;t start with a
            tool. We <br /> start with your problem. We understand that
            technology serves operations, not the reverse.
          </p>

          <article className="mt-16 grid w-full max-w-[1437.82px] grid-cols-1 overflow-hidden bg-black md:min-h-[409.53px] md:grid-cols-[718.91px_minmax(0,1fr)]">
            {/* LEFT IMAGE SECTION */}
            <div className="relative min-h-[330px] overflow-hidden md:h-[409.53px] md:w-[718.91px]">
              <Image src="/heroimg.png" alt="" fill className="object-cover" />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/35" />

              {/* Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(85,65,20,0.1)_1px,transparent_1px)] bg-[size:18px_18px]" />

              {/* Orange Content Box */}
              <div className="absolute left-1/2 top-1/2 flex h-[246px] w-[548px] max-w-[calc(100%-32px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[#FF884C] px-6 py-8 text-center">
                <h3 className="font-[family-name:var(--font-sora)] text-[36px] font-[400] leading-[1.15] text-[#000000]">
                  Why Hiring An Ops
                  <br />
                  Coordinator Rarely Fixes A
                  <br />
                  Process Problem
                </h3>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex min-h-[330px] flex-col justify-between bg-[#010C1B] px-8 py-10 text-[#FFFFFF] md:min-h-[370px] md:px-8 md:py-11">
              <div>
                <h3 className="max-w-[500px] font-[family-name:var(--font-sora)] text-[31px] font-[400] leading-[1.15]">
                  Why Hiring An Ops Coordinator
                  <br />
                  Rarely Fixes A Process Problem
                </h3>

                <time className="mt-5 block font-[family-name:var(--font-inter)] text-[10px] font-[400] uppercase tracking-[0.04em] text-[#FFFFFF]">
                  August 17, 2026
                </time>
              </div>

              <div className="-mx-8 w-[calc(100%+4rem)] border-t border-[#5A5A5A] px-8 pt-6">
                <button
                  type="button"
                  className="flex w-full items-center justify-between font-[family-name:var(--font-inter)] text-[15.4px] font-[500] text-[#FFFFFF]"
                >
                  <span>Read More</span>
                  <FaArrowRightLong className="text-[14px]" />
                </button>
              </div>
            </div>
          </article>

          <div className="mt-20 grid w-full max-w-[1437.82px] grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-3">
            <article className="min-w-0 text-left text-[#FFFFFF] md:border-r md:border-[#5A5A5A] md:pr-6">
              <div className="relative aspect-[1.67] overflow-hidden bg-[#FF884C] p-[15px]">
                <Image
                  src="/herobgr.png"
                  alt=""
                  fill
                  className="object-contain opacity-30 mix-blend-multiply"
                />
                <div className="absolute left-1/2 top-1/2 flex h-[151px] w-[350px] max-w-[calc(100%-30px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[#000000] px-5 text-center">
                  <h3 className="font-[family-name:var(--font-sora)] text-[19px] font-[weight:300] leading-[1.25] text-[#FFFFFF]">
                    How To Scale Operations
                    <br />
                    Without Adding Headcount
                  </h3>
                </div>
              </div>
              <h3 className="mt-6 font-[family-name:var(--font-sora)] text-[19px] font-[weight:300] leading-[1.25] text-[#FFFFFF]">
                How To Scale Operations Without
                <br />
                Adding Headcount
              </h3>
              <time className="mt-5 block font-[family-name:var(--font-inter)] text-[10px] font-[weight:400] uppercase tracking-[0.04em]">
                August 16, 2026
              </time>
              <div className="mt-6 border-t border-[#5A5A5A] pt-4">
                <button
                  type="button"
                  className="flex w-full items-center justify-between font-[family-name:var(--font-inter)] text-[15.4px] font-[weight:500]"
                >
                  <span>Read More</span>
                  <FaArrowRightLong className="text-[14px]" />
                </button>
              </div>
            </article>

            <article className="min-w-0 text-left text-[#FFFFFF] md:border-r md:border-[#5A5A5A] md:pr-6">
              <div className="relative aspect-[1.67] overflow-hidden bg-[#010C1B] p-[15px]">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:18px_18px]" />
                <div className="absolute left-1/2 top-1/2 flex h-[227px] w-[301px] max-w-[calc(100%-30px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[#FF884C] px-4 text-center">
                  <h3 className="font-[family-name:var(--font-sora)] text-[19px] font-[weight:300] leading-[1.25] text-[#FFFFFF]">
                    The Hidden Cost Of Manual
                    <br />
                    Data Entry (With The Math)
                  </h3>
                </div>
              </div>
              <h3 className="mt-6 font-[family-name:var(--font-sora)] text-[19px] font-[weight:300] leading-[1.25] text-[#FFFFFF]">
                The Hidden Cost Of Manual Data Entry
                <br />
                (With The Math)
              </h3>
              <time className="mt-5 block font-[family-name:var(--font-inter)] text-[10px] font-[weight:400] uppercase tracking-[0.04em]">
                August 13, 2026
              </time>
              <div className="mt-6 border-t border-[#5A5A5A] pt-4">
                <button
                  type="button"
                  className="flex w-full items-center justify-between font-[family-name:var(--font-inter)] text-[15.4px] font-[weight:500]"
                >
                  <span>Read More</span>
                  <FaArrowRightLong className="text-[14px]" />
                </button>
              </div>
            </article>

            <article className="min-w-0 text-left text-[#FFFFFF]">
              <div className="relative aspect-[1.67] overflow-hidden bg-[#2D7FF0] p-[15px]">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[size:18px_18px]" />
                <div className="absolute left-1/2 top-[74%] flex h-[151px] w-[350px] max-w-[calc(100%-30px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[#000000] px-5 text-center">
                  <h3 className="font-[family-name:var(--font-sora)] text-[19px] font-[weight:300] leading-[1.25] text-[#FFFFFF]">
                    5 Signs Your Business Has
                    <br />
                    Outgrown Its Systems
                  </h3>
                </div>
              </div>
              <h3 className="mt-6 font-[family-name:var(--font-sora)] text-[19px] font-[weight:300] leading-[1.25] text-[#FFFFFF]">
                5 Signs Your Business Has Outgrown
                <br />
                Its Systems
              </h3>
              <time className="mt-5 block font-[family-name:var(--font-inter)] text-[10px] font-[weight:400] uppercase tracking-[0.04em]">
                August 5, 2026
              </time>
              <div className="mt-6 border-t border-[#5A5A5A] pt-4">
                <button
                  type="button"
                  className="flex w-full items-center justify-between font-[family-name:var(--font-inter)] text-[15.4px] font-[weight:500]"
                >
                  <span>Read More</span>
                  <FaArrowRightLong className="text-[14px]" />
                </button>
              </div>
            </article>
          </div>
          <button
            type="button"
            className="mt-14 flex h-[58px] w-[199.59px] cursor-pointer items-center justify-center gap-3 bg-[#FFFFFF] font-[family-name:var(--font-inter)] text-[15.6px] font-[weight:500] text-[#000000] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#FF884C] hover:text-[#FFFFFF] hover:shadow-[0_8px_18px_rgba(255,136,76,0.28)] active:translate-y-0"
          >
            <span>Explore More</span>
            <FaArrowRightLong className="text-[14px]" />
          </button>
        </section>

        <section
          className="relative h-[537px] w-full overflow-hidden bg-[#010C1B] py-[72px]"
          aria-label="Video section"
        >
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/subbg.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 z-[1] bg-[#000000]/45"
            aria-hidden="true"
          />
          <h2 className="absolute left-[105px] top-1/2 z-10 -translate-y-1/2 font-[family-name:var(--font-sora)] text-[32px] font-[weight:600] leading-[1.2] text-[#FFFFFF]">
            Ready to understand your <br /> operational roadmap?
          </h2>
          <div className="absolute right-[25px] top-1/2 z-10 flex w-[42%] max-w-[560px] -translate-y-1/2 flex-col items-start">
            <p className="font-[family-name:var(--font-inter)] text-[16px] font-[weight:300] leading-[1.6] text-[#FFFFFF]">
              Start with a diagnostic conversation. We&apos;ll review your{" "}
              <br />
              processes and systems, identify what&apos;s holding you <br />{" "}
              back, and outline a path forward.
            </p>
            <button
              type="button"
              className="mt-8 flex h-[58px] w-[371px] cursor-pointer items-center justify-center gap-3 bg-[#FFFFFF] font-[family-name:var(--font-inter)] text-[16px] font-[weight:500] text-[#000000] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#FF884C] hover:text-[#FFFFFF] hover:shadow-[0_8px_18px_rgba(255,136,76,0.28)] active:translate-y-0"
            >
              Schedule an Operational Discovery Call
              <MdArrowOutward />
            </button>
          </div>
        </section>
      </main>
      <footer
        className="relative h-[670px] w-full border-t border-[#242424] bg-[#010C1B] text-[#FFFFFF]"
        style={{
          backgroundColor: "rgb(1, 12, 27)",
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.82) 0%, rgba(0, 0, 0, 0.44) 34%, rgba(0, 0, 0, 0) 58%), radial-gradient(circle at 28% 92%, rgba(24, 61, 168, 0.72) 0%, rgba(12, 34, 102, 0.42) 24%, rgba(1, 12, 27, 0) 58%), radial-gradient(circle at 45% 2%, rgba(205, 72, 23, 0.5) 0%, rgba(120, 37, 20, 0.2) 13%, rgba(1, 12, 27, 0) 32%), linear-gradient(rgb(0, 0, 4), rgb(1, 12, 27))",
        }}
        aria-label="Footer"
      >
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 border-b border-[#242424] md:grid-cols-[1.2fr_1fr_1fr_1fr_1.2fr]">
          <div className="border-b border-[#242424] px-[25px] py-10 md:border-b-0 md:border-r">
            <Image
              src="/footerlogo.png"
              alt="Gobird logo"
              width={256.75}
              height={67}
              className="h-[67px] w-auto -translate-x-[15px] object-contain object-left"
            />
            <p className="mt-3 font-[family-name:var(--font-sora)] text-[15.1px] font-[weight:400] text-[#FF884C]">
              Growing Beyond Limits.
            </p>
          </div>

          <div className="border-b border-[#242424] px-[25px] py-10 md:border-b-0">
            <p className="font-[family-name:var(--font-inter)] text-[15.5px] font-[weight:400] text-[#FFFFFF80]">
              Services
            </p>
            <nav className="mt-4 flex flex-col gap-3 font-[family-name:var(--font-inter)] text-[13.3px] font-[weight:400] text-[#FFFFFF]">
              <a
                href="#"
                className="cursor-pointer transition-colors duration-200 hover:text-[#FF884C]"
              >
                Operational Discovery
              </a>
              <a
                href="#"
                className="cursor-pointer transition-colors duration-200 hover:text-[#FF884C]"
              >
                Custom Software
              </a>
              <a
                href="#"
                className="cursor-pointer transition-colors duration-200 hover:text-[#FF884C]"
              >
                Workflow Automation
              </a>
              <a
                href="#"
                className="cursor-pointer transition-colors duration-200 hover:text-[#FF884C]"
              >
                System Integration
              </a>
              <a
                href="#"
                className="cursor-pointer transition-colors duration-200 hover:text-[#FF884C]"
              >
                Business Intelligence
              </a>
              <a
                href="#"
                className="cursor-pointer transition-colors duration-200 hover:text-[#FF884C]"
              >
                Managed Services
              </a>
            </nav>
          </div>

          <div className="border-b border-[#242424] px-[25px] py-10 md:border-b-0">
            <p className="font-[family-name:var(--font-inter)] text-[15.5px] font-[weight:400] text-[#FFFFFF80]">
              Industries
            </p>
            <nav className="mt-4 flex flex-col gap-3 font-[family-name:var(--font-inter)] text-[13.3px] font-[weight:400] text-[#FFFFFF]">
              <a
                href="#"
                className="cursor-pointer transition-colors duration-200 hover:text-[#FF884C]"
              >
                Fintech
              </a>
              <a
                href="#"
                className="cursor-pointer transition-colors duration-200 hover:text-[#FF884C]"
              >
                Logistics
              </a>
              <a
                href="#"
                className="cursor-pointer transition-colors duration-200 hover:text-[#FF884C]"
              >
                Healthcare
              </a>
              <a
                href="#"
                className="cursor-pointer transition-colors duration-200 hover:text-[#FF884C]"
              >
                Lending
              </a>
              <a
                href="#"
                className="cursor-pointer transition-colors duration-200 hover:text-[#FF884C]"
              >
                Manufacturing
              </a>
            </nav>
          </div>

          <div className="border-b border-[#242424] px-[25px] py-10 md:border-b-0 md:border-r">
            <p className="font-[family-name:var(--font-inter)] text-[15.5px] font-[weight:400] text-[#FFFFFF80]">
              Resources
            </p>
            <nav className="mt-4 flex flex-col gap-3 font-[family-name:var(--font-inter)] text-[13.3px] font-[weight:400] text-[#FFFFFF]">
              <a
                href="#"
                className="cursor-pointer transition-colors duration-200 hover:text-[#FF884C]"
              >
                Partners
              </a>
              <a
                href="#"
                className="cursor-pointer transition-colors duration-200 hover:text-[#FF884C]"
              >
                Blog
              </a>
              <a
                href="#"
                className="cursor-pointer transition-colors duration-200 hover:text-[#FF884C]"
              >
                About Us
              </a>
              <a
                href="#"
                className="cursor-pointer transition-colors duration-200 hover:text-[#FF884C]"
              >
                Terms &amp; Conditions
              </a>
              <a
                href="#"
                className="cursor-pointer transition-colors duration-200 hover:text-[#FF884C]"
              >
                Privacy Policy
              </a>
            </nav>
          </div>

          <div className="px-[25px] py-10 md:col-span-1">
            <p className="font-[family-name:var(--font-inter)] text-[15.5px] font-[weight:400] text-[#FFFFFF80]">
              Connect With Us
            </p>
            <nav className="mt-4 flex flex-col gap-4 font-[family-name:var(--font-inter)] text-[15.6px] font-[weight:400] text-[#FFFFFF]">
              <a
                href="#"
                className="flex cursor-pointer items-center gap-3 transition-colors duration-200 hover:text-[#FF884C]"
              >
                <FaLinkedin className="h-[22px] w-[22px]" />
                LinkedIn
              </a>
              <a
                href="#"
                className="flex cursor-pointer items-center gap-3 transition-colors duration-200 hover:text-[#FF884C]"
              >
                <FaInstagram className="h-[22px] w-[22px]" />
                Instagram
              </a>
            </nav>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 flex h-[385px] w-full items-end overflow-hidden pt-[60px] opacity-[0.65]">
          <Image
            src="/g.png"
            alt="G"
            width={272.02}
            height={290.23}
            className="block h-[290.23px] w-auto min-w-0 object-contain object-left"
            style={{
              flex: "272.02 1 272.02px",
              filter:
                "brightness(0) saturate(100%) invert(62%) sepia(8%) saturate(360%) hue-rotate(194deg) brightness(91%) contrast(88%)",
            }}
          />
          <Image
            src="/r.png"
            alt="R"
            width={116}
            height={220}
            className="block h-[220px] w-auto min-w-0 object-contain object-left"
            style={{
              flex: "116 1 116px",
              filter:
                "brightness(0) saturate(100%) invert(62%) sepia(8%) saturate(360%) hue-rotate(194deg) brightness(91%) contrast(88%)",
            }}
          />
          <Image
            src="/o.png"
            alt="O"
            width={212}
            height={220}
            className="block h-[220px] w-auto min-w-0 object-contain object-left"
            style={{
              flex: "212 1 212px",
              filter:
                "brightness(0) saturate(100%) invert(62%) sepia(8%) saturate(360%) hue-rotate(194deg) brightness(91%) contrast(88%)",
            }}
          />
          <Image
            src="/b.png"
            alt="B"
            width={243}
            height={370}
            className="block h-[370px] w-auto min-w-0 object-contain object-left"
            style={{
              flex: "243 1 243px",
              filter:
                "brightness(0) saturate(100%) invert(31%) sepia(12%) saturate(700%) hue-rotate(190deg) brightness(89%) contrast(88%)",
            }}
          />
          <Image
            src="/i.png"
            alt="I"
            width={35}
            height={292}
            className="block h-[292px] w-auto min-w-0 object-contain object-left"
            style={{
              flex: "35 1 35px",
              filter:
                "brightness(0) saturate(100%) invert(62%) sepia(8%) saturate(360%) hue-rotate(194deg) brightness(91%) contrast(88%)",
            }}
          />
          <Image
            src="/rr.png"
            alt="R"
            width={114}
            height={218}
            className="translate-x-12 block h-[218px] w-auto min-w-0 object-contain object-left"
            style={{
              flex: "114 1 114px",
              filter:
                "brightness(0) saturate(100%) invert(62%) sepia(8%) saturate(360%) hue-rotate(194deg) brightness(91%) contrast(88%)",
            }}
          />
          <Image
            src="/d.png"
            alt="D"
            width={213}
            height={304}
            className="translate-x-10 block h-[304px] w-auto min-w-0 object-contain object-left"
            style={{
              flex: "213 1 213px",
              filter:
                "brightness(0) saturate(100%) invert(62%) sepia(8%) saturate(360%) hue-rotate(194deg) brightness(91%) contrast(88%)",
            }}
          />
        </div>
      </footer>
    </div>
  );
}
