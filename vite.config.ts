import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // אופטימיזציה לבנייה
    outDir: 'dist',
    target: 'es2015',
    minify: 'esbuild', // שימוש ב-esbuild במקום terser
    rollupOptions: {
      output: {
        manualChunks: {
          // React core
          'react-vendor': ['react', 'react-dom'],

          // Routing
          'router': ['react-router-dom'],

          // UI Components
          'ui-components': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-toast',
            '@radix-ui/react-tooltip',
            '@radix-ui/react-accordion',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-avatar',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-collapsible',
            '@radix-ui/react-context-menu',
            '@radix-ui/react-hover-card',
            '@radix-ui/react-label',
            '@radix-ui/react-menubar',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-progress',
            '@radix-ui/react-radio-group',
            '@radix-ui/react-scroll-area',
            '@radix-ui/react-select',
            '@radix-ui/react-separator',
            '@radix-ui/react-slider',
            '@radix-ui/react-slot',
            '@radix-ui/react-switch',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toggle',
            '@radix-ui/react-toggle-group',
          ],

          // Forms and validation
          'forms': ['react-hook-form', '@hookform/resolvers', 'zod'],

          // Internationalization
          'i18n': ['react-i18next', 'i18next', 'i18next-browser-languagedetector'],

          // Data fetching
          'query': ['@tanstack/react-query'],

          // Utilities
          'utils': ['clsx', 'class-variance-authority', 'tailwind-merge'],

          // Icons and animations
          'icons-animations': ['lucide-react', 'framer-motion'],

          // Charts and data visualization
          'charts': ['recharts'],

          // Date handling
          'date': ['date-fns', 'react-day-picker'],

          // Carousel
          'carousel': ['embla-carousel-react'],

          // Other UI components
          'other-ui': [
            'cmdk',
            'input-otp',
            'next-themes',
            'react-intersection-observer',
            'react-resizable-panels',
            'sonner',
            'tailwindcss-animate',
            'vaul'
          ],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-i18next',
      'i18next',
      '@tanstack/react-query'
    ],
  },
}));
