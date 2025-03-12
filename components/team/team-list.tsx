import TeamCard from "./team-card";

const TEAM_MEMBERS = [
  {
    name: "富田 祐介",
    en: "yusuke tomita",
    company: "株式会社シマトワークス",
    link: "https://note.com/foodtrail/n/n488a9300abbf",
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
    <div className="flex w-full flex-col gap-4">
      {TEAM_MEMBERS.map((member, index) => (
        <TeamCard key={index} {...member} />
      ))}
    </div>
  );
}
