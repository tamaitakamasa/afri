// components/team/team-card.tsx
import Image, { StaticImageData } from "next/image";

interface TeamCardProps {
  name: string;
  en: string;
  company?: string;
  description: string;
  image?: StaticImageData;
}

export default function TeamCard({
  name,
  en,
  company,
  description,
  image,
}: TeamCardProps) {
  return (
    <div>
      <div className="flex gap-4">
        <div className="aspect-square w-full max-w-[400px] relative">
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200"></div>
          )}
        </div>
        <div className="flex flex-col justify-center gap-4 p-4">
          <hgroup className="flex flex-col gap-8">
            {company && (
              <h3 className="text-xs font-bold tracking-[0.15em]">
                {company}
              </h3>
            )}
            <h2 className="flex flex-col gap-1">
              <span className="text-xl">{name}</span>
              <span className="font-en text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
                {en}
              </span>
            </h2>
          </hgroup>
        </div>
      </div>
      <div className="mt-8">
        <p className="whitespace-pre-wrap tracking-wider text-sm leading-6">{description}</p>
      </div>
    </div>
  );
}
