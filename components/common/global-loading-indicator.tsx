"use client";

import { loadingEmitter } from "@/lib/utils";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function GlobalLoadingIndicator() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // ローディングイベントをサブスクライブする
    const unsubscribe = loadingEmitter.subscribe((type) => {
      if (type === "start") {
        setIsLoading(true);
      } else {
        setIsLoading(false);
      }
    });

    // クリーンアップ
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed top-0 left-0 z-50 h-1 w-full bg-primary"
          initial={{ scaleX: 0, transformOrigin: "left" }}
          animate={{
            scaleX: [0, 0.3, 0.6, 0.9],
            transition: {
              duration: 0.8,
              ease: "easeInOut",
              times: [0, 0.2, 0.6, 1],
              repeat: Infinity
            }
          }}
          exit={{
            scaleX: 1,
            opacity: 0,
            transition: { duration: 0.3, ease: "easeInOut" }
          }}
        />
      )}
    </AnimatePresence>
  );
}
