import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Dot, LucideHeartHandshake } from "lucide-react";
import heroImg from "../../public/images/hero/hero.jpeg";
import ProadvisorImg from "../../public/images/hero/proadvisor.jpg";
import bookkeepingImg from "../../public/images/hero/bookkeeping.webp";
import Container from "./shared/Container";

const keyBenefits = [
  "Personalized, elevated service",
  "Efficient bookkeeping workflows",
  "Accuracy you can trust",
];

export default function Hero() {
  return (
    <section id="home" className="py-10 md:py-20">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-16">
          {/* left side content div */}
          <div className="w-full md:w-3/5">
            <div className="text-primary ring-primary/20 inline-flex items-center gap-1 rounded-full bg-[#FFF8F5] px-3 py-0.5 text-xs font-semibold tracking-wide uppercase ring-1">
              <LucideHeartHandshake className="size-5" /> Specialized in women
              owned business
            </div>

            <h1 className="text-primary font-playfair mt-4 text-5xl font-bold text-balance lg:text-6xl">
              Trusted bookkeeping for 30+ Years
            </h1>

            <p className="mt-8 text-lg leading-relaxed text-balance text-gray-700">
              Hi, I&apos;m Maria. With over three decades of experience, I
              provide accurate, efficient bookkeeping that gives you financial
              clarity and peace of mind.
            </p>

            <ul className="mt-4 space-y-2">
              {keyBenefits.map((benefits, i) => (
                <li
                  key={i}
                  className="flex items-center gap-1 text-sm text-gray-700"
                >
                  <Check className="text-primary size-4" />
                  <span>{benefits}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="#pricing"
                className="bg-primary hover:bg-primary-hover group flex w-full items-center justify-center rounded-full border border-transparent px-8 py-4 text-center font-semibold text-white transition-all duration-300 ease-linear active:scale-95 md:w-fit"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-all duration-200 ease-linear group-hover:translate-x-1" />
              </Link>

              <Link
                href="#testimonials"
                className="border-primary text-primary hover:bg-primary group hidden w-fit items-center justify-center rounded-full border px-8 py-4 font-semibold transition-all duration-300 ease-linear hover:text-white active:scale-95 md:flex"
              >
                Client Stories
              </Link>
            </div>
          </div>

          {/* right side image div */}
          <div className="w-full md:w-2/5">
            <div className="relative">
              {/* <div className="absolute -inset-1 bg-red-500 rounded-2xl transform rotate-2 opacity-50"></div> */}
              <div>
                <Image
                  src={heroImg}
                  alt="specialized in women emopower business"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 flex items-center rounded-xl border border-gray-100 bg-white px-4 shadow-xl">
                <div className="text-gray-700">
                  <div className="text-lg font-bold">30+</div>
                  <div className="text-sm">Years</div>
                  <div className="text-sm">Experience</div>
                </div>

                {/* divider */}
                <div className="ml-3 h-11 w-[1px] bg-gray-300"></div>

                <div className="mt-4 flex items-center">
                  <div className="group relative inline-block">
                    <Image
                      src={ProadvisorImg}
                      alt="cetified Proadvisor"
                      className="size-[65px]"
                    />

                    {/* tooltip */}
                    <div
                      role="tooltip"
                      className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-max max-w-xs -translate-x-1/2 rounded bg-gray-900 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100"
                    >
                      quickbooks Certified Proadvisor
                      {/* arrow */}
                      <div className="absolute top-full left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-gray-900" />
                    </div>
                  </div>

                  <div className="group relative inline-block">
                    <Image
                      src={bookkeepingImg}
                      alt="intuit certified"
                      className="size-12"
                    />

                    {/* tooltip */}
                    <div
                      role="tooltip"
                      className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-max max-w-xs -translate-x-1/2 rounded bg-gray-900 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100"
                    >
                      INTUIT Certified Bookkeeper
                      {/* arrow */}
                      <div className="absolute top-full left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-gray-900" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
