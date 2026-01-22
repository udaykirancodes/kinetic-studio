import { cn } from "@/lib/utils";
import Link from "next/link";
import { Container } from "./container";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="border-nuetral-200 w-full border-b dark:border-neutral-800">
      <Container className="flex items-center justify-between py-4">
        <Logo />
        <div className="flex items-center gap-4">
          <Link href="/studio" className="cursor-pointer">
            <Button size={"sm"} className="">
              Studio
            </Button>
          </Link>
        </div>
      </Container>
    </nav>
  );
};

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn("flex items-center gap-1", className)}>
      <span className="font-display text-base font-extrabold tracking-tight md:text-xl">
        KINETIC STUDIO
      </span>
    </Link>
  );
};
