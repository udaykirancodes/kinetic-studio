import { AppSidebar } from "@/components/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Studio() {
  return (
    <main className="h-full w-full">
      <AppSidebar />
      <SidebarTrigger />
    </main>
  );
}
