"use server";

import { Day } from "@prisma/client";
import db from "../prismadb";

export const getDailyShows = async () => {
	const now = new Date();
	const currentDay = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"][
		now.getDay()
	];
	const shows = await db.schedule.findMany({
		where: {
			day: currentDay as Day,
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

export async function getShowById(id: string) {
	const show = await db.show.findFirst({
		where: {
			id,
		},
	});

	const otherShows = await db.show.findMany({
		where: {
			NOT: {
				id,
			},
		},
	});

	return { show, otherShows };
}

export async function getAllSchedule() {
	const shows = await db.schedule.findMany({
		include: {
			show: true,
		},
	});

	return shows;
}
