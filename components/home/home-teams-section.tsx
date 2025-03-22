// components/home/home-teams-section.tsx
import TeamList from "../team/team-list";
// import Heading from "../common/heading";
import AnimatedHeading from "../common/animated-heading";

export default function HomeTeamsSection() {
  return (
    <section id="team" className="bg-muted py-20 transition-bg">
      <div className="mx-auto max-w-[1000px]">
        <div className="relative md:flex w-full gap-40">
          <div className="sticky top-0 h-fit py-20">
            <AnimatedHeading title="Team" />
          </div>
          <div className="py-20">
            <TeamList />
          </div>
        </div>
      </div>
    </section>
  );
}
