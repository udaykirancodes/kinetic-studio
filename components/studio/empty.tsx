import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { ArrowRight, ArrowUpRightIcon } from "lucide-react";

export function NoFrameSelected() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <ArrowRight />
        </EmptyMedia>
        <EmptyTitle>No Frame Selected</EmptyTitle>
        <EmptyDescription>
          Select a frame to edit its properties
        </EmptyDescription>
      </EmptyHeader>
      {/* <EmptyContent className="flex-row justify-center gap-2">
        <Button size={"sm"}>Back</Button>
        <Button variant="outline" size={"sm"}>
          Import Project
        </Button>
      </EmptyContent> */}
      <Button
        variant="link"
        asChild
        className="text-muted-foreground"
        size="sm"
      >
        <a href="#">
          Learn More <ArrowUpRightIcon />
        </a>
      </Button>
    </Empty>
  );
}
