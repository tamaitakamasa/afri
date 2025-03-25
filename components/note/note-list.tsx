// components/note/note-list.tsx
import { getAllPosts } from "@/lib/note";
import { cn } from "@/lib/utils";
import { NoteArticle } from "@/types/note";
import { NoteCard } from "./note-card";

interface NoteListProps {
  className?: string;
}

export default async function NoteList({ className }: NoteListProps) {
  const noteData = await getAllPosts();
  const posts: NoteArticle[] = noteData.data.contents;
  // console.log(posts);

  return (
    <div className={cn(className)}>
      <div className="grid md:grid-cols-2 gap-5">
        {posts.map((post, index) => (
          <NoteCard
            key={post.id}
            post={post}
            hasBorder={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}
