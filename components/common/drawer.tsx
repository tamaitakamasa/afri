"use client";

import Link from 'next/link';
import { X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { useEffect } from 'react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Drawer({ isOpen, onClose }: DrawerProps) {
  // ドロワーが開いている時はbodyのスクロールを無効にする
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[280px] sm:w-[350px]">
        <SheetHeader className="mb-6">
          <div className="flex justify-between items-center">
            <SheetTitle className="text-left">メニュー</SheetTitle>
            <SheetClose className="rounded-full hover:bg-muted p-1" aria-label="メニューを閉じる">
              <X size={20} />
            </SheetClose>
          </div>
        </SheetHeader>

        <nav className="mt-8">
          <ul className="space-y-6">
            <li>
              <SheetClose asChild>
                <Link
                  href="/"
                  className="block text-lg text-foreground hover:text-muted-foreground transition-colors"
                >
                  ホーム
                </Link>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <Link
                  href="/about"
                  className="block text-lg text-foreground hover:text-muted-foreground transition-colors"
                >
                  私たちについて
                </Link>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <Link
                  href="/research"
                  className="block text-lg text-foreground hover:text-muted-foreground transition-colors"
                >
                  研究
                </Link>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <Link
                  href="/contact"
                  className="block text-lg text-foreground hover:text-muted-foreground transition-colors"
                >
                  お問い合わせ
                </Link>
              </SheetClose>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
