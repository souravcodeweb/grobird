"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

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

export function GobirdHeader() {
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
    <header className="sticky top-0 z-50 w-full bg-[#f3f3f1]">
      <div className="mx-auto flex h-[71px] max-w-[1600px] items-center justify-between gap-4 px-[25px] py-0">
        <div className="flex min-w-0 flex-1 items-center justify-start">
          <a href="/" className="cursor-pointer" aria-label="Go to home page">
            <Image
              src="/logo.png"
              alt="Gobird logo"
              width={277}
              height={233}
              priority
              className="h-[30px] w-auto max-w-[120px] object-contain"
            />
          </a>
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
  );
}
