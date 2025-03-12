import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  className?: string;
  children: ReactNode;
  gap?: string;
}

// 左カラムのプロパティ
interface LeftColumnProps {
  children?: ReactNode;
  className?: string;
  width?: string; // 幅を指定するためのプロパティ
  title?: ReactNode; // タイトルを左カラムに移動
}

// 右カラムのプロパティ
interface RightColumnProps {
  children?: ReactNode;
  className?: string;
}

/**
 * セクションタイトル付き2カラムレイアウトコンポーネント
 * タイトルは左カラムの中に表示されます
 */
export function Section({
  gap = "gap-4",
  className,
  children,
}: SectionProps) {
  return (
    <section className={cn("container mx-auto px-4", className)}>
      {/* 2カラムレイアウト */}
      <div className={cn("relative flex w-full", gap)}>
        {children}
      </div>
    </section>
  );
}

// 左カラムのサブコンポーネント（タイトル付き）
Section.Left = function Left({
  children,
  className,
  width = "w-64", // デフォルト値を設定
  title,
}: LeftColumnProps) {
  return (
    <div className={cn(width, className, "sticky top-0 h-fit py-20")}>
      {title && <div className="mb-4 text-xl font-bold">{title}</div>}
      {children}
    </div>
  );
};

// 右カラムのサブコンポーネント
Section.Right = function Right({
  children,
  className,
}: RightColumnProps) {
  return (
    <div className={cn("flex-1 py-20", className)}>{children}</div>
  );
};
