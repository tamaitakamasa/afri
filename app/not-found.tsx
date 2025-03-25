import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg text-muted-foreground">ページが見つかりませんでした</p>
      <Suspense fallback={<Button disabled>読み込み中...</Button>}>
        <Button asChild>
          <Link href="/">トップページに戻る</Link>
        </Button>
      </Suspense>
    </div>
  );
}
