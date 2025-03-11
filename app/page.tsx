// "use client";

import Hero from "@/components/home/hero";
import NoteList from "@/components/note/note-list";
import TeamList from "@/components/team/team-list";
// import { TypeAnimation } from "react-type-animation";


export default function Home() {
  return (
    <div className="h-screen w-full">
      <Hero />
			<TeamList />
			<NoteList />
    </div>
  );
}
