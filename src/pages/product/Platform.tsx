import { Code2, Zap, Shield, Users, Database, Cloud } from 'lucide-react';

export function Platform() {
  const features = [
    {
      icon: Code2,
      title: 'Visual Builder',
      description: 'Drag and drop components to build UIs in minutes. No coding required for common use cases.'
    },
    {
      icon: Database,
      title: 'Universal Data Layer',
      description: 'Connect to any database, REST API, or GraphQL endpoint with a few clicks.'
    },
    {
      icon: Zap,
      title: 'Instant Deployment',
      description: 'Deploy your apps with one click. No complex configuration or DevOps needed.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 compliant with role-based access control and audit logs.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together in real-time with version control and deployment workflows.'
    },
    {
      icon: Cloud,
      title: 'Cloud Native',
      description: 'Built on modern cloud infrastructure for reliability and scale.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#010731] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Platform
            <br />
            <span className="bg-gradient-to-r from-[#00B4A8] to-[#006A67] bg-clip-text text-transparent">
              Overview
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A complete platform to build, deploy, and manage internal tools. Everything you need in one place.
          </p>
        </div>

        <div className="mb-24">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">The Complete Internal Tool Platform</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Prompt2Prod is a low-code platform that lets you build production-ready internal tools in minutes.
              Connect your data sources, build interfaces with our visual builder, and deploy instantly.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              Whether you need admin panels, dashboards, CRUD apps, or custom workflows, Prompt2Prod has
              everything you need to build faster without sacrificing flexibility or control.
            </p>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-[#00B4A8]/50 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#006A67] to-[#00B4A8] rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#006A67]/20 to-[#00B4A8]/20 border border-[#00B4A8]/50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-xl text-white/70 mb-6 max-w-2xl mx-auto">
            Start building your first internal tool today. No credit card required.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-[#006A67] to-[#00B4A8] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#006A67]/30 transition-all">
            Start Building Free
          </button>
        </div>
      </div>
    </div>
  );
}
