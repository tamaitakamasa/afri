// components/common/button-primary.tsx

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface ButtonPrimaryProps {
  label: string;
  url: string;
  target?: string;
}

export default function ButtonPrimary({
  label,
  url,
  target,
}: ButtonPrimaryProps) {
  return (
    <Button className="h-12 cursor-pointer rounded-full !px-6 group" asChild>
      <Link href={url} target={target}>
        <div className="relative overflow-hidden">
          <span className="font-en text-sm font-bold uppercase inline-block transition-transform duration-300 group-hover:-translate-y-full">
            {label}
          </span>
          <span className="font-en text-sm font-bold uppercase absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-full">
            {label}
          </span>
        </div>
        <ArrowRight
          className="!h-6 !w-6 ml-1 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={1}
        />
      </Link>
    </Button>
  );
}
