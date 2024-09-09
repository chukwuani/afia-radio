import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
	return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function formatNumber(number: number | string, options: Intl.NumberFormatOptions = {}) {
	return new Intl.NumberFormat("en-US", {
		style: options.style ?? "decimal",
		notation: options.notation ?? "standard",
		minimumFractionDigits: options.minimumFractionDigits ?? 0,
		maximumFractionDigits: options.maximumFractionDigits ?? 2,
		...options,
	}).format(Number(number));
}

export function formatDate(date: Date | string | number, options: Intl.DateTimeFormatOptions = {}) {
	return new Intl.DateTimeFormat("en-US", {
		month: options.month ?? "long",
		day: options.day ?? "numeric",
		year: options.year ?? "numeric",
		...options,
	}).format(new Date(date));
}

export function formatDuration(minutes: number): string {
	if (minutes <= 60) {
		return `${minutes} min${minutes !== 1 ? "s" : ""}`;
	} else {
		const hours = Math.floor(minutes / 60);
		const remainingMinutes = minutes % 60;
		let result = `${hours} hour${hours !== 1 ? "s" : ""}`;
		if (remainingMinutes > 0) {
			result += ` ${remainingMinutes} min${remainingMinutes !== 1 ? "s" : ""}`;
		}
		return result;
	}
}

export const formatDurationShort = (totalSeconds: number): string => {
	const minutes = Math.floor(totalSeconds / 60); // Get the total minutes
	const seconds = Math.floor(totalSeconds % 60); // Get the remaining seconds

	return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
};

export const unknownError = "An unknown error occurred. Please try again later.";

