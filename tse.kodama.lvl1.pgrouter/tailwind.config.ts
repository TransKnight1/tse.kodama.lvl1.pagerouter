import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {},
		},
		colors: {
			LaranjaCorpo: "#E99D04",
			LaranjaDestaque: "#EA6702",
			AmareloIcones: "#FCD807",
			RosaCorpo: "#F1CDB1",
		},
		fontFamily: {
			Pacifico: ["Pacifico", "cursive"],
		},
	},
	plugins: [],
};
export default config;
