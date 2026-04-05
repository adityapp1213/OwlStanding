"use client";
import Feature from "@/components/shadcn-space/blocks/feature-01/feature";
import { ArrowDownUp, BellRing, RotateCw, Tag } from "lucide-react"

const featureData = [
    {
      icon: ArrowDownUp,
      content: "Tailored curriculum designed to match your individual goals and learning pace.",
    },
    {
      icon: BellRing,
      content: "Direct access to expert instructors for real-time feedback and support.",
    },
    {
      icon: RotateCw,
      content: "Flexible scheduling options to fit your busy lifestyle.",
    },
    {
      icon: Tag,
      content: "Progress tracking and personalized adjustments to optimize your learning journey.",
    },
];

const Feature01 = () => {
  return (
    <>
      <Feature featureData={featureData} />
    </>
  );
};

export default Feature01;
