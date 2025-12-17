import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import fs from 'fs';

// Получаем __dirname для ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

// #region agent log
const logDebug = (location, message, data, hypothesisId) => {
  fetch('http://127.0.0.1:7242/ingest/b20be849-e233-4736-9bfd-34a1dc9c9c7c', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      location,
      message,
      data: data || {},
      timestamp: Date.now(),
      sessionId: 'debug-session',
      runId: 'run1',
      hypothesisId
    })
  }).catch(() => {});
};
// #endregion

// #region agent log
logDebug('main.mjs:1', 'Storybook config loading started', { __dirname }, 'A');
// #endregion

// Проверяем существование папки с Grafana stories
const grafanaStoriesPath = path.resolve(__dirname, '../src/stories/Будущее/src-grafana');
// #region agent log
logDebug('main.mjs:2', 'Checking Grafana stories path', { 
  path: grafanaStoriesPath, 
  exists: fs.existsSync(grafanaStoriesPath) 
}, 'A');
// #endregion

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/stories/**/*.mdx',
    '../src/stories/Будущее/src-grafana/**/*.story.tsx',
    // MDX файлы удалены - они не нужны
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
  },
  docs: {
    autodocs: 'tag',
  },
  server: {
    host: '0.0.0.0',
    port: 6006,
  },
  viteFinal: async (config, { configType }) => {
    // #region agent log
    logDebug('main.mjs:viteFinal:1', 'viteFinal called', { configType, hasResolve: !!config.resolve }, 'C');
    // #endregion
    
    // Исправляем разрешение путей для MDX файлов в Storybook
    if (!config.resolve) {
      config.resolve = {};
    }
    
    // Добавляем алиасы для правильного разрешения модулей
    const grafanaSrcPath = path.resolve(__dirname, '../src/stories/Будущее/src-grafana');
    
    // #region agent log
    logDebug('main.mjs:viteFinal:2', 'Setting up aliases', { grafanaSrcPath, exists: fs.existsSync(grafanaSrcPath) }, 'C');
    // #endregion
    
    // Определяем путь к uikit-main с проверкой альтернативных локаций
    const uikitMainPath = path.resolve(__dirname, '../uikit-main');
    const uikitMainSkalaModules = path.resolve(__dirname, '../skala_modules/uikit-main');
    const uikitMainSkalaModulesSpectr = path.resolve(__dirname, '../skala_modules_spectr/uikit-main');
    
    let resolvedUikitMain = null;
    if (fs.existsSync(uikitMainPath)) {
      resolvedUikitMain = uikitMainPath;
    } else if (fs.existsSync(uikitMainSkalaModules)) {
      resolvedUikitMain = uikitMainSkalaModules;
    } else if (fs.existsSync(uikitMainSkalaModulesSpectr)) {
      resolvedUikitMain = uikitMainSkalaModulesSpectr;
    }
    
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      components: path.resolve(__dirname, '../src/components'),
      context: path.resolve(__dirname, '../src/context'),
      hook: path.resolve(__dirname, '../src/hook'),
      pages: path.resolve(__dirname, '../src/pages'),
      service: path.resolve(__dirname, '../src/service'),
      helpers: path.resolve(__dirname, '../src/helpers'),
      store: path.resolve(__dirname, '../src/store'),
      assets: path.resolve(__dirname, '../src/assets'),
      'src': path.resolve(__dirname, '../src'),
      // Алиасы для Grafana компонентов
      '@grafana/ui': path.resolve(__dirname, '../node_modules/@grafana/ui'),
      // Алиас для design tokens
      '@design-tokens': path.resolve(__dirname, '../src/stories/Будущее/Design System'),
    };
    
    // Добавляем uikit-main только если он найден
    if (resolvedUikitMain) {
      config.resolve.alias['uikit-main'] = resolvedUikitMain;
    }
    
    // Плагин для исправления путей file:// в MDX файлах
    const fixFileProtocolPlugin = () => ({
      name: 'fix-file-protocol',
      enforce: 'pre',
      resolveId(id, importer) {
        if (!id) return null;
        
        // Обрабатываем file:// протокол
        if (id.includes('file://')) {
          // Если путь содержит @storybook/addon-docs или mdx-react-shim, разрешаем его правильно
          if (id.includes('@storybook/addon-docs') || id.includes('mdx-react-shim')) {
            try {
              const resolvedPath = require.resolve('@storybook/addon-docs/dist/mdx-react-shim.js');
              return resolvedPath;
            } catch (e) {
              // Если не можем разрешить через require.resolve, пробуем через path
              try {
                const mdxShimPath = path.resolve(__dirname, '../node_modules/@storybook/addon-docs/dist/mdx-react-shim.js');
                if (fs.existsSync(mdxShimPath)) {
                  return mdxShimPath;
                }
              } catch (e2) {
                // Игнорируем ошибки
              }
              return null;
            }
          }
          
          // Для других file:// путей убираем протокол
          let filePath = id.replace(/^file:\/\//, '').replace(/^\/+/, '');
          
          // На Windows пути могут иметь формат file:///C:/...
          if (filePath.match(/^[A-Za-z]:/)) {
            filePath = filePath.replace(/^\/+/, '');
            return filePath;
          }
          
          return filePath || null;
        }
        
        // Разрешаем mdx-react-shim напрямую (без file://)
        if (id.includes('mdx-react-shim') || (id.includes('@storybook/addon-docs') && id.includes('mdx-react-shim'))) {
          try {
            return require.resolve('@storybook/addon-docs/dist/mdx-react-shim.js');
          } catch (e) {
            try {
              const mdxShimPath = path.resolve(__dirname, '../node_modules/@storybook/addon-docs/dist/mdx-react-shim.js');
              if (fs.existsSync(mdxShimPath)) {
                return mdxShimPath;
              }
            } catch (e2) {
              // Игнорируем ошибки
            }
            return null;
          }
        }
        
        return null;
      },
    });
    
    // Плагин для обработки импортов из uikit-main
    const fixUIKitImportsPlugin = () => ({
      name: 'fix-uikit-imports',
      enforce: 'pre',
      resolveId(id, importer) {
        // Обрабатываем импорты из uikit-main
        if (id && id.startsWith('uikit-main/')) {
          // Если uikit-main не найден, пробуем найти в альтернативных локациях
          if (!resolvedUikitMain) {
            // Пробуем найти файл в альтернативных локациях
            const relativePath = id.replace('uikit-main/', '');
            const alternativePaths = [
              path.resolve(__dirname, '../skala_modules/uikit-main', relativePath),
              path.resolve(__dirname, '../skala_modules_spectr/uikit-main', relativePath),
              path.resolve(__dirname, '../uikit-main', relativePath),
            ];
            
            for (const altPath of alternativePaths) {
              // Пробуем разные расширения
              const extensions = ['', '.tsx', '.ts', '.jsx', '.js', '/index.tsx', '/index.ts', '/index.jsx', '/index.js'];
              for (const ext of extensions) {
                const fullPath = altPath + ext;
                if (fs.existsSync(fullPath)) {
                  return fullPath;
                }
              }
              
              // Для SCSS файлов
              if (relativePath.endsWith('.scss') || relativePath.endsWith('.css')) {
                if (fs.existsSync(altPath)) {
                  return altPath;
                }
              }
            }
            
            // Если не нашли, возвращаем null чтобы Vite показал ошибку
            return null;
          }
        }
        return null;
      },
      transform(code, id) {
        // Переписываем импорты только в файлах из uikit-main
        if (id.includes('uikit-main') && (code.includes('../../helpers') || code.includes('../helpers'))) {
          // Заменяем относительные пути на абсолютные через алиас helpers
          let modified = code;
          // Заменяем ../../helpers/... на helpers/...
          modified = modified.replace(
            /from\s+['"]\.\.\/\.\.\/helpers\/([^'"]+)['"]/g,
            "from 'helpers/$1'"
          );
          // Заменяем ../helpers/... на helpers/...
          modified = modified.replace(
            /from\s+['"]\.\.\/helpers\/([^'"]+)['"]/g,
            "from 'helpers/$1'"
          );
          // Заменяем import ... from '../../helpers/...' на import ... from 'helpers/...'
          modified = modified.replace(
            /import\s+([^'"]+)\s+from\s+['"]\.\.\/\.\.\/helpers\/([^'"]+)['"]/g,
            "import $1 from 'helpers/$2'"
          );
          modified = modified.replace(
            /import\s+([^'"]+)\s+from\s+['"]\.\.\/helpers\/([^'"]+)['"]/g,
            "import $1 from 'helpers/$2'"
          );
          if (modified !== code) {
            return { code: modified, map: null };
          }
        }
        return null;
      },
    });
    
    // Добавляем плагин для исправления путей
    if (!config.plugins) {
      config.plugins = [];
    }
    config.plugins.unshift(fixFileProtocolPlugin());
    config.plugins.unshift(fixUIKitImportsPlugin());
    
    // Настраиваем оптимизацию зависимостей для правильной обработки MDX
    if (!config.optimizeDeps) {
      config.optimizeDeps = {};
    }
    
    // Включаем оптимизацию для @storybook/addon-docs
    if (!config.optimizeDeps.include) {
      config.optimizeDeps.include = [];
    }
    
    // Убеждаемся, что @mdx-js/react оптимизируется
    if (!config.optimizeDeps.include.includes('@mdx-js/react')) {
      config.optimizeDeps.include.push('@mdx-js/react');
    }
    
    // Добавляем @storybook/addon-docs в оптимизацию
    if (!config.optimizeDeps.include.includes('@storybook/addon-docs')) {
      config.optimizeDeps.include.push('@storybook/addon-docs');
    }
    
    // #region agent log
    logDebug('main.mjs:viteFinal:3', 'viteFinal completed', { 
      hasAliases: !!config.resolve.alias,
      aliasCount: Object.keys(config.resolve.alias || {}).length,
      pluginsCount: config.plugins?.length || 0
    }, 'C');
    // #endregion
    
    return config;
  },
};
export default config;




