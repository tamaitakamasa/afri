// components/layout/cta.tsx

"use client";

import { Separator } from "../ui/separator";
import { ThemeToggleButton } from "../ui/theme-toggle-button";
import { ContactButton } from "../ui/contact-button";


export default function FloatingMenu() {

  return (
    <>
      <div className="border-border/20 bg-muted/30 fixed bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full border p-2 shadow-lg backdrop-blur z-50">
        <Separator
          orientation="vertical"
          className="bg-muted-foreground h-4"
        />
        <ContactButton
          className="text-xs font-semibold"
          variant="ghost"
        />
        <ThemeToggleButton className="rounded-full text-xs" />
        <Separator
          orientation="vertical"
          className="bg-muted-foreground h-4"
        />
      </div>
    </>
  );
}
