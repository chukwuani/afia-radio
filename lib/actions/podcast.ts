"use server";

import db from "../prismadb";

export const getPodcasts = async () => {
	const podcasts = await db.podcast.findMany({
		take: 4,
	});

	return podcasts;
};

export const getPodcastById = async (id: string) => {
	const podcast = await db.podcast.findUnique({
		where: {
			id,
		},
		include: {
			episodes: true,
		},
	});

	return podcast;
};
