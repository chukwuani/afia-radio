export type SiteConfig = typeof siteConfig;
export type MainNav = typeof siteConfig.mainNav;

const links = {
	x: "https://twitter.com/afia993enugu",
	instagram: "https://instagram.com/afia993enugu",
	facebook: "https://facebook.com/afia993enugu",
};

export const siteConfig = {
	title: "AFIA Radio",
	description:
		"Afia 99.3FM, Enugu. Your Number One Voice Of Enterprise! Discover the latest music tracks, explore captivating podcasts, or tune in to radio shows.",
	url: "https://afia993.com",
	ogImage: "https://afia993.com/opengraph-image.jpg",
	links,
	mainNav: [
		{
			title: "Home",
			href: "/",
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
					href: "mailto:afia993enugu@gmail.com",
					external: true,
				},
			],
		},
	],
};
