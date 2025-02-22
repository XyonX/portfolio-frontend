/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Backgrounds
        "primary-bg": "var(--primary-bg, #FFFFFF)", // white
        "secondary-bg": "var(--secondary-bg, #F9FAFB)", // gray-50
        "dark-bg": "var(--dark-bg, #000000)", // black

        // Gradient Colors
        "gradient-start": "var(--gradient-start, #EFF6FF)", // blue-50
        "gradient-mid": "var(--gradient-mid, #EEF2FF)", // indigo-50
        "gradient-end": "var(--gradient-end, #FFFFFF)", // white
        "decor-light": "var(--decor-light, #EBE8FF)", // indigo-100
        "decor-blue": "var(--decor-blue, #DBEAFE)", // blue-100

        // Text Colors
        "primary-text": "var(--primary-text, #111827)", // gray-900
        "secondary-text": "var(--secondary-text, #4B5563)", // gray-600
        "accent-text": "var(--accent-text, #4F46E5)", // indigo-600
        "light-text": "var(--light-text, #FFFFFF)", // white
        "dark-text": "var(--dark-text, #000000)", // black

        // Button Colors
        "primary-btn": "var(--primary-btn, #4F46E5)", // indigo-600
        "primary-btn-hover": "var(--primary-btn-hover, #4338CA)", // indigo-700
        "secondary-btn-hover": "var(--secondary-btn-hover, #EEF2FF)", // indigo-50
        "dark-btn": "var(--dark-btn, #000000)", // black
        "dark-btn-hover": "var(--dark-btn-hover, #1F2937)", // gray-800

        // Borders
        "accent-border": "var(--accent-border, #4F46E5)", // indigo-600
        "light-border": "var(--light-border, #C7D2FE)", // indigo-200

        // Status Indicator
        "status-light": "var(--status-light, #34D399)", // green-400
        "status-dark": "var(--status-dark, #10B981)", // green-500

        // Tech Icons
        "tech-accent": "var(--tech-accent, #4F46E5)", // indigo-600
        "tech-dark": "var(--tech-dark, #000000)", // black
        "tech-blue": "var(--tech-blue, #3B82F6)", // blue-500

        //skills color
        "skills-bg": "var(--skills-bg, #64748B)", // slate-500
        "skills-bg-hover": "var(--skills-bg-hover, #475569)", // slate-600
      },
    },
  },
  plugins: [],
};
