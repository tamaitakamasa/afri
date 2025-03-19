import { getAllPosts } from "@/lib/note";
import { cn } from "@/lib/utils";
import { NoteArticle } from "@/types/note";
import Image from "next/image";

interface NoteListProps {
  className?: string;
}

export default async function NoteList({ className }: NoteListProps) {
  const noteData = await getAllPosts();
  const posts: NoteArticle[] = noteData.data.contents;
  console.log(posts);

  return (
    <div className={cn(className)}>
      <div className="grid grid-cols-2 gap-5">
        {posts.map((post) => (
          <div key={post.id} className="flex flex-col gap-4">

            <figure className="relative aspect-[460/345]">
              <a
                href={post.noteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={post.eyecatch}
                  alt={post.name}
                  fill
                  sizes="50vw"
                  style={{ objectFit: "cover" }}
                />
              </a>
            </figure>
						<span className="font-bold text-xs text-gray-500">カテゴリー</span>
            <h2 className="text-xl tracking-wider line-clamp-2">
              <a
                href={post.noteUrl}
                target="_blank"
              >
                {post.name}
              </a>
            </h2>
            <div className="flex gap-2 flex-wrap">
              {post.hashtags.map((tag, index) => (
                <span key={index} className="text-xs">
                  {tag.hashtag.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
