"use client";

import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const footerGroups = [
  {
    title: "Services",
    links: [
      "Operational Discovery",
      "Custom Software",
      "Workflow Automation",
      "System Integration",
      "Business Intelligence",
      "Managed Services",
    ],
  },
  {
    title: "Industries",
    links: ["Fintech", "Logistics", "Healthcare", "Lending", "Manufacturing"],
  },
  {
    title: "Resources",
    links: [
      "Partners",
      "Blog",
      "About Us",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
];

export function GobirdFooter() {
  return (
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

        {footerGroups.map((group) => (
          <div
            key={group.title}
            className="border-b border-[#242424] px-[25px] py-10 md:border-b-0"
          >
            <p className="font-[family-name:var(--font-inter)] text-[15.5px] font-[weight:400] text-[#FFFFFF80]">
              {group.title}
            </p>
            <nav className="mt-4 flex flex-col gap-3 font-[family-name:var(--font-inter)] text-[13.3px] font-[weight:400] text-[#FFFFFF]">
              {group.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="cursor-pointer transition-colors duration-200 hover:text-[#FF884C]"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        ))}

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
  );
}
