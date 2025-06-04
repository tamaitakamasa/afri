import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { ReactNode } from "react";

interface CustomLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  isExternal?: boolean;
  showIcon?: boolean;
  iconSize?: number;
  iconClassName?: string;
}

export function CustomLink({
  href,
  children,
  className = "",
  isExternal = false,
  showIcon = true,
  iconSize = 16,
  iconClassName = "",
}: CustomLinkProps) {
  const linkProps = isExternal
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  const shouldShowIcon = showIcon && isExternal;

  const content = (
    <>
      {children}
      {shouldShowIcon && (
        <ArrowUpRight
          size={iconSize}
          className={cn("inline-block ", iconClassName)}
        />
      )}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        {...linkProps}
        className={cn("inline-flex items-center gap-1 underline hover:no-underline hover:opacity-80 transition-opacity", className)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cn("inline-flex items-center gap-1 underline hover:no-underline hover:opacity-80 transition-opacity", className)}
    >
      {content}
    </Link>
  );
}
