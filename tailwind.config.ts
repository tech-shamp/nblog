import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["var(--font-lexend-deca)"],
        dmserif: ["var(--font-dm-serif)"]
      },
      colors: {
        primary: "#6EEB83",
        warning: "#FF5E5B",
        dark: "#272727",
        secondary: "#a5a5a5"
      }
    }
  },
  plugins: []
}
export default config
