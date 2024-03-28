import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				code: ["JetBrains Mono", "monospace"],
			},
			colors: {
			}
		},
	},
	plugins: [],
};
export default config;
