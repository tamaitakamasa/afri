"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { loadingEmitter } from "@/lib/utils";
import { useEffect } from "react";

interface RouterTransitionProviderProps {
  children: React.ReactNode;
}

export default function RouterTransitionProvider({
  children,
}: RouterTransitionProviderProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // パスまたはクエリパラメータが変更されたときにローディングイベントを発行
  useEffect(() => {
    // 遷移が開始されたらローディング開始イベント発行
    loadingEmitter.emit("start");

    // 遷移が完了したらローディング終了イベント発行
    // わずかな遅延を追加してスムーズな体験にする
    const timeoutId = setTimeout(() => {
      loadingEmitter.emit("end");
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [pathname, searchParams]);

  return <>{children}</>;
}
