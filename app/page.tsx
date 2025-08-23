// app/page.tsx

import AcademyJoinSection from "@/components/home/academy-join-section";
import HomeConceptSection from "@/components/home/home-concept-section";
import HomeFieldSection from "@/components/home/home-field-section";
import HomeVideo from "@/components/home/home-video";
// import HomeHero from "@/components/home/home-hero";
// import HomeHero from "@/components/home/home-hero2";
import HomeNoteSection from "@/components/home/home-note-section";
import HomeTeamsSection from "@/components/home/home-teams-section";
import OfficeSection from "@/components/home/office-section";
// import Hero from "@/components/home/hero";
// import VideoPlayer from "@/components/features/video/video-player";
// import Sample from "@/components/sample/sample";
import InstagramSection from "@/components/features/instagram/instagram-section";

export default function Home() {
  return (
    <div className="w-full">
			{/* <Hero /> */}
			<HomeVideo />
			{/* <Sample /> */}
      {/* <HomeHero /> */}
			<HomeConceptSection />
			<HomeFieldSection />
      <HomeTeamsSection />
			<HomeNoteSection />
			<AcademyJoinSection />
			<OfficeSection />
			<InstagramSection />
    </div>
  );
}
