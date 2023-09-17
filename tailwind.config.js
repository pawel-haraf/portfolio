/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				bgBody: '#020916',
				logo: '#FBE7B6',
			},
			fontFamily: {
				dmSans: ['DM Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
