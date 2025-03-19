// import AcademySection from "@/components/home/academy-section";
// import FoodTrailSection from "@/components/home/food-trail-section";
import AcademyJoinSection from "@/components/home/academy-join-section";
import Hero from "@/components/home/hero";
import HomeConceptSection from "@/components/home/home-concept-section";
import HomeFieldSection from "@/components/home/home-field-section";
import HomeNoteSection from "@/components/home/home-note-section";
import HomeTeamsSection from "@/components/home/home-teams-section";
import OfficeSection from "@/components/home/office-section";
// import JoinSection from "@/components/home/join-section";
// import TeamsSection from "@/components/home/team-section";



export default function Home() {
  return (
    <div className="w-full">
      <Hero />
			<HomeConceptSection />
			<HomeFieldSection />
      <HomeTeamsSection />
			<HomeNoteSection />
			<AcademyJoinSection />
			<OfficeSection />
    </div>
  );
}
