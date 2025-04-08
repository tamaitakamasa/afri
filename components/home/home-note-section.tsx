// components/home/home-note-section.tsx
import Image from "next/image";
// import Heading from "../common/heading";
import NoteList from "../note/note-list";
import noteIcon from "@/public/images/note_icon.svg";
import Link from "next/link";
import { NOTE_URL } from "@/constants/site";
import AnimatedHeading from "../common/animated-heading";
import PrimaryButton from "../common/primary-button";

export default function HomeNoteSection() {
  return (
    <section id="column" className="container-xl py-20">
      <div className="sticky top-0 z-20 flex items-center justify-between px-8 py-4 sm:relative sm:px-0 sm:py-8">
        <AnimatedHeading title="Column" />
        <PrimaryButton label="View More" url="#" />
      </div>
      <div className="mt-8 px-8 sm:mt-12 sm:px-0">
        <p>私たちの活動やプロジェクトについて発信しています。</p>
        <Link
          href={NOTE_URL}
          target="_blank"
          className="mt-4 block md:mt-5"
        >
          <Image src={noteIcon} alt="note" />
        </Link>
      </div>
      <NoteList className="md:mt-30 mt-12" />
    </section>
  );
}
