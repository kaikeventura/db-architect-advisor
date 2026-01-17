/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                neon: {
                    purple: '#b026ff',
                    blue: '#00d4ff',
                    pink: '#ff00bf',
                },
                glass: {
                    100: 'rgba(255, 255, 255, 0.1)',
                    200: 'rgba(255, 255, 255, 0.2)',
                }
            },
            animation: {
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 5px #b026ff, 0 0 10px #b026ff' },
                    '100%': { boxShadow: '0 0 20px #b026ff, 0 0 30px #b026ff' },
                }
            }
        },
    },
    plugins: [],
}
