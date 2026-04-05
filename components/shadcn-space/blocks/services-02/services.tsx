"use client";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { Instrument_Serif } from "next/font/google";

const headingSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"],
});
import { cn } from "@/lib/utils";

export interface ServiceItem {
    heading: string;
    descp: string;
    image: string;
}

export interface ServicesProps {
    data?: ServiceItem[];
}

export const servicesData: ServiceItem[] = [
    {
        heading: "Peer Exchange",
        descp: "Learn and communicate with peers like you, share ideas openly and grow together through real conversations",
        image: "/7af055d5a9287d1335d38f28ad42aa59.jpg"
    },
    {
        heading: "Personal Mentorship",
        descp: "No more ignored questions, get one-on-one mentorship that actually helps you solve doubts and prepare for interviews",
        image: "/Untitled design.png"
    },
    {
        heading: "Resume Crafting",
        descp: "Build a resume that truly reflects you, not just a template but something that gets noticed by recruiters",
        image: "/Untitled design3.png"
    },
    {
        heading: "Career Readiness",
        descp: "Get ready for the real job world, from interviews to confidence we help you feel prepared at every step",
        image: "/14eb82aa32fcc76d8f26b8e14f001cc6.jpg"
    }
];

function Services({ data = servicesData }: ServicesProps) {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleMouseEnter = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <section className="bg-background">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 lg:pt-10 lg:pb-6 sm:pt-8 sm:pb-12 pt-4 pb-6">
                <div className="flex flex-col md:gap-12 gap-6">
                    <div className="flex md:flex-row flex-col justify-between md:items-end items-start gap-4">
                        <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-left-10 duration-1000 delay-200 ease-in-out fill-mode-both">
                            <Badge variant="outline" className="py-1 px-3 h-auto text-sm font-normal border-0 outline outline-border">
                                Services
                            </Badge>
                            <h2 className={cn(headingSerif.className, "font-normal tracking-tight text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl")}>What we do</h2>
                            <p className="max-w-2xl text-muted-foreground sm:text-lg text-base">
                                A glimpse into our Thinking!
                            </p>
                        </div>

                    </div>
                    <div className="grid grid-cols-12 relative gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200 ease-in-out fill-mode-both">
                        <div className="w-full lg:col-span-4 col-span-12 flex items-start">
                            <div className="transition-all duration-300 z-10 h-80 w-full overflow-hidden rounded-2xl">
                                {data?.[activeIndex]?.image && (
                                    <Image
                                        src={data[activeIndex].image}
                                        alt="Service Image"
                                        width={400}
                                        height={250}
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                )}
                            </div>
                        </div>
                        <div className="lg:col-span-1" />
                        <div className="w-full flex flex-col gap-16 lg:col-span-7 col-span-12">
                            <div>
                                {data?.map((value, index) => (
                                    <div
                                        key={index}
                                        onMouseEnter={(e) => handleMouseEnter(index)}
                                        className="group py-5 xl:py-8 border-t border-border cursor-pointer flex xl:flex-row flex-col xl:items-center items-start justify-between xl:gap-10 gap-1 relative">
                                        <h3 className={cn(
                                            headingSerif.className,
                                            "py-1 text-2xl md:text-3xl font-normal transition-colors max-w-2xs w-full",
                                            activeIndex === index ? "text-[#fc5610]" : "text-foreground",
                                            "group-hover:text-[#fc5610]"
                                        )}>
                                            {value.heading}
                                        </h3>
                                        {activeIndex === index && (
                                            <p className="text-muted-foreground text-base transition-all duration-300 flex-1">
                                                {value.descp}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
