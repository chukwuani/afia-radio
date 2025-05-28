"use client";

import Image from "next/image";
import { Radio } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { useAudioPlayerStore } from "@/store/useAudioPlayer";
import { Heading } from "./heading";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card } from "./ui/card";

const Hero = () => {
  const { onOpen, updateAudioInfo } = useAudioPlayerStore((state) => state);

  return (
    <section className="flex flex-col-reverse md:flex-row overflow-hidden border-none bg-transparent shadow-none px-6 lg:px-14  md:items-center gap-12 w-full pt-12">
      <section className="flex flex-col max-md:text-center max-md:items-center md:w-[40%] gap-8 relative">
        <h1
          className="md:max-w-[400px] text-[2.5rem] leading-[3rem] lg:text-6xl font-bold mt-3 mb-auto animate-fade-up"
          style={{ animationDelay: "0.20s", animationFillMode: "both" }}
        >
          24hrs Radio, Hit Music, Podcasts, All in One Place
        </h1>

        <p
          className="text-[15px] !leading-7 md:text-base text-muted-foreground max-w-[400px] animate-fade-up"
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
            className="font-bold w-fit bg-brand hover:bg-brand/90 rounded-full p-7 text-foreground"
          >
            <Radio className="mr-2" />
            Listen live
          </Button>
        </div>
      </section>

      <div
        className="flex justify-end animate-fade-up m-auto max-h-[550px] md:w-[50%] lg:w-[60%] aspect-square"
        style={{ animationDelay: "0.10s", animationFillMode: "both" }}
      >
        <Image
          alt="Hero Image"
          priority
          className="rounded-lg object-cover w-full aspect-square"
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

{
  /* <section className="flex flex-col items-center pt-28 container gap-[50px] py-0 relative w-full">
      <div className="flex flex-col w-full max-w-[1150px] items-center justify-center gap-8 px-[32px]">
        <div className="mx-auto sm:text-center">
          <Heading className="text-[3rem] leading-[4rem] -tracking-[.053rem] text-center font-epilogue font-normal">
            24hrs Radio, Hit Music, Podcasts, All in One Place.
          </Heading>



          <p className="max-w-[480px] w-full text-center mt-6 mx-auto font-epilogue font-medium text-muted-foreground text-base leading-[28px] tracking-[.009rem]">
            Your go-to spot for Igbo vibes, anywhere in the world. Enjoy
            non-stop music, news, and pure entertainment. Listen live now
          </p>
        </div>

 
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
            <Radio className="mr-2" />
            Listen live
          </Button>
        </div>
      </div>

      <Card className="w-full max-w-[1150px] max-h-[550px] rounded-[28px] max-lg:rounded-none overflow-hidden border-0 p-0 aspect-[4/3]">
        <div
          className="flex justify-end animate-fade-up m-auto"
          style={{ animationDelay: "0.10s", animationFillMode: "both" }}
        >
          <Image
            alt="Hero Image"
            priority
            className="rounded-lg object-cover w-full"
            height={900}
            width={900}
            quality={100}
            src="/images/opengraph-image.jpg"
          />
        </div>
      </Card>
    </section> */
}
