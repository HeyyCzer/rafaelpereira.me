/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cms.heyyczer.com',
				pathname: '/assets/*',
			},
			{
				protocol: 'https',
				hostname: 'skillicons.dev',
				pathname: '/icons',
			}
		]
	}
};

export default nextConfig;
