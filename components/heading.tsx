import { cn } from "@/lib/utils";

export const Heading = ({
  children,
  className,
  tag,
}: {
  children: React.ReactNode;
  className?: string;
  tag?: "h1" | "h2";
}) => {
  const Tag = tag || "h1";
  return (
    <Tag
      className={cn(
        "text-2xl md:text-4xl lg:text-5xl tracking-tight font-bold font-display",
        className
      )}
    >
      {children}
    </Tag>
  );
};

export const SubHeading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-base md:text-lg lg:text-2xl text-neutral-500 dark:text-neutral-400 tracking-tight font-sans max-w-xl",
        className
      )}
    >
      {children}
    </p>
  );
};
