/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            typography: ({ theme }) => ({
                pink: {
                    css: {}
                }
            })
        }
    },
    plugins: [require('@tailwindcss/typography')]
}
