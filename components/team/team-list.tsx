// components/team/team-list.tsx
import TeamCard from "./team-card";
import tomitaImage from "../../public/images/team_tomita.webp";
import sowaImage from "../../public/images/team_sowa.webp";
import kitaImage from "../../public/images/team_kita.webp";
import { StaticImageData } from "next/image";

interface TeamMember {
  name: string;
  en: string;
  company?: string;
  description: string;
  image?: StaticImageData;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "富田 祐介",
    en: "yusuke tomita",
    company: "株式会社シマトワークス",
    description:
      "株式会社シマトワークス代表取締役。神戸市出身。\n大学卒業後フリーランスで建築設計を行い、淡路島で活動。2007年より東京で設計会社に勤務。その側ら、東京や淡路島でイベント企画を行う。2012年、島に移住。2014年「シマトワークス」として独立し、島を拠点に観光、人材育成、コンサル等、幅広く活動している。",
    image: tomitaImage,
  },
  {
    name: "宗和 まりも",
    en: "marimo sowa",
    description:
      "淡路市出身。\n出版社にて雑誌編集/ライター業を経て、EC事業会社へ転職。新規事業/マーケティング職を経験し、現在は独立して記事/Webサイト/動画などのコンテンツ作りや、中小企業のブランディング/マーケティング支援をする側ら、淡路島と大阪の2拠点生活を通じて『地元の魅力を伝える』活動中。",
    image: sowaImage,
  },
  {
    name: "北 祥子",
    en: "sachiko kita",
    company: "studio kahika",
    description:
      '明石市出身。\n大学にて建築を専攻後、東京で広告会社に入社し、企業のブランディングや広報活動に携わる。その後、都市デザイン・リノベーションまちづくりの領域から各地のプロジェクトに従事し、 2021年に独立。"地域の価値の編集と発信"を軸に、地域の事業者のブランディング戦略や事業企画、クリエイティブ制作、プロジェクトマネジメント等に幅広く携わる。2022年～淡路島在住。',
    image: kitaImage,
  },
];

export default function TeamList() {
  return (
    <div className="flex flex-col gap-40">
      {TEAM_MEMBERS.map((member, index) => (
        <TeamCard
          key={index}
          {...member}
          className={
            index % 1 === 0 ? "border-r border-gray-200 pr-10" : ""
          }
        />
      ))}
    </div>
  );
}
