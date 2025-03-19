// app/sample/00/page.tsx
import AcademySection from "@/components/home/academy-section";
import FoodTrailSection from "@/components/home/food-trail-section";
import Hero from "@/components/home/hero";
import JoinSection from "@/components/home/join-section";
import SampleTeamsSection from "@/components/home/sample-teams-section";



export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <SampleTeamsSection title="TEAMS" />
      <FoodTrailSection title="AWAJI FOOD TRAIL" />
			<AcademySection title="ACADEMY" />
			<JoinSection title="JOIN US" />
    </div>
  );
}
