/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            typography: () => ({
                pink: {
                    css: {}
                }
            })
        }
    },
    plugins: [require('@tailwindcss/typography')]
}
