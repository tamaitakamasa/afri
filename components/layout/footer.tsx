import { NAVI_ITEMS, NOTE_URL } from "@/constants/site";
import Link from "next/link";
import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <div className="bg-gray-900 py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="flex gap-8">
          {NAVI_ITEMS.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="font-bold uppercase"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Separator className="my-12" />
        <div className="flex items-center justify-between">
          <div>
            <Link href={NOTE_URL} target="_blank">
              note
            </Link>
          </div>
          <div className="flex gap-4 text-sm font-bold">
            <div>Privacy Policy</div>
						<div className="text-gray-500">© 2021 Company Name</div>
          </div>
        </div>
      </div>
    </div>
  );
}
