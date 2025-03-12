import { NAVI_ITEMS } from "@/constants/site";
import { Button } from "../ui/button";
import Link from "next/link";
import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <div className="bg-gray-900 p-4 text-white">
      <div className="container mx-auto">
        <div className="flex gap-4">
          {NAVI_ITEMS.map((item, index) => (
            <Button
              asChild
              key={index}
              variant="ghost"
              className="block py-2"
            >
              <Link href={item.href} className="font-bold uppercase">
                {item.label}
              </Link>
            </Button>
          ))}
        </div>
				<Separator className="my-12" />
        <div className="flex items-center justify-between">
          <div>© 2021 Company Name</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </div>
  );
}
