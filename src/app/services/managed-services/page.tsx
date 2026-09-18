import { GobirdFooter } from "@/components/layout/GobirdFooter";
import { GobirdHeader } from "@/components/layout/GobirdHeader";
import { ServicesHero } from "@/components/services-hero/services-hero";
import { NumberList } from "@/components/number-list/number-list";
import { BuildBox } from "@/components/buildbox/buildbox";
import { ModelBox } from "@/components/modelbox/modelbox";
import { SubFooter } from "@/components/subfooter/subfooter";

const operationalDiscoverySteps = [
  {
    number: "01",
    title: "Custom applications we built  ",
    description:
      " We maintain, debug, and enhance the systems we've created for you.  ",
  },
  {
    number: "02",
    title: "System integrations",
    description:
      "We monitor data flows and ensure connectivity stays intact as platforms update. ",
  },
  {
    number: "03",
    title: "Workflow automation ",
    description:
      "We refine and optimize workflows based on real-world performance and changing needs. ",
  },
  {
    number: "04",
    title: "Business intelligence systems ",
    description:
      "We update dashboards, add new reports, and ensure data accuracy and timeliness.  ",
  },
];

export default function ManagedServicesPage() {
  return (
    <div className="min-h-screen bg-[#010C1B] text-white">
      <GobirdHeader />

      <main />

      <ServicesHero
        className="w-full min-h-[70vh] bg-[#000000]"
        eyebrow="Managed Services & Application Support"
        headingLines={["Protection for Your ", "Technology", "Investment"]}
        backgroundImage="/sdbg1.png"
        description={
          <>
            We keep your systems healthy, performant, and aligned with your{" "}
            <br />
            evolving needs through managed support and optimization.
          </>
        }
        descriptionPosition="left"
      />

      <NumberList
        className="w-full bg-[#000000]"
        showGlow={false}
        heading={<>What </>}
        headingHighlight=" We Support"
        items={operationalDiscoverySteps}
      />

      <BuildBox
        headingText="What's "
        headingHighlight="Included"
        description={<> </>}
        items={[
          {
            title: <>Monitoring and alerting</>,
            description:
              "We watch your systems 24/7 and respond to issues before they impact your team.",
            type: "workflow",
          },
          {
            title: <>Performance optimization </>,
            description:
              "We analyze usage patterns and optimize for speed, reliability, and cost. ",
            type: "approval",
          },
          {
            title: <>Bug fixes and enhancements</>,
            description:
              "As you identify needed changes, we prioritize and implement them. ",
            type: "integration",
          },
          {
            title: <>Platform updates and User support</>,
            description:
              "When your integrated systems update, we ensure your customizations and integrations remain compatible. ",
            type: "reporting",
          },
        ]}
      />

      {/* Why Managed Services Matter */}
      <section className="w-full overflow-hidden bg-[#000000] px-[45px] py-[100px]">
        {/* Heading */}
        <h2 className="font-[family-name:var(--font-sora)] text-[52px] font-[400] leading-[1.15] tracking-[-0.04em]">
          <span className="text-[#858382]">Why Managed Services </span>
          <span className="text-[#FF884C]">Matter</span>
        </h2>

        {/* Cards */}
        <div className="mt-[52px] grid w-full grid-cols-3 gap-[16px]">
          {/* Card 01 */}
          <div className="relative h-[542px] w-[414px] overflow-hidden rounded-[20px] bg-[#F8F8F8]">
            {/* Decorative Graphic */}
            <div className="pointer-events-none absolute left-[-15px] top-[-8px] h-[245px] w-[285px]">
              <svg
                viewBox="0 0 285 245"
                className="h-full w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-20 125 L38 22 L153 20 L216 125 L153 229 L38 229 Z"
                  stroke="#8EAEF4"
                  strokeWidth="4"
                />
                <path
                  d="M38 22 L95 125 L38 229"
                  stroke="#A8BDF4"
                  strokeWidth="4"
                />
                <path d="M95 125 L216 125" stroke="#8EAEF4" strokeWidth="4" />
                <path d="M95 125 L153 20" stroke="#8EAEF4" strokeWidth="4" />
                <path d="M95 125 L153 229" stroke="#8EAEF4" strokeWidth="4" />
                <path d="M-5 74 L38 229" stroke="#A8BDF4" strokeWidth="4" />
                <path d="M153 20 L285 20" stroke="#A8BDF4" strokeWidth="4" />
              </svg>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-[25px] left-[17px] right-[17px]">
              <h3 className="max-w-[280px] font-[family-name:var(--font-sora)] text-[22px] font-[600] leading-[1.25] tracking-[-0.02em] text-[#111111]">
                Technology breaks when
                <br />
                unattended.
              </h3>

              <p className="mt-[13px]  font-[family-name:var(--font-inter)] text-[13px] font-[400] leading-[1.55] text-[#111111]">
                Without monitoring and maintenance, downtime increases,
                performance degrades, and data integrity suffers.
              </p>
            </div>
          </div>

          {/* Card 02 */}
          <div className="relative h-[542px] w-[414px] overflow-hidden rounded-[20px] bg-[#FF884C]">
            {/* Heading Content */}
            <div className="relative z-20 px-[17px] pt-[28px]">
              <h3 className=" font-[family-name:var(--font-sora)] text-[22px] font-[600] leading-[1.25] tracking-[-0.02em] text-white">
                Managed services protect
                <br />
                that investment.
              </h3>

              <p className="mt-[16px]  font-[family-name:var(--font-inter)] text-[13px] font-[400] leading-[1.55] text-white">
                You get ongoing optimization, issue resolution, and enhancements
                all bundled into one relationship.
              </p>
            </div>

            {/* Orange Card Decorative Graphic */}
            <div className="pointer-events-none absolute bottom-[-55px] right-[-30px] h-[290px] w-[290px] opacity-[0.24]">
              <svg
                viewBox="0 0 290 290"
                className="h-full w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 175 L72 70 L180 30 L270 85 L244 220 L125 265 Z"
                  stroke="#FFFFFF"
                  strokeWidth="5"
                />
                <path d="M25 175 L125 265" stroke="#FFFFFF" strokeWidth="5" />
                <path d="M72 70 L125 265" stroke="#FFFFFF" strokeWidth="5" />
                <path d="M72 70 L270 85" stroke="#FFFFFF" strokeWidth="5" />
                <path d="M180 30 L125 265" stroke="#FFFFFF" strokeWidth="5" />
                <path d="M180 30 L244 220" stroke="#FFFFFF" strokeWidth="5" />
                <path d="M25 175 L180 30" stroke="#FFFFFF" strokeWidth="5" />
                <path d="M72 70 L244 220" stroke="#FFFFFF" strokeWidth="5" />
                <path d="M125 265 L270 85" stroke="#FFFFFF" strokeWidth="5" />
              </svg>
            </div>
          </div>

          {/* Card 03 */}
          <div className="relative h-[542px] w-[414px] overflow-hidden rounded-[20px] bg-[#F8F8F8]">
            {/* Orbital Graphic */}
            <div className="pointer-events-none absolute right-[-35px] top-[0px] h-[290px] w-[330px]">
              <svg
                viewBox="0 0 330 290"
                className="h-full w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="165"
                  cy="125"
                  rx="132"
                  ry="58"
                  transform="rotate(0 165 125)"
                  stroke="#6794F5"
                  strokeWidth="3"
                />

                <ellipse
                  cx="165"
                  cy="125"
                  rx="132"
                  ry="58"
                  transform="rotate(60 165 125)"
                  stroke="#6794F5"
                  strokeWidth="3"
                />

                <ellipse
                  cx="165"
                  cy="125"
                  rx="132"
                  ry="58"
                  transform="rotate(120 165 125)"
                  stroke="#6794F5"
                  strokeWidth="3"
                />

                <ellipse
                  cx="165"
                  cy="125"
                  rx="132"
                  ry="58"
                  transform="rotate(180 165 125)"
                  stroke="#6794F5"
                  strokeWidth="3"
                  opacity="0.22"
                />

                <ellipse
                  cx="165"
                  cy="125"
                  rx="132"
                  ry="58"
                  transform="rotate(240 165 125)"
                  stroke="#6794F5"
                  strokeWidth="3"
                  opacity="0.22"
                />
              </svg>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-[25px] left-[17px] right-[17px]">
              <h3 className="font-[family-name:var(--font-sora)] text-[22px] font-[600] leading-[1.25] tracking-[-0.02em] text-[#111111]">
                We scale with you.
              </h3>

              <p className="mt-[13px]  font-[family-name:var(--font-inter)] text-[13px] font-[400] leading-[1.55] text-[#111111]">
                As your operation grows, we ensure your systems scale too,
                without surprises or emergency projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ModelBox
        heading={
          <>
            <span className="text-[#858382]">Service </span>
            <span className="text-[#FF884C]">Models</span>
          </>
        }
        items={[
          {
            number: "",
            label: "",
            title: "Retainer-based support ",
            description: (
              <>
                Predictable monthly cost for ongoing monitoring, maintenance,
                <br />
                and support.
              </>
            ),
            theme: "dark",
          },
          {
            number: "",
            label: "",
            title: "Priority response",
            description: (
              <>
                Faster turnaround for critical issues, with <br /> guaranteed
                response times.
              </>
            ),

            theme: "isOrange",
          },
          {
            number: "",
            label: "",
            title: "Capacity allocation",
            description: (
              <>
                A reserved portion of our team&apos;s time <br /> available for
                your needs, whether fixes or <br /> enhancements.
              </>
            ),
            theme: "isOrange",
          },
          {
            number: "",
            label: "",
            title: "Custom models",
            description: (
              <>
                We build support packages that match your specific <br />{" "}
                operational needs and risk profile.{" "}
              </>
            ),
            theme: "dark",
          },
        ]}
      />

      <SubFooter
        className="w-full"
        titleLine1="Let's discuss a support model that keeps "
        titleLine2="your systems"
        titleHighlight=" healthy and growing."
        backgroundImage="/custom-software-subbg.png"
        description={
          <>
            Start your discovery today. We deliver a decision-ready roadmap in
            four weeks — no vendor bias, no <br /> guesswork.
          </>
        }
        buttonText="Build Your BI Strategy"
      />

      <GobirdFooter />
    </div>
  );
}
