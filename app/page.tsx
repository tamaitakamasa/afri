// app/page.tsx
// import AcademySection from "@/components/home/academy-section";
// import FoodTrailSection from "@/components/home/food-trail-section";
import AcademyJoinSection from "@/components/home/academy-join-section";
import HomeConceptSection from "@/components/home/home-concept-section";
import HomeFieldSection from "@/components/home/home-field-section";
import HomeHero from "@/components/home/home-hero";
import HomeNoteSection from "@/components/home/home-note-section";
import HomeTeamsSection from "@/components/home/home-teams-section";
import OfficeSection from "@/components/home/office-section";
// import JoinSection from "@/components/home/join-section";
// import TeamsSection from "@/components/home/team-section";



export default function Home() {
  return (
    <div className="w-full">
      <HomeHero />
			<HomeConceptSection />
			<HomeFieldSection />
      <HomeTeamsSection />
			<HomeNoteSection />
			<AcademyJoinSection />
			<OfficeSection />
    </div>
  );
}
