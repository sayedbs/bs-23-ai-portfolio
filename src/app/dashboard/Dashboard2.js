import React from "react";
import Header from "../components/Header";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "../components/Card";
import { GlareCard } from "../components/GlareCard";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Footer from "../components/Footer";

function Dashboard2() {
    return (
        <div className="mt-[150px]">
            <Header />

            <div className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
                <GridItem
                    area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                    icon={
                        <Box className="h-4 w-4 text-black dark:text-neutral-400" />
                    }
                    title="Do things the right way"
                    description="Running out of copy so I'll write anything."
                />
                <GridItem
                    area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                    icon={
                        <Settings className="h-4 w-4 text-black dark:text-neutral-400" />
                    }
                    title="The best AI code editor ever."
                    description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
                />
                <GridItem
                    area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                    icon={
                        <Lock className="h-4 w-4 text-black dark:text-neutral-400" />
                    }
                    title="You should buy Aceternity UI Pro"
                    description="It's the best money you'll ever spend"
                />
                <GridItem
                    area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                    icon={
                        <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />
                    }
                    title="This card is also built by Cursor"
                    description="I'm not even kidding. Ask my mom if you don't believe me."
                />
                <GridItem
                    area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                    icon={
                        <Search className="h-4 w-4 text-black dark:text-neutral-400" />
                    }
                    title="Coming soon on Aceternity UI"
                    description="I'm writing the code as I record this, no shit."
                />
            </div>

            <h2 className="mt-20 text-white text-[40px] bg-black">Card example 2</h2>
            <div className="grid grid-cols-3 gap-20">
            <GlareCard className="flex flex-col items-start justify-end py-8 px-6 rounded-lg">
                <Image className="mb-auto" src={"/images/ai.webp"} alt="Card image" width={"400"} height={"200"} />
                
                <div className="pt-4">
                    <p className="font-bold text-white text-lg">The greatest trick</p>
                    <p className="font-normal text-base text-neutral-200 mt-4">
                      The greatest trick the devil ever pulled was to convince the world
                      that he didn&apos;t exist.
                    </p>
                </div>

                <Button className="my-4">Button</Button>
              </GlareCard>
              <GlareCard className="flex flex-col items-start justify-end py-8 px-6 rounded-lg">
                <Image className="mb-auto" src={"/images/ai.webp"} alt="Card image" width={"400"} height={"200"} />
                
                <div className="pt-4">
                    <p className="font-bold text-white text-lg">The greatest trick</p>
                    <p className="font-normal text-base text-neutral-200 mt-4">
                      The greatest trick the devil ever pulled was to convince the world
                      that he didn&apos;t exist.
                    </p>
                </div>

                <Button className="my-4">Button</Button>
              </GlareCard>

            </div>

            <Footer />
        </div>
    );
}

const GridItem = ({ area, icon, title, description }) => {
    return (
        <li className={`min-h-[14rem] list-none ${area}`}>
            <div className="relative h-full rounded-2.5xl border  p-2  md:rounded-3xl md:p-3">
                <GlowingEffect
                    blur={0}
                    borderWidth={3}
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border border-gray-600 p-2 ">
                            {icon}
                        </div>
                        <div className="space-y-3">
                            <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                                {title}
                            </h3>
                            <h2
                                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-black dark:text-neutral-400"
                            >
                                {description}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Dashboard2;
