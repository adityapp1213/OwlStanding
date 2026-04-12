"use client";

import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface SourceItem {
    icon: string;
    label: string;
}

interface FeatureCard {
    id: string;
    command: string;
    description: string;
    sources: SourceItem[];
    tabIndices: number[];
    marginTop: string;
}

const features: FeatureCard[] = [
    {
        id: "whatsapp-meet",
        command: "/questions",
        description:
            "Get quickest feedback and answers to all your question on the fly",
        sources: [
            { icon: "/whatsapp.png", label: "WhatsApp" },
            { icon: "/meet.png", label: "Google Meet" },
        ],
        tabIndices: [0, 1],
        marginTop: "80px",
    },
    {
        id: "docs-notion",
        command: "/GD & Interviews",
        description:
            "Real time interactive Gd access and mock interview with individual growth tracking",
        sources: [
            { icon: "/docs.png", label: "Google Docs" },
            { icon: "/notion.png", label: "Notion" },
        ],
        tabIndices: [2, 3],
        marginTop: "0px",
    },
    {
        id: "linkedin-canva",
        command: "/Presonal Branding",
        description:
            "best reccomendations and real world feedback on your personal branding",
        sources: [
            { icon: "/Linkedin.png", label: "LinkedIn" },
            { icon: "/canva.png", label: "Canva" },
        ],
        tabIndices: [4, 5],
        marginTop: "70px",
    },
];

const browserTabs = [
    { icon: "/whatsapp.png", label: "WhatsApp Web", mobLabel: "Groupchat" },
    { icon: "/meet.png", label: "Google Meet", mobLabel: "Class" },
    { icon: "/docs.png", label: "Project Brief - Docs", mobLabel: "Brief" },
    { icon: "/notion.png", label: "Team Wiki - Notion", mobLabel: "Notes" },
    { icon: "/Linkedin.png", label: "LinkedIn Feed", mobLabel: "Feed" },
    { icon: "/canva.png", label: "Post Design - Canva", mobLabel: "Resume" },
];

