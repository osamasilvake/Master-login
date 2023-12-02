/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				101: '#F5F6FB',
				102: '#313650',
				103: '#606878',
				104: '#FFA100',
				105: '#E89800',
				106: '#788088'
			},
			spacing: {
				bottom: '47px'
			}
		}
	},
	plugins: []
};
