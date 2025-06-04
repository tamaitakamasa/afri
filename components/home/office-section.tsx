import Image from "next/image";

import officeImage from "../../public/images/hub.jpg";
import { CustomLink } from "../common/custom-link";

export default function OfficeSection() {
  return (
    <div className="w-full py-20 lg:py-30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* オフィス画像 */}
          <div className="relative mb-16 w-full max-w-[640px]">
            <Image
              src={officeImage}
              alt="Office"
              quality={100}
              className="w-full"
              // fill
              // className="object-cover"
            />
          </div>

          {/* オフィス情報 */}
          <div className="md:gap-15 flex flex-col items-center gap-10 text-center">
            <div className="flex flex-col gap-2">
              <h3 className="font-en mb-2 text-xs font-black tracking-[0.15em]">
                OFFICE
              </h3>
              <p className="text-sm">
                <CustomLink
                  href="https://shimatoworks.jp"
                  isExternal={true}
                >
                  株式会社シマトワークス
                </CustomLink>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-en mb-2 text-xs font-black tracking-[0.15em]">
                ADDRESS
              </h3>
              <p className="text-sm leading-[1.8]">
                〒656-0025 <br />
                兵庫県淡路市本町7丁目1-32 <br />
                Workation Hub 紺屋町
                <br />
                <CustomLink
                  href="https://maps.app.goo.gl/KokPESdk11Vx12de8"
                  isExternal={true}
                >
                  Google Map
                </CustomLink>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-en mb-2 text-xs font-black tracking-[0.15em]">
                MAIL
              </h3>
              <p className="text-sm">
                <CustomLink href="mailto:info@shimatoworks.jp">
                  info@shimatoworks.jp
                </CustomLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
