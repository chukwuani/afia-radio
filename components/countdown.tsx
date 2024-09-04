"use client";

import React from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

import Countdown from "react-countdown";
import dayjs from "dayjs";

const Completionist = () => <span>You are good to go!</span>;

const renderer = ({
	days,
	hours,
	minutes,
	seconds,
	completed,
}: {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	completed: boolean;
}) => {
	if (completed) {
		return <Completionist />;
	} else {
		return (
			<>
				<DigitUnit
					number={days}
					unit="day"
				/>
				<DigitUnit
					number={hours}
					unit="hour"
				/>
				<DigitUnit
					number={minutes}
					unit="minute"
				/>
				<DigitUnit
					number={seconds}
					unit="second"
				/>
			</>
		);
	}
};

function CountdownTimer() {
	const countFromDate = dayjs("2024-09-09T15:00:00").toDate();

	return (
		<Card className="flex flex-col gap-8 overflow-hidden border-0 bg-transparent shadow-none p-6 lg:p-14 lg:py-8 rounded-none">
			<section className="w-full text-center flex justify-between items-center gap-10">
				<CardHeader className="p-0 w-full items-center gap-3">
					<CardTitle className="text-brand text-5xl">Launch Countdown</CardTitle>
					<CardDescription className="text-base max-w-[500px]">
						Afia Radio turns one! One year of great radio, and we&apos;re just getting started. Tune
						in now - let&apos;s celebrate together!
					</CardDescription>
				</CardHeader>
			</section>

			<CardContent className="flex items-center justify-center gap-6 lg:gap-8 w-full px-0">
				<Countdown
					date={countFromDate}
					renderer={renderer}
				/>
			</CardContent>
		</Card>
	);
}

export default CountdownTimer;

export const DigitUnit = ({
	number,
	unit,
}: {
	number: number;
	unit: "day" | "hour" | "minute" | "second";
}) => {
	const [num, setNum] = React.useState(0);

	React.useEffect(() => {
		setNum(number);
	}, [number]);

	return (
		<section className="flex flex-col gap-6 items-center max-md:w-full">
			<section className="relative w-full max-md:max-w-[7rem] md:w-[10rem] aspect-square rounded-md shadow-[0px_10px_0px_0px_rgba(15,15,17,1)] bg-muted text-[1.7rem] sm:text-[2.25rem] md:text-[4.5rem] fcc__digit_block flex items-center justify-center text-center">
				<p>{num?.toString().padStart(2, "0")}</p>
			</section>

			<p className="uppercase text-xs sm:text-sm text-muted-foreground font-bold tracking-widest w-fit">
				{unit + "s"}
			</p>
		</section>
	);
};
