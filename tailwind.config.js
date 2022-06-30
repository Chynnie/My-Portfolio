/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			neutral500: '#737373',
			neutral400: '#a3a3a3',
			neutral700: '#404040',
		},
		spacing: {
			1: '8px',
			2: '12px',
			3: '16px',
			4: '24px',
			5: '32px',
			6: '48px',
		},
		fontFamily: {
			sans: ['Roboto', 'Arial', 'sans-serif'],
		},
		screens: {
			xl: { max: '1440px' },
		},
		extend: {},
	},
	plugins: [],
};
