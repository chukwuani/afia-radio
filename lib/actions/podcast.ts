"use server";

import db from "../prismadb";

export const getPodcasts = async () => {
	const podcasts = await db.podcast.findMany({
		take: 4,
	});

	return podcasts;
};
