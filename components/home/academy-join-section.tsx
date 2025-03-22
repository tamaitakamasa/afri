// components/home/academy-join-section.tsx
import Image from "next/image";

import academyImage from "../../public/images/academy.webp";
// import Heading from "../common/heading";
import ButtonPrimary from "../common/button-primary";
import AnimatedHeading from "../common/animated-heading";

export default function AcademyJoinSection() {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row">
        {/* Academy側 - 左半分 */}
        <div className="flex flex-1 flex-col items-center bg-zinc-800 px-16 py-40 text-white">
          <AnimatedHeading title="Academy" />
          <div className="mt-15 md:w-[400px]">
            <div className="relative mb-8 aspect-[400/266] w-full">
              <Image
                src={academyImage}
                alt="Academy"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center tracking-wider">
              2025年プレセミナー始動、2026年開講予定！
            </p>
          </div>
        </div>

        {/* Join Us側 - 右半分 */}
        <div className="bg-muted transition-bg flex flex-1 flex-col items-center p-16 py-40">
          <AnimatedHeading title="Join Us" />
          <p className="mt-42 mb-16 max-w-[400px]">
            食の研究やプロジェクトにご関心のある方、自治体・企業・団体様、ぜひご連絡ください。
          </p>
          <ButtonPrimary label="Contact" url="#" />
        </div>
      </div>
    </div>
  );
}
