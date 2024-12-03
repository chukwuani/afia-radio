import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [
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
		],
	},
};

// Make sure adding Sentry options is the last code to run before exporting
export default withSentryConfig(nextConfig, {
	org: "afia-radio",
	project: "javascript-nextjs",

	// An auth token is required for uploading source maps.
	authToken: process.env.SENTRY_AUTH_TOKEN,

	silent: false, // Can be used to suppress logs
});
