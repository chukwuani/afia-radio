"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PodcastCardSkeleton from "@/components/skeleton/podcast-card-skeleton";

import { Podcast } from "@/types";
import { cn } from "@/lib/utils";

import { useQuery } from "@tanstack/react-query";
import * as Sentry from "@sentry/nextjs";
import axios from "axios";

const Podcasts = () => {
  const { isPending, isError, data, error, refetch } = useQuery({
    queryKey: ["top_podcasts"],
    queryFn: async () => {
      const { data: podcasts } = await axios.get<Podcast[]>(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/podcasts/`
      );

      return podcasts;
    },
  });

  if (isError) {
    Sentry.captureException(error);
    refetch();
  }

  return (
    <Card className="flex flex-col gap-5 overflow-hidden border-0 border-b bg-transparent shadow-none p-6 lg:p-14 lg:py-8 rounded-none">
      <section className="flex justify-between items-center gap-10">
        <CardHeader className="px-0">
          <CardTitle className="text-brand">Stream Top Podcasts</CardTitle>
          <CardDescription>
            Stream the best podcasts from a collection of insightful, and
            entertaining podcasts.
          </CardDescription>
        </CardHeader>
        {data && data?.length > 4 && (
          <Link
            href="/podcasts"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "hidden md:flex rounded-full text-[0.75rem] tracking-[2.4px] uppercase font-haffer"
            )}
          >
            View All
          </Link>
        )}
      </section>

      <CardContent className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8 w-full px-0">
        {isPending && (
          <React.Fragment>
            {Array.from({ length: 4 }).map((_, index) => (
              <PodcastCardSkeleton key={index} />
            ))}
          </React.Fragment>
        )}

        {isError && (
          <React.Fragment>
            {Array.from({ length: 4 }).map((_, index) => (
              <PodcastCardSkeleton key={index} />
            ))}
          </React.Fragment>
        )}

        {data?.map((podcast, index) => (
          <Link
            key={index}
            href={`/podcasts/${podcast.id}`}
            className="group cols-span-1 gap-2 w-full text-left"
          >
            <section className="flex items-center justify-center relative">
              <Image
                src={podcast.coverArt}
                alt={podcast.title}
                className="aspect-square rounded-md object-cover bg-black/30 w-full"
                width={300}
                height={300}
              />

              <span className="absolute top-0 aspect-square rounded-md size-full bg-black/30 opacity-0 transition-opacity group-hover:opacity-100" />
            </section>

            <p className="text-base font-bold mt-3 mb-2 transition-colors group-hover:text-brand">
              {podcast.title}
            </p>

            <p className="text-sm text-muted-foreground line-clamp-2">
              {podcast.description}
            </p>
          </Link>
        ))}
      </CardContent>

      {data && data?.length > 4 && (
        <Link
          href="/podcasts"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "flex md:hidden mx-auto rounded-full"
          )}
        >
          View All
        </Link>
      )}
    </Card>
  );
};

export default Podcasts;
