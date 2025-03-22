// components/home/home-note-section.tsx
import Image from "next/image";
// import Heading from "../common/heading";
import NoteList from "../note/note-list";
import noteIcon from "@/public/images/note_icon.svg";
import Link from "next/link";
import { NOTE_URL } from "@/constants/site";
import ButtonPrimary from "../common/button-primary";
import AnimatedHeading from "../common/animated-heading";

export default function HomeNoteSection() {
  return (
    <section id="column" className="container-xl py-40">
      <div className="flex items-center justify-between">
        <AnimatedHeading title="Column" />
        <ButtonPrimary label="View More" url="#" />
      </div>
      <div className="mt-12">
        <p>私たちの活動やプロジェクトについて発信しています。</p>
        <Link href={NOTE_URL} target="_blank" className="mt-5 block">
          <Image src={noteIcon} alt="note" />
        </Link>
      </div>
      <NoteList className="mt-30" />
    </section>
  );
}
