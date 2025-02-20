/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                olivine: {
                    50: '#f4f7ee',
                    100: '#e8edda',
                    200: '#d2ddb9',
                    300: '#b5c78f',
                    400: '#9db370',
                    500: '#7c954d',
                    600: '#60753b',
                    700: '#4a5b30',
                    800: '#3e4a2a',
                    900: '#354027',
                    950: '#1b2211',
                },
                secondary: '#3ab7bf',
                text: '#121063',
            }
        },
    },
    plugins: [],
};