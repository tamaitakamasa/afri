

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
          <hgroup>
            {company && <h3>{company}</h3>}
            <h2 className="flex flex-col gap-1">
              <span>{name}</span>
              <span>{en}</span>
            </h2>
          </hgroup>
        </div>
      </div>
      <div className="p-4">
        <p>{description}</p>
      </div>
    </div>
  );
}
