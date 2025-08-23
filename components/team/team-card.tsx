// components/team/team-card.tsx
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";

interface TeamCardProps {
  name: string;
  en: string;
  company?: string;
  description: string;
  image?: StaticImageData;
  className?: string;
  noteUrl?: string;
}

export default function TeamCard({
  name,
  en,
  company,
  description,
  image,
  className,
  noteUrl,
}: TeamCardProps) {
  return (
    <div className={cn(className)}>
      <div className="flex gap-0 md:gap-4">
        <div className="relative aspect-square w-[40vi] min-w-[180px] max-w-[400px] flex-shrink-0 sm:w-full md:w-[55vi]">
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="h-full w-full bg-gray-200"></div>
          )}
        </div>
        <div className="flex flex-col justify-center gap-4 p-4 sm:p-4 md:gap-6">
          <hgroup className="flex flex-col gap-4 md:gap-8">
            {company && (
              <h3 className="text-xs font-bold tracking-[0.15em]">
                {company}
              </h3>
            )}
            <h2 className="flex flex-col gap-1">
              <span className="text-xl sm:text-xl">{name}</span>
              <span className="font-en text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 sm:text-sm">
                {en}
              </span>
            </h2>
          </hgroup>
          {noteUrl && (
            <a
              href={noteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary flex w-fit items-center gap-1 rounded-full px-4 py-2 text-white transition-opacity hover:opacity-70"
            >
              <span className="text-[11px] font-medium md:text-xs">
                メンバー紹介
                <span className="hidden md:inline">（note）</span>
              </span>
              <ArrowUpRight
                strokeWidth={2}
                className="size-3 md:size-4"
              />
            </a>
          )}
        </div>
      </div>
      <div className="mt-4 md:mt-8">
        <p className="whitespace-pre-wrap text-xs leading-6 tracking-wider sm:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
