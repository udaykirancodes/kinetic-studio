import Link from "next/link";
import { Logo } from "../navbar";
import { Button } from "../ui/button";

export const StudioNav = () => {
  return (
    <>
      <nav className="border-nuetral-200 bg-sidebar my-2 mr-2 flex w-full items-center justify-between rounded-sm border px-4 py-4 dark:border-neutral-800">
        <Logo />
        <div className="flex items-center gap-4">
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
