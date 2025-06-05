// components/layout/cta.tsx

"use client";

import { useScrollDirection } from "../../hooks/use-scroll-direction";
import { cn } from "../../lib/utils";
import { Separator } from "../ui/separator";
import { ThemeToggleButton } from "../ui/theme-toggle-button";
import { ContactButton } from "../ui/contact-button";

export default function FloatingMenu() {
  const { isVisible } = useScrollDirection({
    scrollBuffer: 100,
    scrollTimeout: 150,
    initialVisible: false, // 初期状態は非表示
  });

  return (
    <>
      <div
        className={cn(
          "md:hidden border-border/20 bg-muted/30 fixed bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full border p-1 shadow-lg backdrop-blur z-50 transition-transform duration-300 ease-in-out",
          isVisible ? "translate-y-0" : "translate-y-28"
        )}
      >
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
