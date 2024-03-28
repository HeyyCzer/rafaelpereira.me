/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			// https://skillicons.dev/icons?i=js,html,css,react,nextjs,lua,java,mysql,mongodb,docker,linux
			{
				protocol: 'https',
				hostname: 'skillicons.dev',
				pathname: '/icons',
			}
		]
	}
};

export default nextConfig;
