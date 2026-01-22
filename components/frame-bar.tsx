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

export function FrameBar() {
  const { data } = useVideoStore();
  return (
    <Sidebar
      style={
        {
          "--sidebar-width": "20rem",
        } as React.CSSProperties
      }
      collapsible="icon"
      side={"right"}
      variant="floating"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Frames</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    {/* <item.icon /> */}
                    <span>{item.text}</span>
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
