import { formatDateToYYYYMMDD } from "@/lib/utils";
import { NoteArticle } from "@/types/note";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NoteCardProps {
  post: NoteArticle;
}

export function NoteCard({ post }: NoteCardProps) {
  return (
    <div className="md:border-r md:border-gray-200">
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
      <div className="flex flex-col gap-4 px-4 md:px-10 py-6 md:py-8">
        <span className="text-xs font-bold text-gray-400">
          カテゴリー
        </span>
        <h2 className="md:line-clamp-2 text-lg md:text-xl font-medium md:font-normal tracking-wider">
          <a href={post.noteUrl} target="_blank">
            {post.name}
          </a>
        </h2>
        <div className="mt-4 md:mt-5 flex flex-wrap gap-1.5">
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
