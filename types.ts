import { TypedObject } from "sanity";

export interface NewsTypes {
	_id: string;
	_createdAt: string;
	title: string;
	description: string;
	slug: string;
	mainImage: string;
	altText: string;
	publishedAt: Date;
	readingTime: number;
	body: TypedObject[];
	author: AuthorTypes;
}

export interface AuthorTypes {
	_id: string;
	_createdAt: string;
	name: string;
	slug: string;
	imageUrl: string;
	altText: string;
	bio: TypedObject[];
}

type ObjectId = string;

export type Show = {
	id: ObjectId;
	title: string;
	description: string;
	coverArt: string;
	category: string;
	tags: string[];
	hostId: ObjectId;
	createdAt: Date;
	updatedAt: Date;
};

export type Host = {
	id: ObjectId;
	name: string;
	bio: string;
	instagram_handle: string;
	x_handle: string;
	facebook?: string;
	instagram?: string;
	twitter?: string;
};

export type Schedule = {
	id: ObjectId;
	day: Day;
	startTime: string;
	endTime: string;
	duration: number;
	showId: ObjectId;
};

export type Podcast = {
	id: ObjectId;
	title: string;
	host: string;
	description: string;
	coverArt: string;
	category: string;
	tags: string[];
	createdAt: Date;
	updatedAt: Date;
};

export type PodcastEpisode = {
	id: ObjectId;
	title: string;
	description: string;
	duration: number;
	audioUrl: string;
	releaseDate: Date;
	podcastId: ObjectId;
};

export type Notification = {
	id: ObjectId;
	email: string;
	subscriptions: SubscriptionType[];
	createdAt: Date;
	updatedAt: Date;
};

enum SubscriptionType {
	NEWSLETTER = "NEWSLETTER",
	PROMOTIONAL_OFFERS = "PROMOTIONAL_OFFERS",
	EVENT_NOTIFICATIONS = "EVENT_NOTIFICATIONS",
}

enum Day {
	MONDAY = "MONDAY",
	TUESDAY = "TUESDAY",
	WEDNESDAY = "WEDNESDAY",
	THURSDAY = "THURSDAY",
	FRIDAY = "FRIDAY",
	SATURDAY = "SATURDAY",
	SUNDAY = "SUNDAY",
}

export type ShowWithHost = Show & {
	host: Host;
};

export type ShowWithSchedule = Show & {
	schedule: Schedule[];
};

export type ShowWithHostAndSchedule = Show & {
	host: Host;
	schedule: Schedule[];
};

export type HostWithShow = Host & {
	show: Show | null;
};

export type ScheduleWithShow = Schedule & {
	show: Show;
};

export type ScheduleWithShowAndHost = Schedule & {
	show: Show & {
		host: Host;
	};
};

export type PodcastWithEpisodes = Podcast & {
	episodes: PodcastEpisode[];
};

export type PodcastEpisodeWithPodcast = PodcastEpisode & {
	podcast: Podcast;
};
