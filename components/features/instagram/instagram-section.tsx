import InstagramFeed from "./InstagramFeed";
import Heading from "@/components/common/heading";
import { INSTAGRAM_URL } from "@/constants/site";
import { ArrowUpRight, Instagram } from "lucide-react";

export default function InstagramSection() {
  return (
    <div className="py-20 md:py-30 bg-zinc-800 text-white overflow-clip">
      <div className="container-xl">
        <Heading title="Instagram" />

        <p className="mt-8 text-sm md:text-base md:mt-12">
          研究員が日々のフィールドで出会った、「食」の見聞録。
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-fit items-center gap-[2px] mt-3"
        >
          <Instagram className="size-6" />
          <ArrowUpRight strokeWidth={1} className="size-6" />
        </a>
        <InstagramFeed className="mt-12" />
      </div>
    </div>
  );
}
