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
    <div className={cn("pt-40 pb-20 md:py-50", className)}>
      <div className={cn("container mx-auto px-4 pb-20 md:pb-40 border-b", titleClassName)}>
        <h1 className="font-en text-[28px] md:text-[50px] font-bold uppercase tracking-widest text-center">
          {title}
        </h1>
      </div>
      <div className={cn("container-xl mt-10 md:mt-20", contentClassName)}>
        {children}
      </div>
    </div>
  );
}
