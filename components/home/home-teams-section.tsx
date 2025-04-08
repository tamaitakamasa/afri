// components/home/home-teams-section.tsx
import TeamList from "../team/team-list";
// import Heading from "../common/heading";
import AnimatedHeading from "../common/animated-heading";

export default function HomeTeamsSection() {
  return (
    <section id="team" className="bg-muted py-20 transition-bg">
      <div className="mx-auto max-w-[1000px]">
        <div className="relative md:flex w-full gap-40">
          <div className="sticky top-0 z-20 h-fit sm:block sm:px-0 sm:py-8">
            <AnimatedHeading title="Team" className="" />
          </div>
          <div className="py-20">
            <TeamList />
          </div>
        </div>
      </div>
    </section>
  );
}
