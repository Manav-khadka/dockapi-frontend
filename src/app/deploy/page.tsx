"use client";
import React from "react";
import Image from "next/image";

export default function Deploy() {
    const [githubLink, setGithubLink] = React.useState<string | null>(null);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex lg:flex-row flex-col gap-8 row-start-2 items-center sm:items-start">
                    
                {/* text field for github link with icon  */}
                <div className="flex gap-4 items-center flex-col sm:flex-row">
                    <input
                        type="text"
                        placeholder="Enter your github link"
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                        onChange={(e) => setGithubLink(e.target.value)}
                    />
                    <a
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                        href={githubLink??''}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            className="dark:invert"
                            src="/dockapiwithnobg.svg"
                            alt="dockapi logomark"
                            width={20}
                            height={20}
                        />
                        Deploy
                    </a>
                </div>
                 
                 
      </main>
    </div>
  );
}
