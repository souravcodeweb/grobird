import Image from "next/image";
import { IoIosArrowUp } from "react-icons/io";

const navItems = ["Services", "Industries", "Partners", "About Us", "Blogs"];

export default function Home() {
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
            {navItems.map((item, index) => (
              <a
                key={item}
                href="#"
                className="inline-flex items-center gap-1 whitespace-nowrap align-middle transition hover:text-black/70"
              >
                <span className="leading-none">{item}</span>
                {index < 2 && (
                  <IoIosArrowUp className="inline-block h-4 w-4 rotate-180 text-current" />
                )}
              </a>
            ))}
          </nav>

          <div className="flex flex-1 items-center justify-end">
            <button className="h-[48px] min-w-[130px] rounded-[10px] border-0 bg-black px-4 text-[16px] font-medium text-white shadow-sm transition hover:bg-black/85">
              Contact us
            </button>
          </div>
        </div>
      </header>

      <main className="h-[100vh] w-full bg-[#000000]" />
    </div>
  );
}
