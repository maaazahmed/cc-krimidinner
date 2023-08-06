/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "460px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      fontSize: {
        xxs: "0.625rem", // 10px
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: {
          400: "#F0989F",
          DEFAULT: "#F24B59",
          700: "#D71F38",
        },
        onPrimary: {
          DEFAULT: "#000000",
        },
        secondary: {
          DEFAULT: "#FAB62F",
        },
        onSecondary: {
          DEFAULT: "#000000",
        },
        error: {
          DEFAULT: "#F0989F",
        },
        onError: {
          DEFAULT: "#000000",
        },
        background: {
          DEFAULT: "#292929",
        },
        onBackground: {
          DEFAULT: "#FFFFFF",
        },
        surface: {
          DEFAULT: "#121212",
        },
        onSurface: {
          DEFAULT: "#FFFFFF",
          highEmphasis: "rgba(255, 255, 255, 0.87)",
          mediumEmphasis: "rgba(255, 255, 255, 0.6)",
          disabled: "rgba(255, 255, 255, 0.38)",
        },
      },
      keyframes: {
        shake: {
          "0%": {
            transform: "translateX(0rem)",
          },
          "25%": {
            transform: "translateX(-1rem)",
          },
          "75%": {
            transform: "translateX(1rem)",
          },
          "100%": {
            transform: "translateX(0rem)",
          },
        },
      },
      animation: {
        shake: "shake 0.2s both",
      },
    },
  },
  plugins: [],
};
