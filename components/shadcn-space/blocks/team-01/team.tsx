"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";
import { motion } from "motion/react";
import { Instrument_Serif } from "next/font/google";

const headingSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip-linkedin-team01)">
      <path d="M13.633 13.633h-2.37V9.92c0-.885-.017-2.025-1.234-2.025-1.235 0-1.424.965-1.424 1.96v3.778h-2.37V5.998H8.51v1.043h.031a2.5 2.5 0 0 1 2.246-1.233c2.403 0 2.846 1.58 2.846 3.637zM3.56 4.954a1.376 1.376 0 1 1 0-2.751 1.376 1.376 0 0 1 0 2.751m1.185 8.679H2.372V5.998h2.373zM14.815.001H1.18A1.17 1.17 0 0 0 0 1.154v13.691A1.17 1.17 0 0 0 1.18 16h13.635A1.17 1.17 0 0 0 16 14.845V1.153A1.17 1.17 0 0 0 14.815 0" fill="currentColor" />
    </g>
    <defs>
      <clipPath id="clip-linkedin-team01">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

type team = {
  name: string;
  role: string;
  image: string;
  socials: {
    website: string;
    linkedin: string;
  };
}[];

const teamData: team = [
  {
    name: "Anjali Panigrahi",
    role: "Senior HR",
    image: "/Gemini_Generated_Image_fq0gfufq0gfufq0g.png",
    socials: { website: "#", linkedin: "#" },
  },
  {
    name: "Aditya Panigrahi",
    role: "Founder Atom Tech",
    image: "/Gemini_Generated_Image_gw6l01gw6l01gw6l.png",
    socials: { website: "#", linkedin: "#" },
  },
  {
    name: "Pramit Kumar Sahu",
    role: "Senior Software Engineer",
    image: "/image.png",
    socials: { website: "#", linkedin: "#" },
  },
];

const Team = () => {
  return (
    <section>
      <div className="lg:py-10 sm:py-8 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16 flex flex-col items-center justify-center gap-8 md:gap-16">
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="max-w-xl mx-auto flex flex-col items-center justify-center text-center gap-3 md:gap-4"
          >
            <Badge variant={"outline"} className="px-3 py-1 h-auto text-sm">
              Mentors
            </Badge>
            <h2 className={`${headingSerif.className} font-normal tracking-tight text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center`}>
              Meet Our Expert Mentors
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-10 sm:gap-x-8 sm:gap-y-16 w-full max-w-6xl mx-auto">
            {teamData?.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group flex-none w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] flex flex-col items-center justify-start gap-4 sm:gap-6"
              >
                <div className="relative w-full aspect-square overflow-hidden group-hover:grayscale transition-all duration-300">
                  <Image
                    src={value.image}
                    alt={value.name}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 33vw, 50vw"
                  />
                </div>

                <div className="w-full flex flex-col gap-2 sm:gap-3 items-center justify-center">
                  <div className="flex flex-col items-center justify-center gap-1 sm:gap-1.5">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground text-center leading-tight">
                      {value.name}
                    </h3>
                    <p className="text-sm sm:text-base font-normal text-muted-foreground text-center">
                      {value.role}
                    </p>
                  </div>
                  <div className="flex gap-1 sm:gap-2">
                    <a href={value.socials.website} className="p-1.5 sm:p-2 hover:bg-accent/80 rounded-full" target="_blank" rel="noopener noreferrer">
                      <Globe size={14} className="sm:w-4 sm:h-4" />
                    </a>
                    <a href={value.socials.linkedin} className="p-1.5 sm:p-2 hover:bg-accent/80 rounded-full" target="_blank" rel="noopener noreferrer">
                      <LinkedinIcon size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;