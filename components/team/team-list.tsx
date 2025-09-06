// components/team/team-list.tsx
import TeamCard from "./team-card";
import tomitaImage from "../../public/images/team_tomita.webp";
import sowaImage from "../../public/images/team_sowa.webp";
import kitaImage from "../../public/images/team_kita.webp";
import fujitaImage from "../../public/images/team_fujita.webp";
import { StaticImageData } from "next/image";

interface TeamMember {
  name: string;
  en: string;
  company?: string;
  description: string;
  image?: StaticImageData;
	noteUrl?: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "富田 祐介",
    en: "yusuke tomita",
    company: "株式会社シマトワークス",
    description:
      "株式会社シマトワークス代表取締役。神戸市出身。\n大学卒業後フリーランスで建築設計を行い、淡路島で活動。2007年より東京で設計会社に勤務。その側ら、東京や淡路島でイベント企画を行う。2012年、島に移住。2014年「シマトワークス」として独立し、島を拠点に観光、人材育成、コンサル等、幅広く活動している。",
    image: tomitaImage,
		noteUrl: "https://note.com/foodtrail/n/n488a9300abbf",
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
	{
    name: "藤田 美沙子",
    en: "misako fujita",
    // company: "studio kahika",
    description:
      '大阪府出身。\n大学卒業後、靴下専門の製造小売業にてスーパーバイザー、商品企画、販促マーケティングを担当。ブランドと顧客をつなぐ現場で、ものづくりと伝え方の両面から経験を重ねる。2021年より兵庫県洲本市の地域おこし協力隊として、土地に根ざしたプロジェクトの企画運営に携わり、任期後も淡路島に暮らし続ける。\n現在は、研修プログラムの設計・運営を手がけながら、夫とともに洲本市内の空き家を再生した交流拠点のリノベーションと運営を行う。\nまた、植物と香りのもつ力を体感へと落とし込むブランドを主宰。調香、商品開発、ワークショップを通じて、淡路島から、人・場・香りをめぐるストーリーを編集し、発信している。',
    image: fujitaImage,
  },
];

export default function TeamList() {
  return (
    <div className="flex flex-col gap-20 md:gap-40">
      {TEAM_MEMBERS.map((member, index) => (
        <TeamCard key={index} {...member} />
      ))}
    </div>
  );
}
