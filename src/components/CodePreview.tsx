import { useState } from 'react';
import { Project, CodeFile } from '../lib/supabase';
import { FileCode, Download, Copy, Check } from 'lucide-react';

interface CodePreviewProps {
  project: Project;
}

export function CodePreview({ project }: CodePreviewProps) {
  const [selectedFile, setSelectedFile] = useState<CodeFile | null>(
    project.generated_code?.[0] || null
  );
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (selectedFile) {
      navigator.clipboard.writeText(selectedFile.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    if (!project.generated_code || project.generated_code.length === 0) return;

    const zip = generateZipContent(project.generated_code);
    const blob = new Blob([zip], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${project.name.replace(/\s+/g, '-').toLowerCase()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const generateZipContent = (files: CodeFile[]) => {
    let content = `Project: ${project.name}\n`;
    content += `Framework: ${project.framework}\n`;
    content += `Generated: ${new Date(project.created_at).toLocaleString()}\n`;
    content += `\n${'='.repeat(80)}\n\n`;

    files.forEach((file) => {
      content += `FILE: ${file.path}\n`;
      content += `${'='.repeat(80)}\n`;
      content += file.content;
      content += `\n\n${'='.repeat(80)}\n\n`;
    });

    return content;
  };

  if (!project.generated_code || project.generated_code.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200 text-center">
        <div className="bg-slate-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <FileCode className="h-8 w-8 text-slate-400" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">No Code Generated Yet</h3>
        <p className="text-slate-600">The generated code will appear here once processing is complete.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Code Preview</h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopy}
            className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-sm"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span>Copy</span>
              </>
            )}
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
          >
            <Download className="h-4 w-4" />
            <span>Download</span>
          </button>
        </div>
      </div>

      <div className="flex h-[600px]">
        <div className="w-64 bg-slate-50 border-r border-slate-200 overflow-y-auto">
          <div className="p-3 bg-slate-100 border-b border-slate-200">
            <p className="text-xs font-semibold text-slate-600 uppercase">Files</p>
          </div>
          <div className="divide-y divide-slate-200">
            {project.generated_code.map((file, index) => (
              <button
                key={index}
                onClick={() => setSelectedFile(file)}
                className={`w-full text-left px-4 py-3 hover:bg-slate-100 transition-colors ${
                  selectedFile?.path === file.path ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                }`}
              >
                <div className="flex items-center space-x-2">
                  <FileCode className="h-4 w-4 text-slate-500 flex-shrink-0" />
                  <span className="text-sm text-slate-900 truncate">{file.path}</span>
                </div>
                <span className="text-xs text-slate-500 ml-6">{file.language}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          {selectedFile && (
            <div className="h-full flex flex-col">
              <div className="px-6 py-3 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-900">{selectedFile.path}</span>
                <span className="text-xs text-slate-500 uppercase">{selectedFile.language}</span>
              </div>
              <div className="flex-1 overflow-auto">
                <pre className="p-6 text-sm leading-relaxed">
                  <code className="text-slate-800 font-mono">{selectedFile.content}</code>
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
