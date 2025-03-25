// components/common/button-primary.tsx

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface PrimaryButtonProps {
  label: string;
  url: string;
  target?: string;
}

export default function PrimaryButton({
  label,
  url,
  target,
}: PrimaryButtonProps) {
  return (
    <Button
      className="hover:!bg-primary group h-10 cursor-pointer rounded-full !px-4 sm:h-12 sm:!px-6"
      asChild
    >
      <Link href={url} target={target}>
        <div className="relative overflow-hidden">
          <span className="font-en inline-block text-xs font-bold uppercase transition-transform duration-300 group-hover:-translate-y-full sm:text-sm">
            {label}
          </span>
          <span className="font-en absolute left-0 top-full text-xs font-bold uppercase transition-transform duration-300 group-hover:-translate-y-full sm:text-sm">
            {label}
          </span>
        </div>
        <ArrowRight
          className="ml-1 !h-4 !w-4 transition-transform duration-300 group-hover:translate-x-1 sm:!h-6 sm:!w-6"
          strokeWidth={1}
        />
      </Link>
    </Button>
  );
}
