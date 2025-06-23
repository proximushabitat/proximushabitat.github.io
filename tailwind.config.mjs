import { tooltip } from '@material-tailwind/react';

/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin')
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#fcfcfc', //fafafa -> og
  				secondary: '#1E212B', //392759 -> violet //1D2EC3 -> blau besser //24476B -> graublau //23526C -> auch graublau //2F4858 -> kohle
				complementary: {
					split: {
						pink: "#F26CA7",//"#ff00cc",
					},
					opposite: {
						yellow: "#FED766",//"#F44E3F",//"#74D3AE",//"#C3E8BD",//"#FE4A49",FED766, 2AB7CA, FE4A49
					},
				},
				neutral: {
					light: "#F4F1DE",
					dark: colors.slate[900],
				},
				focus: "#FED766",/*colors.emerald[300],*/
				tooltip: {
					bg: '#B3EDAB',//#7EE8FA',
					text: '#1E212B',
					border: '#1E212B'
				},
				design: {
					featured: {
						blueCrayola: "#F038FF",
						fuchsia: "#3772FF",
						mindaro: "#E2EF70",
						electricBlue: "#70E4EF",
						seaGreen: "#00916E"
					}
				}
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
				'accentLineThick': '0.375rem',
				'accentLineThin': '0.125rem',
				'accentsSpaceBetween': '0.25rem',
				'designLinesSpaceBetween': '0.15rem',
				'designLineMenu': '3px',
				'singleWidth': '48rem',
				'tooltipBorderWidth': '1rem',
			},
			fontSize: {
				'tooltip': '0.9rem',
			},
			boxShadow:{
				'fadeTop': 'inset 0 100px 50px -50px',
			},
			zIndex:{
				'60': '60',
			},
			fontFamily: {
				'jakarta': 'Plus Jakarta Sans',
			}
		},
	},
	plugins: [
		plugin(function({ addBase, config, theme }) {
			addBase({
			  'a': { background: theme('gradients.linksNorm'), borderColor: theme('colors.secondary'), borderWidth: '0 0 1px 0', borderStyle: 'dotted'},
			  'a:hover': { transition: 'all ease-in-out, 0.5s', background: theme('gradients.linksHov'), /*textDecoration: 'underline', */ borderStyle: 'solid', dropShadow: theme('dropShadow.xl') /*config('theme.colors.complementary.opposite.yellow')*/ },
			  'h1': { fontSize: '2rem', fontStyle: 'italic', hyphens: 'auto', wordBreak: 'break-word' },
			  'h2': { fontSize: '1.75rem', fontStyle: 'italic', hyphens: 'auto', wordBreak: 'break-word' },
			  'h3': { fontSize: '1.5rem', fontStyle: 'italic', hyphens: 'auto', wordBreak: 'break-word' },
			  'p': { marginBottom: '0.8rem', hyphens: 'auto', wordBreak: 'break-word', textAlign: 'justify' },
			  'span': { hyphens: 'auto', wordBreak: 'break-word' },
			  'ul': { listStyleType: 'disc', listStylePosition: 'outside', paddingLeft: '1rem' },
			  'li': { marginBottom: '0.8rem' },
			})
		  })
	],
}
