import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

//const APP_URL = import.meta.env.APP_URL || 'http://localhost:3000/';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
