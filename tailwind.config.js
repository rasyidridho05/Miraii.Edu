/** @type {import('tailwindcss/types').Config} */
const config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                Azure400: '#6a9ef0',
                Azure500: '#4d7fea',
                Azure600: '#325dde'
            }
        },
    },
    plugins: [],
};

module.exports = config;