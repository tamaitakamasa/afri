import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  className?: string;
}

export default function Heading({ title, className }: HeadingProps) {
  return (
    <h2
      className={cn(
        className,
        "font-en text-[28px] sm:text-3xl font-bold uppercase tracking-widest",
      )}
    >
      {title}
    </h2>
  );
}
