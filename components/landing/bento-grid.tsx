"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Palette, Play, Sparkles, Timer } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { BentoCard, DEMO_IMAGE_1, DEMO_IMAGE_2 } from "./bento-card";

const SAMPLE_WORDS = ["Create", "beautiful", "kinetic", "typography"];
const SAMPLE_COLORS = ["#0f172a", "#dc2626", "#2563eb", "#16a34a", "#ca8a04"];

export function BentoGrid() {
  return (
    <section className="pb-10">
      <Container>
        {/* Section header with staggered reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 gap-y-2 text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="border-border bg-muted/50 text-muted-foreground mb-4 inline-block rounded-full border px-4 py-1 text-sm font-medium"
          >
            Features
          </motion.span>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Everything you need
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-2xl text-lg">
            From text to polished video in minutes. No coding, no complexity.
          </p>
        </motion.div>

        <div
          className={cn(
            "grid auto-rows-[minmax(140px,auto)] gap-4",
            "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          )}
        >
          {/* 1. Text to video - Large card with image */}
          <BentoCard
            title="Text to video"
            description="Type your script and watch it transform into cinematic kinetic typography. Each word becomes a frame."
            icon={<Sparkles className="size-5" />}
            badge="Each word, a frame"
            size="lg"
            delay={0}
            image={DEMO_IMAGE_1}
            imageAlt="Kinetic typography demo"
            extra={
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.24, duration: 0.4 }}
                className="mt-3 flex flex-wrap gap-1.5"
              >
                {SAMPLE_WORDS.map((word, i) => (
                  <motion.span
                    key={word}
                    className={cn(
                      "inline-flex rounded-lg px-2.5 py-1 text-xs font-semibold",
                      i % 2 === 0
                        ? "bg-foreground text-background"
                        : "bg-muted text-foreground"
                    )}
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            }
          />

          {/* 2. Frame-by-frame control - Medium card with timeline */}
          <BentoCard
            title="Frame-by-frame control"
            description="Edit every word. Adjust timing, split phrases, and choreograph each moment to match your vision."
            icon={<Timer className="size-5" />}
            badge="Precision editing"
            size="md"
            delay={0.08}
            extra={
              <>
                <motion.ul
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.18, duration: 0.4 }}
                  className="text-muted-foreground mt-3 space-y-1.5 text-xs"
                >
                  {[
                    "Split by word or phrase",
                    "Adjust duration per frame",
                    "Sync with audio",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="bg-foreground/20 size-1.5 shrink-0 rounded-full" />
                      {item}
                    </li>
                  ))}
                </motion.ul>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                  className="mt-auto pt-4"
                >
                  <p className="text-muted-foreground mb-2 text-xs font-medium">
                    Timeline
                  </p>
                  <div className="flex gap-1">
                    {[0.5, 0.3, 0.8, 0.4, 0.6].map((width, i) => (
                      <motion.div
                        key={i}
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: width * 100 + "%", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.32 + i * 0.05,
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{ scale: 1.1 }}
                        className="bg-foreground/20 h-2 rounded-full"
                        style={{ width: `${width * 100}%` }}
                      />
                    ))}
                  </div>
                </motion.div>
              </>
            }
          />

          {/* 3. Colors & backgrounds - Small card with color swatches */}
          <BentoCard
            title="Colors & backgrounds"
            description="Customize each frame with your brand colors or create dramatic contrasts."
            icon={<Palette className="size-5" />}
            badge="Per frame"
            size="sm"
            delay={0.16}
            extra={
              <>
                <motion.ul
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="text-muted-foreground mt-3 space-y-1 text-xs"
                >
                  {[
                    "Text color per frame",
                    "Background per frame",
                    "High contrast presets",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="bg-foreground/20 size-1.5 shrink-0 rounded-full" />
                      {item}
                    </li>
                  ))}
                </motion.ul>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.26 }}
                  className="mt-auto flex flex-wrap gap-2 pt-4"
                >
                  {SAMPLE_COLORS.map((color, i) => (
                    <motion.div
                      key={color}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + i * 0.04,
                        type: "spring",
                        stiffness: 300,
                      }}
                      whileHover={{
                        scale: 1.2,
                        rotate: 5,
                        transition: { duration: 0.2 },
                      }}
                      className="border-border size-7 rounded-lg border-2 shadow-sm sm:size-8"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </motion.div>
              </>
            }
          />

          {/* 4. Real-time preview - Small card with image & play overlay */}
          <BentoCard
            title="Real-time preview"
            description="See your video come to life instantly with audio sync. No waiting, no rendering."
            icon={<Play className="size-5" />}
            badge="Live"
            size="sm"
            delay={0.24}
            image={DEMO_IMAGE_2}
            imageAlt="Video preview"
            extra={
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-3 flex items-center gap-2"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(0,0,0,0.25)",
                      "0 0 0 12px rgba(0,0,0,0)",
                    ],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="bg-foreground text-background flex size-8 shrink-0 items-center justify-center rounded-full"
                >
                  <Play className="size-4 fill-current pl-0.5" />
                </motion.div>
                <span className="text-muted-foreground text-xs">
                  Instant playback
                </span>
              </motion.div>
            }
          />

          {/* 5. CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.32 }}
            whileHover={{
              y: -8,
              transition: { duration: 0.3 },
            }}
            className="group border-border bg-muted/30 hover:border-foreground/20 hover:bg-muted/50 relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed p-6 transition-all duration-500 md:col-span-1 md:px-10 md:py-8"
          >
            {/* Decorative gradient */}
            <div
              className={cn(
                "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500",
                "from-foreground/[0.02] bg-gradient-to-br to-transparent",
                "group-hover:opacity-100"
              )}
              aria-hidden
            />
            <p className="font-display text-muted-foreground mb-1.5 text-base font-medium">
              Ready to create?
            </p>
            <p className="text-muted-foreground mb-4 text-center text-sm">
              Open the studio and turn your words into motion.
            </p>
            <Link href="/studio">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button size="lg" className="gap-2 shadow-lg">
                  Open Studio
                  <Play className="size-4" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
