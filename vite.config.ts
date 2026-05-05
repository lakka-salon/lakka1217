import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import archiver from 'archiver';
import {defineConfig, loadEnv} from 'vite';

const sourceZipPlugin = () => {
  return {
    name: 'source-zip',
    configureServer(server) {
      server.middlewares.use('/source.zip', (req, res, next) => {
        const rootPath = process.cwd();
        res.setHeader('Content-Type', 'application/zip');
        res.setHeader('Content-Disposition', 'attachment; filename=lakka-salon-source.zip');
        
        const archive = archiver('zip', { zlib: { level: 9 } });
        
        archive.on('error', function(err) {
          res.statusCode = 500;
          res.end(err.message);
        });

        archive.pipe(res);
        
        const dirs = ['src', 'public'];
        dirs.forEach(dir => {
          const dirPath = path.join(rootPath, dir);
          if (fs.existsSync(dirPath)) {
            if (dir !== 'public') {
              archive.directory(dirPath + '/', dir);
            } else {
              archive.directory(dirPath + '/', dir, (file) => {
                if (file.name.includes('source.zip')) return false;
                return file;
              });
            }
          }
        });
        
        const files = [
          'index.html', 
          'package.json', 
          'vite.config.ts', 
          'tsconfig.app.json', 
          'tsconfig.node.json', 
          'tsconfig.json', 
          'components.json', 
          'eslint.config.js'
        ];
        
        files.forEach(file => {
          const filePath = path.join(rootPath, file);
          if (fs.existsSync(filePath)) {
            archive.file(filePath, { name: file });
          }
        });
        
        archive.finalize();
      });
    }
  };
};

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), sourceZipPlugin()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
