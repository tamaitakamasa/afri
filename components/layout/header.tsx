import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            <Link href="/">Home</Link>
          </h1>
          <div>
            <Button asChild>
              <Link href="/sample/01">sample 01</Link>
            </Button>
            <Button asChild>
              <Link href="/sample/02">sample 02</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
