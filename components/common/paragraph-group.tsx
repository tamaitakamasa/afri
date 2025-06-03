"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ParagraphGroupProps {
  children: ReactNode;
  className?: string;
}

export default function ParagraphGroup({
  children,
  className = "",
}: ParagraphGroupProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-10 text-sm leading-[2] md:text-base",
        className
      )}
    >
      {children}
    </div>
  );
}
