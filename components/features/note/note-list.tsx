// components/note/note-list.tsx
import { getAllPosts } from "@/lib/note";
import { cn } from "@/lib/utils";
import { NoteArticle } from "@/types/note";
import { NoteCard } from "./note-card";

interface NoteListProps {
  className?: string;
  limit?: number;
}

export default async function NoteList({ className, limit }: NoteListProps) {
  const noteData = await getAllPosts();
  const posts: NoteArticle[] = noteData.data.contents;
	console.log(posts);

  // limitが指定されている場合は、その件数まで制限
  const displayPosts = limit ? posts.slice(0, limit) : posts;

  return (
    <div className={cn(className)}>
      <div className="grid md:grid-cols-2 gap-12 md:gap-5">
        {displayPosts.map((post) => (
          <NoteCard
            key={post.id}
            post={post}
          />
        ))}
      </div>
      {limit && posts.length > limit && (
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            {limit}件 / 全{posts.length}件を表示
          </p>
        </div>
      )}
    </div>
  );
}
