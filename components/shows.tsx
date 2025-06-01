"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ShowCardSkeleton from "@/components/skeleton/show-card-skeleton";

import { cn } from "@/lib/utils";
import { ScheduleWithShowAndHost } from "@/types";

import * as Sentry from "@sentry/nextjs";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Shows = () => {
  const { isPending, isError, data, error, refetch } = useQuery({
    queryKey: ["radio_shows"],
    queryFn: async () => {
      const now = new Date();
      const today = [
        "SUNDAY",
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY",
      ][now.getDay()];

      const { data: schedule } = await axios.get<ScheduleWithShowAndHost[]>(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/shows/schedule/${today}`
      );

      const { data: nowPlaying } = await axios.get<ScheduleWithShowAndHost>(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/shows/on-air`
      );

      return { schedule, nowPlaying };
    },
  });

  if (isError) {
    refetch();
    Sentry.captureException(error);
  }

  return (
    <Card className="flex flex-col gap-5 overflow-hidden border-0 bg-transparent shadow-none p-6 lg:p-14 lg:py-8 rounded-none">
      <section className="flex justify-between items-center gap-10">
        <CardHeader className="px-0">
          <CardTitle className="text-brand font-epilogue">
            Daily Radio Shows
          </CardTitle>
          <CardDescription className="font-epilogue">
            {" "}
            Live and local, just for you{" "}
          </CardDescription>
        </CardHeader>

        <Link
          href="/radio"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "hidden md:flex rounded-full text-[0.75rem] tracking-[2.4px] uppercase font-haffer"
          )}
        >
          View Schedule
        </Link>
      </section>

      <CardContent className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8 w-full px-0">
        {isPending && !data && (
          <React.Fragment>
            {Array.from({ length: 4 }).map((_, index) => (
              <ShowCardSkeleton key={index} />
            ))}
          </React.Fragment>
        )}

        {isError && !data && (
          <React.Fragment>
            {Array.from({ length: 4 }).map((_, index) => (
              <ShowCardSkeleton key={index} />
            ))}
          </React.Fragment>
        )}

        {data?.schedule?.map((item, index) => (
          <Link
            key={index}
            href={`/radio/${item.showId}`}
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

            <section className="flex gap-2 items-center mt-3 mb-2">
              {data.nowPlaying?.showId === item.showId && (
                <p className="text-sm text-brand font-medium uppercase">
                  Live:
                </p>
              )}
              <p className="text-xs text-muted-foreground font-medium">
                {item.startTime} - {item.endTime}
              </p>
            </section>

            <p className="text-base font-bold mt-3 mb-2 transition-colors group-hover:text-brand">
              {item.show.title}
            </p>

            <p className="text-sm font-epilogue text-muted-foreground line-clamp-2">
              {item.show.description}
            </p>
          </Link>
        ))}
      </CardContent>

      <Link
        href="/radio"
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "flex md:hidden mx-auto rounded-full text-[0.75rem] tracking-[2.4px] uppercase font-haffer"
        )}
      >
        View Schedule
      </Link>
    </Card>
  );
};

export default Shows;
