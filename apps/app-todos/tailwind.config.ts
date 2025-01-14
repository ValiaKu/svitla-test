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
				popup: '300px'
			},
			colors: {
				light: '#f0efea',
				primary: '#00ce6a'
			},
			fontFamily: {
				sans: ['Roboto', 'Arial', 'sans-serif']
			},

			fontSize: {
				'4xl': '2.6rem'
			}
		}
	},

	plugins: [typography, forms, containerQueries]
};
