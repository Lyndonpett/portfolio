/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'custom-blue': '#83d4ff',
                'custom-pink': '#d97aee',
                'custom-sky': 'hsl(223, 90%, 65%)',
            },
        },
    },
    plugins: [],
};