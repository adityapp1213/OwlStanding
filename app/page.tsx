"use client";
import Image from "next/image";
import { Instrument_Serif } from "next/font/google";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "@/components/header";
import { useState } from "react";
import Character1 from "../public/1.png";
import Character2 from "../public/2.png";
import Character3 from "../public/3.png";
import Character4 from "../public/4.png";
import Feature01 from "@/components/shadcn-space/blocks/feature-01";
import Team01 from "@/components/shadcn-space/blocks/team-01/team";
import Services02 from "@/components/shadcn-space/blocks/services-02/services";
import { Footer } from "@/components/footer";
import CohortSectionPic from "../public/cohortpic-removebg-preview.png";
import Link from "next/link";

const headingSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  const [email, setEmail] = useState("");
  return (
    <>
      <HeroHeader />
      <div className="relative min-h-screen bg-white px-3 py-6 md:px-12 md:py-12 pt-20 md:pt-24 overflow-x-hidden">
        <main className="relative z-10 mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-2xl md:rounded-3xl border border-foreground/10 shadow-sm">
            <div className="relative bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:32px_32px] bg-white">

              <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                {/* Blue — top left */}
                <div
                  className="absolute -top-32 -left-32 w-[28rem] h-[28rem] md:w-[40rem] md:h-[40rem] rounded-full opacity-25"
                  style={{ background: "radial-gradient(circle, #1a3fcc 0%, transparent 65%)" }}
                />
                {/* Orange — top right */}
                <div
                  className="absolute -top-24 -right-24 w-[24rem] h-[24rem] md:w-[36rem] md:h-[36rem] rounded-full opacity-25"
                  style={{ background: "radial-gradient(circle, #f5a343 0%, transparent 65%)" }}
                />
                {/* Yellow — bottom left */}
                <div
                  className="absolute -bottom-16 -left-16 w-[22rem] h-[22rem] md:w-[32rem] md:h-[32rem] rounded-full opacity-20"
                  style={{ background: "radial-gradient(circle, #e8c84a 0%, transparent 65%)" }}
                />
                {/* Teal — bottom right */}
                <div
                  className="absolute -bottom-16 -right-16 w-[22rem] h-[22rem] md:w-[32rem] md:h-[32rem] rounded-full opacity-20"
                  style={{ background: "radial-gradient(circle, #38c4c4 0%, transparent 65%)" }}
                />
                {/* Grain overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC45IiBudW1PY3RhdmVzPSI0IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIiBvcGFjaXR5PSIxIi8+PC9zdmc+)',
                    backgroundRepeat: 'repeat',
                    backgroundSize: '200px 200px',
                    opacity: 0.06,
                    mixBlendMode: 'overlay',
                  }}
                />
              </div>

              {/* Text + form content */}
              <div className="relative z-20 flex flex-col items-center px-4 pt-8 pb-0 text-center md:px-10 md:pt-12">
                <div className="text-[10px] md:text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                  OwlStanding
                </div>

                <h1
                  className={`${headingSerif.className} mt-3 md:mt-4 text-3xl sm:text-4xl font-normal tracking-tight text-foreground md:text-5xl lg:text-6xl`}
                >
                  Join our waitlist
                </h1>

                <p className="mt-3 md:mt-4 max-w-xl text-sm text-muted-foreground md:text-base px-2 md:px-0">
                  Join the waitlist to get a seat in our cohort 1 which will take place on may 1st 2026.
                </p>

                <form
                  className="mt-6 md:mt-8 w-full max-w-xl px-1 md:px-0"
                  aria-label="Join the OwlStanding waitlist"
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.open('https://forms.gle/NYkQTh2EeLP3Jc5Z9', '_blank');
                  }}
                >
                  <label
                    htmlFor="waitlist-email"
                    className="inline-flex items-center rounded-full border border-foreground/80 bg-background px-3 py-1 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] text-foreground"
                  >
                    Email Address
                  </label>

                  <div className="mt-3 flex flex-col sm:flex-row items-stretch gap-2 sm:gap-0 sm:overflow-hidden sm:rounded-full sm:border sm:border-foreground/85 sm:bg-foreground">
                    <input
                      id="waitlist-email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 rounded-full border border-foreground/85 bg-foreground px-5 py-3 text-sm text-background placeholder:text-background/70 outline-none sm:rounded-none sm:border-0 sm:bg-transparent"
                    />
                    <button
                      type="button"
                      disabled={!email}
                      onClick={() => {
                        if (email) {
                          window.open('https://forms.gle/NYkQTh2EeLP3Jc5Z9', '_blank');
                        }
                      }}
                      className={`rounded-full sm:rounded-none sm:rounded-r-full bg-background px-6 py-3 h-auto text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.18em] border border-foreground/85 sm:border-0 cursor-pointer transition-colors pointer-events-auto ${email
                          ? 'text-foreground hover:bg-background/80'
                          : 'text-foreground/50 opacity-50 cursor-not-allowed'
                        }`}
                    >
                      Get early access
                    </button>
                  </div>
                </form>
              </div>

              {/* Mobile: only character 1 and 4 */}
              <div className="relative z-10 flex md:hidden w-full items-end justify-center gap-0 -mt-2 h-56">
                <div className="relative w-1/2 h-full">
                  <Image
                    src={Character1}
                    alt="OwlStanding character 1"
                    fill
                    className="object-contain object-bottom"
                    sizes="50vw"
                  />
                </div>
                <div className="relative w-1/2 h-full">
                  <Image
                    src={Character4}
                    alt="OwlStanding character 4"
                    fill
                    className="object-contain object-bottom"
                    sizes="50vw"
                  />
                </div>
              </div>

              {/* Desktop: all 4 characters */}
              <div className="relative z-10 hidden md:flex w-full items-end justify-center -mt-10 gap-3 h-[22rem]">
                {[Character1, Character2, Character3, Character4].map(
                  (src, index) => (
                    <div key={index} className="relative flex-1 h-full">
                      <Image
                        src={src}
                        alt={`OwlStanding character ${index + 1}`}
                        fill
                        className="object-contain object-bottom"
                        sizes="(min-width: 1024px) 18vw, 24vw"
                      />
                    </div>
                  ),
                )}
              </div>

            </div>
          </div>
        </main>

        <section id="cohort-info" className="mt-2 md:mt-4">
          <div className="flex flex-col items-center w-full">
            {/* Mobile Pill - Only visible on small screens */}
            <div className="md:hidden pt-6 mb-2">
              <span className="inline-flex items-center rounded-full border border-foreground/10 bg-white/50 backdrop-blur-sm px-4 py-1 text-[10px] font-normal text-foreground">
                Info
              </span>
            </div>

            <div className="flex flex-col items-center gap-2 md:flex-row md:items-center md:gap-12 w-full">
              {/* Content - Mobile top, Desktop right */}
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4 order-1 md:order-2">
                {/* Desktop Pill - Only visible on medium screens and up */}
                <div className="hidden md:block mb-3">
                  <span className="inline-flex items-center rounded-full border border-foreground/10 bg-white/50 backdrop-blur-sm px-4 py-1 text-xs font-normal text-foreground">
                    Info
                  </span>
                </div>
                <h2 className={`${headingSerif.className} text-5xl md:text-7xl text-foreground leading-[0.85] tracking-tighter`}>
                  Cohort 1
                </h2>
                <p className="mt-2 font-mono-body text-[13px] md:text-sm text-muted-foreground leading-snug tracking-tight max-w-sm">
                  Get full details on our upcoming program structure, schedule, and early bird benefits.
                </p>
                <div className="mt-4 w-full md:w-auto">
                  <Link href="/cohort">
                    <Button
                      size="lg"
                      className="w-full md:w-auto h-11 md:h-12 px-8 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Get more info
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Image - Mobile bottom, Desktop left */}
              <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
                <Image
                  src={CohortSectionPic}
                  alt="Cohort 1"
                  width={600}
                  height={450}
                  className="w-full max-w-[340px] md:max-w-[480px] h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mt-2 md:mt-4">
          <Feature01 />
        </section>
        <section id="services">
          <Services02 />
        </section>
        <section id="experts">
          <Team01 />
        </section>
        <Footer />
      </div>
    </>
  );
}