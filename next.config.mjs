/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "ichef.bbci.co.uk",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "cdn.punchng.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
			},
			{
				protocol: "https",
				hostname: "assets-global.website-files.com",
			},
			{
				protocol: "https",
				hostname: "sonicdrive-music.webflow.io",
			},
			{
				protocol: "https",
				hostname: "cdn.prod.website-files.com",
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "plus.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "images.audacy2-prod.ext.audacy.com",
			},
		],
	},
	async rewrites() {
		return [
			{
				source: "/stream",
				destination: "http://102.90.8.148:8000/stream",
			},
		];
	},
};

export default nextConfig;
