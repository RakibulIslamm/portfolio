import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			dropShadow: {
				"text-shadow": "10px 10px 30px rgba(0, 0, 0, 0.25)",
			},
		},
		screens: {
			xs: { max: "575px" }, // Mobile (iPhone 3 - iPhone XS Max).
			sm: { min: "576px", max: "897px" }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
			md: { min: "898px", max: "1250px" }, // Tablet (matches max: iPad Pro @ 1112px).
			lg: { min: "1251px" }, // Desktop smallest.
			xl: { min: "1159px" }, // Desktop wide.
			xxl: { min: "1359px" }, // Desktop widescreen.
		},
	},
	plugins: [],
};
export default config;
