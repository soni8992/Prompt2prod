import { Building2, ShoppingCart, Heart, Briefcase } from 'lucide-react';

export function ByIndustry() {
  const industries = [
    {
      icon: Building2,
      name: 'Technology',
      description: 'Build internal tools for engineering, operations, and customer success teams.'
    },
    {
      icon: ShoppingCart,
      name: 'E-commerce',
      description: 'Manage inventory, orders, customers, and fulfillment operations.'
    },
    {
      icon: Heart,
      name: 'Healthcare',
      description: 'HIPAA-compliant tools for patient management and healthcare operations.'
    },
    {
      icon: Briefcase,
      name: 'Financial Services',
      description: 'Secure internal tools for banking, fintech, and financial operations.'
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
              Industry
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Tailored solutions for your industry's unique needs and compliance requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-[#00B4A8]/50 transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#006A67] to-[#00B4A8] rounded-xl flex items-center justify-center mb-6">
                <industry.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">{industry.name}</h3>
              <p className="text-white/60 leading-relaxed text-lg">{industry.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#006A67]/20 to-[#00B4A8]/20 border border-[#00B4A8]/50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don't see your industry?</h2>
          <p className="text-xl text-white/70 mb-6">
            Contact our team to discuss your specific requirements.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-[#006A67] to-[#00B4A8] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#006A67]/30 transition-all">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}
