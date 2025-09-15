// components/home/academy-join-section.tsx
import Image from "next/image";

import academyImage from "../../public/images/academy.webp";
import PrimaryButton from "../common/primary-button";
import Heading from "../common/heading";

export default function AcademyJoinSection() {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row">
        {/* Academy側 - 左半分 */}
        <div
          id="academy"
          className="flex flex-1 flex-col items-center bg-zinc-800 px-16 py-20 text-white sm:py-40"
        >
          <Heading title="Academy" />
          <div className="mt-15 sm:max-w-[400px]">
            <div className="relative mb-8 aspect-[400/266] w-full">
              <Image
                src={academyImage}
                alt="Academy"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm tracking-wider sm:text-center sm:text-base">
              2025年プレセミナー始動、2026年開講予定！
            </p>
          </div>
        </div>

        {/* Join Us側 - 右半分 */}
        <div
          id="join"
          className="bg-muted transition-bg flex flex-1 flex-col items-center gap-10 p-16 sm:py-40"
        >
          <Heading title="Join Us" />
          <p className="sm:mt-42 max-w-[400px] text-sm sm:mb-16 sm:text-base">
            食の研究やプロジェクトにご関心のある方、自治体・企業・団体様、ぜひご連絡ください。
          </p>
          <PrimaryButton label="Contact" url="/contact" />
        </div>
      </div>
    </div>
  );
}
