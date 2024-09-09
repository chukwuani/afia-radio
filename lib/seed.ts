"use server";

import { Day } from "@prisma/client";
import db from "./prismadb";
import { faker } from "@faker-js/faker";

function calculateDuration(startTime: string, endTime: string) {
	const [startHour, startMinute] = startTime.split(":").map(Number);
	const [endHour, endMinute] = endTime.split(":").map(Number);
	return endHour * 60 + endMinute - (startHour * 60 + startMinute);
}

export async function seedShow() {
	const weekdayShows = [
		{
			name: "Morning Market",
			host: "Ubong Kings",
			startTime: "08:00",
			endTime: "10:00",
			coverArt:
				"https://images.audacy2-prod.ext.audacy.com/9d337f80-58d1-4891-8a76-d327c98d0c82.png?auto=webp&width=125 1x, https://images.audacy2-prod.ext.audacy.com/9d337f80-58d1-4891-8a76-d327c98d0c82.png?auto=webp&width=250 2x",
			description: "Start your day with the latest market updates and business news.",
		},
		{
			name: "Market Center",
			host: "Ifunanzy",
			startTime: "10:00",
			endTime: "13:00",
			coverArt:
				"https://images.audacy2-prod.ext.audacy.com/9d337f80-58d1-4891-8a76-d327c98d0c82.png?auto=webp&width=125 1x, https://images.audacy2-prod.ext.audacy.com/9d337f80-58d1-4891-8a76-d327c98d0c82.png?auto=webp&width=250 2x",
			description: "In-depth analysis of market trends and economic indicators.",
		},
		{
			name: "Afternoon Break",
			host: "Mama T",
			startTime: "13:00",
			endTime: "16:00",
			coverArt:
				"https://images.audacy2-prod.ext.audacy.com/9d337f80-58d1-4891-8a76-d327c98d0c82.png?auto=webp&width=125 1x, https://images.audacy2-prod.ext.audacy.com/9d337f80-58d1-4891-8a76-d327c98d0c82.png?auto=webp&width=250 2x",
			description: "Relax and unwind with soothing music and light conversation.",
		},
		{
			name: "Night Market",
			host: "Choko",
			startTime: "19:00",
			endTime: "22:00",
			coverArt:
				"https://images.audacy2-prod.ext.audacy.com/9d337f80-58d1-4891-8a76-d327c98d0c82.png?auto=webp&width=125 1x, https://images.audacy2-prod.ext.audacy.com/9d337f80-58d1-4891-8a76-d327c98d0c82.png?auto=webp&width=250 2x",
			description: "Evening roundup of the day's market activities and global business news.",
		},
	];

	const saturdayShows = [
		{
			name: "Weekend Special",
			host: "Cutylight",
			startTime: "07:00",
			endTime: "12:00",
			coverArt:
				"https://images.audacy2-prod.ext.audacy.com/9d337f80-58d1-4891-8a76-d327c98d0c82.png?auto=webp&width=125 1x, https://images.audacy2-prod.ext.audacy.com/9d337f80-58d1-4891-8a76-d327c98d0c82.png?auto=webp&width=250 2x",
			description:
				"Kick off your weekend with a mix of music, entertainment, and lifestyle content.",
		},
		{
			name: "Top 10 Countdown Show",
			host: "G'son",
			startTime: "18:00",
			endTime: "19:00",
			coverArt:
				"https://images.audacy2-prod.ext.audacy.com/9d337f80-58d1-4891-8a76-d327c98d0c82.png?auto=webp&width=125 1x, https://images.audacy2-prod.ext.audacy.com/9d337f80-58d1-4891-8a76-d327c98d0c82.png?auto=webp&width=250 2x",
			description: "Count down the top 10 hits of the week.",
		},
		{
			name: "Afia Oma",
			host: "Kosi",
			startTime: "16:00",
			endTime: "17:00",
			coverArt:
				"https://images.audacy2-prod.ext.audacy.com/9d337f80-58d1-4891-8a76-d327c98d0c82.png?auto=webp&width=125 1x, https://images.audacy2-prod.ext.audacy.com/9d337f80-58d1-4891-8a76-d327c98d0c82.png?auto=webp&width=250 2x",
			description: "Explore local culture and traditions with engaging discussions and music.",
		},
	];

	const sundayShows = [
		{
			name: "Weekend Special",
			host: "Cutylight",
			startTime: "12:00",
			endTime: "18:00",
			coverArt:
				"https://images.audacy2-prod.ext.audacy.com/9d337f80-58d1-4891-8a76-d327c98d0c82.png?auto=webp&width=125 1x, https://images.audacy2-prod.ext.audacy.com/9d337f80-58d1-4891-8a76-d327c98d0c82.png?auto=webp&width=250 2x",
			description:
				"Enjoy your Sunday with a extended mix of music, entertainment, and inspiring content.",
		},
		{
			name: "Top 10 Countdown Show",
			host: "G'son",
			startTime: "18:00",
			endTime: "19:00",
			coverArt:
				"https://images.audacy2-prod.ext.audacy.com/9d337f80-58d1-4891-8a76-d327c98d0c82.png?auto=webp&width=125 1x, https://images.audacy2-prod.ext.audacy.com/9d337f80-58d1-4891-8a76-d327c98d0c82.png?auto=webp&width=250 2x",
			description: "Recap the week's top 10 hits and get ready for the week ahead.",
		},
	];

	const weekdays = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"];

	try {
		// Seed weekday shows
		for (const showData of weekdayShows) {
			const show = await db.show.create({
				data: {
					title: showData.name,
					host: showData.host,
					description: showData.description,
					duration: calculateDuration(showData.startTime, showData.endTime),
					category: "Regular",
					tags: [showData.name.toLowerCase().replace(/\s+/g, "-")],
					coverArt: showData.coverArt,
					showNote: "",
					schedule: {
						create: weekdays.map((day) => ({
							day: day as Day,
							startTime: showData.startTime,
							endTime: showData.endTime,
						})),
					},
				},
			});
			console.log(`Created weekday show: ${show.title}`);
		}

		// Seed Saturday shows
		for (const showData of saturdayShows) {
			const show = await db.show.create({
				data: {
					title: showData.name,
					host: showData.host,
					description: showData.description,
					coverArt: showData.coverArt,
					duration: calculateDuration(showData.startTime, showData.endTime),
					category: "Weekend",
					tags: [showData.name.toLowerCase().replace(/\s+/g, "-"), "saturday"],
					showNote: "",
					schedule: {
						create: {
							day: "SATURDAY",
							startTime: showData.startTime,
							endTime: showData.endTime,
						},
					},
				},
			});
			console.log(`Created Saturday show: ${show.title}`);
		}

		// Seed Sunday shows
		for (const showData of sundayShows) {
			const show = await db.show.create({
				data: {
					title: showData.name,
					host: showData.host,
					description: showData.description,
					coverArt: showData.coverArt,
					duration: calculateDuration(showData.startTime, showData.endTime),
					category: "Weekend",
					tags: [showData.name.toLowerCase().replace(/\s+/g, "-"), "sunday"],
					showNote: "",
					schedule: {
						create: {
							day: "SUNDAY",
							startTime: showData.startTime,
							endTime: showData.endTime,
						},
					},
				},
			});
			console.log(`Created Sunday show: ${show.title}`);
		}

		console.log("Database seeding completed successfully!");
	} catch (error) {
		console.error("Error seeding database:", error);
	} finally {
		await db.$disconnect();
	}
}

export async function seedPodcast() {
	const audioUrl = "https://utfs.io/f/72c716cb-89f0-41d3-bdde-7c3e4359fe01-8qfz2o.mp3";

	for (let i = 0; i < 8; i++) {
		const podcast = await db.podcast.create({
			data: {
				title: faker.music.songName(),
				description: faker.lorem.paragraph(),
				host: faker.person.fullName(),
				coverArt: faker.image.url(),
				category: faker.music.genre(),
				tags: ["Crime", "Podcast", "Land"],
				episodes: {
					create: [
						{
							title: faker.lorem.sentence(),
							description: faker.lorem.paragraph(),
							audioUrl,
							duration: faker.number.int({ min: 600, max: 3600 }), // Duration in seconds (10-60 minutes)
							releaseDate: faker.date.past(),
						},
						{
							title: faker.lorem.sentence(),
							description: faker.lorem.paragraph(),
							audioUrl,
							duration: faker.number.int({ min: 600, max: 3600 }),
							releaseDate: faker.date.past(),
						},
					],
				},
			},
		});

		console.log(`Created podcast with id: ${podcast.id}`);
	}
}

seedPodcast()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await db.$disconnect();
	});
