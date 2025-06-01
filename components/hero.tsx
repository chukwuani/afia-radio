"use client";

import Image from "next/image";
import { Radio } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useAudioPlayerStore } from "@/store/useAudioPlayer";

const Hero = () => {
  const { onOpen, updateAudioInfo } = useAudioPlayerStore((state) => state);

  return (
    <section className="flex flex-col md:flex-row overflow-hidden border-none bg-transparent shadow-none md:px-6 lg:px-14  md:items-center gap-12 w-full pt-12">
      <section className="flex flex-col max-md:text-center max-md:items-center md:w-[44%] gap-8 relative max-md:px-6">
        <h1
          className="text-5xl sm:text-[4rem] sm:leading-[4.5rem] text-pretty text-primary leading-[4rem] -tracking-[.053rem] font-epilogue font-normal mt-3 mb-auto animate-fade-up"
          style={{ animationDelay: "0.20s", animationFillMode: "both" }}
        >
          24hrs Radio, Hit Music, Podcasts, All in One Place
        </h1>

        <p
          className="text-[15px] font-epilogue !leading-7 md:text-base text-muted-foreground max-w-[400px] animate-fade-up"
          style={{ animationDelay: "0.30s", animationFillMode: "both" }}
        >
          Your go-to spot for Igbo vibes, anywhere in the world. Enjoy non-stop
          music, news, and pure entertainment. Listen live now
        </p>

        <div
          className="flex animate-fade-up"
          style={{ animationDelay: "0.40s", animationFillMode: "both" }}
        >
          <Button
            onClick={() => {
              onOpen();
              updateAudioInfo({
                isPlaying: true,
                audioUrl: process.env.NEXT_PUBLIC_STREAM_URL!,
                isLive: true,
                audioId: "live",
              });
            }}
            className="font-normal w-fit bg-brand hover:bg-brand/90 rounded-full p-7 text-foreground z-10 h-14 text-base px-5 font-haffer text-[0.75rem] tracking-[2.4px] uppercase"
          >
            Listen live
            <Radio className="ml-2" />
          </Button>
        </div>
      </section>

      <div
        className="flex justify-end animate-fade-up m-auto max-h-[550px] md:w-[50%] aspect-[4/3]"
        style={{ animationDelay: "0.10s", animationFillMode: "both" }}
      >
        <Image
          alt="Hero Image"
          priority
          className="rounded-[2rem] sm:h-[450px] sm:rounded-[4.5rem] max-md:rounded-none object-cover"
          height={900}
          width={900}
          quality={100}
          src="/images/opengraph-image.jpg"
        />
      </div>
    </section>
  );
};

export default Hero;
