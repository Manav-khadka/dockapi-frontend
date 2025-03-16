import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { StackingIcons } from "@/components/custom/StackingIcons";
import { BentoGridC } from "@/components/custom/BentoGridC";
import { Button } from "@/components/ui/button";
import { signIn } from "../auth";
import AuthButton from "@/components/custom/AuthButton";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-10 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
      
        <StackingIcons />
      <div className="
      mt-20
      box-border
      border-0
      antialiased
      text-[44px]
      leading-[44px]
      tracking-[-0.01em]
      font-semibold
      text-[hsl(var(--fg-primary)/1)]
      max-w-[500px] pt-8 text-center text-title-1 min-720:max-w-[500px] min-720:text-spotlight min-1280:max-w-[700px] min-1280:text-showcase
        ">
       Code to Cloud—Fast, Flawless, Fail-Safe with AI.
        </div>
    <div className="max-w-[500px] text-center text-title-1 text-[hsl(var(--fg-primary)/0.8)] min-720:max-w-[500px] min-720:text-spotlight min-1280:max-w-[700px] min-1280:text-showcase">
    DockAPI empowers developers to deploy and scale applications effortlessly with AI-optimized infrastructure.


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
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10  px-4 sm:min-w-44"
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
        <Button onClick={
          async () => {
            "use server";
           await signIn("github");
          }
        } className="bg-[#383838] dark:bg-[#ccc] text-background ">
          Get Started
        </Button>
        <AuthButton />
        <BentoGridC/>
      </main>
    </div>
  );
}
