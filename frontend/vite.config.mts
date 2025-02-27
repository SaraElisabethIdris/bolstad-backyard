import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from "autoprefixer";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";


export default defineConfig({
    plugins: [react(), tailwindcss(), svgr()],
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