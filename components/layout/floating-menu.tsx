// components/layout/cta.tsx

"use client";

// import React, { useState } from 'react';
import { Button } from "../ui/button";
import Link from "next/link";
import { Mail, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Separator } from "../ui/separator";

export default function FloatingMenu() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="border-border/20 bg-muted/30 fixed bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full border p-2 shadow-lg backdrop-blur z-50">
        <Separator
          orientation="vertical"
          className="bg-muted-foreground h-4"
        />
        <Button
          className="rounded-full text-xs font-semibold"
          variant="ghost"
          asChild
        >
          <Link href={`/contact`}>
            <Mail />
          </Link>
        </Button>
        {/* <Separator orientation="vertical" className="h-4 bg-muted-foreground" /> */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
          className="rounded-full text-xs"
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </Button>
        <Separator
          orientation="vertical"
          className="bg-muted-foreground h-4"
        />
      </div>
    </>
  );
}
