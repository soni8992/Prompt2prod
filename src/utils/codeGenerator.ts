import { CodeFile } from '../lib/supabase';

export function generateProjectCode(prompt: string, projectName: string, framework: string): CodeFile[] {
  const files: CodeFile[] = [];

  switch (framework) {
    case 'react':
      files.push(...generateReactProject(prompt, projectName));
      break;
    case 'vue':
      files.push(...generateVueProject(prompt, projectName));
      break;
    case 'nextjs':
      files.push(...generateNextProject(prompt, projectName));
      break;
    case 'svelte':
      files.push(...generateSvelteProject(prompt, projectName));
      break;
    default:
      files.push(...generateReactProject(prompt, projectName));
  }

  return files;
}

function generateReactProject(prompt: string, projectName: string): CodeFile[] {
  return [
    {
      path: 'src/App.tsx',
      language: 'typescript',
      content: `import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header className="app-header">
        <h1>${projectName}</h1>
        <p>Generated from: ${prompt}</p>
      </header>
      <main className="app-main">
        <div className="card">
          <button onClick={() => setCount(count + 1)}>
            Count is {count}
          </button>
          <p>Edit src/App.tsx and save to reload</p>
        </div>
      </main>
    </div>
  );
}

export default App;`
    },
    {
      path: 'src/main.tsx',
      language: 'typescript',
      content: `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);`
    },
    {
      path: 'src/App.css',
      language: 'css',
      content: `.app {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.app-header {
  padding: 2rem;
  text-align: center;
  color: white;
}

.app-header h1 {
  font-size: 3rem;
  margin: 0;
  font-weight: bold;
}

.app-main {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  text-align: center;
}

button {
  background: #667eea;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background: #764ba2;
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}`
    },
    {
      path: 'src/index.css',
      language: 'css',
      content: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}`
    },
    {
      path: 'package.json',
      language: 'json',
      content: `{
  "name": "${projectName.toLowerCase().replace(/\s+/g, '-')}",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "typescript": "^5.5.3",
    "vite": "^5.4.2"
  }
}`
    }
  ];
}

function generateVueProject(prompt: string, projectName: string): CodeFile[] {
  return [
    {
      path: 'src/App.vue',
      language: 'vue',
      content: `<template>
  <div class="app">
    <header class="app-header">
      <h1>${projectName}</h1>
      <p>Generated from: ${prompt}</p>
    </header>
    <main class="app-main">
      <div class="card">
        <button @click="count++">Count is {{ count }}</button>
        <p>Edit src/App.vue to test hot module replacement</p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<style scoped>
.app {
  min-height: 100vh;
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
}

.app-header {
  padding: 2rem;
  text-align: center;
  color: white;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}
</style>`
    },
    {
      path: 'package.json',
      language: 'json',
      content: `{
  "name": "${projectName.toLowerCase().replace(/\s+/g, '-')}",
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build"
  },
  "dependencies": {
    "vue": "^3.4.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.0",
    "typescript": "^5.3.0",
    "vite": "^5.0.0",
    "vue-tsc": "^1.8.0"
  }
}`
    }
  ];
}

function generateNextProject(prompt: string, projectName: string): CodeFile[] {
  return [
    {
      path: 'app/page.tsx',
      language: 'typescript',
      content: `export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-white text-center mb-4">
          ${projectName}
        </h1>
        <p className="text-white text-center mb-8">
          ${prompt}
        </p>
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4">Welcome to Next.js</h2>
          <p className="text-gray-600">
            Get started by editing app/page.tsx
          </p>
        </div>
      </div>
    </main>
  );
}`
    },
    {
      path: 'app/layout.tsx',
      language: 'typescript',
      content: `import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '${projectName}',
  description: '${prompt}',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`
    },
    {
      path: 'package.json',
      language: 'json',
      content: `{
  "name": "${projectName.toLowerCase().replace(/\s+/g, '-')}",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "typescript": "^5.0.0"
  }
}`
    }
  ];
}

function generateSvelteProject(prompt: string, projectName: string): CodeFile[] {
  return [
    {
      path: 'src/App.svelte',
      language: 'svelte',
      content: `<script lang="ts">
  let count = 0;
</script>

<main>
  <header>
    <h1>${projectName}</h1>
    <p>Generated from: ${prompt}</p>
  </header>
  <div class="card">
    <button on:click={() => count++}>
      Count is {count}
    </button>
    <p>Edit src/App.svelte to test hot module replacement</p>
  </div>
</main>

<style>
  main {
    min-height: 100vh;
    background: linear-gradient(135deg, #ff3e00 0%, #40b3ff 100%);
    padding: 2rem;
  }

  header {
    text-align: center;
    color: white;
    margin-bottom: 2rem;
  }

  .card {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    max-width: 400px;
    margin: 0 auto;
  }
</style>`
    },
    {
      path: 'package.json',
      language: 'json',
      content: `{
  "name": "${projectName.toLowerCase().replace(/\s+/g, '-')}",
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "svelte": "^4.2.0"
  },
  "devDependencies": {
    "@sveltejs/vite-plugin-svelte": "^3.0.0",
    "vite": "^5.0.0"
  }
}`
    }
  ];
}
