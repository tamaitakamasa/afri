"use client";

import { cn } from "@/lib/utils";
import { NOTE_CATEGORIES } from "@/constants/site";

interface NoteFilterProps {
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
  className?: string;
}

export function NoteFilter({
  selectedCategory,
  onCategorySelect,
  className,
}: NoteFilterProps) {
  // 全ての記事からユニークなハッシュタグを抽出
  // const allTags = posts.flatMap(post =>
  //   post.hashtags.map(tag => tag.hashtag.name)
  // );
  // const uniqueTags = Array.from(new Set(allTags)).sort();
  const uniqueCategories = NOTE_CATEGORIES;

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
          onClick={() => onCategorySelect(null)}
          className={getButtonClassName(selectedCategory === null)}
        >
          すべて
        </button>
        {uniqueCategories.map((category) => (
          <button
            key={category}
            onClick={() => onCategorySelect(category)}
            className={getButtonClassName(selectedCategory === category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
