import { formatDateToYYYYMMDD } from "@/lib/utils";
import { NoteArticle } from "@/types/note";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NoteCardProps {
  post: NoteArticle;
  hasBorder?: boolean;
}

export function NoteCard({ post, hasBorder = false }: NoteCardProps) {
  return (
    <div className={hasBorder ? "md:border-r md:border-gray-200" : ""}>
      <figure className="relative aspect-[460/345] overflow-hidden">
        <Link
          href={post.noteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Image
            src={post.eyecatch}
            alt={post.name}
            fill
            sizes="50vw"
            style={{ objectFit: "cover" }}
            className="transition-transform duration-500 ease-out hover:scale-110"
          />
        </Link>
        <div className="absolute bottom-5 right-5 z-10">
          <div className="rounded-full bg-zinc-700 px-4 py-1">
            <ArrowUpRight color="white" strokeWidth={1.5} />
          </div>
        </div>
      </figure>
      <div className="flex flex-col gap-4 px-8 md:px-12 py-8">
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
