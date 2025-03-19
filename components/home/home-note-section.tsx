import Heading from "../common/heading";
import NoteList from "../note/note-list";
import { Button } from "../ui/button";

export default function HomeNoteSection() {
  return (
    <section className="container-xl py-40">
			<div className="flex justify-between">
				<Heading title="note" />
				<Button className="mt-4">view more</Button>
			</div>
			<div>
				<p>私たちの活動やプロジェクトについて発信しています。</p>
			</div>
			<NoteList className="mt-30" />
    </section>
  );
}
