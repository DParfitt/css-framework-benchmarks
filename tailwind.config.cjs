/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tailwind/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      text: "#111954",
      textMuted: "#9C9C9C",
      background: "#FFFFFF",
      primary: "#111954",
      primaryHover: "#00ABFF",
      secondary: "#00ABFF",
      secondaryHover: "#b5e0f1",
      muted: "#9C9C9C",
      highlight: "#00ABFF",
      accent: "#fbbb29",
      success: "#138000",
      info: "#4AD0FF",
      warning: "#FFDD00",
      danger: "#D0421B",
      grayLight: "#F2F2F2",
      grayDark: "#696969",
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#000000",
    },
    spacing: {
      none: "0px",
      gutter: "12px",
      xsmall: "4px",
      small: "8px",
      medium: "16px",
      large: "24px",
      xlarge: "32px",
      0: "0px",
      1: "4px",
      2: "8px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "40px",
      7: "48px",
      8: "56px",
      9: "64px",
      10: "72px",
      11: "80px",
    },
    fontFamily: {
      body: "var(--antarctica-beta)",
      expanded: "var(--antarctica-beta-expanded-black)",
      condensed: "var(--antarctica-beta-cond-bold)",
    },
    fontSize: {
      sm: "11px",
      base: "13px",
      lg: "14px",
      xl: "16px",
      "2xl": "20px",
      "3xl": "25px",
      "4xl": "31px",
      "5xl": "39px",
      "6xl": "49px",
      "7xl": "61px",
      "8xl": "76px",
    },
    extend: {},
  },
  plugins: [],
};