"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
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
              className="h-[23px] w-auto max-w-[120px] object-contain"
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
                      href="#"
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
        <section className="h-[calc(100vh-71px)] w-full border-b border-[#3B3B3B]">
          <div className="mx-auto flex h-[95%] max-w-[1600px]">
            <div className="flex w-1/2 items-center bg-[#010C1B] px-[25px]">
              <div className="flex flex-col items-start">
                <h1 className="font-[var(--font-sora)] text-[65.6px] font-normal leading-[1.05] tracking-[-0.04em] text-white">
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
            <div className="relative w-1/2 overflow-hidden border-r-2 border-[#00a8e8] bg-[#010C1B]">
              <div className="pointer-events-none absolute inset-0 grid grid-cols-6 grid-rows-7">
                {Array.from({ length: 42 }, (_, index) => (
                  <div
                    key={index}
                    className="border-r border-b border-[#242424]"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="flex h-[601px] w-full flex-col items-start justify-center overflow-hidden bg-[#010C1B] px-[25px] pt-[72px]"
          aria-label="Blank section"
        >
          <div className="mx-auto grid w-full max-w-[1600px] grid-cols-2 items-start gap-x-[72px]">
            <p className="text-left text-[57px] font-[400] leading-[1.2] tracking-[-0.04em] text-white">
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
              <span className="text-[15.6px] font-[500] text-[#A9A9A9]">
                Vaibhav
              </span>{" "}
              |{" "}
              <span className="text-[15.6px] font-[500] text-[#FFFFFF]">
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
            <h2 className="font-[var(--font-sora)] text-[57.4px] font-[400] leading-[1.2] tracking-[-0.04em]">
              <span className="text-[#858382]">What We</span>{" "}
              <span className="text-[#FF884C]">Do</span>
            </h2>
            <p className="mt-6 max-w-[900px] text-[16px] font-[400] leading-[1.6] text-[#FFFFFF]">
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
              <div className="flex h-[561.55px] w-[413.33px] shrink-0 flex-col justify-end rounded-[24px] bg-[#FF884C] pb-[8px] pl-[15px]">
                <span className="-translate-y-[25px] text-left text-[22px] font-[600] leading-[1.2] tracking-[-0.03em] text-[#FFFFFF]">
                  Operational Discovery
                </span>
              </div>
              <div className="flex h-[561.55px] w-[413.33px] shrink-0 flex-col justify-end rounded-[24px] border border-[#858382] bg-[#010C1B] pb-[8px] pl-[15px]">
                <span className="-translate-y-[25px] text-left text-[22px] font-[600] leading-[1.2] tracking-[-0.03em] text-[#FFFFFF]">
                  Systems Integration &amp; <br /> Business Intelligence
                </span>
              </div>
              <div className="flex h-[561.55px] w-[413.33px] shrink-0 flex-col justify-end rounded-[24px] bg-[#FF884C] pb-[8px] pl-[15px]">
                <span className="-translate-y-[25px] text-left text-[22px] font-[600] leading-[1.2] tracking-[-0.03em] text-[#FFFFFF]">
                  Custom Software &amp; <br /> Workflow Automation
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="flex h-auto min-h-[760px] w-full items-center justify-center overflow-hidden bg-[#010C1B] px-[25px] pt-[72px] pb-[72px]"
          aria-label="Why Choose GroBird section"
        >
          <div className="flex flex-col items-center text-center">
            <h2 className="text-[57.4px] font-[400] leading-[1.2] tracking-[-0.04em] text-[#858382]">
              Why Choose <span className="text-[#FF884C]">GroBird</span>
            </h2>
            <p className="mt-6 max-w-[900px] text-[16px] font-[400] leading-[1.6] text-[#FFFFFF]">
              We think like operators, not vendors. We don&apos;t start with a
              tool. We start with your problem. We <br /> understand that
              technology serves operations, not the reverse.
            </p>
            <div className="mt-12 grid w-full max-w-[1300px] grid-cols-1 gap-6 text-left md:grid-cols-3">
              <div className="font-[var(--font-inter)] p-0 text-[20px] font-[400] leading-[1.45] text-[#FFFFFF]">
                We build for outcomes, not features. Every system we create
                reduces operational cost, increases control, and creates room
                for your business to scale.
              </div>
              <div className="font-[var(--font-inter)] p-0 text-[20px] font-[400] leading-[1.45] text-[#FFFFFF]">
                We work with the buying committee, not against it. We know your
                CFO cares about ROI, your Head of Operations cares about running
                the department smoothly, and your technical team cares about
                integration and maintainability. We address all three.
              </div>
              <div className="font-[var(--font-inter)] p-0 text-[20px] font-[400] leading-[1.45] text-[#FFFFFF]">
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
                <span className="text-left text-[13px] font-[600] leading-[1.2] text-[#000000]">
                  <span className="whitespace-nowrap">
                    IMPROVEMENT IN <br /> BUSINESS FORECASTING <br /> ACCURACY
                  </span>
                </span>
                <span className="flex h-[37px] w-[38.25px] shrink-0 translate-x-[24px] -translate-y-[16px] items-center justify-center bg-[#FF884C]">
                  <FaArrowRightLong className="text-[16px] text-[#000000]" />
                </span>
              </div>
              <div className="flex h-[198px] w-[386.67px] shrink-0 flex-col justify-between bg-[#DFDFDF] p-[15px] text-[#000000]">
                <p className="text-left text-[13px] font-[600] leading-[1.2]">
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
                  <div className="flex items-center gap-2 whitespace-nowrap text-[11.6px] font-[400]">
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
                <span className="text-left text-[13px] font-[600] leading-[1.2] text-[#000000]">
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
          <h2 className="font-[var(--font-sora)] text-[57.4px] font-[400] leading-[1.2] tracking-[-0.04em] text-[#858382]">
            Insights &amp; <span className="text-[#FF884C]">Blogs</span>
          </h2>
          <p className="mt-6 max-w-[900px] text-center font-[var(--font-inter)] text-[16px] font-[400] leading-[1.6] text-[#FFFFFF]">
            We think like operators, not vendors. We don&apos;t start with a
            tool. We <br /> start with your problem. We understand that
            technology serves operations, not the reverse.
          </p>
          <article className="mt-16 grid w-full max-w-[1437.82px] grid-cols-1 overflow-hidden bg-black md:min-h-[409.53px] md:grid-cols-[718.91px_minmax(0,1fr)]">
            <div className="relative min-h-[330px] overflow-hidden bg-[#d8c987] md:h-[409.53px] md:w-[718.91px]">
              <Image
                src="/herobgr.png"
                alt=""
                fill
                className="object-contain opacity-35 mix-blend-multiply"
              />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(85,65,20,0.1)_1px,transparent_1px)] bg-[size:18px_18px]" />
              <div className="absolute left-1/2 top-1/2 flex h-[246px] w-[548px] max-w-[calc(100%-32px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[#FF884C] px-6 py-8 text-center">
                <h3 className="font-[var(--font-sora)] text-[36px] font-[400] leading-[1.15] text-[#000000]">
                  Why Hiring An Ops
                  <br />
                  Coordinator Rarely Fixes A
                  <br />
                  Process Problem
                </h3>
              </div>
            </div>
            <div className="flex min-h-[330px] flex-col justify-between bg-[#010C1B] px-8 py-10 text-[#FFFFFF] md:min-h-[370px] md:px-8 md:py-11">
              <div>
                <h3 className="max-w-[500px] font-[var(--font-sora)] text-[31px] font-[400] leading-[1.15]">
                  Why Hiring An Ops Coordinator
                  <br />
                  Rarely Fixes A Process Problem
                </h3>
                <time className="mt-5 block font-[var(--font-inter)] text-[10px] font-[400] uppercase tracking-[0.04em] text-[#FFFFFF]">
                  August 17, 2026
                </time>
              </div>
              <div className="-mx-8 w-[calc(100%+4rem)] border-t border-[#5A5A5A] px-8 pt-6">
                <button
                  type="button"
                  className="flex w-full items-center justify-between font-[var(--font-inter)] text-[15.4px] font-[500] text-[#FFFFFF]"
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
                  <h3 className="font-[var(--font-sora)] text-[19px] font-[300] leading-[1.25] text-[#FFFFFF]">
                    How To Scale Operations
                    <br />
                    Without Adding Headcount
                  </h3>
                </div>
              </div>
              <h3 className="mt-6 font-[var(--font-sora)] text-[19px] font-[300] leading-[1.25] text-[#FFFFFF]">
                How To Scale Operations Without
                <br />
                Adding Headcount
              </h3>
              <time className="mt-5 block font-[var(--font-inter)] text-[10px] font-[400] uppercase tracking-[0.04em]">
                August 16, 2026
              </time>
              <div className="mt-6 border-t border-[#5A5A5A] pt-4">
                <button
                  type="button"
                  className="flex w-full items-center justify-between font-[var(--font-inter)] text-[15.4px] font-[500]"
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
                  <h3 className="font-[var(--font-sora)] text-[19px] font-[300] leading-[1.25] text-[#FFFFFF]">
                    The Hidden Cost Of Manual
                    <br />
                    Data Entry (With The Math)
                  </h3>
                </div>
              </div>
              <h3 className="mt-6 font-[var(--font-sora)] text-[19px] font-[300] leading-[1.25] text-[#FFFFFF]">
                The Hidden Cost Of Manual Data Entry
                <br />
                (With The Math)
              </h3>
              <time className="mt-5 block font-[var(--font-inter)] text-[10px] font-[400] uppercase tracking-[0.04em]">
                August 13, 2026
              </time>
              <div className="mt-6 border-t border-[#5A5A5A] pt-4">
                <button
                  type="button"
                  className="flex w-full items-center justify-between font-[var(--font-inter)] text-[15.4px] font-[500]"
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
                  <h3 className="font-[var(--font-sora)] text-[19px] font-[300] leading-[1.25] text-[#FFFFFF]">
                    5 Signs Your Business Has
                    <br />
                    Outgrown Its Systems
                  </h3>
                </div>
              </div>
              <h3 className="mt-6 font-[var(--font-sora)] text-[19px] font-[300] leading-[1.25] text-[#FFFFFF]">
                5 Signs Your Business Has Outgrown
                <br />
                Its Systems
              </h3>
              <time className="mt-5 block font-[var(--font-inter)] text-[10px] font-[400] uppercase tracking-[0.04em]">
                August 5, 2026
              </time>
              <div className="mt-6 border-t border-[#5A5A5A] pt-4">
                <button
                  type="button"
                  className="flex w-full items-center justify-between font-[var(--font-inter)] text-[15.4px] font-[500]"
                >
                  <span>Read More</span>
                  <FaArrowRightLong className="text-[14px]" />
                </button>
              </div>
            </article>
          </div>
          <button
            type="button"
            className="mt-14 flex h-[58px] w-[199.59px] cursor-pointer items-center justify-center gap-3 bg-[#FFFFFF] font-[var(--font-inter)] text-[15.6px] font-[500] text-[#000000] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#FF884C] hover:text-[#FFFFFF] hover:shadow-[0_8px_18px_rgba(255,136,76,0.28)] active:translate-y-0"
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
          <div className="absolute inset-0 z-[1] bg-[#000000]/45" aria-hidden="true" />
          <h2 className="absolute left-[105px] top-1/2 z-10 -translate-y-1/2 font-[var(--font-sora)] text-[32px] font-[600] leading-[1.2] text-[#FFFFFF]">
            Ready to understand your <br /> operational roadmap?
          </h2>
          <div className="absolute right-[25px] top-1/2 z-10 flex w-[42%] max-w-[560px] -translate-y-1/2 flex-col items-start">
            <p className="font-[var(--font-inter)] text-[16px] font-[300] leading-[1.6] text-[#FFFFFF]">
              Start with a diagnostic conversation. We&apos;ll review your <br />
              processes and systems, identify what&apos;s holding you <br /> back, and
              outline a path forward.
            </p>
            <button
              type="button"
              className="mt-8 flex h-[58px] w-[371px] cursor-pointer items-center justify-center gap-3 bg-[#FFFFFF] font-[var(--font-inter)] text-[16px] font-[500] text-[#000000] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#FF884C] hover:text-[#FFFFFF] hover:shadow-[0_8px_18px_rgba(255,136,76,0.28)] active:translate-y-0"
            >
              Schedule an Operational Discovery Call
              <MdArrowOutward />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
