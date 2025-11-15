import { Download, Star } from 'lucide-react';

export function Templates() {
  const templates = [
    {
      name: 'Admin Dashboard',
      description: 'Complete admin panel with user management, analytics, and settings.',
      category: 'Dashboards',
      downloads: '2.5k'
    },
    {
      name: 'Customer Portal',
      description: 'Self-service portal for customers to manage their accounts.',
      category: 'Portals',
      downloads: '1.8k'
    },
    {
      name: 'Inventory Manager',
      description: 'Track and manage inventory across multiple warehouses.',
      category: 'Operations',
      downloads: '1.2k'
    },
    {
      name: 'CRM Dashboard',
      description: 'Sales pipeline, contacts, and deal tracking.',
      category: 'Sales',
      downloads: '3.1k'
    },
    {
      name: 'Order Management',
      description: 'Process orders, manage fulfillment, and track shipments.',
      category: 'E-commerce',
      downloads: '2.0k'
    },
    {
      name: 'Support Ticket System',
      description: 'Manage customer support tickets and agent workflows.',
      category: 'Support',
      downloads: '1.5k'
    }
  ];

  return (
    <div className="min-h-screen bg-[#010731] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Template
            <br />
            <span className="bg-gradient-to-r from-[#00B4A8] to-[#006A67] bg-clip-text text-transparent">
              Library
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Start with pre-built templates and customize them for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <div
              key={template.name}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#00B4A8]/50 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-white/10 text-white/80 text-xs font-semibold rounded-full">
                  {template.category}
                </span>
                <div className="flex items-center space-x-1 text-white/60 text-sm">
                  <Download className="h-4 w-4" />
                  <span>{template.downloads}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{template.name}</h3>
              <p className="text-white/60 text-sm mb-4">{template.description}</p>
              <button className="w-full py-2 bg-gradient-to-r from-[#006A67] to-[#00B4A8] text-white rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-[#006A67]/30 transition-all">
                Use Template
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
