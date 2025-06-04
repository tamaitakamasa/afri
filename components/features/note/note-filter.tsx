"use client";

import { cn } from "@/lib/utils";

interface NoteFilterProps {
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
  className?: string;
}

export function NoteFilter({
  selectedTag,
  onTagSelect,
  className,
}: NoteFilterProps) {
  // 全ての記事からユニークなハッシュタグを抽出
  // const allTags = posts.flatMap(post =>
  //   post.hashtags.map(tag => tag.hashtag.name)
  // );
  // const uniqueTags = Array.from(new Set(allTags)).sort();
  const uniqueTags = [
    "活動レポート",
    "プロジェクト紹介",
    "Awaji Food Reseach Institute",
    "食文化見聞録",
  ];

  // ボタンのスタイルを計算する関数
  const getButtonClassName = (isSelected: boolean) => {
    return cn(
      "rounded-full border px-3 py-2 md:px-4 text-xs md:text-sm font-medium transition-colors cursor-pointer",
      isSelected
        ? "border-black bg-black text-white"
        : "border-gray-300",
    );
  };

  return (
    <div className={cn(className)}>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onTagSelect(null)}
          className={getButtonClassName(selectedTag === null)}
        >
          すべて
        </button>
        {uniqueTags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagSelect(tag)}
            className={getButtonClassName(selectedTag === tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
