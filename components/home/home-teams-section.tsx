// components/home/home-teams-section.tsx
import TeamList from "../team/team-list";
// import Heading from "../common/heading";
import Heading from "../common/heading";

export default function HomeTeamsSection() {
  return (
    <section id="team" className="bg-muted py-20 transition-bg">
      <div className="mx-auto max-w-[1000px]">
        <div className="relative md:flex w-full gap-40">
          <div className="sticky top-0 z-20 h-fit sm:block sm:px-0 sm:py-8">
            <Heading title="Team" className="px-8 sm:px-0 py-4 sm:py-0" />
          </div>
          <div className="py-20">
            <TeamList />
          </div>
        </div>
      </div>
    </section>
  );
}
