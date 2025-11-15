import { LayoutDashboard, FileText, Users, Database } from 'lucide-react';

export function ByUseCase() {
  const useCases = [
    {
      icon: LayoutDashboard,
      name: 'Admin Panels',
      description: 'Build powerful admin interfaces to manage your data and operations.'
    },
    {
      icon: FileText,
      name: 'CRUD Applications',
      description: 'Create, read, update, and delete data with beautiful interfaces.'
    },
    {
      icon: Users,
      name: 'Customer Portals',
      description: 'Give customers self-service access to their data and accounts.'
    },
    {
      icon: Database,
      name: 'Data Management',
      description: 'Build tools to view, analyze, and manage your business data.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#010731] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Solutions by
            <br />
            <span className="bg-gradient-to-r from-[#00B4A8] to-[#006A67] bg-clip-text text-transparent">
              Use Case
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Pre-built templates and patterns for common internal tool use cases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase) => (
            <div
              key={useCase.name}
              className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-[#00B4A8]/50 transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#006A67] to-[#00B4A8] rounded-xl flex items-center justify-center mb-6">
                <useCase.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">{useCase.name}</h3>
              <p className="text-white/60 leading-relaxed text-lg">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
