import { cn } from "@/lib/utils";
import Link from "next/link";
import { Container } from "./container";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  return (
    <nav className="border-b border-nuetral-200 dark:border-neutral-800">
      <Container className="py-4 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-neutral-600 dark:text-neutral-400 font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Button className="">Studio</Button>
        </div>
      </Container>
    </nav>
  );
};

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn("flex items-center gap-1", className)}>
      <span className="text-xl tracking-tight font-extrabold font-display">
        KINETIC_STUDIO
      </span>
    </Link>
  );
};
