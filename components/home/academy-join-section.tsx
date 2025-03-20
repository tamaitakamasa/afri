// components/home/academy-join-section.tsx
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import academyImage from "../../public/images/academy.jpg";
import Heading from "../common/heading";
import ButtonPrimary from "../common/button-primary";

export default function AcademyJoinSection() {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row">
        {/* Academy側 - 左半分 */}
        <div className="flex flex-1 flex-col items-center bg-zinc-800 px-16 py-40 text-white">
          <Heading title="Academy" />
          <div className="mt-15 w-[400px]">
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
        <div className="flex flex-1 flex-col items-center bg-gray-100 p-16 py-40">
          <Heading title="Join Us" />
          <p className="mt-42 mb-16 max-w-[400px]">
            食の研究やプロジェクトにご関心のある方、自治体・企業・団体様、ぜひご連絡ください。
          </p>
          <ButtonPrimary label="Contact" url="#" />
        </div>
      </div>
    </div>
  );
}
