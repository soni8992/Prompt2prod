import { useState } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';

interface PromptInputProps {
  onGenerate: (prompt: string, name: string, framework: string) => void;
  isGenerating: boolean;
}

export function PromptInput({ onGenerate, isGenerating }: PromptInputProps) {
  const [prompt, setPrompt] = useState('');
  const [projectName, setProjectName] = useState('');
  const [framework, setFramework] = useState('react');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim() && projectName.trim()) {
      onGenerate(prompt, projectName, framework);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg">
          <Sparkles className="h-6 w-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Create Your Project</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="projectName" className="block text-sm font-semibold text-slate-700 mb-2">
            Project Name
          </label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="My Awesome App"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 placeholder-slate-400"
            disabled={isGenerating}
          />
        </div>

        <div>
          <label htmlFor="framework" className="block text-sm font-semibold text-slate-700 mb-2">
            Framework
          </label>
          <select
            id="framework"
            value={framework}
            onChange={(e) => setFramework(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 bg-white"
            disabled={isGenerating}
          >
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="nextjs">Next.js</option>
            <option value="svelte">Svelte</option>
          </select>
        </div>

        <div>
          <label htmlFor="prompt" className="block text-sm font-semibold text-slate-700 mb-2">
            Describe Your Application
          </label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Build a modern e-commerce platform with product listings, shopping cart, and checkout..."
            rows={6}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 placeholder-slate-400 resize-none"
            disabled={isGenerating}
          />
          <p className="mt-2 text-sm text-slate-500">
            Be as detailed as possible. Include features, styling preferences, and any specific requirements.
          </p>
        </div>

        <button
          type="submit"
          disabled={isGenerating || !prompt.trim() || !projectName.trim()}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-6 rounded-lg shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isGenerating ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Generating Your Project...</span>
            </>
          ) : (
            <>
              <Sparkles className="h-5 w-5" />
              <span>Generate Project</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
