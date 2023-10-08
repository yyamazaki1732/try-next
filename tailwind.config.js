/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/**/*.{js,ts,jsx,tsx,mdx}",
    "src/**/**/*.{js,ts,jsx,tsx,mdx}",
    "src/**/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        10: "0.625rem",
        11: "0.6875rem",
        12: "0.75rem",
        13: "0.8125rem",
        14: "0.875rem",
        15: "0.9375rem",
        16: "1rem",
        17: "1.0625rem",
        18: "1.125rem",
        20: "1.25rem",
        22: "1.375em",
        24: "1.5rem",
        26: "1.625rem",
        28: "1.75rem",
        30: "1.875rem",
        34: "2.125rem",
        36: "2.25rem",
        40: "2.5rem",
      },
    },
  },
  plugins: [],
};
