import React from "react";
import { Section } from "../layout/section";
import TeamList from "../team/team-list";

interface TeamsSectionProps {
	title?: string;
}

export default function HomeTeamsSection({ title }: TeamsSectionProps) {
  return (
    <Section>
      <Section.Left title={title} />
      <Section.Right>
        <TeamList />
      </Section.Right>
    </Section>
  );
}
