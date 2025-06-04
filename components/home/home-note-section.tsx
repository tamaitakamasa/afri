// components/home/home-note-section.tsx
import Image from "next/image";
// import Heading from "../common/heading";
import NoteList from "../features/note/note-list";
import noteIcon from "@/public/images/note_icon.svg";
import Link from "next/link";
import { NOTE_URL } from "@/constants/site";
import PrimaryButton from "../common/primary-button";
import Heading from "../common/heading";

export default function HomeNoteSection() {
  return (
    <section id="column" className="container-xl py-16 md:py-20">
      <div className="md:sticky top-0 z-20 flex items-center justify-between md:px-8 py-4 sm:relative sm:px-0 sm:py-8">
        <Heading title="Column" />
        <PrimaryButton label="View More" url="/column" />
      </div>
      <div className="mt-8 md:px-8 sm:mt-12 sm:px-0">
        <p className="text-sm md:text-base">私たちの活動やプロジェクトについて発信しています。</p>
        <Link
          href={NOTE_URL}
          target="_blank"
          className="mt-4 block md:mt-5"
        >
          <Image src={noteIcon} alt="note" />
        </Link>
      </div>
      <NoteList className="md:mt-30 mt-12" limit={2} />
    </section>
  );
}
