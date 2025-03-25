import { NAVI_ITEMS, NOTE_URL } from "@/constants/site";
import { Separator } from "../ui/separator";
import noteIcon from "../../public/images/note_icon.svg";
import Image from "next/image";
import { ThemeLogo } from "../common/theme-logo";
import { AnimatedTextLink } from "../common/animated-text-link";
import Link from "next/link";

interface FooterProps {
  onLinkClick?: () => void;
}

export default function Footer({ onLinkClick }: FooterProps = {}) {
  return (
    <div className="bg-muted py-24 transition-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-[70vi]">
          <ThemeLogo width={300} />
        </div>
        <div className="md:mt-30 mt-12 flex flex-wrap gap-6 md:gap-8">
          {NAVI_ITEMS.map((item, index) => (
            <AnimatedTextLink
              key={index}
              href={item.href}
              className="font-en text-sm font-black uppercase md:text-base"
              onClick={onLinkClick}
            >
              {item.label}
            </AnimatedTextLink>
          ))}
        </div>
        <Separator className="my-16" />
        <div className="flex items-center justify-between">
          <div>
            <Link href={NOTE_URL} target="_blank" onClick={onLinkClick}>
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
