import TeamCard from "./team-card";

const TEAM_MEMBERS = [
  {
    name: "富田 祐介",
    en: "yusuke tomita",
    company: "株式会社シマトワークス",
    link: "#",
  },
  {
    name: "宗和 まりも",
    en: "marimo sowa",
    // company: "株式会社シマトワークス",
    link: "#",
  },
  {
    name: "北 祥子",
    en: "sachiko kita",
    company: "studio kahika",
    link: "#",
  },
];

export default function TeamList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative flex">
        <div className="min-w-1/4 sticky top-0 h-fit py-24">
          <h2 className="text-2xl font-semibold">TEAMS</h2>
        </div>
        <div className="flex w-full flex-col gap-4">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}
