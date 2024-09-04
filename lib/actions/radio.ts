"use server";

import { Day } from "@prisma/client";
import db from "../prismadb";

export const getDailyShows = async () => {
	const shows = await db.schedule.findMany({
		where: {
			day: "TUESDAY",
		},
		include: {
			show: true,
		},
	});

	return shows;
};

export async function getCurrentShow() {
	const now = new Date();

	const currentDay = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"][
		now.getDay()
	];

	const currentTime = now.toTimeString().slice(0, 5);

	const currentShow = await db.schedule.findFirst({
		where: {
			day: currentDay as Day,
			startTime: { lte: currentTime },
			endTime: { gt: currentTime },
		},
		include: {
			show: true,
		},
	});

	return currentShow;
}
