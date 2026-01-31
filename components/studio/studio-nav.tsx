"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Logo } from "../navbar";
import { Button } from "../ui/button";

export const StudioNav = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <nav className="border-nuetral-200 bg-sidebar my-2 mr-2 flex w-full items-center justify-between rounded-sm border px-4 py-4 dark:border-neutral-800">
        <Logo />
        <div className="flex items-center gap-4">
          <Button
            size="icon-sm"
            className="cursor-pointer"
            onClick={handleTheme}
            variant={"outline"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </Button>
          <Link href="/studio" className="cursor-pointer">
            <Button size={"sm"} className="">
              Studio
            </Button>
          </Link>
        </div>
      </nav>
    </>
  );
};
