import React from "react";
import { Section } from "../layout/section";
import NoteList from "../note/note-list";

interface FoodTrailSectionProps {
	title?: string;
}

export default function FoodTrailSection({ title }: FoodTrailSectionProps) {
  return (
    <Section className="bg-gray-50">
      <Section.Left title={title} />
      <Section.Right>
        <NoteList />
      </Section.Right>
    </Section>
  );
}
