import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import { Instrument_Serif } from "next/font/google";

const headingSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

type Features = {
  icon: LucideIcon;
  content: string;
}[];

const Feature = ({ featureData }: { featureData: Features }) => {
  return (
    <section>
      <div className="lg:py-20 sm:py-16 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="flex flex-col gap-6 md:gap-12">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between gap-4"
            >
              <div className="flex flex-col gap-3 md:gap-4 max-w-full items-center md:items-start text-center md:text-left md:max-w-xl">
                <Badge
                  variant={"outline"}
                  className="px-3 py-1 h-auto text-sm font-normal"
                >
                  Features
                </Badge>
                <h2 className={`${headingSerif.className} font-normal tracking-tight text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}>
                  Campus to Corporate
                </h2>
                <p className="text-base md:text-lg font-normal text-muted-foreground">
                  Land Your First Big Job Everything you need to go from graduation to the corporate office.

                </p>
              </div>
              
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="p-6 sm:p-16 rounded-2xl bg-[url('/5.png')] object-cover bg-center w-full bg-cover bg-no-repeat min-h-[350px] sm:min-h-[400px] lg:h-full"
              >
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
                {featureData?.map((value, index) => {
                  return (
                    <motion.div
                      key={index}
                      initial={{ x: 100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        ease: [0.21, 0.47, 0.32, 0.98],
                      }}
                    >
                      <Card className="py-6 sm:py-8 bg-muted ring-0 border-0 h-full">
                        <CardContent className="w-full h-full px-6 sm:px-8 flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-12 sm:justify-between">
                          <value.icon
                            className="w-6 h-6 text-muted-foreground shrink-0"
                            strokeWidth={1.5}
                          />
                          <p className="text-sm sm:text-base text-primary font-normal">
                            {value?.content}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;