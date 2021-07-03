const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
		  'xxs': '320px',
		  'xs': '475px',
		  ...defaultTheme.screens,
		}
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
