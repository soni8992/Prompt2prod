import { BarChart3, Users, ShoppingCart, FileText, Headphones, DollarSign } from 'lucide-react';

export function UseCases() {
  const useCases = [
    {
      icon: BarChart3,
      title: 'Admin Panels',
      description: 'Build custom admin dashboards to manage users, content, and business operations.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Customer Portals',
      description: 'Create self-service portals for customers to access information and manage accounts.',
      color: 'from-[#006A67] to-[#00B4A8]'
    },
    {
      icon: ShoppingCart,
      title: 'Inventory Management',
      description: 'Track products, manage stock levels, and automate ordering processes.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FileText,
      title: 'Approval Workflows',
      description: 'Streamline approval processes for expenses, time-off, and content reviews.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Headphones,
      title: 'Support Tools',
      description: 'Empower support teams with tools to manage tickets, track issues, and help customers.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: DollarSign,
      title: 'Financial Dashboards',
      description: 'Monitor KPIs, track revenue, and generate financial reports in real-time.',
      color: 'from-yellow-500 to-amber-500'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#010731] to-[#0A1647]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Built for every use case
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            From simple CRUD apps to complex workflows, DronaHQ adapts to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="group relative p-8 bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              <div className="relative">
                <div className={`w-14 h-14 bg-gradient-to-br ${useCase.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <useCase.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-white/60 leading-relaxed">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
