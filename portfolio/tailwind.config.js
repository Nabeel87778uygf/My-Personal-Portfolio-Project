/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                darkBg: "#0a192f",
                darkCard: "#112240",
                accent: "#00d4ff",
                lightText: "#ccd6f6",
                grayText: "#8892b0",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};