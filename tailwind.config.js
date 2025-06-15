/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            'tablet': '640px',   // 640px 이상일 때 적용
            'laptop': '1024px',  // 1024px 이상일 때 적용
            'desktop': '1280px', // 1280px 이상일 때 적용
        },
        container: {
            center: true,
            padding: '2rem',
        },
        extend: {
            colors: {
                clifford: '#3B44E6'
            }
        },
    },
    plugins: [],
}
