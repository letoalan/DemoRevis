import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import fs from 'fs';

function htmlIncludePlugin() {
  return {
    name: 'vite-plugin-html-include',
    handleHotUpdate({ file, server }) {
      if (file.endsWith('.html')) {
        server.ws.send({ type: 'full-reload', path: '*' });
      }
    },
    transformIndexHtml: {
      order: 'pre',
      handler(html, { filename }) {
        const fileDir = dirname(filename);
        const includeRegex = /<include\s+src=["']([^"']+)["']\s*(?:\/>|><\/include>)/g;

        function replaceIncludes(content, currentDir) {
          return content.replace(includeRegex, (_, src) => {
            const filePath = resolve(currentDir, src);
            if (fs.existsSync(filePath)) {
              const fileContent = fs.readFileSync(filePath, 'utf8');
              return replaceIncludes(fileContent, dirname(filePath));
            }
            console.warn(`[html-include] Missing include file: ${filePath}`);
            return '';
          });
        }

        return replaceIncludes(html, fileDir);
      }
    }
  };
}

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/DemoRevis/' : '/',
  plugins: [htmlIncludePlugin()],
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
