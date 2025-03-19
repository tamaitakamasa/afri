import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function AcademyJoinSection() {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row">
        {/* Academy側 - 左半分 */}
        <div className="flex-1 bg-zinc-900 text-white p-16 flex flex-col items-center justify-center">
          <h2 className="text-center text-2xl font-en uppercase tracking-widest mb-12">Academy</h2>
          <div className="max-w-xs mx-auto">
            <div className="relative aspect-[4/3] w-full mb-8">
              <Image 
                src="/images/academy-sample.jpg" 
                alt="Academy" 
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-center">2025年プレミエチーム始動、2026年開講予定！</p>
          </div>
        </div>
        
        {/* Join Us側 - 右半分 */}
        <div className="flex-1 bg-gray-100 p-16 flex flex-col items-center justify-center">
          <h2 className="text-center text-2xl font-en uppercase tracking-widest mb-12">Join Us</h2>
          <p className="text-center max-w-sm mb-12">
            食の研究やプロジェクトにご関心のある方、自治体・企業・団体様、ぜひご連絡ください。
          </p>
          <Button asChild className="rounded-full px-8 bg-zinc-900 hover:bg-zinc-800 text--white">
            <Link href="/contact" className="flex items-center gap-2">
              CONTACT
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
