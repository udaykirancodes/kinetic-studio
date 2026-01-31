import { Container } from "@/components/container";
import Link from "next/link";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <footer className="">
      <Container className="text-muted-foreground text-sm">
        <div className="flex w-full items-center justify-between border-t border-dashed py-6">
          <Link
            href="/"
            className="font-display text-foreground hover:text-muted-foreground font-semibold tracking-tight"
          >
            Kinetic Studio
          </Link>
          <span>
            Made with <span className="text-red-500">♥</span> by
            <Button size={"sm"} variant={"link"} className="px-1">
              <Link href="https://udaykiran.dev" target="_blank">
                Uday
              </Link>
            </Button>
          </span>
          <Link
            href="/studio"
            className="hover:text-foreground transition-colors"
          >
            Studio
          </Link>
        </div>
      </Container>
    </footer>
  );
}
