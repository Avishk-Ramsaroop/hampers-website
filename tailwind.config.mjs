/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1e293b',
          dark: '#0f172a',
        },
        produce: {
          DEFAULT: '#16a34a',
          light: '#dcfce7',
        },
        amber: {
          cta: '#d97706',
          'cta-hover': '#b45309',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
