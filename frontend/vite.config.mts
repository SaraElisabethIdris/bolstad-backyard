import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from "autoprefixer";
import tailwindcss from "@tailwindcss/postcss";



export default defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080', // Adjust the target to your backend server URL
                changeOrigin: true,
                secure: false,
            },
        },
    },
    css: {
        postcss: {
            plugins: [
                autoprefixer(),
                tailwindcss,
            ],
        },
    },
});