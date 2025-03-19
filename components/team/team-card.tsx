interface TeamCardProps {
  name: string;
  en: string;
  company?: string;
  description: string;
}

export default function TeamCard({
  name,
  en,
  company,
  description,
}: TeamCardProps) {
  return (
    <div>
      <div className="flex gap-4">
        <div className="aspect-square w-full max-w-[400px] bg-gray-100"></div>
        <div className="flex flex-col justify-center gap-4 p-4">
          <hgroup className="flex flex-col gap-8">
            {company && (
              <h3 className="text-xs font-bold tracking-[0.15em]">
                {company}
              </h3>
            )}
            <h2 className="flex flex-col gap-1">
              <span className="text-xl">{name}</span>
              <span className="text-sm font-bold text-gray-500 font-en uppercase">
                {en}
              </span>
            </h2>
          </hgroup>
        </div>
      </div>
      <div className="mt-8">
        <p className="whitespace-pre-wrap">{description}</p>
      </div>
    </div>
  );
}
