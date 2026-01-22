import { AppSidebar } from "@/components/app-sidebar";
import { AppPlayer } from "@/components/remotion/player";
import { StudioNav } from "@/components/studio/studio-nav";
import { Card } from "@/components/ui/card";

export default function Studio() {
  return (
    <main className="flex h-screen min-h-0 w-full">
      <AppSidebar />
      <div className="mr-2 flex h-full w-full flex-col">
        <StudioNav />

        {/* grid takes remaining height */}
        <section className="grid min-h-0 flex-1 grid-cols-2 grid-rows-[auto_1fr_auto] gap-2 pb-2">
          <Card className="h-87.5 rounded-sm">1</Card>

          {/* PLAYER */}
          <Card className="row-span-2 min-h-0 rounded-sm">
            <AppPlayer />
          </Card>

          <Card className="rounded-sm">3</Card>
          <Card className="col-span-2 rounded-sm">4</Card>
        </section>
      </div>
    </main>
  );
}
