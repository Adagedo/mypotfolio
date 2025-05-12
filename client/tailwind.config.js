/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-background": "var(--primary-background)",
        "secondary-background": "var(--secondary-background)",
        "primary-color": "var(--primary-color)",
        red: {
          cool: "var(--red)",
        },
        green: {
          cool: "var(--green)",
        },
        gold: "var(--gold)",
        greenLemonGrad: "var(--green-lemon-gradient)",
      },
      fontFamily: {
        leagueScript: "var(--league-script)",
        leagueSpartan: "var(--league-spartan)",
        montserrat: "var(--montserrat)",
      },
    },
  },
  plugins: [],
};