export default function BrowserShowcase() {
    const [activeIndex, setActiveIndex] = useState(0);
    const isMobile = useIsMobile();
    const mobileScrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isMobile || !mobileScrollRef.current) return;
        const container = mobileScrollRef.current;
        const handleScroll = () => {
            const scrollTop = container.scrollTop;
            const itemHeight = container.offsetHeight;
            const index = Math.round(scrollTop / itemHeight);
            if (index !== activeIndex && index >= 0 && index < features.length) {
                setActiveIndex(index);
            }
        };
        container.addEventListener("scroll", handleScroll, { passive: true });
        return () => container.removeEventListener("scroll", handleScroll);
    }, [isMobile, activeIndex]);

    const activeTabIndices = features[activeIndex]?.tabIndices || [];

    return (
        <div className="flex w-full items-center justify-center py-8 overflow-visible">
            <div className="relative w-full max-w-[1080px] mx-auto px-1 md:px-6">

                {/* Browser Header - Absolute on desktop to let cards overlap, relative on mobile */}
                <div className={cn(
                    "w-full max-w-[900px] z-0",
                    isMobile ? "relative" : "absolute top-0 left-1/2 -translate-x-1/2"
                )}>
                    <div className="rounded-t-2xl border-x-2 border-t-2 border-foreground bg-[#f1f0ea] overflow-hidden">
                        <div className="px-3 md:px-5 py-3 flex items-center gap-3 md:gap-5 border-b-2 border-foreground/5">
                            <div className="flex gap-[8px] shrink-0">
                                <div className="h-[10px] w-[10px] rounded-full bg-[#ccc]" />
                                <div className="h-[10px] w-[10px] rounded-full bg-[#ccc]" />
                                <div className="h-[10px] w-[10px] rounded-full bg-[#ccc]" />
                            </div>
                            <div className="flex items-center gap-2 flex-1 overflow-x-auto no-scrollbar py-1">
                                {browserTabs.map((tab, i) => {
                                    const isSelected = activeTabIndices.includes(i);
                                    
                                    // On mobile, only render the tab if it's selected (part of the active card)
                                    if (isMobile && !isSelected) return null;

                                    return (
                                        <div
                                            key={`${tab.label}-${i}`}
                                            className={`flex items-center gap-[6px] px-[10px] md:px-[12px] py-[6px] text-[10px] font-medium whitespace-nowrap transition-all duration-300 rounded-lg ${isSelected
                                                ? "bg-white shadow-sm ring-1 ring-black/5 text-foreground scale-105"
                                                : "text-foreground/40 opacity-60 scale-95"
                                                }`}
                                        >
                                            <img
                                                src={tab.icon}
                                                alt={tab.label}
                                                style={{ width: '16px', height: '16px', objectFit: 'contain' }}
                                                className="mix-blend-multiply"
                                            />
                                            <span className="inline">
                                                {isMobile ? (tab as any).mobLabel : tab.label}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        {/* Fading background/borders - visible on desktop to form the window frame */}
                        {!isMobile && (
                            <div className="h-[300px] w-full bg-gradient-to-b from-[#f1f0ea] via-[#f1f0ea] to-transparent border-x-2 border-foreground/5" />
                        )}
                    </div>
                </div>

                {/* Cards Layer */}
                <div className="relative z-10 w-full md:mt-24 -mt-[2px]">
                    {!isMobile && (
                        <div className="flex justify-between items-start gap-8 w-full h-[420px]">
                            {features.map((feature, i) => {
                                const isActive = i === activeIndex;
                                return (
                                    <div
                                        key={feature.id}
                                        className="flex-1 transition-all duration-500 ease-in-out cursor-pointer"
                                        style={{
                                            marginTop: feature.marginTop,
                                            zIndex: isActive ? 50 : 1,
                                        }}
                                        onMouseEnter={() => setActiveIndex(i)}
                                    >
                                        <CardContent feature={feature} isActive={isActive} />
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {isMobile && (
                        <div 
                            ref={mobileScrollRef}
                            className="flex flex-col h-[400px] overflow-y-auto snap-y snap-mandatory scrollbar-hide border-x-2 border-b-2 border-foreground rounded-b-2xl bg-gradient-to-b from-[#f1f0ea] to-transparent"
                            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                            {features.map((feature, i) => {
                                const isActive = i === activeIndex;
                                return (
                                    <div 
                                        key={feature.id} 
                                        className="snap-start shrink-0 w-full h-full flex items-center justify-center p-4"
                                    >
                                        <div className="w-full transform scale-[1.08] transition-all duration-300">
                                            <CardContent feature={feature} isActive={isActive} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function CardContent({ feature, isActive }: { feature: FeatureCard; isActive: boolean }) {
    return (
        <div
            className={`w-full border-2 border-solid border-foreground rounded-[24px] p-6 lg:p-7 flex flex-col overflow-hidden transition-all duration-300 select-none relative h-[310px] shadow-[-1px_1px_0px_0px_#000] ${isActive
                ? "shadow-[-14px_14px_0px_0px_#000000] -translate-y-2.5 translate-x-2.5"
                : "bg-white hover:shadow-[-7px_7px_0px_0px_#000000] hover:-translate-y-1 hover:translate-x-1"
                }`}
        >
            {/* Background layer */}
            <div
                className="absolute inset-0 bg-white transition-opacity duration-300 pointer-events-none"
                style={{ opacity: isActive ? 0 : 1 }}
            />

            {/* Soft Orange Mesh Gradient Layer */}
            <div
                className="absolute inset-0 h-full w-full z-0 transition-opacity duration-500 pointer-events-none overflow-hidden"
                style={{
                    opacity: isActive ? 1 : 0,
                    background: `
            radial-gradient(at 0% 0%, #fc5610, transparent 70%),
            radial-gradient(at 100% 0%, #ffcf99, transparent 60%),
            radial-gradient(at 50% 50%, #ff8a5c, transparent 80%),
            radial-gradient(at 20% 80%, #fff7ed, transparent 60%),
            #fff7ed
          `
                }}
            >
                {/* Grain Noise Overlay */}
                <div className="absolute inset-0 opacity-[0.08] brightness-100 contrast-150 pointer-events-none mix-blend-overlay"
                    style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
            </div>

            <div className="flex flex-col gap-4 relative z-[2]">
                {feature.sources.map((s) => (
                    <div
                        key={s.label}
                        className={`flex gap-2.5 items-center w-max text-[15px] font-medium transition-colors duration-300`}
                    >
                        <img
                            src={s.icon}
                            alt={s.label}
                            style={{ width: '34px', height: '34px', objectFit: 'contain' }}
                            className="mix-blend-multiply"
                        />
                        <span className="text-foreground tracking-tight">{s.label}</span>
                    </div>
                ))}
            </div>

            <div className="mt-auto relative z-[2]">
                <p
                    className={`font-serif-display text-4xl lg:text-[40px] tracking-tighter leading-none transition-colors duration-300 ${isActive ? "text-foreground" : "text-foreground"
                        }`}
                >
                    {feature.command}
                </p>

                <p
                    className={`mt-4 font-mono-body text-[13px] leading-relaxed max-w-full transition-colors duration-300 ${isActive ? "text-foreground/80" : "text-foreground/60"
                        }`}
                >
                    {feature.description}
                </p>
            </div>
        </div>
    );
}
