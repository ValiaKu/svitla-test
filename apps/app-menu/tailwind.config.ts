import containerQueries from "@tailwindcss/container-queries";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			colors: {
				link: "#5c5c68",
				active: "#fffeff",
				primary: "#ffffff",
				"brand-navy-950": "#010015",
				"brand-navy-900": "#050a41",
			},
		},
		fontFamily: {
			sans: ["Helvetica", "Arial", "ui-sans-serif", "system-ui"],
		},
		fontSize: {
			"4xl": "2.6rem",
		},
	},

	plugins: [typography, forms, containerQueries],
} satisfies Config;
