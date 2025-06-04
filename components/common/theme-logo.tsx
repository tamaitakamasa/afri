"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import logoLight from "@/public/images/logo_light.svg"; // 白ロゴ

interface ThemeLogoProps {
	className?: string;
}

export function ThemeLogo({ className }: ThemeLogoProps) {
  const { theme } = useTheme();

  return (
    <Image
      src={theme === "dark" ? logoLight : logo}
      alt="Awaji Food Research Institute"
      className={className}
    />
  );
}
