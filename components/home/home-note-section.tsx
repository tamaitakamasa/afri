// components/home/home-note-section.tsx
import Image from "next/image";
// import Heading from "../common/heading";
import NoteList from "../features/note/note-list";
import noteIcon from "@/public/images/note_icon.svg";
import { NOTE_URL } from "@/constants/site";
import PrimaryButton from "../common/primary-button";
import Heading from "../common/heading";
import { ArrowUpRight } from "lucide-react";

export default function HomeNoteSection() {
  return (
    <section id="column" className="container-xl py-16 md:py-20">
      <div className="xl:sticky top-0 z-20 flex items-center justify-between py-4 sm:relative sm:px-0 sm:py-8">
        <Heading title="Column" />
        <PrimaryButton label="View More" url="/column" />
      </div>
      <div className="mt-4 sm:mt-6">
        <p className="text-sm md:text-base">私たちの活動やプロジェクトについて発信しています。</p>
        <a
          href={NOTE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-fit items-center gap-[2px] mt-3"
        >
          <Image src={noteIcon} alt="note" />
          <ArrowUpRight strokeWidth={1} className="size-6" />
        </a>
      </div>
      <NoteList className="relative md:mt-30 mt-12 xl:-right-24" limit={2} />
    </section>
  );
}
