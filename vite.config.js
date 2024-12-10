import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig(({ command }) => {
  return {
    // Налаштування базового шляху для GitHub Pages
    base: '/goit-js-hw-12/',

    // Налаштування глобальної змінної залежно від режиму
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },

    // Коренева папка для проєкту
    root: 'src',

    // Налаштування збірки
    build: {
      sourcemap: true, // Генерація карт джерел
      rollupOptions: {
        // Пошук всіх HTML файлів для входу
        input: glob.sync('./src/*.html'),
        output: {
          // Винесення модулів із node_modules в окремий файл "vendor.js"
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          // Кастомізація імен для JavaScript-файлів
          entryFileNames: chunkInfo => {
            return chunkInfo.name === 'commonHelpers'
              ? 'commonHelpers.js'
              : '[name].js';
          },
          // Кастомізація імен для інших файлів (наприклад, CSS або шрифтів)
          assetFileNames: assetInfo => {
            if (assetInfo.name?.endsWith('.html')) {
              return '[name].[ext]';
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
      outDir: '../dist', // Директорія для збірки
      emptyOutDir: true, // Очистка директорії перед збіркою
    },

    // Підключення плагінів
    plugins: [
      injectHTML(), // Інжекція HTML у збірку
      FullReload(['./src/**/**.html']), // Повне оновлення сторінки при зміні HTML
      SortCss({
        sort: 'mobile-first', // Сортування CSS за мобільним першим підходом
      }),
    ],
  };
});
