export type SiteConfig = typeof siteConfig;
export type MainNav = typeof siteConfig.mainNav;

const links = {
	x: "https://twitter.com/afiatvofficial",
	instagram: "https://instagram.com/afiatvofficial",
	facebook: "https://facebook.com/afiatvofficial",
	youtube: "https://youtube.com/@afiatvofficial",
};

export const siteConfig = {
	title: "AFIA Radio",
	description:
		"Listen without limits. Discover the latest music tracks, explore captivating podcasts, or tune in to radio shows - all on your schedule.",
	url: "https://afiatv.net",
	ogImage: "https://afiatv.net/opengraph-image.png",
	links,
	mainNav: [
		{
			title: "Home",
			href: "/",
			external: false,
			disabled: false,
		},
		{
			title: "Playlists",
			href: "/playlists",
			external: false,
			disabled: false,
		},
		{
			title: "Podcasts",
			href: "/podcasts",
			external: false,
			disabled: false,
		},
		{
			title: "News",
			href: "/news",
			external: false,
			disabled: false,
		},
	],
	footerNav: [
		{
			title: "Explore",
			items: [
				{
					title: "Live Radio",
					href: "/radio",
					external: false,
				},
				{
					title: "Podcasts",
					href: "/podcasts",
					external: false,
				},
				{
					title: "Playlists",
					href: "/playlists",
					external: false,
				},
				{
					title: "News",
					href: "/news",
					external: false,
				},
			],
		},
		{
			title: "Help",
			items: [
				{
					title: "About us",
					href: "/about",
					external: false,
				},
				{
					title: "Advertise with us",
					href: "/advertise",
					external: false,
				},
				{
					title: "Terms",
					href: "/terms",
					external: false,
				},
				{
					title: "Privacy Policy",
					href: "/privacy",
					external: false,
				},
			],
		},
		{
			title: "Contact",
			items: [
				{
					title: "Info@afiatv.net",
					href: "mailto:info@afiatv.net",
					external: false,
				},
				{
					title: "Editorial Team",
					href: "mailto:editorial@afiatv.net",
					external: true,
				},
			],
		},
	],
};
