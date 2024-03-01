/** @type {import('tailwindcss').Config} */
const animate = require('tailwindcss-animate')
export default {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx,vue}',
		'./components/**/*.{ts,tsx,vue}',
		'./app/**/*.{ts,tsx,vue}',
		'./src/**/*.{ts,tsx,vue}'
	],
	theme: {
		extend: {
			colors: {
				carbon: '#373737',
				white: '#DFDEDA',
				beige: '#DFD7CA',
				lightGray: '#C6C2BB',
				mistyGreen: '#919288'
			},
			fontFamily: {
				heading: ['valery', 'serif'],
				body: ['roboto', 'sans-serif']
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [animate]
}
