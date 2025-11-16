import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: "#00A9A5",
        gold: "#D4AF37",
        gunmetal: "#14171F",
        muted: "#F5F7FA"
      },
      maxWidth: {
        content: "1120px"
      }
    }
  },
  plugins: []
};

export default config;
