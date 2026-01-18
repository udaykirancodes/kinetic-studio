import { AppPlayer } from "@/components/remotion/player";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Studio() {
  return (
    <main className="w-full h-full">
      <ResizablePanelGroup
        orientation="horizontal"
        className="min-h-screen w-full"
      >
        <ResizablePanel defaultSize={25}>
          <div className="h-full">
            <span className="font-semibold">Background Settings</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75}>
          <ResizablePanelGroup
            orientation="vertical"
            className="min-h-screen w-full"
          >
            <ResizablePanel defaultSize={60}>
              {/*  */}
              <ResizablePanelGroup
                orientation="horizontal"
                className="min-h-screen w-full"
              >
                <ResizablePanel defaultSize={60}>
                  <div className="h-full">
                    <AppPlayer />
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={40}>
                  <div className="h-full">
                    <span className="font-semibold">Video Settings</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={40}>
              <div className="h-full">
                <span className="font-semibold">Video Frames</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
