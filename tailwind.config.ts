import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: { center: true, padding: {} },
    colors: {
      transparent: "transparent",
      white: "#fcfcfc",
      blur: "#0C0C0C40",
      white40: "#ffffff66",
      secondaryGray: "#474747",
      current: "currentColor",
      black: "#1B1B1B",
      primaryBlue: "#003366",
      primaryPink: "#bb8c88",
      secondaryBlue: "#6699CC",
      orangeGradient: "#ff5b2a80",
      primaryGreen: "#28a745",
      primaryRed: "#dc3545",
      primary: "#1e1e1e",
      disabled: "#d1d1d1",
      greyLight: "#dbdbdb",
      toggleLight: "#0c0c0c18",
      neutral: {
        100: "#EEEEEE",
        200: "#e7e7e7",
        300: "#d1d1d1",
        400: "#aeaeae",
        500: "#8b8b8b",
        600: "#686868",
        650: "#3e3e3e",
        700: "#454545",
        750: "#292929",
        800: "#1e1e1e",
        900: "#0b0b0b",
        950: "#040404",
      },
      "p-2": "#9b9b9b",
      "p-1": "#454545",
    },
    extend: {
      transitionDuration: { 2000: "2000ms" },
      lineHeight: { normal: "120%", none: "100%" },
      spacing: {
        15: "60px",
      },
      screens: {
        "5xl": "2024px",
      },
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        "extra-bold": "800",
        black: "900",
      },
      letterSpacing: {
        wider: "-0.72px",
        wide: "-1.2px",
        normal: "-1.8px",
        tight: "-4.5px",
        light: "-2.8px",
      },
      translate: {
        "30": "30px",
        "60": "60px",
        "90": "90px",
        "120": "120px",
        "150": "150px",
      },
      maxWidth: {
        "mw-container": "1440px",
        wrapper: "1224px",
        358: "358px",
      },
      flex: {
        "2": "2 2 0%",
        "3": "3 3 0%",
      },
      fontSize: {
        h1: "56px",
        super: "164px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "spin-left": "rotateLeft 1s linear infinite 0.2s",
        "spin-loader": "spinVariableSpeed 3s infinite",
        moveUp: "moveUp 3s forwards 1.5s",
        fadeOut: "fadeOut 2s forwards",
        fadeIn: "fadeIn 2s forwards",
        translateX: "translateToRight 2s linear",
        circle1: "moveCircle1 3s forwards 7s",
        circle2: "moveCircle2 3s forwards 7s",
        circle3: "moveCircle3 3s forwards 7s",
        circle4: "moveCircle4 3s forwards 7s",
        circle5: "moveCircle5 3s forwards 7s",
      },
      keyframes: {
        fadeOut: {
          "0%": {
            opacity: "1",
            display: "block",
          },
          "100%": {
            opacity: "0",
            display: "none",
          },
        },
        fadeIn: {
          from: {
            opacity: "0",
            display: "none",
          },
          to: {
            opacity: "1",
            display: "block",
          },
        },
        translateToRight: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(30px)",
          },
        },
        moveCircle1: {
          "0%": { backgroundColor: "#ffffff00" },
          "100%": { backgroundColor: "#ffffff0D" },
        },
        moveCircle2: {
          "0%": { transform: "translateX(0)", backgroundColor: "#ffffff00" },
          "100%": {
            transform: "translateX(55%)",
            backgroundColor: "#ffffff1A",
          },
        },
        moveCircle3: {
          "0%": { transform: "translateX(0)", backgroundColor: "#ffffff00" },
          "100%": {
            transform: "translateX(110%)",
            backgroundColor: "#ffffff33",
          },
        },
        moveCircle4: {
          "0%": { transform: "translateX(0)", backgroundColor: "#ffffff00" },
          "100%": {
            transform: "translateX(165%)",
            backgroundColor: "#ffffff4d",
          },
        },
        moveCircle5: {
          "0%": { transform: "translateX(0)", backgroundColor: "#ffffff00" },
          "100%": {
            transform: "translateX(220%)",
            backgroundColor: "#ffffff66",
          },
        },
      },
      borderRadius: {
        48: "48px",
      },
    },
  },
  plugins: [],
};
export default config;
