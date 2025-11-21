/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                monokai: {
                    bg: '#272822',
                    surface: '#3E3D32',
                    elevated: '#49483E',
                    pink: '#F92672',
                    cyan: '#66D9EF',
                    green: '#A6E22E',
                    yellow: '#E6DB74',
                    orange: '#FD971F',
                    purple: '#AE81FF',
                    text: '#F8F8F2',
                    'text-dim': '#75715E',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
        },
    },
    plugins: [],
}
