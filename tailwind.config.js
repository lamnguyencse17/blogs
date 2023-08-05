import { randomColors } from './src/routes/blog/[slug]/constants';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				manrope: ['Manrope', 'sans-serif'],
				mono: ['JetBrains Mono']
			}
		}
	},
	plugins: [],
	safelist: [...randomColors.map((color) => `hover:${color}`)]
};
