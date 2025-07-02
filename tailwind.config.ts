
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
				display: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
				inter: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
				poppins: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
			},
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1.5' }],
				'sm': ['0.875rem', { lineHeight: '1.6' }],
				'base': ['1rem', { lineHeight: '1.7' }],
				'lg': ['1.125rem', { lineHeight: '1.7' }],
				'xl': ['1.25rem', { lineHeight: '1.6' }],
				'2xl': ['1.5rem', { lineHeight: '1.5' }],
				'3xl': ['1.875rem', { lineHeight: '1.4' }],
				'4xl': ['2.25rem', { lineHeight: '1.3' }],
				'5xl': ['3rem', { lineHeight: '1.2' }],
				'6xl': ['3.75rem', { lineHeight: '1.1' }],
				'7xl': ['4.5rem', { lineHeight: '1' }],
				'8xl': ['6rem', { lineHeight: '1' }],
				'9xl': ['8rem', { lineHeight: '1' }],
			},
			letterSpacing: {
				tighter: '-0.05em',
				tight: '-0.025em',
				normal: '0',
				wide: '0.025em',
				wider: '0.05em',
				widest: '0.1em',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// New color scheme
				'soft-blue': {
					DEFAULT: '#4A90E2',
					50: '#E6F2FF',
					100: '#CCE5FF',
					200: '#99CCFF',
					300: '#66B2FF',
					400: '#4A90E2',
					500: '#3D7BC7',
					600: '#2F66AC',
					700: '#225191',
					800: '#143C76',
					900: '#07275B'
				},
				'warm-white': {
					DEFAULT: '#F5F6F5',
					50: '#FFFFFF',
					100: '#F5F6F5',
					200: '#EBECED',
					300: '#E1E2E5',
					400: '#D7D8DD',
					500: '#CDCED5',
					600: '#C3C4CD',
					700: '#B9BAC5',
					800: '#AFB0BD',
					900: '#A5A6B5'
				},
				'muted-coral': {
					DEFAULT: '#FF6F61',
					50: '#FFE8E6',
					100: '#FFD1CC',
					200: '#FFA399',
					300: '#FF7566',
					400: '#FF6F61',
					500: '#E6564A',
					600: '#CC3D33',
					700: '#B3241C',
					800: '#990B05',
					900: '#800000'
				},
				'slate-gray': {
					DEFAULT: '#6B7280',
					50: '#F8FAFC',
					100: '#F1F5F9',
					200: '#E2E8F0',
					300: '#CBD5E1',
					400: '#94A3B8',
					500: '#6B7280',
					600: '#475569',
					700: '#334155',
					800: '#1E293B',
					900: '#0F172A'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
