import { cn } from "@/lib/utils";
import React from "react";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
}

export function PageLayout({
  children,
  title,
  className,
  titleClassName,
  contentClassName,
}: PageLayoutProps) {
  return (
    <div className={cn("py-50", className)}>
      <div className={cn("container mx-auto px-4 pb-40 border-b", titleClassName)}>
        <h1 className="font-en text-4xl font-bold uppercase tracking-widest text-center">
          {title}
        </h1>
      </div>
      <div className={cn("container-xl mt-20", contentClassName)}>
        {children}
      </div>
    </div>
  );
}
