"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import type { ReactNode } from "react";
import { useCallback, useRef } from "react";

type BentoCardProps = {
  title: string;
  description?: string;
  icon?: ReactNode;
  badge?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  children?: ReactNode;
  delay?: number;
  image?: string;
  imageAlt?: string;
  /** Extra content below description (sample text, stats, etc.) */
  extra?: ReactNode;
};

function usePerspectiveTilt() {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      rotateX.set(-y * 10);
      rotateY.set(x * 10);
    },
    [rotateX, rotateY]
  );

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;

  return { ref, transform, handleMouseMove, handleMouseLeave };
}

export function BentoCard({
  title,
  description,
  icon,
  badge,
  className,
  size = "md",
  children,
  delay = 0,
  image,
  imageAlt = "Demo",
  extra,
}: BentoCardProps) {
  const { ref, transform, handleMouseMove, handleMouseLeave } =
    usePerspectiveTilt();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      className={cn(
        "group border-border bg-card relative overflow-hidden rounded-2xl border",
        "transition-[box-shadow,border-color] duration-500 ease-out",
        "hover:border-foreground/20 hover:shadow-foreground/[0.07] hover:shadow-2xl",
        "[perspective:1200px] [transform-style:preserve-3d]",
        "[backface-visibility:hidden]",
        size === "lg" && "p-5 md:col-span-2 md:row-span-1 md:p-6",
        size === "md" && "p-6",
        size === "sm" && "p-5",
        className
      )}
    >
      {/* Gradient shine on hover - CSS only */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500",
          "bg-gradient-to-br from-white/10 via-transparent to-transparent",
          "group-hover:opacity-100 dark:from-white/5"
        )}
        aria-hidden
      />

      {children ? (
        children
      ) : (
        <div className="relative flex h-full flex-col">
          {/* Badge */}
          {badge && (
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.1, duration: 0.4 }}
              className="border-border bg-muted/60 text-muted-foreground mb-3 inline-flex w-fit rounded-full border px-3 py-0.5 text-xs font-medium"
            >
              {badge}
            </motion.span>
          )}

          {/* Image with perspective hover */}
          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.15, duration: 0.5 }}
              className={cn(
                "border-border relative overflow-hidden rounded-xl border",
                size === "lg"
                  ? "mb-4 aspect-[2/1] max-h-40"
                  : "mb-4 aspect-[4/3] max-h-28"
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={imageAlt}
                className={cn(
                  "h-full w-full object-cover transition-transform duration-700 ease-out",
                  "group-hover:scale-105"
                )}
              />
            </motion.div>
          )}

          {/* Icon - hidden when image is present to avoid redundancy */}
          {icon && !image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.08, duration: 0.4 }}
              whileHover={{ scale: 1.08, rotate: 3 }}
              className="bg-muted/80 text-foreground ring-border/50 mb-4 inline-flex size-11 items-center justify-center rounded-xl ring-1"
            >
              {icon}
            </motion.div>
          )}

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.12, duration: 0.4 }}
            className="font-display text-lg font-semibold tracking-tight md:text-xl"
          >
            {title}
          </motion.h3>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.16, duration: 0.4 }}
              className="text-muted-foreground mt-1.5 text-sm leading-relaxed"
            >
              {description}
            </motion.p>
          )}

          {/* Extra content */}
          {extra}
        </div>
      )}
    </motion.div>
  );
}