export const weekly_countdown = [
	{
		album: {
			album_type: "album",
			artists: [
				{
					external_urls: {
						spotify: "https://open.spotify.com/artist/46pWGuE3dSwY3bMMXGBvVS",
					},
					href: "https://api.spotify.com/v1/artists/46pWGuE3dSwY3bMMXGBvVS",
					id: "46pWGuE3dSwY3bMMXGBvVS",
					name: "Rema",
					type: "artist",
					uri: "spotify:artist:46pWGuE3dSwY3bMMXGBvVS",
				},
			],
			external_urls: {
				spotify: "https://open.spotify.com/album/2DDaN7Pgx9uDPd8IbWWW9H",
			},
			href: "https://api.spotify.com/v1/albums/2DDaN7Pgx9uDPd8IbWWW9H",
			id: "2DDaN7Pgx9uDPd8IbWWW9H",
			images: [
				{
					url: "https://i.scdn.co/image/ab67616d0000b27319df46a8fa3d972ff4c84275",
					width: 640,
					height: 640,
				},
				{
					url: "https://i.scdn.co/image/ab67616d00001e0219df46a8fa3d972ff4c84275",
					width: 300,
					height: 300,
				},
				{
					url: "https://i.scdn.co/image/ab67616d0000485119df46a8fa3d972ff4c84275",
					width: 64,
					height: 64,
				},
			],
			is_playable: true,
			name: "HEIS",
			release_date: "2024-07-10",
			release_date_precision: "day",
			total_tracks: 11,
			type: "album",
			uri: "spotify:album:2DDaN7Pgx9uDPd8IbWWW9H",
		},
		artists: [
			{
				external_urls: {
					spotify: "https://open.spotify.com/artist/46pWGuE3dSwY3bMMXGBvVS",
				},
				href: "https://api.spotify.com/v1/artists/46pWGuE3dSwY3bMMXGBvVS",
				id: "46pWGuE3dSwY3bMMXGBvVS",
				name: "Rema",
				type: "artist",
				uri: "spotify:artist:46pWGuE3dSwY3bMMXGBvVS",
			},
		],
		disc_number: 1,
		duration_ms: 137684,
		explicit: false,
		external_ids: {
			isrc: "NGUM72400019",
		},
		external_urls: {
			spotify: "https://open.spotify.com/track/7ySC0IjVS1PMEdsZOvsUK2",
		},
		href: "https://api.spotify.com/v1/tracks/7ySC0IjVS1PMEdsZOvsUK2",
		id: "7ySC0IjVS1PMEdsZOvsUK2",
		is_local: false,
		is_playable: true,
		name: "OZEBA",
		popularity: 73,
		preview_url:
			"https://p.scdn.co/mp3-preview/674f19751b41a24c91aef575be4714575a41b3be?cid=cfe923b2d660439caf2b557b21f31221",
		track_number: 7,
		type: "track",
		uri: "spotify:track:7ySC0IjVS1PMEdsZOvsUK2",
	},
	{
		album: {
			album_type: "album",
			artists: [
				{
					external_urls: {
						spotify: "https://open.spotify.com/artist/3a1tBryiczPAZpgoZN9Rzg",
					},
					href: "https://api.spotify.com/v1/artists/3a1tBryiczPAZpgoZN9Rzg",
					id: "3a1tBryiczPAZpgoZN9Rzg",
					name: "Asake",
					type: "artist",
					uri: "spotify:artist:3a1tBryiczPAZpgoZN9Rzg",
				},
			],
			external_urls: {
				spotify: "https://open.spotify.com/album/3kS42vslfpYnxWkGN4JvlW",
			},
			href: "https://api.spotify.com/v1/albums/3kS42vslfpYnxWkGN4JvlW",
			id: "3kS42vslfpYnxWkGN4JvlW",
			images: [
				{
					url: "https://i.scdn.co/image/ab67616d0000b2737c45c1c29c18a5e0b46fc117",
					width: 640,
					height: 640,
				},
				{
					url: "https://i.scdn.co/image/ab67616d00001e027c45c1c29c18a5e0b46fc117",
					width: 300,
					height: 300,
				},
				{
					url: "https://i.scdn.co/image/ab67616d000048517c45c1c29c18a5e0b46fc117",
					width: 64,
					height: 64,
				},
			],
			is_playable: true,
			name: "Lungu Boy",
			release_date: "2024-08-08",
			release_date_precision: "day",
			total_tracks: 15,
			type: "album",
			uri: "spotify:album:3kS42vslfpYnxWkGN4JvlW",
		},
		artists: [
			{
				external_urls: {
					spotify: "https://open.spotify.com/artist/3a1tBryiczPAZpgoZN9Rzg",
				},
				href: "https://api.spotify.com/v1/artists/3a1tBryiczPAZpgoZN9Rzg",
				id: "3a1tBryiczPAZpgoZN9Rzg",
				name: "Asake",
				type: "artist",
				uri: "spotify:artist:3a1tBryiczPAZpgoZN9Rzg",
			},
			{
				external_urls: {
					spotify: "https://open.spotify.com/artist/0Y5tJX1MQlPlqiwlOH1tJY",
				},
				href: "https://api.spotify.com/v1/artists/0Y5tJX1MQlPlqiwlOH1tJY",
				id: "0Y5tJX1MQlPlqiwlOH1tJY",
				name: "Travis Scott",
				type: "artist",
				uri: "spotify:artist:0Y5tJX1MQlPlqiwlOH1tJY",
			},
		],
		disc_number: 1,
		duration_ms: 172597,
		explicit: true,
		external_ids: {
			isrc: "USUYG1561631",
		},
		external_urls: {
			spotify: "https://open.spotify.com/track/1qxKva4IzWde7m2jLpZvDU",
		},
		href: "https://api.spotify.com/v1/tracks/1qxKva4IzWde7m2jLpZvDU",
		id: "1qxKva4IzWde7m2jLpZvDU",
		is_local: false,
		is_playable: true,
		name: "Active",
		popularity: 73,
		preview_url:
			"https://p.scdn.co/mp3-preview/414d433a2242ea4b19016ed816f9278379053cf9?cid=cfe923b2d660439caf2b557b21f31221",
		track_number: 6,
		type: "track",
		uri: "spotify:track:1qxKva4IzWde7m2jLpZvDU",
	},
	{
		album: {
			album_type: "album",
			artists: [
				{
					external_urls: {
						spotify: "https://open.spotify.com/artist/3a1tBryiczPAZpgoZN9Rzg",
					},
					href: "https://api.spotify.com/v1/artists/3a1tBryiczPAZpgoZN9Rzg",
					id: "3a1tBryiczPAZpgoZN9Rzg",
					name: "Asake",
					type: "artist",
					uri: "spotify:artist:3a1tBryiczPAZpgoZN9Rzg",
				},
			],
			external_urls: {
				spotify: "https://open.spotify.com/album/3kS42vslfpYnxWkGN4JvlW",
			},
			href: "https://api.spotify.com/v1/albums/3kS42vslfpYnxWkGN4JvlW",
			id: "3kS42vslfpYnxWkGN4JvlW",
			images: [
				{
					url: "https://i.scdn.co/image/ab67616d0000b2737c45c1c29c18a5e0b46fc117",
					width: 640,
					height: 640,
				},
				{
					url: "https://i.scdn.co/image/ab67616d00001e027c45c1c29c18a5e0b46fc117",
					width: 300,
					height: 300,
				},
				{
					url: "https://i.scdn.co/image/ab67616d000048517c45c1c29c18a5e0b46fc117",
					width: 64,
					height: 64,
				},
			],
			is_playable: true,
			name: "Lungu Boy",
			release_date: "2024-08-08",
			release_date_precision: "day",
			total_tracks: 15,
			type: "album",
			uri: "spotify:album:3kS42vslfpYnxWkGN4JvlW",
		},
		artists: [
			{
				external_urls: {
					spotify: "https://open.spotify.com/artist/3a1tBryiczPAZpgoZN9Rzg",
				},
				href: "https://api.spotify.com/v1/artists/3a1tBryiczPAZpgoZN9Rzg",
				id: "3a1tBryiczPAZpgoZN9Rzg",
				name: "Asake",
				type: "artist",
				uri: "spotify:artist:3a1tBryiczPAZpgoZN9Rzg",
			},
			{
				external_urls: {
					spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
				},
				href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
				id: "3tVQdUvClmAT7URs9V3rsp",
				name: "Wizkid",
				type: "artist",
				uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
			},
		],
		disc_number: 1,
		duration_ms: 219628,
		explicit: false,
		external_ids: {
			isrc: "USUYG1566014",
		},
		external_urls: {
			spotify: "https://open.spotify.com/track/13VXuHw3O8Yt7VwRIDqSo4",
		},
		href: "https://api.spotify.com/v1/tracks/13VXuHw3O8Yt7VwRIDqSo4",
		id: "13VXuHw3O8Yt7VwRIDqSo4",
		is_local: false,
		is_playable: true,
		name: "MMS",
		popularity: 75,
		preview_url:
			"https://p.scdn.co/mp3-preview/e52ef8c3fe18d460b6eb2c6c7e523bd80bf1d656?cid=cfe923b2d660439caf2b557b21f31221",
		track_number: 2,
		type: "track",
		uri: "spotify:track:13VXuHw3O8Yt7VwRIDqSo4",
	},
	{
		album: {
			album_type: "album",
			artists: [
				{
					external_urls: {
						spotify: "https://open.spotify.com/artist/4JM1zsVj1pt38Q8mhv5teI",
					},
					href: "https://api.spotify.com/v1/artists/4JM1zsVj1pt38Q8mhv5teI",
					id: "4JM1zsVj1pt38Q8mhv5teI",
					name: "Young Jonn",
					type: "artist",
					uri: "spotify:artist:4JM1zsVj1pt38Q8mhv5teI",
				},
			],
			external_urls: {
				spotify: "https://open.spotify.com/album/6xr2tWr8pg5ndECtOD66lp",
			},
			href: "https://api.spotify.com/v1/albums/6xr2tWr8pg5ndECtOD66lp",
			id: "6xr2tWr8pg5ndECtOD66lp",
			images: [
				{
					url: "https://i.scdn.co/image/ab67616d0000b273fa058974e25c095bcf528028",
					width: 640,
					height: 640,
				},
				{
					url: "https://i.scdn.co/image/ab67616d00001e02fa058974e25c095bcf528028",
					width: 300,
					height: 300,
				},
				{
					url: "https://i.scdn.co/image/ab67616d00004851fa058974e25c095bcf528028",
					width: 64,
					height: 64,
				},
			],
			is_playable: true,
			name: "Jiggy Forever",
			release_date: "2024-04-12",
			release_date_precision: "day",
			total_tracks: 16,
			type: "album",
			uri: "spotify:album:6xr2tWr8pg5ndECtOD66lp",
		},
		artists: [
			{
				external_urls: {
					spotify: "https://open.spotify.com/artist/4JM1zsVj1pt38Q8mhv5teI",
				},
				href: "https://api.spotify.com/v1/artists/4JM1zsVj1pt38Q8mhv5teI",
				id: "4JM1zsVj1pt38Q8mhv5teI",
				name: "Young Jonn",
				type: "artist",
				uri: "spotify:artist:4JM1zsVj1pt38Q8mhv5teI",
			},
		],
		disc_number: 1,
		duration_ms: 141818,
		explicit: false,
		external_ids: {
			isrc: "US38Y2408256",
		},
		external_urls: {
			spotify: "https://open.spotify.com/track/4KZMoDuxwSYP63bhbnMqe3",
		},
		href: "https://api.spotify.com/v1/tracks/4KZMoDuxwSYP63bhbnMqe3",
		id: "4KZMoDuxwSYP63bhbnMqe3",
		is_local: false,
		is_playable: true,
		name: "Stronger",
		popularity: 71,
		preview_url:
			"https://p.scdn.co/mp3-preview/7803b24f30cf677f377f5e533489461a60709d66?cid=cfe923b2d660439caf2b557b21f31221",
		track_number: 9,
		type: "track",
		uri: "spotify:track:4KZMoDuxwSYP63bhbnMqe3",
	},
	{
		album: {
			album_type: "single",
			artists: [
				{
					external_urls: {
						spotify: "https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa",
					},
					href: "https://api.spotify.com/v1/artists/3wcj11K77LjEY1PkEazffa",
					id: "3wcj11K77LjEY1PkEazffa",
					name: "Burna Boy",
					type: "artist",
					uri: "spotify:artist:3wcj11K77LjEY1PkEazffa",
				},
			],
			external_urls: {
				spotify: "https://open.spotify.com/album/30v3HmAMMHUgEC8ux25PLr",
			},
			href: "https://api.spotify.com/v1/albums/30v3HmAMMHUgEC8ux25PLr",
			id: "30v3HmAMMHUgEC8ux25PLr",
			images: [
				{
					url: "https://i.scdn.co/image/ab67616d0000b273c4d7ed9e7abbee796aa7682f",
					width: 640,
					height: 640,
				},
				{
					url: "https://i.scdn.co/image/ab67616d00001e02c4d7ed9e7abbee796aa7682f",
					width: 300,
					height: 300,
				},
				{
					url: "https://i.scdn.co/image/ab67616d00004851c4d7ed9e7abbee796aa7682f",
					width: 64,
					height: 64,
				},
			],
			is_playable: true,
			name: "Higher",
			release_date: "2024-06-27",
			release_date_precision: "day",
			total_tracks: 1,
			type: "album",
			uri: "spotify:album:30v3HmAMMHUgEC8ux25PLr",
		},
		artists: [
			{
				external_urls: {
					spotify: "https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa",
				},
				href: "https://api.spotify.com/v1/artists/3wcj11K77LjEY1PkEazffa",
				id: "3wcj11K77LjEY1PkEazffa",
				name: "Burna Boy",
				type: "artist",
				uri: "spotify:artist:3wcj11K77LjEY1PkEazffa",
			},
		],
		disc_number: 1,
		duration_ms: 137631,
		explicit: false,
		external_ids: {
			isrc: "USAT22404336",
		},
		external_urls: {
			spotify: "https://open.spotify.com/track/1N8G6PUj14v0VG8evbRSxp",
		},
		href: "https://api.spotify.com/v1/tracks/1N8G6PUj14v0VG8evbRSxp",
		id: "1N8G6PUj14v0VG8evbRSxp",
		is_local: false,
		is_playable: true,
		name: "Higher",
		popularity: 71,
		preview_url:
			"https://p.scdn.co/mp3-preview/b0ca65fb4766b50bd6c6e437320964d3c6eff01c?cid=cfe923b2d660439caf2b557b21f31221",
		track_number: 1,
		type: "track",
		uri: "spotify:track:1N8G6PUj14v0VG8evbRSxp",
	},
	{
		album: {
			album_type: "album",
			artists: [
				{
					external_urls: {
						spotify: "https://open.spotify.com/artist/1E5hfn5BduN2nnoZCJmUVG",
					},
					href: "https://api.spotify.com/v1/artists/1E5hfn5BduN2nnoZCJmUVG",
					id: "1E5hfn5BduN2nnoZCJmUVG",
					name: "Victony",
					type: "artist",
					uri: "spotify:artist:1E5hfn5BduN2nnoZCJmUVG",
				},
			],
			external_urls: {
				spotify: "https://open.spotify.com/album/1dfsKiTgOKzA8sLHCNMuKc",
			},
			href: "https://api.spotify.com/v1/albums/1dfsKiTgOKzA8sLHCNMuKc",
			id: "1dfsKiTgOKzA8sLHCNMuKc",
			images: [
				{
					url: "https://i.scdn.co/image/ab67616d0000b2734763d04b6cee4f1d3a24ccc5",
					width: 640,
					height: 640,
				},
				{
					url: "https://i.scdn.co/image/ab67616d00001e024763d04b6cee4f1d3a24ccc5",
					width: 300,
					height: 300,
				},
				{
					url: "https://i.scdn.co/image/ab67616d000048514763d04b6cee4f1d3a24ccc5",
					width: 64,
					height: 64,
				},
			],
			is_playable: true,
			name: "Stubborn",
			release_date: "2024-06-21",
			release_date_precision: "day",
			total_tracks: 14,
			type: "album",
			uri: "spotify:album:1dfsKiTgOKzA8sLHCNMuKc",
		},
		artists: [
			{
				external_urls: {
					spotify: "https://open.spotify.com/artist/1E5hfn5BduN2nnoZCJmUVG",
				},
				href: "https://api.spotify.com/v1/artists/1E5hfn5BduN2nnoZCJmUVG",
				id: "1E5hfn5BduN2nnoZCJmUVG",
				name: "Victony",
				type: "artist",
				uri: "spotify:artist:1E5hfn5BduN2nnoZCJmUVG",
			},
		],
		disc_number: 1,
		duration_ms: 202958,
		explicit: true,
		external_ids: {
			isrc: "QZWA32200683",
		},
		external_urls: {
			spotify: "https://open.spotify.com/track/6qS9yoAUIXNfno5t4YLQdn",
		},
		href: "https://api.spotify.com/v1/tracks/6qS9yoAUIXNfno5t4YLQdn",
		id: "6qS9yoAUIXNfno5t4YLQdn",
		is_local: false,
		is_playable: true,
		name: "Risk",
		popularity: 70,
		preview_url:
			"https://p.scdn.co/mp3-preview/9efa217f0314decbe4457aaddb362e843301971f?cid=cfe923b2d660439caf2b557b21f31221",
		track_number: 6,
		type: "track",
		uri: "spotify:track:6qS9yoAUIXNfno5t4YLQdn",
	},
	{
		album: {
			album_type: "album",
			artists: [
				{
					external_urls: {
						spotify: "https://open.spotify.com/artist/4ovtyvs7j1jSmwhkBGHqSr",
					},
					href: "https://api.spotify.com/v1/artists/4ovtyvs7j1jSmwhkBGHqSr",
					id: "4ovtyvs7j1jSmwhkBGHqSr",
					name: "Olamide",
					type: "artist",
					uri: "spotify:artist:4ovtyvs7j1jSmwhkBGHqSr",
				},
			],
			external_urls: {
				spotify: "https://open.spotify.com/album/4L4439Ev3pC3bRZdmKUCgI",
			},
			href: "https://api.spotify.com/v1/albums/4L4439Ev3pC3bRZdmKUCgI",
			id: "4L4439Ev3pC3bRZdmKUCgI",
			images: [
				{
					url: "https://i.scdn.co/image/ab67616d0000b273612e202866040c2447203e36",
					width: 640,
					height: 640,
				},
				{
					url: "https://i.scdn.co/image/ab67616d00001e02612e202866040c2447203e36",
					width: 300,
					height: 300,
				},
				{
					url: "https://i.scdn.co/image/ab67616d00004851612e202866040c2447203e36",
					width: 64,
					height: 64,
				},
			],
			is_playable: true,
			name: "Ikigai / 生き甲斐, Vol. 1",
			release_date: "2024-06-26",
			release_date_precision: "day",
			total_tracks: 7,
			type: "album",
			uri: "spotify:album:4L4439Ev3pC3bRZdmKUCgI",
		},
		artists: [
			{
				external_urls: {
					spotify: "https://open.spotify.com/artist/4ovtyvs7j1jSmwhkBGHqSr",
				},
				href: "https://api.spotify.com/v1/artists/4ovtyvs7j1jSmwhkBGHqSr",
				id: "4ovtyvs7j1jSmwhkBGHqSr",
				name: "Olamide",
				type: "artist",
				uri: "spotify:artist:4ovtyvs7j1jSmwhkBGHqSr",
			},
		],
		disc_number: 1,
		duration_ms: 179478,
		explicit: false,
		external_ids: {
			isrc: "USUYG1554319",
		},
		external_urls: {
			spotify: "https://open.spotify.com/track/0WeU5EfNFu1wmlmCdMNDEJ",
		},
		href: "https://api.spotify.com/v1/tracks/0WeU5EfNFu1wmlmCdMNDEJ",
		id: "0WeU5EfNFu1wmlmCdMNDEJ",
		is_local: false,
		is_playable: true,
		name: "Metaverse",
		popularity: 69,
		preview_url:
			"https://p.scdn.co/mp3-preview/f0ad0ed2fc0f4c80f01562f56e95bb6f863a767c?cid=cfe923b2d660439caf2b557b21f31221",
		track_number: 1,
		type: "track",
		uri: "spotify:track:0WeU5EfNFu1wmlmCdMNDEJ",
	},
	{
		album: {
			album_type: "album",
			artists: [
				{
					external_urls: {
						spotify: "https://open.spotify.com/artist/4zmZ8lVLzGc84S4v2B1rLx",
					},
					href: "https://api.spotify.com/v1/artists/4zmZ8lVLzGc84S4v2B1rLx",
					id: "4zmZ8lVLzGc84S4v2B1rLx",
					name: "Seyi Vibez",
					type: "artist",
					uri: "spotify:artist:4zmZ8lVLzGc84S4v2B1rLx",
				},
			],
			external_urls: {
				spotify: "https://open.spotify.com/album/38tvoGnBsZNd8FJg2YsCT4",
			},
			href: "https://api.spotify.com/v1/albums/38tvoGnBsZNd8FJg2YsCT4",
			id: "38tvoGnBsZNd8FJg2YsCT4",
			images: [
				{
					url: "https://i.scdn.co/image/ab67616d0000b273a5db6e3fd57954a028540e44",
					width: 640,
					height: 640,
				},
				{
					url: "https://i.scdn.co/image/ab67616d00001e02a5db6e3fd57954a028540e44",
					width: 300,
					height: 300,
				},
				{
					url: "https://i.scdn.co/image/ab67616d00004851a5db6e3fd57954a028540e44",
					width: 64,
					height: 64,
				},
			],
			is_playable: true,
			name: "Loseyi Professor",
			release_date: "2024-07-12",
			release_date_precision: "day",
			total_tracks: 7,
			type: "album",
			uri: "spotify:album:38tvoGnBsZNd8FJg2YsCT4",
		},
		artists: [
			{
				external_urls: {
					spotify: "https://open.spotify.com/artist/4zmZ8lVLzGc84S4v2B1rLx",
				},
				href: "https://api.spotify.com/v1/artists/4zmZ8lVLzGc84S4v2B1rLx",
				id: "4zmZ8lVLzGc84S4v2B1rLx",
				name: "Seyi Vibez",
				type: "artist",
				uri: "spotify:artist:4zmZ8lVLzGc84S4v2B1rLx",
			},
		],
		disc_number: 1,
		duration_ms: 164317,
		explicit: false,
		external_ids: {
			isrc: "USA2P2444757",
		},
		external_urls: {
			spotify: "https://open.spotify.com/track/5hphSVebVxTpDfrk09W0hS",
		},
		href: "https://api.spotify.com/v1/tracks/5hphSVebVxTpDfrk09W0hS",
		id: "5hphSVebVxTpDfrk09W0hS",
		is_local: false,
		is_playable: true,
		name: "Doha",
		popularity: 68,
		preview_url:
			"https://p.scdn.co/mp3-preview/1bceb8fd3233a6a477778751ca674b63abea0633?cid=cfe923b2d660439caf2b557b21f31221",
		track_number: 2,
		type: "track",
		uri: "spotify:track:5hphSVebVxTpDfrk09W0hS",
	},
	{
		album: {
			album_type: "album",
			artists: [
				{
					external_urls: {
						spotify: "https://open.spotify.com/artist/46pWGuE3dSwY3bMMXGBvVS",
					},
					href: "https://api.spotify.com/v1/artists/46pWGuE3dSwY3bMMXGBvVS",
					id: "46pWGuE3dSwY3bMMXGBvVS",
					name: "Rema",
					type: "artist",
					uri: "spotify:artist:46pWGuE3dSwY3bMMXGBvVS",
				},
			],
			external_urls: {
				spotify: "https://open.spotify.com/album/2DDaN7Pgx9uDPd8IbWWW9H",
			},
			href: "https://api.spotify.com/v1/albums/2DDaN7Pgx9uDPd8IbWWW9H",
			id: "2DDaN7Pgx9uDPd8IbWWW9H",
			images: [
				{
					url: "https://i.scdn.co/image/ab67616d0000b27319df46a8fa3d972ff4c84275",
					width: 640,
					height: 640,
				},
				{
					url: "https://i.scdn.co/image/ab67616d00001e0219df46a8fa3d972ff4c84275",
					width: 300,
					height: 300,
				},
				{
					url: "https://i.scdn.co/image/ab67616d0000485119df46a8fa3d972ff4c84275",
					width: 64,
					height: 64,
				},
			],
			is_playable: true,
			name: "HEIS",
			release_date: "2024-07-10",
			release_date_precision: "day",
			total_tracks: 11,
			type: "album",
			uri: "spotify:album:2DDaN7Pgx9uDPd8IbWWW9H",
		},
		artists: [
			{
				external_urls: {
					spotify: "https://open.spotify.com/artist/46pWGuE3dSwY3bMMXGBvVS",
				},
				href: "https://api.spotify.com/v1/artists/46pWGuE3dSwY3bMMXGBvVS",
				id: "46pWGuE3dSwY3bMMXGBvVS",
				name: "Rema",
				type: "artist",
				uri: "spotify:artist:46pWGuE3dSwY3bMMXGBvVS",
			},
		],
		disc_number: 1,
		duration_ms: 113720,
		explicit: false,
		external_ids: {
			isrc: "NGUM72400009",
		},
		external_urls: {
			spotify: "https://open.spotify.com/track/5oUDNEJSEjsVT7LeWya4Gv",
		},
		href: "https://api.spotify.com/v1/tracks/5oUDNEJSEjsVT7LeWya4Gv",
		id: "5oUDNEJSEjsVT7LeWya4Gv",
		is_local: false,
		is_playable: true,
		name: "HEHEHE",
		popularity: 70,
		preview_url:
			"https://p.scdn.co/mp3-preview/89e280d17ad37a54958e150af029af48ca3f314c?cid=cfe923b2d660439caf2b557b21f31221",
		track_number: 3,
		type: "track",
		uri: "spotify:track:5oUDNEJSEjsVT7LeWya4Gv",
	},
	{
		album: {
			album_type: "single",
			artists: [
				{
					external_urls: {
						spotify: "https://open.spotify.com/artist/46pWGuE3dSwY3bMMXGBvVS",
					},
					href: "https://api.spotify.com/v1/artists/46pWGuE3dSwY3bMMXGBvVS",
					id: "46pWGuE3dSwY3bMMXGBvVS",
					name: "Rema",
					type: "artist",
					uri: "spotify:artist:46pWGuE3dSwY3bMMXGBvVS",
				},
				{
					external_urls: {
						spotify: "https://open.spotify.com/artist/4TKhxSkqClXrdtUWgKqHVU",
					},
					href: "https://api.spotify.com/v1/artists/4TKhxSkqClXrdtUWgKqHVU",
					id: "4TKhxSkqClXrdtUWgKqHVU",
					name: "Shallipopi",
					type: "artist",
					uri: "spotify:artist:4TKhxSkqClXrdtUWgKqHVU",
				},
			],
			external_urls: {
				spotify: "https://open.spotify.com/album/3xk9IBb6oVwJw28grBKWnT",
			},
			href: "https://api.spotify.com/v1/albums/3xk9IBb6oVwJw28grBKWnT",
			id: "3xk9IBb6oVwJw28grBKWnT",
			images: [
				{
					url: "https://i.scdn.co/image/ab67616d0000b2733314f1abcf1a048160e01a88",
					width: 640,
					height: 640,
				},
				{
					url: "https://i.scdn.co/image/ab67616d00001e023314f1abcf1a048160e01a88",
					width: 300,
					height: 300,
				},
				{
					url: "https://i.scdn.co/image/ab67616d000048513314f1abcf1a048160e01a88",
					width: 64,
					height: 64,
				},
			],
			is_playable: true,
			name: "BENIN BOYS",
			release_date: "2024-06-20",
			release_date_precision: "day",
			total_tracks: 1,
			type: "album",
			uri: "spotify:album:3xk9IBb6oVwJw28grBKWnT",
		},
		artists: [
			{
				external_urls: {
					spotify: "https://open.spotify.com/artist/46pWGuE3dSwY3bMMXGBvVS",
				},
				href: "https://api.spotify.com/v1/artists/46pWGuE3dSwY3bMMXGBvVS",
				id: "46pWGuE3dSwY3bMMXGBvVS",
				name: "Rema",
				type: "artist",
				uri: "spotify:artist:46pWGuE3dSwY3bMMXGBvVS",
			},
			{
				external_urls: {
					spotify: "https://open.spotify.com/artist/4TKhxSkqClXrdtUWgKqHVU",
				},
				href: "https://api.spotify.com/v1/artists/4TKhxSkqClXrdtUWgKqHVU",
				id: "4TKhxSkqClXrdtUWgKqHVU",
				name: "Shallipopi",
				type: "artist",
				uri: "spotify:artist:4TKhxSkqClXrdtUWgKqHVU",
			},
		],
		disc_number: 1,
		duration_ms: 169879,
		explicit: false,
		external_ids: {
			isrc: "NGUM72400001",
		},
		external_urls: {
			spotify: "https://open.spotify.com/track/5GX1wsJfvSXUobjDJgrVBD",
		},
		href: "https://api.spotify.com/v1/tracks/5GX1wsJfvSXUobjDJgrVBD",
		id: "5GX1wsJfvSXUobjDJgrVBD",
		is_local: false,
		is_playable: true,
		name: "BENIN BOYS",
		popularity: 66,
		preview_url:
			"https://p.scdn.co/mp3-preview/f50d3b226a66d7ce7bf581c348c89adcbfd9700a?cid=cfe923b2d660439caf2b557b21f31221",
		track_number: 1,
		type: "track",
		uri: "spotify:track:5GX1wsJfvSXUobjDJgrVBD",
	},
];

export type WeeklyCountDown = typeof weekly_countdown;
