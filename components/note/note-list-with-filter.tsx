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
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // フィルタリングされた記事を取得
  const filteredPosts = selectedTag
    ? posts.filter(post =>
        post.hashtags.some(tag => tag.hashtag.name === selectedTag)
      )
    : posts;

  // limitが指定されている場合は、その件数まで制限
  const displayPosts = limit ? filteredPosts.slice(0, limit) : filteredPosts;

  return (
    <div className={cn(className)}>
      {showFilter && (
        <NoteFilter
          posts={posts}
          selectedTag={selectedTag}
          onTagSelect={setSelectedTag}
        />
      )}
      <div className="grid md:grid-cols-2 gap-5">
        {displayPosts.map((post, index) => (
          <NoteCard
            key={post.id}
            post={post}
            hasBorder={index % 2 === 0}
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
            {selectedTag && ` (${selectedTag})`}
          </p>
        </div>
      )}
    </div>
  );
}
