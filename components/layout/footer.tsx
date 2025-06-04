import { NAVI_ITEMS, NOTE_URL } from "@/constants/site";
import { Separator } from "../ui/separator";
import noteIcon from "../../public/images/note_icon.svg";
import Image from "next/image";
import { ThemeLogo } from "../common/theme-logo";
import { AnimatedTextLink } from "../common/animated-text-link";
import Link from "next/link";
import { CustomLink } from "../common/custom-link";

interface FooterProps {
  onLinkClick?: () => void;
}

export default function Footer({ onLinkClick }: FooterProps = {}) {
  return (
    <div className="bg-muted transition-bg py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-[70vi]">
          <ThemeLogo className="w-[200px] md:w-[300px]" />
        </div>
        <div className="md:mt-30 mt-12 flex flex-wrap gap-x-6 gap-y-3 md:gap-8">
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
        <Separator className="my-12 md:my-16" />
        <div className="md:flex items-center justify-between">
          <div>
            <Link
              href={NOTE_URL}
              target="_blank"
              onClick={onLinkClick}
            >
              <Image src={noteIcon} alt="note" />
            </Link>
          </div>
          <div className="mt-4 font-en text-xs uppercase md:mt-0 md:flex md:gap-8">
            <CustomLink href="/privacy" className="font-black">
              Privacy Policy
            </CustomLink>
            <div className="text-gray-500 mt-12 md:mt-0">
              © 2025 Awaji Food Research Institute
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
