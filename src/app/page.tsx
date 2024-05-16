"use client";
import Image from "next/image";
import "@/styles/home.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="columns-2">
        <p>Well, let me tell you something, ...</p>
        <p className="break-after-column">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Button size={"icon"} color="default" />
        <div>
          <Input
            type="text"
            placeholder="Search..."
            value={value}
            errorMessages="input error"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <div className="parent">
          <a className="a"></a>
          <div>
            <span>span tag</span>
          </div>
          <p className="text-custom">Search</p>
        </div>

        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <div className="font-mono text-color">
            src/app/page.tsx{" "}
            <a>
              aaa <span>span tag</span>
            </a>
          </div>
        </div>

        <button className="btn-primary">Save changes</button>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
