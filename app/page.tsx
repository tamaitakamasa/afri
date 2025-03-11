// "use client";

import Typewriter from "@/components/common/typewriter";


export default function Home() {
  return (
    <div className="fixed inset-0 h-screen w-full">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1 className="text-6xl font-bold">
					<Typewriter
            sequences={[
							"awaji",
              800,
              "awaji food research",
              800,
              "awaji food research institute",
              800,
            ]}
            className="uppercase"
          />
        </h1>
      </div>
    </div>
  );
}
