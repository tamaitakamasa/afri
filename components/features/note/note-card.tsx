import {
  formatDateToYYYYMMDD,
  getCategoryFromPost,
} from "@/lib/utils";
import { NoteArticle } from "@/types/note";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface NoteCardProps {
  post: NoteArticle;
}

export function NoteCard({ post }: NoteCardProps) {
  const category = getCategoryFromPost(post);

  return (
    <div className="md:border-r md:border-gray-200 dark:md:border-white/40">
      <a
        href={post.noteUrl}
        target="_blank"
        className="block"
      >
        <figure className="relative aspect-[460/345] overflow-hidden">
          <Image
            src={post.eyecatch}
            alt={post.name}
            fill
            sizes="50vw"
            style={{ objectFit: "cover" }}
            className="transition-transform duration-500 ease-out hover:scale-110"
          />

          <div className="absolute bottom-5 right-5 z-10">
            <div className="rounded-full bg-zinc-700 px-4 py-1">
              <ArrowUpRight color="white" strokeWidth={1.5} />
            </div>
          </div>
        </figure>
      </a>
      <div className="flex flex-col gap-4 px-4 py-6 md:px-10 md:py-8">
        {category && (
          <span className="text-xs font-bold text-gray-400">
            {category}
          </span>
        )}
        <h2 className="text-lg font-medium tracking-wider md:line-clamp-2 md:text-xl md:font-normal">
          <a href={post.noteUrl} target="_blank" className="hover:opacity-70 transition-opacity">
            {post.name}
          </a>
        </h2>
        <div className="mt-4 flex flex-wrap gap-1.5 md:mt-5">
          {post.hashtags.map((tag, index) => (
            <span key={index} className="text-xs tracking-wider">
              {tag.hashtag.name}
            </span>
          ))}
        </div>
        <time className="font-en font-bold tracking-[0.2em]">
          {formatDateToYYYYMMDD(post.publishAt)}
        </time>
      </div>
    </div>
  );
}
