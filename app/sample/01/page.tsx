"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

const ReactPlayer = dynamic(() => import("react-player"), {
	ssr: false,
});

// import VideoPlayer from "@/components/common/video-player";

interface VideoPlayerProps {
  url: string;
}

// クリップパスの定義
const clipPaths = {
  start: "polygon(50% 0%, 0% 100%, 100% 100%)", // 三角形
  middle: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // 長方形（全画面）
  end: "circle(50% at 50% 50%)", // 円形
};

function VideoPlayer({ url }: VideoPlayerProps) {
	const videoContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// コンポーネントがマウントされた後にスクロールイベントを設定
		if (!videoContainerRef.current) return;

		const container = videoContainerRef.current;

		// スクロールイベントハンドラ
		const handleScroll = () => {
			// ページの高さを取得
			const pageHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			// 現在のスクロール位置
			const scrollPosition = window.scrollY;
			// スクロール進捗率（0から1）
			const progress = Math.min(scrollPosition / pageHeight, 1);

			// 最初の遷移（三角形から長方形へ）: 0-0.3のスクロール範囲
			if (progress < 0.3) {
				const normalizedProgress = progress / 0.3; // 0から1の範囲に正規化
				container.style.clipPath =
					normalizedProgress < 0.01
						? clipPaths.start
						: `polygon(
							${50 - 50 * normalizedProgress}% ${0 + 0 * normalizedProgress}%,
							${100 - 0 * normalizedProgress}% ${0 + 0 * normalizedProgress}%,
							${100 - 0 * normalizedProgress}% ${100 - 0 * normalizedProgress}%,
							${0 + 0 * normalizedProgress}% ${100 - 0 * normalizedProgress}%
						)`;
			}
			// 二番目の遷移（長方形から円形へ）: 0.3-0.6のスクロール範囲
			else if (progress < 0.6) {
				const normalizedProgress = (progress - 0.3) / 0.3; // 0から1の範囲に正規化
				const radius = 50 * normalizedProgress;
				container.style.clipPath = `circle(${radius}% at 50% 50%)`;
			}
			// 最終形状（円形）: 0.6-1.0のスクロール範囲
			else {
				container.style.clipPath = clipPaths.end;
			}
		};

		// 初期状態を設定
		handleScroll();

		// スクロールイベントリスナーを追加
		window.addEventListener("scroll", handleScroll);

		// クリーンアップ関数
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<div
				ref={videoContainerRef}
				className="aspect-video h-screen w-full"
				style={{ clipPath: clipPaths.start }} // 初期状態
			>
				<ReactPlayer
					url={url}
					width="100%"
					height="100%"
					muted={true}
					controls={false}
					playing={true}
					playsinline={true}
					loop={true}
				/>
			</div>
		</>
	);
}

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
