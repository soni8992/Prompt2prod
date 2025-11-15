import { Book, Code, Rocket, Shield, Database, Zap } from 'lucide-react';

export function Documentation() {
  const sections = [
    {
      icon: Rocket,
      title: 'Getting Started',
      description: 'Learn the basics and build your first app',
      links: ['Quick Start Guide', 'Installation', 'First App Tutorial', 'Core Concepts']
    },
    {
      icon: Code,
      title: 'Components',
      description: 'Explore all available UI components',
      links: ['Tables', 'Forms', 'Charts', 'Modals', 'Navigation', 'Custom Components']
    },
    {
      icon: Database,
      title: 'Data Sources',
      description: 'Connect to databases and APIs',
      links: ['Database Setup', 'REST APIs', 'GraphQL', 'Authentication', 'Webhooks']
    },
    {
      icon: Zap,
      title: 'Workflows',
      description: 'Automate tasks and business logic',
      links: ['Workflow Builder', 'Triggers', 'Actions', 'Scheduled Jobs', 'Event Handlers']
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Keep your apps secure',
      links: ['Authentication', 'Authorization', 'RLS Policies', 'SSO Setup', 'Audit Logs']
    },
    {
      icon: Book,
      title: 'Best Practices',
      description: 'Build better apps',
      links: ['Performance', 'Design Patterns', 'Error Handling', 'Testing', 'Deployment']
    }
  ];

  const popularGuides = [
    {
      title: 'Building a CRUD App',
      description: 'Learn how to create a full CRUD application in 10 minutes',
      time: '10 min read'
    },
    {
      title: 'Connecting to PostgreSQL',
      description: 'Step-by-step guide to connect your PostgreSQL database',
      time: '5 min read'
    },
    {
      title: 'Creating Custom Components',
      description: 'Extend Prompt2Prod with your own React components',
      time: '15 min read'
    },
    {
      title: 'Setting Up SSO',
      description: 'Configure single sign-on for your organization',
      time: '8 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-[#010731] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Documentation &
            <br />
            <span className="bg-gradient-to-r from-[#00B4A8] to-[#006A67] bg-clip-text text-transparent">
              Guides
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
            Everything you need to know to build amazing internal tools with Prompt2Prod.
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00B4A8] transition-colors pr-12"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <kbd className="px-2 py-1 bg-white/10 border border-white/20 rounded text-white/60 text-xs">
                  Ctrl K
                </kbd>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
              <div
                key={section.title}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#00B4A8]/50 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#006A67] to-[#00B4A8] rounded-xl flex items-center justify-center mb-4">
                  <section.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{section.title}</h3>
                <p className="text-white/60 text-sm mb-4">{section.description}</p>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[#00B4A8] text-sm hover:underline">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Popular Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularGuides.map((guide) => (
              <div
                key={guide.title}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#00B4A8]/50 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">{guide.title}</h3>
                  <span className="text-white/40 text-xs whitespace-nowrap ml-4">{guide.time}</span>
                </div>
                <p className="text-white/60 text-sm">{guide.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-[#006A67]/20 to-[#00B4A8]/20 border border-[#00B4A8]/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-3">Need Help?</h3>
            <p className="text-white/70 mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-[#006A67] to-[#00B4A8] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#006A67]/30 transition-all">
              Contact Support
            </button>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-3">Join the Community</h3>
            <p className="text-white/70 mb-6">
              Connect with other developers, share ideas, and get help from the community.
            </p>
            <button className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
