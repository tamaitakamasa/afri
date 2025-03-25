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
      className="group h-12 cursor-pointer rounded-full !px-6 hover:!bg-primary"
      asChild
    >
      <Link href={url} target={target}>
        <div className="relative overflow-hidden">
          <span className="font-en inline-block text-sm font-bold uppercase transition-transform duration-300 group-hover:-translate-y-full">
            {label}
          </span>
          <span className="font-en absolute left-0 top-full text-sm font-bold uppercase transition-transform duration-300 group-hover:-translate-y-full">
            {label}
          </span>
        </div>
        <ArrowRight
          className="ml-1 !h-6 !w-6 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={1}
        />
      </Link>
    </Button>
  );
}
