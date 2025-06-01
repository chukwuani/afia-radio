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
import { Link } from "@/components/ui/link";

import { cn, formatDurationShort, weekly_countdown } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

const PodcastsPage = () => {
  const { onOpen, isPlaying, isLive, updateAudioInfo, title, setIsPlaying } =
    useAudioPlayerStore((state) => state);

  const podcasts = [
    {
      id: "jamb-2025-utme-breakdown",
      title: "Inside the 2025 JAMB UTME Breakdown",
      description: "",
      coverArt: "/images/jamb-utme.png",
      streamUrl:
        "https://8kvl2urisy.ufs.sh/f/BxfEHnSVCZL4wtInR1CPvXQOzMIsblKGqCm0NZ9Vpajo8BLy",
    },
  ];

  return (
    <main className="relative flex flex-col gap-6 min-[1400px]:container">
      <Card className="flex flex-col gap-5 overflow-hidden border-none bg-transparent shadow-none p-6 lg:p-8">
        <CardHeader className="px-0">
          <CardTitle className="text-brand">Stream Top Podcasts</CardTitle>
          <CardDescription>
            Stream the best podcasts from your favorite stations
          </CardDescription>
        </CardHeader>

        <CardContent className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8 w-full px-0">
          {podcasts.map((item, index) => (
            <section
              key={index}
              className="group cols-span-1 gap-2 w-full text-left"
            >
              <section className="flex items-center justify-center relative">
                <Image
                  alt={item.title}
                  className="aspect-square rounded-md object-cover"
                  height="300"
                  width="300"
                  src={item.coverArt}
                />

                <span className="absolute top-0 aspect-square rounded-md size-full bg-black/30 opacity-0 transition-opacity group-hover:opacity-100" />

                {!isLive && isPlaying && title === item.title ? (
                  <button
                    onClick={() => {
                      setIsPlaying(false);
                    }}
                    className="bg-black p-2 flex items-center justify-center rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10"
                  >
                    <Icons.pauseIcon className="size-8 text-white z-10" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      onOpen();
                      updateAudioInfo({
                        audioId: item.id,
                        isPlaying: true,
                        audioUrl: item.streamUrl,
                        coverArt: item.coverArt,
                        isLive: false,
                        title: item.title,
                        artists: ["993 Voices"],
                      });
                    }}
                    className="bg-black p-2 flex items-center justify-center rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10"
                  >
                    <Icons.playIcon className="size-8 text-white z-10" />
                  </button>
                )}
              </section>

              <section className="flex items-center space-x-2 text-xs text-muted-foreground mt-3 mb-2 font-medium">
                <p className="text-xs text-muted-foreground">May 23, 2025</p>
                <div>•</div>

                <div>15min</div>
              </section>

              <p className="text-base font-bold mt-3 mb-3 tracking-wide transition-colors group-hover:text-brand">
                {item.title}
              </p>

              <p className="text-sm text-muted-foreground line-clamp-2">
                {item.description}
              </p>
            </section>
          ))}
        </CardContent>

        <Button
          variant="outline"
          size="lg"
          disabled={true}
          className="flex mx-auto rounded-full"
        >
          Nothing more to load
        </Button>
      </Card>
    </main>
  );
};
export default PodcastsPage;
