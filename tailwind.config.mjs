/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		
		colors: {
			black: "#2C2C2C",
			white: "#FFFFFF",
			gray: {
				100: "#F5F5F5",
				200: "#E0E0E0",
				300: "#B0B0B0",
				400: "#4D4D4D",
				500: "#292A32",
			},
			yellow: {
				100: "#FFF8E1",
				200: "#FFE082",
				300: "#FFAB00",
			},
			red: {
				100: "#FFCDD2",
				200: "#EF9A9A",
				300: "#E57373",
				400: "#EF5350",
				500: "#C62828",
				600: "#8B0000",
			},
			zinc: {
				100: "#2C2C2C",
				200: "#F5F5F5",
				300: "#B0B0B0",
				400: "#4D4D4D",
				500: "#FFFFFF",
			},
		},
		boxShadow: {
			'card': '0px 5px 0px 0px #292A32',
		},
		extend: {
			fontFamily: {
				SpaceGrotesk: ["Space Grotesk", "sans-serif"],
			},
		},
	},
};
