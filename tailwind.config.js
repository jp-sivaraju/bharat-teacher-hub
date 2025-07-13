
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--color-background))',
        foreground: 'hsl(var(--color-foreground))',
        card: {
          DEFAULT: 'hsl(var(--color-card))',
          foreground: 'hsl(var(--color-card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--color-popover))',
          foreground: 'hsl(var(--color-popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--color-primary))',
          foreground: 'hsl(var(--color-primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--color-secondary))',
          foreground: 'hsl(var(--color-secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--color-muted))',
          foreground: 'hsl(var(--color-muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--color-accent))',
          foreground: 'hsl(var(--color-accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--color-destructive))',
          foreground: 'hsl(var(--color-destructive-foreground))',
        },
        border: 'hsl(var(--color-border))',
        input: 'hsl(var(--color-input))',
        ring: 'hsl(var(--color-ring))',
        sidebar: {
          DEFAULT: 'hsl(var(--color-sidebar-background))',
          foreground: 'hsl(var(--color-sidebar-foreground))',
          primary: 'hsl(var(--color-sidebar-primary))',
          'primary-foreground': 'hsl(var(--color-sidebar-primary-foreground))',
          accent: 'hsl(var(--color-sidebar-accent))',
          'accent-foreground': 'hsl(var(--color-sidebar-accent-foreground))',
          border: 'hsl(var(--color-sidebar-border))',
          ring: 'hsl(var(--color-sidebar-ring))',
        },
        brand: {
          50: 'hsl(var(--color-brand-50))',
          100: 'hsl(var(--color-brand-100))',
          200: 'hsl(var(--color-brand-200))',
          300: 'hsl(var(--color-brand-300))',
          400: 'hsl(var(--color-brand-400))',
          500: 'hsl(var(--color-brand-500))',
          600: 'hsl(var(--color-brand-600))',
          700: 'hsl(var(--color-brand-700))',
          800: 'hsl(var(--color-brand-800))',
          900: 'hsl(var(--color-brand-900))',
          950: 'hsl(var(--color-brand-950))',
        },
      },
      fontFamily: {
        sans: ['Monaco', 'Menlo', 'Ubuntu Mono', 'monospace'],
        display: ['Monaco', 'Menlo', 'Ubuntu Mono', 'monospace'],
        inter: ['Monaco', 'Menlo', 'Ubuntu Mono', 'monospace'],
        poppins: ['Monaco', 'Menlo', 'Ubuntu Mono', 'monospace'],
        mono: ['Monaco', 'Menlo', 'Ubuntu Mono', 'monospace'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
}
