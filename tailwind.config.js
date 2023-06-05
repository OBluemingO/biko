/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize:{
        header: 'clamp(1rem,10vw,6rem)',
        detailBody: 'clamp(0.75rem,0.85vw,1.5rem)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textColor: {
        body: '#bbbbbb'
      },
      backgroundImage: {
        'hero-section': "url('../public/images/hero-section.png')",
        'biko-section': "url('../public/images/biko.png')",
        'biko-a': "url('../public/images/biko_a.png')",
        'biko-b': "url('../public/images/biko_b.png')",
        'biko-c': "url('../public/images/biko_c.png')",
        'biko-d': "url('../public/images/biko_d.jpg')",
      }
    },
  },
  plugins: [],
}
