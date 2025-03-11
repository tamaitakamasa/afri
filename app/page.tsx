// "use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export const runtime = "edge";

export default function Home() {
  return (
    <div className="relative h-dvh">
      <div className="mx-auto max-w-2xl pt-40">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Button asChild>
            <Link href="/sample/01">sample 01</Link>
          </Button>
          <Button asChild>
            <Link href="/sample/02">sample 02</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
