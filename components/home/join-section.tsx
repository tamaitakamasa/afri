// components/home/join-section.tsx
import React from "react";
import { Section } from "../layout/section";

interface JoinSectionProps {
	title?: string;
}

export default function JoinSection({ title }: JoinSectionProps) {
  return (
    <Section>
      <Section.Left title={title}>
        <div>Left Column</div>
      </Section.Left>
      <Section.Right>
        <div className="min-h-40 bg-gray-100">Right Column</div>
      </Section.Right>
    </Section>
  );
}
