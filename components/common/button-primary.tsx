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
    <Button className="h-12 cursor-pointer rounded-full !px-6" asChild>
      <Link href={url} target={target}>
        <span className="font-en text-sm font-bold uppercase relative bottom-[-1px]">
          {label}
        </span>
        <ArrowRight className="!h-6 !w-6" strokeWidth={1} />
      </Link>
    </Button>
  );
}
