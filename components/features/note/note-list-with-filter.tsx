"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { NoteArticle } from "@/types/note";
import { NoteCard } from "./note-card";
import { NoteFilter } from "./note-filter";

interface NoteListWithFilterProps {
  posts: NoteArticle[];
  className?: string;
  limit?: number;
  showFilter?: boolean;
}

export function NoteListWithFilter({
  posts,
  className,
  limit,
  showFilter = true
}: NoteListWithFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // フィルタリングされた記事を取得
  const filteredPosts = selectedCategory
    ? posts.filter(post =>
        post.hashtags.some(tag => tag.hashtag.name === `#${selectedCategory}`)
      )
    : posts;

  // limitが指定されている場合は、その件数まで制限
  const displayPosts = limit ? filteredPosts.slice(0, limit) : filteredPosts;

  return (
    <div className={cn(className)}>
      {showFilter && (
        <NoteFilter
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
					className="mb-10 md:mb-16"
        />
      )}
      <div className="grid md:grid-cols-2 gap-5">
        {displayPosts.map((post) => (
          <NoteCard
            key={post.id}
            post={post}
          />
        ))}
      </div>
      {displayPosts.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600">該当する記事が見つかりませんでした。</p>
        </div>
      )}
      {limit && filteredPosts.length > limit && (
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            {limit}件 / 全{filteredPosts.length}件を表示
            {selectedCategory && ` (${selectedCategory})`}
          </p>
        </div>
      )}
    </div>
  );
}
