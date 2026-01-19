import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  envDir: '../', // ✅ Faz o Vite procurar .env na raiz do projeto
  
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    
    // Multi-page configuration
    rollupOptions: {
      input: {
        login: resolve(__dirname, 'src/auth/login.html'),
        dashboard: resolve(__dirname, 'src/dashboard/dashboard.html'),
      },
    },
    
    // Otimizações
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs em produção
        drop_debugger: true,
      },
    },
    
    // Code splitting
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'supabase': ['@supabase/supabase-js'],
        },
      },
    },
  },
  
  server: {
    port: 5173,
    open: '/auth/login.html',
    
    // Hot Module Replacement
    hmr: {
      overlay: true,
    },
  },
  
  // Resolve aliases para imports mais limpos
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@services': resolve(__dirname, 'src/services'),
      '@auth': resolve(__dirname, 'src/auth'),
      '@dashboard': resolve(__dirname, 'src/dashboard'),
    },
  },
  
  // Otimização de CSS
  css: {
    devSourcemap: true,
  },
  
  // Preview (após build)
  preview: {
    port: 4173,
    open: true,
  },
});
