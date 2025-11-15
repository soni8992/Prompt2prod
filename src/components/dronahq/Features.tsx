import { Code2, Zap, Shield, Database, Workflow, Blocks } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Code2,
      title: 'Drag-and-Drop Builder',
      description: 'Build powerful UIs with our intuitive visual builder. No coding required for common use cases.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Ship production-ready apps in minutes. Pre-built components and templates accelerate development.'
    },
    {
      icon: Database,
      title: 'Connect Anything',
      description: 'Native integrations with databases, APIs, and SaaS tools. Connect to any data source instantly.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 certified with role-based access control, audit logs, and enterprise SSO support.'
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Automate complex business processes with our visual workflow builder and scheduled jobs.'
    },
    {
      icon: Blocks,
      title: 'Custom Components',
      description: 'Extend functionality with custom React components. Full developer flexibility when needed.'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#010731]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Everything you need to build
            <br />
            <span className="bg-gradient-to-r from-[#00B4A8] to-[#006A67] bg-clip-text text-transparent">
              internal tools faster
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A complete platform with all the tools and integrations you need to build, deploy, and scale your internal applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00B4A8]/50 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#006A67]/20"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#006A67] to-[#00B4A8] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
