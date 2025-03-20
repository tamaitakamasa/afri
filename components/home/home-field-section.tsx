// components/home/home-field-section.tsx
import Image from "next/image";
import map from "/public/images/map.webp";

export default function HomeFieldSection() {
  return (
    <section className="bg-background relative w-full pt-40">
      <div className="z-1 absolute inset-0">
        <Image src={map} fill alt="地図" className="object-cover object-left" />
      </div>
      <div className="px-30 bg-background relative z-10 ml-auto flex w-7/12 flex-col gap-20 py-30">
        <div className="max-w-[32rem]">
          <h3 className="text-xl font-medium">
            淡路島というフィールド
          </h3>
          <div className="flex flex-col gap-10 leading-[2] tracking-wider mt-15">
            <p>
              淡路島は東京23区ほどの面積がある大きな島で、東は大阪湾、西は瀬戸内海、南北は鳴門海峡と明石海峡など多様な海に囲まれ、海と山がすぐそばにあるなど、自然の循環がよく感じられる島です。
            </p>
            <p>
              島の地質は中央構造線、六甲断層帯など複数の地質からなり、そこから生み出される複雑な自然環境の中で、私たちがどのように食を生産し生きているのか、大きな視点で食を感じられる場所でもあります。
            </p>
            <p>
              これらの環境から生み出される食は、太古より御食国とよばれ、海産物にあふれ、塩、魚をはじめ水まで献上するなど、食の島として知られてきました。現在でも農業、畜産、水産業で多くの生産者が様々な考えのなかで食材を生産しています。
            </p>
            <p>
              また、洲本市街地など周辺に農村、漁村が隣接した街もあり、多くの飲食店でさまざまな想いのもと、食が提供されています。この立地だからこそ、感じられるもの、学べるものがあります。
            </p>
            <p className="text-xs text-zinc-400">
              画像出典：国土地理院 地理院地図
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
