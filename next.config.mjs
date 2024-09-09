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
				hostname: "utfs.io",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
			},
			{
				protocol: "https",
				hostname: "i.scdn.co",
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
				destination: process.env.NEXT_PUBLIC_STREAM_URL,
			},
		];
	},
};

export default nextConfig;
