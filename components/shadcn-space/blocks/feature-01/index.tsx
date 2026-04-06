"use client";
import Feature from "@/components/shadcn-space/blocks/feature-01/feature";
import { ArrowDownUp, BellRing, RotateCw, Tag } from "lucide-react"

const featureData = [
    {
      icon: ArrowDownUp,
      content: "Made for your style: Learn GD and Interview tricks that work for you.",
    },
    {
      icon: BellRing,
      content: "Real-world guidance: Get help with your CV and brand from people who know.",
    },
    {
      icon: RotateCw,
      content: "No rush, no stress: Prep for your future on your own schedule.",
    },
    {
      icon: Tag,
      content: "Faster improvements: See exactly where you’re getting better every day.",
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
