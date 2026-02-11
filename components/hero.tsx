import { cn } from "@/lib/utils";
import Link from "next/link";
import { Container } from "./container";
import { Heading, SubHeading } from "./heading";
import { PerspectiveImages } from "./perspective-images";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="overflow-hidden">
      <Container>
        <section className="grid py-10 md:grid-cols-12 md:py-20 lg:pt-32">
          <div className="md:col-span-6">
            <Heading>
              Create beautiful kinetic <br /> typography videos <br /> from text
              — fast and simple
            </Heading>
            <SubHeading className="py-8">
              You are one click away from creating beautiful kinetic typography videos
            </SubHeading>
            <div className="flex items-center gap-2 md:gap-4">
              <Link href="/studio">
                <Button
                  className={cn(
                    "cursor-pointer",
                    "shadow-[-82px_54px_27px_0px_rgba(0,0,0,0.01),-52px_35px_25px_0px_rgba(0,0,0,0.04),-29px_19px_21px_0px_rgba(0,0,0,0.15),-13px_9px_16px_0px_rgba(0,0,0,0.25),-3px_2px_9px_0px_rgba(0,0,0,0.29)]",
                    "dark:shadow-none"
                  )}
                  size={"sm"}
                >
                  Show Example
                </Button>
              </Link>
              <Link href="/studio">
                <Button
                  variant={"secondary"}
                  size={"sm"}
                  className="cursor-pointer"
                >
                  Start
                </Button>
              </Link>
            </div>
          </div>
          <PerspectiveImages />
        </section>
        <section></section>
      </Container>
    </div>
  );
};
