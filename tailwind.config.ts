import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "kyunghee-red": {
          50: "#FCE3E4",
          100: "#FBD0D2",
          200: "#F8B4B8",
          300: "#F59498",
          400: "#F3787E",
          500: "#F0575E",
          600: "#ED3B44",
          700: "#EA1A24",
          800: "#D2131D",
          900: "#B21018",
          950: "#A40F16"
        }
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
