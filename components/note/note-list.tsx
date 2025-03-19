import { getAllPosts } from "@/lib/note";
import { cn, formatDateToYYYYMMDD } from "@/lib/utils";
import { NoteArticle } from "@/types/note";
import Image from "next/image";

interface NoteListProps {
  className?: string;
}

export default async function NoteList({ className }: NoteListProps) {
  const noteData = await getAllPosts();
  const posts: NoteArticle[] = noteData.data.contents;
  // console.log(posts);

  return (
    <div className={cn(className)}>
      <div className="grid grid-cols-2 gap-5">
        {posts.map((post) => (
          <div key={post.id} className="">
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
            <div className="px-12 py-8 flex flex-col gap-4">
              <span className="text-xs font-bold text-gray-500">
                カテゴリー
              </span>
              <h2 className="line-clamp-2 text-xl tracking-wider">
                <a href={post.noteUrl} target="_blank">
                  {post.name}
                </a>
              </h2>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {post.hashtags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs tracking-wider"
                  >
                    {tag.hashtag.name}
                  </span>
                ))}
              </div>
              <time className="font-en font-bold tracking-[0.2em]">
                {formatDateToYYYYMMDD(post.publishAt)}
              </time>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
