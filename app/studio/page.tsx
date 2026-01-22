import { AppSidebar } from "@/components/app-sidebar";
import { AppPlayer } from "@/components/remotion/player";
import { StudioNav } from "@/components/studio/studio-nav";
import { Card } from "@/components/ui/card";

export default function Studio() {
  return (
    <main className="flex h-screen min-h-0 w-full">
      <AppSidebar />
      <div className="flex h-full w-full flex-col">
        <StudioNav />
        {/* grid takes remaining height */}
        <section className="grid min-h-0 flex-1 grid-cols-2 grid-rows-[auto_1fr_auto] gap-2 pb-2">
          {/* PLAYER */}
          <Card className="row-span-2 min-h-0 rounded-sm">
            <AppPlayer />
          </Card>
          <Card className="h-87.5 rounded-sm p-2">Frame Settings</Card>

          <Card className="rounded-sm p-2">Frame Settings</Card>
          <Card className="col-span-2 rounded-sm px-2 py-5">Bottom</Card>
        </section>
      </div>
      <AppSidebar side="right" />
    </main>
  );
}
