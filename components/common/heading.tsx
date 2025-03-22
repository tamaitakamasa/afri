import { cn } from "@/lib/utils";
import AnimatedText from "./animated-text";

interface HeadingProps {
  title: string;
  className?: string;
}

export default function Heading({ title, className }: HeadingProps) {
  return (
    <AnimatedText
      className={cn(
        className,
        "font-en text-3xl font-bold uppercase tracking-widest",
      )}
    >
      {title}
    </AnimatedText>
  );
}
