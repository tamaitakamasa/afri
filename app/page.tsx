// import AcademySection from "@/components/home/academy-section";
// import FoodTrailSection from "@/components/home/food-trail-section";
import Hero from "@/components/home/hero";
import HomeTeamsSection from "@/components/home/home-teams-section";
// import JoinSection from "@/components/home/join-section";
// import TeamsSection from "@/components/home/team-section";



export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <HomeTeamsSection title="TEAMS" />
      {/* <FoodTrailSection title="AWAJI FOOD TRAIL" />
			<AcademySection title="ACADEMY" />
			<JoinSection title="JOIN US" /> */}
    </div>
  );
}
