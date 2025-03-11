"use client";

import Typewriter from "@/components/common/typewriter";

export default function Page() {
  return (
    <div className="fixed inset-0 h-screen w-full">
      <div className="h-full w-full flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold">
          I am a{" "}
          <Typewriter
            sequences={[
              "developer",
              2000,
              "designer",
              2000,
              "creator",
              2000,
            ]}
            className="text-blue-600"
          />
        </h1>
      </div>
    </div>
  );
}
