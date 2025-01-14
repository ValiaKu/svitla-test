import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			// Adding custom width
			width: {
				logo: '26rem'
			},
			// Adding custom height
			height: {
				logo: '26rem'
			},
			borderRadius: {
				logo: '30%'
			},
			colors: {
				'gradient-light': '#daf0fe',
				'gradient-blue': '#ccd3ff',
				'gradient-pink': '#d7c5ff',
				'gradient-indigo': '#abbdff'
			}
		}
	},

	plugins: [typography, forms, containerQueries]
};
