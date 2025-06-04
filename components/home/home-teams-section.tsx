// components/home/home-teams-section.tsx
import TeamList from "../team/team-list";
// import Heading from "../common/heading";
import Heading from "../common/heading";

export default function HomeTeamsSection() {
  return (
    <section id="team" className="bg-muted py-16 md:py-20 transition-bg">
      <div className="container-xl">
        <div className="relative md:flex w-full gap-40">
          <div className="md:sticky top-0 z-20 h-fit sm:block sm:px-0 sm:py-20">
            <Heading title="Team" className="sm:py-0" />
          </div>
          <div className="py-12 md:py-20">
            <TeamList />
          </div>
        </div>
      </div>
    </section>
  );
}
