import Image from "next/image";
import { ArrowRight } from "lucide-react";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div className="items-center text-center font-extrabold text-[40px] sm:text-[80px] w-full sm:w-full leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Focus on Code, We Handle the Rest.
        </div>

        <div className="flex gap-4 items-center flex-row justify-center">
          <a 
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 px-4"
            href="/deploy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/dockapiwithnobg.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="#docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
            
            <div className="rounded-full bg-black/[.08] dark:bg-white/[.145] p-0.5 ml-3">
              <ArrowRight/>
            </div>

          </a>
        </div>
      </main>
    </div>
  );
}
