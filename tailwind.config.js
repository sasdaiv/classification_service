/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins'],
			},
			transitionProperty: {
				margin: 'margin',
			},
			colors: {
				text: 'red',
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				'.trans': {
					'transition-property': 'all',
					'transition-duration': '0.3s',
				},
				'.hvr': {
					transition: 'all 0.3s',

					'&:hover': {
						transform: 'scale(1.05)',
					},
				},
			};

			addUtilities(newUtilities, ['responsive', 'hover']);
		},
	],
};
