// import Image from "next/image";

import VideoPlayer from "@/components/common/video-player";

export default function Home() {
  return (
    <div className="">
      <div className="absolute inset-0 h-full w-full">
        <VideoPlayer url="https://www.youtube.com/watch?v=4MgLFWefpbk" />
        {/* <div
          className="absolute inset-0 bg-white"
          style={{
            clipPath:
              "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 20% 0%, 20% 20%, 80% 20%, 80% 80%, 20% 80%, 20% 20%, 20% 0%, 0% 0%)",
          }}
        /> */}

      </div>
    </div>
  );
}
