"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ThemeToggleButtonProps {
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

export function ThemeToggleButton({
  className,
  variant = "ghost",
  size = "icon",
}: ThemeToggleButtonProps) {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button
            variant={variant}
            size={size}
            onClick={handleToggle}
            className={cn(
              "cursor-pointer rounded-full text-xs",
              className,
            )}
            aria-label={
              theme === "dark"
                ? "ライトモードに切り替え"
                : "ダークモードに切り替え"
            }
          >
            {theme === "dark" ? (
              <Sun size={16} />
            ) : (
              <Moon size={16} />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>テーマを切り替える</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
