"use client";

import * as React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ContactButtonProps {
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export function ContactButton({
  className,
  variant = "ghost",
}: ContactButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button
            variant={variant}
            size="icon"
            className={cn("rounded-full", className)}
            asChild
          >
            <Link href="/contact">
              <Mail />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>お問い合わせ</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
