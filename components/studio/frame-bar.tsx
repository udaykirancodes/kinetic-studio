"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useVideoStore } from "@/lib/store";
import { FrameInput } from "./frame-input";

export function FrameBar() {
  const { frames } = useVideoStore();
  return (
    <Sidebar
      style={
        {
          "--sidebar-width": "20rem",
          "--sidebar-width-icon": "19rem",
        } as React.CSSProperties
      }
      collapsible="icon"
      side={"right"}
      variant="floating"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Frames ({frames.length})</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {frames.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    <FrameInput value={item.text} index={index} />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
