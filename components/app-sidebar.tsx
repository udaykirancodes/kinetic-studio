"use client";

import { FrameInput } from "@/components/studio/frame-input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
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
  useSidebar
} from "@/components/ui/sidebar";
import { useAppStore, useVideoStore } from "@/lib/store";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

export function AppSidebar() {
  const templates = useAppStore((state) => state.templates);
  const frames = useVideoStore((state) => state.frames);
  const videoId = useVideoStore((state) => state.id);
  const setVideoId = useVideoStore((state) => state.setId);
  const updateFrames = useVideoStore((state) => state.updateFrames);
  const updateInfo = useVideoStore((state) => state.updateInfo);
  const addFrameAtEnd = useVideoStore((state) => state.addFrameAtEnd);
  const { state } = useSidebar();
  const [templateConfirmIndex, setTemplateConfirmIndex] = useState<
    number | null
  >(null);

  const loadTemplate = (index: number) => {
    const template = templates[index];
    if (!template) return;
    updateFrames(template.frames);
    updateInfo(template.info);
    setVideoId(template.id);
    setTemplateConfirmIndex(null);
  };

  return (
    <Sidebar
      style={
        {
          "--sidebar-width": "18rem",
          "--sidebar-width-icon": "18rem",
        } as React.CSSProperties
      }
      collapsible="icon"
      side="left"
      variant="floating"
    >
      <AlertDialog
        open={templateConfirmIndex !== null}
        onOpenChange={(open) => !open && setTemplateConfirmIndex(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Load template?</AlertDialogTitle>
            <AlertDialogDescription>
              This will replace your current frames and video settings.
              Continue?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() =>
                templateConfirmIndex !== null &&
                loadTemplate(templateConfirmIndex)
              }
            >
              Load
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <SidebarContent className="min-w-0 overflow-auto">
        <SidebarGroup>
          <SidebarGroupLabel>Templates</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {templates.map((template, index) => (
                <SidebarMenuItem
                  key={template.name}
                  className="cursor-pointer rounded-md flex items-center justify-center"
                >
                  
                  <SidebarMenuButton
                    onClick={() => setTemplateConfirmIndex(index)}
                    className="cursor-pointer flex items-center justify-between"
                    isActive={template.id === videoId}
                  >
                    <span>{template.name}</span>
                    {
                      index === 0 && (
                        <Button className="" size={"icon-xs"}>
                          <PlusIcon/>
                        </Button>
                      )
                    }
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
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
          <SidebarMenuItem key="new-frame" className="">
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
