import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="left-0 right-0 top-0 bg-white shadow-md">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            <Link href="/">Home</Link>
          </h1>
          <div className="flex gap-2">
            <Button asChild variant={"ghost"}>
              <Link href="/sample/01">01</Link>
            </Button>
            <Button asChild variant={"ghost"}>
              <Link href="/sample/02">02</Link>
            </Button>
						<Button asChild variant={"ghost"}>
              <Link href="/sample/03">03</Link>
            </Button>
						<Button asChild variant={"ghost"}>
              <Link href="/sample/04">04</Link>
            </Button>
						<Button asChild variant={"ghost"}>
              <Link href="/sample/05">05</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
