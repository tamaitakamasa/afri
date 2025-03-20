// components/home/home-teams-section.tsx
import TeamList from "../team/team-list";
import Heading from "../common/heading";

export default function HomeTeamsSection() {
  return (
    <section className="bg-muted py-20">
      <div className="mx-auto max-w-[1000px]">
        <div className="relative flex w-full gap-40">
          <div className="sticky top-0 h-fit py-20">
            <Heading title="Team" />
          </div>
          <div className="py-20">
            <TeamList />
          </div>
        </div>
      </div>
    </section>
  );
}
