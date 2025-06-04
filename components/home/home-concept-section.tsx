// components/home/home-concept-section.tsx
import Heading from "../common/heading";

// ページ内コンポーネント - コンセプトセクションのタイトル表示用
function ConceptTitle({ title }: { title: string }) {
  return (
    <div className="relative flex-1">
      <h3 className="top-0 text-lg font-medium md:sticky md:py-20 md:text-xl">
        {title}
      </h3>
    </div>
  );
}

// ページ内コンポーネント - コンセプトセクションのコンテンツ表示用
function ConceptContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:my-20 md:w-[36rem]">
      <div className="flex flex-col gap-8 text-sm leading-[2] md:gap-10 md:text-base">
        {children}
      </div>
    </div>
  );
}

// ページ内コンポーネント - コンセプトセクション全体のコンテナ
function ConceptSection({
  id,
  title,
  children,
  isFirst = false,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  isFirst?: boolean;
}) {
  return (
    <div
      id={id}
      className={`gap-8 md:gap-18 relative flex flex-col md:flex-row ${
        isFirst ? "mt-10" : "mt-16 md:mt-10"
      }`}
    >
      <ConceptTitle title={title} />
      <ConceptContent>{children}</ConceptContent>
    </div>
  );
}

export default function HomeConceptSection() {
  return (
    <section
      id="concept"
      className="container-xl py-20 md:py-30 relative px-8 md:px-0"
    >
      <Heading
        title="Concept"
        className="grid w-full items-center justify-center"
      />
      {/* 「美味しい」の解像度をあげる */}
      <ConceptSection
        id="concept1"
        title="「美味しい」の解像度をあげる"
        isFirst={true}
      >
        <p>
          Awaji Food Research
          Instituteは、あらゆる視点で「食」を研究、アーカイブし、50年先の食文化の創出に向けて学ぶ場を提供し、行動し続ける場です。
        </p>
        <p>
          これまで、私たちは淡路島で食に関するリサーチを行ってきました。食をとりまく環境や経済の仕組みはとても複雑です。「食べる」という行為に多くの人や企業が関り、どのように生産し、運ばれ、調理されているのか、食べられているのか。それぞれが互いに分断され分かりにくい環境になっています。個々の役割を担う人たちは、その道のプロとして切磋琢磨している方が多くいます。ただ食にまつわる環境全体でみた時には、その分断が知らない間に歪なものを生み出していることも多くあります。
        </p>
        <p>
          一方で「食べる」という行為そのものはとてもシンプルなものです。では、食べる時に感じる「美味しさ」はどこから来るものなのか。食材を育ててくれた人、料理を作ってくれた人の心遣いや想い、器やカトラリー、空間のしつらえ、土地や自然の恵、そして誰と食べるのか。単純に味だけでない要素が多くあることは確かです。一つの食材、一つのプレートから読み取れる「美味しさ」は、それを目の前にした人の知識や経験とともに、「食」とどう向き合うのかによって無限に増やせるものなのかもしれません。
        </p>
        <p>
          私たちがリサーチしアーカイブする情報で、そんな「美味しい」を感じる要素に新たな切り口を増やすことができれば、こんな嬉しいことはありません。これは食に関わる、生産する人、届ける人、料理する人、食べる人、すべての人に向けての要素であり、それぞれの「美味しい」の解像度をあげることにつながるものと信じています。
        </p>
      </ConceptSection>
      {/* 50年先の食文化をつくる */}
      <ConceptSection id="concept2" title="50年先の食文化をつくる">
        <p>
          20年で地域は大きく変わります。
          淡路島もこの20年でそのイメージも環境も大きく変化してきました。では次の20年、淡路島に「食」を通してどのような変化をもたらすことができるのでしょうか。
        </p>
        <p>
          さらにいうなら50年先にどのような「食文化」をつくることができるのでしょうか。文化を形成するまでに、行動、習慣、文化という流れがあるとして、まずその行動をおこせる場をここにつくっていきます。私たちだけでは難しいことばかりです。この場を通して時間をかけて、一緒に「美味しい」の解像度を高め合える仲間を作っていけたらと思います。
        </p>
        <p>たくさんの「美味しい」を感じられる未来へ。</p>
      </ConceptSection>
    </section>
  );
}
