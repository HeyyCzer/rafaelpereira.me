/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
		unoptimized: true,
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cms.heyyczer.com',
				pathname: '/assets/*',
			},
		],
	},
};

export default nextConfig;
