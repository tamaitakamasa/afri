// components/team/team-card.tsx
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

interface TeamCardProps {
  name: string;
  en: string;
  company?: string;
  description: string;
  image?: StaticImageData;
  className?: string;
}

export default function TeamCard({
  name,
  en,
  company,
  description,
  image,
  className,
}: TeamCardProps) {
  return (
    <div className={cn(className)}>
      <div className="flex gap-0 md:gap-4">
        <div className="flex-shrink-0 relative aspect-square w-[55vi] sm:w-full max-w-[400px] min-w-[200px]">
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
        <div className="flex flex-col justify-center gap-4 p-4 sm:p-4">
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
        </div>
      </div>
      <div className="mt-4 md:mt-8">
        <p className="whitespace-pre-wrap text-xs sm:text-sm leading-6 tracking-wider">
          {description}
        </p>
      </div>
    </div>
  );
}
