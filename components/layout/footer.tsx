import { NAVI_ITEMS, NOTE_URL } from "@/constants/site";
import Link from "next/link";
import { Separator } from "../ui/separator";
import logo from "../../public/images/logo.svg";
import noteIcon from "../../public/images/note_icon.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-zinc-100 py-24">
      <div className="container mx-auto px-4">
				<div className="">
					<Image src={logo} alt="Awaji Food Research Institute" />
				</div>
        <div className="flex gap-8 mt-30">
          {NAVI_ITEMS.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="font-black font-en uppercase"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Separator className="my-16" />
        <div className="flex items-center justify-between">
          <div>
            <Link href={NOTE_URL} target="_blank">
              <Image src={noteIcon} alt="note" />
            </Link>
          </div>
          <div className="flex gap-8 text-xs font-en uppercase">
            <span className="font-black">Privacy Policy</span>
						<div className="text-gray-500">© 2025 Awaji Food Research Institute</div>
          </div>
        </div>
      </div>
    </div>
  );
}
