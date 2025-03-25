"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { motion } from "motion/react";

function RouteLoadingIndicatorContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  // パスまたはクエリパラメータが変更されたときにローディングを表示
  useEffect(() => {
    const timeoutId = setTimeout(() => setIsLoading(false), 500);
    setIsLoading(true);
    return () => clearTimeout(timeoutId);
  }, [pathname, searchParams]);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 h-1 w-full bg-primary"
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    />
  );
}

export default function RouteLoadingIndicator() {
  return (
    <Suspense>
      <RouteLoadingIndicatorContent />
    </Suspense>
  );
}
