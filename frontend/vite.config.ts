import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080', // Adjust the target to your backend server URL
                changeOrigin: true,
                secure: false,
            },
        },
    },
});