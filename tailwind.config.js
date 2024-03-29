/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      minHeight: {
        'mobile': 'max-h-[550px]',
        'tablet': 'max-h-[1180px]',
        'desktop': 'max-h-[798px]',
      },
      fontSize: {
        header: 'clamp(1rem,10vw,6rem)',
        ['faq-header']: 'clamp(1rem,8vw,6rem)',
        ['footer-header']: 'clamp(1rem,2.5vw,6rem)',
        ['menu-footer']: 'clamp(0.7rem,1.5vw,2rem)',
        ['modal-auth-header']: 'clamp(0.7rem,2.5vw,2rem)',
        ['detail-body']: 'clamp(0.7rem,1vw,0.8rem)',
      },
      transitionTimingFunction: {
        'out-circ': 'cubic-bezier(0, 0.55, 0.45, 1);'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textColor: {
        body: '#bbbbbb',
        'gray-light': '#414141'
      },
      backgroundColor: {
        'gray-little': '#212121'
      },
      borderColor: {
        'gray-light': '#414141'
      },
      backgroundImage: {
        'hero-section': "url('../public/images/hero-section.png')",
        'biko-section': "url('../public/images/biko.png')",
        'biko-a': "url('../public/images/biko_a.png')",
        'biko-b': "url('../public/images/biko_b.png')",
        'biko-c': "url('../public/images/biko_c.png')",
        'biko-d': "url('../public/images/biko_d.jpg')",
        'get-in-touch': "url('../public/images/get_in_touch.jpg')",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}