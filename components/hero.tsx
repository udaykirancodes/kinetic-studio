import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Heading, SubHeading } from "./heading";
import { PerspectiveImages } from "./perspective-images";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <Container className="grid grid-cols-12 pt-10 md:pt-20 lg:pt-32">
      <div className="col-span-5">
        <Heading>
          Create beautiful kinetic <br /> typography videos <br /> from text —
          fast and simple
        </Heading>
        <SubHeading className="py-8">
          Create beautiful kinetic typography videos from text — fast and simple
        </SubHeading>
        <div className="flex items-center gap-6">
          <Button
            className={cn(
              "cursor-pointer ring-0",
              "shadow-[-82px_54px_27px_0px_rgba(0,0,0,0.01),-52px_35px_25px_0px_rgba(0,0,0,0.04),-29px_19px_21px_0px_rgba(0,0,0,0.15),-13px_9px_16px_0px_rgba(0,0,0,0.25),-3px_2px_9px_0px_rgba(0,0,0,0.29)]",
              "dark:shadow-[-82px_54px_27px_0px_rgba(255,255,255.01),-52px_35px_25px_0px_rgba(255,255,255.04),-29px_19px_21px_0px_rgba(255,255,255.15),-13px_9px_16px_0px_rgba(255,255,255.25),-3px_2px_9px_0px_rgba(0,0,0,0.29)]"
            )}
          >
            Start with an Example
          </Button>
          <Button
            variant={"outline"}
            className="cursor-pointer border-none text-base shadow-none outline-none hover:border-none hover:bg-transparent"
          >
            Start New
          </Button>
        </div>
      </div>
      <PerspectiveImages />
    </Container>
  );
};
