import { Project } from '../lib/supabase';
import { Calendar, Code, Trash2, Eye } from 'lucide-react';

interface ProjectListProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onDeleteProject: (id: string) => void;
  selectedProjectId?: string;
}

export function ProjectList({ projects, onSelectProject, onDeleteProject, selectedProjectId }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200 text-center">
        <div className="bg-slate-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Code className="h-8 w-8 text-slate-400" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">No Projects Yet</h3>
        <p className="text-slate-600">Create your first project to get started!</p>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'generating':
        return 'bg-blue-100 text-blue-700 border-blue-300';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-300';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 px-6 py-4 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-900">Your Projects</h2>
        <p className="text-sm text-slate-600 mt-1">{projects.length} project{projects.length !== 1 ? 's' : ''} total</p>
      </div>

      <div className="divide-y divide-slate-200">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`p-6 hover:bg-slate-50 transition-colors cursor-pointer ${
              selectedProjectId === project.id ? 'bg-blue-50 border-l-4 border-blue-500' : ''
            }`}
            onClick={() => onSelectProject(project)}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-slate-900 truncate">{project.name}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-sm text-slate-600 mb-3 line-clamp-2">{project.prompt}</p>

                <div className="flex items-center space-x-4 text-xs text-slate-500">
                  <div className="flex items-center space-x-1">
                    <Code className="h-4 w-4" />
                    <span className="capitalize">{project.framework}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(project.created_at)}</span>
                  </div>
                  {project.generated_code && project.generated_code.length > 0 && (
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{project.generated_code.length} files</span>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteProject(project.id);
                }}
                className="ml-4 p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Delete project"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
