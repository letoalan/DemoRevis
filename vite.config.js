import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/DemoRevis/' : '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        p1: resolve(__dirname, 'p1.html'),
        p2: resolve(__dirname, 'p2.html'),
        p3: resolve(__dirname, 'p3.html'),
        p4: resolve(__dirname, 'p4.html'),
        quiz: resolve(__dirname, 'quiz.html'),
        analyse: resolve(__dirname, 'analyse.html')
      }
    }
  }
}));
