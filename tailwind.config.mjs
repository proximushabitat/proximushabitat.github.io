import { tooltip } from '@material-tailwind/react';

/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin')
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#fafafa',
  				secondary: '#0000ff',
				complementary: {
					split: {
						pink: "#ff00cc",
					},
					opposite: {
						yellow: "#ffff00",
					},
				},
				neutral: {
					light: "#F4F1DE",
					dark: colors.slate[900],
				},
				focus: "#ffff00",/*colors.emerald[300],*/
				tooltip: {
					bg: '#0000ff',
					text: '#fafafa',
				},
			},
			gradients: {
				//'linksNorm': 'linear-gradient(0deg, rgba(255, 255, 00, 1) 33%, rgba(0, 0, 0, 0) 33%)',
				//'linksHov': 'linear-gradient(0deg, rgba(255, 255, 00, 1) 100%, rgba(0, 0, 0, 0) 100%)',
			},
			animation: {
				inNOut: 'inNOut 5s ease-in-out',
			},
			keyframes: {
				inNOut: {
				  '0%, 100%': { opacity: 1 },
				  '50%': { opacity: 0 },
				}
			},
			aspectRatio: {
				'4/3': '4 / 3',
				'3/4': '3 / 4',
				'2/3': '2 / 3',
				'3/2': '3 / 2',
				'16/9': '16 / 9',
				'9/16': '9 / 16',
			},
			spacing: {
				'spaceFromEdge': '2rem',
				'infoContainer': '4rem',
			},
			fontSize: {
				'tooltip': '0.9rem',
			},
		},
	},
	plugins: [
		plugin(function({ addBase, config, theme }) {
			addBase({
			  'a': { background: theme('gradients.linksNorm'), borderColor: theme('colors.secondary'), borderWidth: '0 0 1px 0', borderStyle: 'dotted' },
			  'a:hover': { transition: 'all ease-in-out, 0.5s', background: theme('gradients.linksHov'), /*textDecoration: 'underline', */ borderStyle: 'solid', dropShadow: theme('dropShadow.xl') /*config('theme.colors.complementary.opposite.yellow')*/ },
			  'h1': { fontSize: '2rem', fontStyle: 'italic' },
			  'h2': { fontSize: '1.75rem', fontStyle: 'italic' },
			  'h3': { fontSize: '1.5rem', fontStyle: 'italic' },
			  'p': { marginBottom: '0.8rem', hyphens: 'auto', wordBreak: 'break-word' },
			  'span': { hyphens: 'auto', wordBreak: 'break-word' },
			  'ul': { listStyleType: 'disc', listStylePosition: 'outside', paddingLeft: '1rem' },
			  'li': { marginBottom: '0.8rem' },
			})
		  })
	],
}
