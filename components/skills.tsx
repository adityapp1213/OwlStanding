"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Instrument_Serif } from "next/font/google";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const headingSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

export interface SkillItem {
  step: number;
  title: string;
  description: string;
  category: "purpose" | "discovery" | "learning" | "application" | "interview" | "offer";
  color: string;
}

export const skillsData: SkillItem[] = [
  {
    step: 1,
    title: "Define Your Purpose",
    description: "Clarify your career vision and goals to stay focused",
    category: "purpose",
    color: "#f97316",
  },
  {
    step: 2,
    title: "Self Awareness",
    description: "Understand your strengths, values, and unique proposition",
    category: "discovery",
    color: "#a855f7",
  },
  {
    step: 3,
    title: "Strategic Learning",
    description: "Identify skill gaps and create a targeted learning roadmap",
    category: "learning",
    color: "#f97316",
  },
  {
    step: 4,
    title: "Skill Acquisition",
    description: "Build practical expertise through projects and practice",
    category: "learning",
    color: "#a855f7",
  },
  {
    step: 5,
    title: "Resume Building",
    description: "Craft a compelling narrative that highlights your value",
    category: "application",
    color: "#3b82f6",
  },
  {
    step: 6,
    title: "Application Strategy",
    description: "Streamline your job search with systematic approach",
    category: "application",
    color: "#f97316",
  },
  {
    step: 7,
    title: "Interview Preparation",
    description: "Master technical and behavioral questions with confidence",
    category: "interview",
    color: "#3b82f6",
  },
  {
    step: 8,
    title: "Negotiation",
    description: "Learn effective negotiation tactics for better offers",
    category: "offer",
    color: "#a855f7",
  },
  {
    step: 9,
    title: "Salary Negotiation",
    description: "Maximize your compensation with data-driven strategies",
    category: "offer",
    color: "#22c55e",
  },
];

function Skills({ data = skillsData }: { data?: SkillItem[] }) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="flex flex-col gap-4 text-center items-center mb-12"
        >
          <Badge
            variant="outline"
            className="px-3 py-1 h-auto text-sm font-normal"
          >
            Roadmap
          </Badge>
          <h2
            className={cn(
              headingSerif.className,
              "font-normal tracking-tight text-foreground text-3xl sm:text-4xl md:text-5xl"
            )}
          >
            Your Career Journey
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            A step-by-step path to land your dream job
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] top-8 bottom-8 w-0.5 bg-foreground/10" />

          <div className="flex flex-col gap-0">
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="relative flex items-start gap-4 py-2"
              >
                <div
                  className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium"
                  style={{ backgroundColor: item.color }}
                >
                  {item.step}
                </div>

                <div className="flex-1 pt-1">
                  <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <div
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center mt-8"
        >
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8"
          >
            Continue
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;