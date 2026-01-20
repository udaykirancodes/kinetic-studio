"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";

export const PerspectiveImages = () => {
  return (
    <div className="relative col-span-7 w-full py-10 pl-10">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
        className="perspective-[3000px]"
      >
        <Image
          src={"https://assets.aceternity.com/agenforce-demo-2.jpg"}
          height={720}
          width={1280}
          alt="Demo 1"
          className={cn(
            "absolute inset-0 z-0 rounded-md border mask-r-from-0% mask-b-from-50% transform-3d",
            "rotate-x-40 rotate-y-20 rotate-z-[-20deg]",
            "border-nuetral-200 dark:border-nuetral-800 border-4"
          )}
        />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: -400,
        }}
        animate={{
          opacity: 1,
          y: -100,
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
        className={cn("translate-x-20 translate-y-40 perspective-[3000px]")}
      >
        <Image
          src={"https://assets.aceternity.com/agenforce-demo-1.jpg"}
          height={720}
          width={1280}
          alt="Demo 2"
          className={cn(
            "absolute inset-0 z-0 -translate-x-10 -translate-y-30 rounded-md border mask-r-from-50% mask-b-from-50% transform-3d",
            "rotate-x-40 rotate-y-20 rotate-z-[-20deg]",
            "border-nuetral-200 dark:border-nuetral-800 border-4"
          )}
        />
      </motion.div>
    </div>
  );
};
