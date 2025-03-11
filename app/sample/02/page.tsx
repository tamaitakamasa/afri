import VideoPlayer from "@/components/common/video-player";

const clipPaths = {
  start: "polygon(50% 0%, 0% 100%, 100% 100%)", // 三角形
  middle: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // 長方形（全画面）
  end: "circle(50% at 50% 50%)", // 円形
};

export default function Page() {
	return (
		<div style={{ clipPath: clipPaths.end }}>
			<VideoPlayer url="https://www.youtube.com/watch?v=9bZkp7q19f0" />
		</div>
	)
}
