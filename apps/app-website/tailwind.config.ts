import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: '#f7efe4'
			},
			fontSize: {
				'10xl': '20rem'
			},
			lineHeight: {
				tight: '0.5'
			}
		},
		fontFamily: {
			serif: ['Cormorant Garamond', 'Times New Roman', 'ui-serif', 'system-ui']
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
