/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['@fontsource/manrope'],
				mono: ['@fontsource/jetbrains-mono']
			}
		}
	},
	plugins: []
};
