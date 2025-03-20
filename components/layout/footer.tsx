import { NAVI_ITEMS, NOTE_URL } from "@/constants/site";
import Link from "next/link";
import { Separator } from "../ui/separator";
import logo from "../../public/images/logo.svg";
import noteIcon from "../../public/images/note_icon.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-muted py-24">
      <div className="container mx-auto px-4">
        <div className="">
          <Image
            src={logo}
            alt="Awaji Food Research Institute"
            className="max-w-[70vi]"
          />
        </div>
        <div className="md:mt-30 mt-12 flex flex-wrap gap-6 md:gap-8">
          {NAVI_ITEMS.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="font-en text-sm font-black uppercase md:text-base"
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
          <div className="font-en flex gap-8 text-xs uppercase">
            <span className="font-black">Privacy Policy</span>
            <div className="text-gray-500">
              © 2025 Awaji Food Research Institute
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
