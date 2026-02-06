"use client";

import { ThemeProvider } from "next-themes";
import React from "react";
import { SidebarProvider } from "./ui/sidebar";

const Provider = ({ children }: React.PropsWithChildren) => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <SidebarProvider className="flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </SidebarProvider>
    </div>
  );
};

export default Provider;
