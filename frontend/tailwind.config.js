/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ['./src/**/*.{html,js,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                test: '#FF6363',
                secondary: {
                    100: '#E2E2D5',
                    200: '#888883',
                },
            }
        },
    },
    plugins: [],
};