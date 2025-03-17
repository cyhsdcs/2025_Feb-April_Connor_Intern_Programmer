import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                'custom-green': '#ADD151',
                'custom-blue': '#05176D',
                'abc-green': '#3C887D',
                'custom-greenblue': '#5C9EBF',
            },
        },
    },
    plugins: [],
} satisfies Config;
