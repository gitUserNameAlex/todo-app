/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				mandarineLight: '#FFC373',
				mandarine: '#FFAD40',
				mandarineDark: '#FF9200',
				berryLight: '#7373D9',
				berry: '#1B1BB3',
				berryDark: '#090974',
			},
			fontFamily: {
				quicksand: ['Quicksand', 'sans-serif'],
			},
			spacing: {
				todoWidth: '560px',
			},
			flex: {
				80: '80%',
				20: '20%'
			},
		},
	},
	plugins: [],
}

