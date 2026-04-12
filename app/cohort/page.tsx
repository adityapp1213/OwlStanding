"use client";
import Image from "next/image";
import { Instrument_Serif } from "next/font/google";
import { HeroHeader } from "@/components/header";
import CohortImage from "../../public/cohortpg1.png";
import CohortMobImage from "../../public/cohortmob.png";
import CalImage from "../../public/cal.png";
import BrowserShowcase from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Pricing from "@/components/shadcn-space/blocks/pricing-01/pricing";
import { Footer } from "@/components/footer";

const headingSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

export default function CohortPage() {
  return (
    <>
      <HeroHeader />
      <div className="bg-[#f1f0ea] min-h-screen overflow-x-hidden">
        <div className="relative px-3 py-6 md:px-12 md:py-12 pt-20 md:pt-24">
          <main className="relative z-10 mx-auto max-w-7xl">
            <h1
              className={`${headingSerif.className} mt-3 md:mt-4 text-3xl sm:text-4xl font-normal tracking-tight text-foreground md:text-5xl lg:text-6xl text-center`}
            >
              Cohort 1
            </h1>
            <div className="mt-2 flex justify-center">
              {/* Desktop Image */}
              <div className="hidden md:block">
                <Image
                  src={CohortImage}
                  alt="Cohort 1 Program"
                  width={800}
                  height={600}
                  className="object-contain"
                />
              </div>
              {/* Mobile Image */}
              <div className="md:hidden w-full">
                <Image
                  src={CohortMobImage}
                  alt="Cohort 1 Program Mobile"
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="mt-2">
              <BrowserShowcase />
            </div>
            <div className="mt-2 flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">
              <div className="w-full md:w-1/2">
                <Image
                  src={CalImage}
                  alt="Calendar Integration"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="w-full md:w-1/2 flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-white/40 backdrop-blur-sm border-2 border-foreground/5 rounded-[40px] p-8 md:p-12 flex flex-col items-center text-center shadow-xl shadow-foreground/[0.02]">
                  <h2 className={`${headingSerif.className} text-5xl md:text-7xl text-foreground leading-[0.85] tracking-tighter`}>
                    1st & 2nd May
                  </h2>
                  <p className="mt-4 font-mono-body text-sm md:text-base text-foreground/50 uppercase tracking-[0.2em] leading-relaxed">
                    Clear your schedules. You&apos;re definitely going to want to be here for this one.
                  </p>
                  <div className="mt-8 w-full px-4">
                    <Button
                      size="lg"
                      className="w-full h-14 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => window.open('https://forms.gle/NYkQTh2EeLP3Jc5Z9', '_blank')}
                    >
                      Join Waitlist
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <Pricing />
            </div>
          </main>
        </div>
        <Footer className="border-t-foreground/5" />
      </div>
    </>
  );
}
