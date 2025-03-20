import Image from "next/image";

import officeImage from "../../public/images/hub.webp";

export default function OfficeSection() {
  return (
    <div className="w-full py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* オフィス画像 */}
          <div className="relative mb-16 aspect-[4/3] w-full max-w-3xl">
            <Image
              src={officeImage}
              alt="Office"
              fill
              className="object-cover"
            />
          </div>

          {/* オフィス情報 */}
          <div className="flex flex-col items-center text-center gap-15">
            <div className="flex flex-col gap-2">
              <h3 className="font-en mb-2 text-xs font-black tracking-[0.15em]">
                OFFICE
              </h3>
              <p className="text-sm">株式会社シマトワークス</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-en mb-2 text-xs font-black tracking-[0.15em]">
                ADDRESS
              </h3>
              <p className="text-sm leading-[1.8]">
                〒656-0025 <br />
                兵庫県淡路市本町7丁目1-32<br />
								Workation Hub 紺屋町
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-en mb-2 text-xs font-black tracking-[0.15em]">
                MAIL
              </h3>
              <p className="text-sm">
                <a
                  href="mailto:info@shimatoworks.jp"
                  className="hover:underline"
                >
                  info@shimatoworks.jp
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
