"use client";

import VideoPlayer from "@/components/common/video-player";

export default function Home() {
  return (
    <div className="relative min-h-[300vh]">
      {/* 固定位置の動画プレーヤー */}
      <div className="fixed inset-0 h-screen w-full">
        <VideoPlayer url="https://www.youtube.com/watch?v=4MgLFWefpbk" />
      </div>

      {/* スクロール用のコンテンツ */}
      <div className="relative z-10 mt-screen pt-[100vh]">
        <div className="mx-auto max-w-4xl space-y-32 p-8">
          <section className="rounded-lg bg-white/80 p-8 backdrop-blur-sm">
            <h2 className="mb-4 text-3xl font-bold">セクション 1</h2>
            <p className="text-lg">
              スクロールすると、上部の動画のクリップ形状が変化します。
              このデモでは、Motion Oneライブラリを使用して、スクロール位置に応じて
              動画のクリップパスを動的に変更しています。
            </p>
          </section>

          <section className="rounded-lg bg-white/80 p-8 backdrop-blur-sm">
            <h2 className="mb-4 text-3xl font-bold">セクション 2</h2>
            <p className="text-lg">
              さらにスクロールすると、クリップパスがさらに変化します。
              このようなエフェクトは、ウェブサイトに視覚的な興味を追加し、
              ユーザーエクスペリエンスを向上させることができます。
            </p>
          </section>

          <section className="rounded-lg bg-white/80 p-8 backdrop-blur-sm">
            <h2 className="mb-4 text-3xl font-bold">セクション 3</h2>
            <p className="text-lg">
              Motion Oneは軽量で高性能なアニメーションライブラリで、
              スクロールベースのアニメーションを簡単に実装できます。
              このデモでは、スクロール位置に基づいて複数のクリップパスの間を
              スムーズに遷移させています。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
