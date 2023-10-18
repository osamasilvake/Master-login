/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundColor: {
				'custom-red': '#FF4552',
				'custom-r': '#FF4B2B'
			}
		}
	},
	plugins: []
};
