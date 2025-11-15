import { Workflow, Clock, Zap, GitBranch } from 'lucide-react';

export function Automation() {
  return (
    <div className="min-h-screen bg-[#010731] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Workflow
            <br />
            <span className="bg-gradient-to-r from-[#00B4A8] to-[#006A67] bg-clip-text text-transparent">
              Automation
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Automate complex business processes with our visual workflow builder. No code required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            { icon: Workflow, title: 'Visual Builder', desc: 'Build workflows visually' },
            { icon: Clock, title: 'Scheduled Jobs', desc: 'Run tasks on schedule' },
            { icon: Zap, title: 'Event Triggers', desc: 'React to data changes' },
            { icon: GitBranch, title: 'Conditional Logic', desc: 'Add branching logic' }
          ].map((item) => (
            <div key={item.title} className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[#006A67] to-[#00B4A8] rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-8">Automate Everything</h2>
          <div className="space-y-6 text-white/70 text-lg leading-relaxed">
            <p>
              Build sophisticated workflows that automate your business processes. Connect multiple data sources,
              add conditional logic, send notifications, and more.
            </p>
            <p>
              Common use cases include data synchronization, notification systems, approval workflows,
              scheduled reports, and data validation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
