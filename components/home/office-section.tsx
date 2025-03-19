import Image from "next/image";
import Link from "next/link";

export default function OfficeSection() {
  return (
    <div className="w-full py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* オフィス画像 */}
          <div className="relative w-full max-w-3xl aspect-[4/3] mb-16">
            <Image 
              src="/images/office.jpg" 
              alt="Office" 
              fill
              className="object-cover"
            />
          </div>

          {/* オフィス情報 */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-sm uppercase tracking-widest font-en mb-2">OFFICE</h3>
            <p className="mb-8">株式会社シマトワークス コ</p>

            {/* マップピン */}
            <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center mb-6">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" 
                  fill="currentColor"
                />
                <path 
                  d="M12 2C7.58172 2 4 5.58172 4 10C4 12.5 5.5 15.5 8 17.5C10.5 19.5 12 21.5 12 21.5C12 21.5 13.5 19.5 16 17.5C18.5 15.5 20 12.5 20 10C20 5.58172 16.4183 2 12 2ZM12 14C9.79086 14 8 12.2091 8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10C16 12.2091 14.2091 14 12 14Z" 
                  fill="currentColor"
                />
              </svg>
            </div>

            <h3 className="text-sm uppercase tracking-widest font-en mb-2">ADDRESS</h3>
            <p className="mb-1">〒656-0025</p>
            <p className="mb-1">兵庫県淡路市本町7丁目1-32</p>
            <p className="mb-8">Workation Hub 淡路町</p>

            {/* 地図へのリンク */}
            <Link 
              href="https://maps.app.goo.gl/xxxxxxx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 mb-12"
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M7 17L17 7M17 7H7M17 7V17" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <h3 className="text-sm uppercase tracking-widest font-en mb-2">MAIL</h3>
            <a 
              href="mailto:info@shimatoworks.jp" 
              className="hover:underline"
            >
              info@shimatoworks.jp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
