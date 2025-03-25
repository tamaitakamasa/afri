import Link from "next/link";
import { ReactNode } from "react";

interface AnimatedTextLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export function AnimatedTextLink({
  href,
  children,
  className = "",
  target,
  rel,
  onClick,
}: AnimatedTextLinkProps) {
  return (
    <Link
      href={href}
      className={`relative overflow-hidden group ${className}`}
      target={target}
      rel={rel}
      onClick={onClick}
    >
      <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0">
        {children}
      </span>
    </Link>
  );
}
