// constants/site.ts
// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_URL = "https://www.awaji-foodreseachinstitute.com";
export const SITE_TITLE = "Awaji Food Research Institute";
export const SITE_DESCRIPTION = "「美味しい」の解像度をあげる。Awaji Food Research Instituteは淡路島で食を多角的に研究し、アーカイブする場です。食材の背景、作り手の想い、空間、そして共に食べる人。味だけでない美味しさの要素を探求し、50年先の食文化創出に向けて、生産者・料理人・消費者をつなぎ、新たな価値を生み出します。";
export const NOTE_URL = "https://note.com/foodtrail";
export const NOTE_API_BASE_URL = 'https://note.com/api/v2/creators/foodtrail/';
export const INSTAGRAM_URL = "https://www.instagram.com/awaji_food_research_institute/";
export const NAVI_ITEMS = [
	// { label: "Home", href: "/" },
	{ label: "Concept", href: "/#concept" },
	{ label: "Team", href: "/#team" },
	{ label: "Column", href: "/column" },
	{ label: "Academy", href: "/#academy" },
	{ label: "Join Us", href: "/#join" },
	{ label: "Contact", href: "/contact" },
];

export const NOTE_CATEGORIES = [
	"活動レポート",
	"プロジェクト/メンバー紹介",
	"お知らせ",
	"食文化見聞録",
] as const;
