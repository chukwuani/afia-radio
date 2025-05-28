"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAudioPlayerStore } from "@/store/useAudioPlayer";
import Image from "next/image";
import Link from "next/link";

import { cn, formatDurationShort, weekly_countdown } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

const PodcastsPage = () => {
  const { onOpen, isPlaying, isLive, updateAudioInfo, title, setIsPlaying } =
    useAudioPlayerStore((state) => state);

  const item = {
    show: {
      id: "993-podcast",
      title: "Afia 993 Daily Podcast",
      description: "Catch up on the latest episodes of Afia 993",
      coverArt: "/images/993-podcast.jpg",
      streamUrl:
        "https://8kvl2urisy.ufs.sh/f/BxfEHnSVCZL4wtInR1CPvXQOzMIsblKGqCm0NZ9Vpajo8BLy",
    },
  };
  return (
    <main className="relative flex flex-col gap-6 min-[1400px]:container">
      <article className="max-h-full2 w-full flex-auto mx-auto flex flex-col items-center justify-center gap-4">
        <Card className="flex flex-col gap-5 overflow-hidden border-0 bg-transparent shadow-none p-6 lg:p-14 lg:py-8 rounded-none">
          <section className="flex justify-between items-center gap-10">
            <CardHeader className="px-0">
              <CardTitle className="text-brand">Daily Radio Shows</CardTitle>
              <CardDescription> Live and local, just for you </CardDescription>
            </CardHeader>
          </section>

          <CardContent className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8 w-full px-0">
            <Link
              href={`/radio/`}
              className="group cols-span-1 gap-2 w-full text-left"
            >
              <section className="flex items-center justify-center relative">
                <Image
                  alt={item.show.title}
                  className="aspect-square rounded-md object-cover bg-black/30 w-full"
                  width={300}
                  height={300}
                  src={item.show.coverArt}
                />

                <span className="absolute top-0 aspect-square rounded-md size-full bg-black/30 opacity-0 transition-opacity group-hover:opacity-100" />
              </section>

              <p className="text-base font-bold mt-3 mb-2 transition-colors group-hover:text-brand">
                {item.show.title}
              </p>

              <p className="text-sm text-muted-foreground line-clamp-2">
                {item.show.description}
              </p>
            </Link>

            <Button
              onClick={() => {
                onOpen();
                updateAudioInfo({
                  audioId: item.show.id,
                  isPlaying: true,
                  audioUrl: item.show.streamUrl,
                  coverArt: item.show.coverArt,
                  isLive: false,
                  title: item.show.title,
                });
              }}
              size="icon"
              variant="ghost"
            >
              <Icons.playIcon className="w-5 h-5" />
            </Button>
          </CardContent>
        </Card>
      </article>
    </main>
  );
};
export default PodcastsPage;
