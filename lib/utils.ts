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
		track: {
		preview_url:
			"https://p.scdn.co/mp3-preview/d18e7046cae8c030491032aa7c6a0bef5a17cafa?cid=cfe923b2d660439caf2b557b21f31221",
		is_playable: true,
		explicit: true,
		type: "track",
		episode: false,
		track: true,
		album: {
			is_playable: true,
			type: "album",
			album_type: "single",
			href: "https://api.spotify.com/v1/albums/6xtWvj11zaodhnfa7izxCL",
			id: "6xtWvj11zaodhnfa7izxCL",
			images: [
				{
					url: "https://i.scdn.co/image/ab67616d0000b273b54e16ded272e0223b1427e0",
					width: 640,
					height: 640,
				},
				{
					url: "https://i.scdn.co/image/ab67616d00001e02b54e16ded272e0223b1427e0",
					width: 300,
					height: 300,
				},
				{
					url: "https://i.scdn.co/image/ab67616d00004851b54e16ded272e0223b1427e0",
					width: 64,
					height: 64,
				},
			],
			name: "JUJU (feat. Shallipopi)",
			release_date: "2024-08-22",
			release_date_precision: "day",
			uri: "spotify:album:6xtWvj11zaodhnfa7izxCL",
			artists: [
				{
					external_urls: {
						spotify: "https://open.spotify.com/artist/5jF4VfE2TZtAXWYQLe3F8A",
					},
					href: "https://api.spotify.com/v1/artists/5jF4VfE2TZtAXWYQLe3F8A",
					id: "5jF4VfE2TZtAXWYQLe3F8A",
					name: "Smur Lee",
					type: "artist",
					uri: "spotify:artist:5jF4VfE2TZtAXWYQLe3F8A",
				},
				{
					external_urls: {
						spotify: "https://open.spotify.com/artist/3LOm0AZjpwVQebvkyanjDy",
					},
					href: "https://api.spotify.com/v1/artists/3LOm0AZjpwVQebvkyanjDy",
					id: "3LOm0AZjpwVQebvkyanjDy",
					name: "ODUMODUBLVCK",
					type: "artist",
					uri: "spotify:artist:3LOm0AZjpwVQebvkyanjDy",
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
				spotify: "https://open.spotify.com/album/6xtWvj11zaodhnfa7izxCL",
			},
			total_tracks: 1,
		},
		artists: [
			{
				external_urls: {
					spotify: "https://open.spotify.com/artist/5jF4VfE2TZtAXWYQLe3F8A",
				},
				href: "https://api.spotify.com/v1/artists/5jF4VfE2TZtAXWYQLe3F8A",
				id: "5jF4VfE2TZtAXWYQLe3F8A",
				name: "Smur Lee",
				type: "artist",
				uri: "spotify:artist:5jF4VfE2TZtAXWYQLe3F8A",
			},
			{
				external_urls: {
					spotify: "https://open.spotify.com/artist/3LOm0AZjpwVQebvkyanjDy",
				},
				href: "https://api.spotify.com/v1/artists/3LOm0AZjpwVQebvkyanjDy",
				id: "3LOm0AZjpwVQebvkyanjDy",
				name: "ODUMODUBLVCK",
				type: "artist",
				uri: "spotify:artist:3LOm0AZjpwVQebvkyanjDy",
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
		track_number: 1,
		duration_ms: 157756,
		external_ids: {
			isrc: "USA2P2456644",
		},
		external_urls: {
			spotify: "https://open.spotify.com/track/6XBIOtdSL47qn201KKNCA0",
		},
		href: "https://api.spotify.com/v1/tracks/6XBIOtdSL47qn201KKNCA0",
		id: "6XBIOtdSL47qn201KKNCA0",
		name: "JUJU (feat. Shallipopi)",
		popularity: 71,
		uri: "spotify:track:6XBIOtdSL47qn201KKNCA0",
		is_local: false,
		}
	},
];

export type WeeklyCountDown = typeof weekly_countdown;
