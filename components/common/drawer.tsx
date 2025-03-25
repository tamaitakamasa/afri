"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useEffect } from "react";
import Footer from "../layout/footer";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavDrawer({ isOpen, onClose }: DrawerProps) {
  // ドロワーが開いている時はbodyのスクロールを無効にする
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="bg-muted">
        <DrawerHeader>
          <DrawerTitle className="sr-only">
            ナビゲーションメニュー
          </DrawerTitle>
        </DrawerHeader>
        <div>
          <Footer onLinkClick={onClose} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
