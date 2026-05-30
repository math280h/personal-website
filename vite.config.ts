import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
	plugins: [react(), tailwindcss(), imagetools()],
	build: {
		target: 'esnext',
	},
});
