export const viteSlide = {
  title: "VITE - MODERN PACKAGE MANAGEMENT",
  subtitle: "Professional development with npm packages",
  language: "JavaScript",
  intro: {
    description:
      "Vite is a modern build tool for professional web development. Use npm to install packages, import specific functions, and get hot module replacement.",
    code: `// Setup Vite project
npm create vite@latest my-app -- --template vanilla
cd my-app
npm install

// Your package.json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "marked": "^11.0.0"
  }
}`,
  },
  chatbot: {
    description: "Use Vite to professionally manage dependencies for your chatbot project.",
    code: `// vite.config.js
export default {
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist'
  },
  define: {
    __ENV__: JSON.stringify('production')
  }
}

// main.js - Import your packages
import { marked } from 'marked';

console.log('App started with Vite!');`,
  },
  advanced: [
    {
      title: "Vite Dev Server",
      description: "Run npm run dev to start the development server with hot reload.",
      code: `// Run development server
npm run dev

// Features:
// ✓ Hot Module Replacement (HMR)
// ✓ Fast refresh - changes appear instantly
// ✓ Error overlays in browser
// ✓ Pre-configured for modern JavaScript

// Your project auto-reloads when you save files!`,
    },
    {
      title: "Building for Production",
      description: "Create optimized bundle for deployment.",
      code: `// Build for production
npm run build

// This creates:
// - Minified code
// - Optimized assets
// - Tree-shaking (removes unused code)
// - Source maps for debugging

// Output in 'dist' folder ready to deploy`,
    },
    {
      title: "Environment Variables",
      description: "Store sensitive data like API keys safely.",
      code: `// .env file (don't commit this!)
VITE_API_KEY=your_secret_key_here
VITE_API_URL=https://api.example.com

// Access in code
const apiKey = import.meta.env.VITE_API_KEY;

// For development: .env.local
// For production: Use Vercel/Netlify secrets`,
    },
  ],
}
