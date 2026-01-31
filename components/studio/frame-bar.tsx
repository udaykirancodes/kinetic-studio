"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useVideoStore } from "@/lib/store";
import { Button } from "../ui/button";
import { FrameInput } from "./frame-input";

export function FrameBar() {
  const frames = useVideoStore((state) => state.frames);
  const { state } = useSidebar();
  const addFrameAtEnd = useVideoStore((state) => state.addFrameAtEnd);
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
                    <FrameInput
                      value={item.text}
                      index={index}
                      selected={item.selected}
                    />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu className="my-0 py-0">
          {/* Add Empty Frame */}
          <SidebarMenuItem key={"new-frame"} className="">
            <SidebarMenuButton asChild>
              <Button variant="outline" onClick={addFrameAtEnd}>
                {state === "expanded" ? "Add Frame at End" : "+"}
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
