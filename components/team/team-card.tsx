import Link from "next/link";

interface TeamCardProps {
  name: string;
  en: string;
  company?: string;
  link?: string;
}

export default function TeamCard({
  name,
  en,
  company,
  link,
}: TeamCardProps) {
  return (
    <div>
      <div className="flex gap-4">
        <div className="aspect-square w-full bg-gray-100 max-w-[400px]"></div>
        <div className="flex flex-col justify-center gap-4 p-4">
          <hgroup>
            {company && <h3>{company}</h3>}
            <h2 className="flex flex-col gap-1">
              <span>{name}</span>
              <span>{en}</span>
            </h2>
            {link && <Link href={link}>note</Link>}
          </hgroup>
        </div>
      </div>
    </div>
  );
}
