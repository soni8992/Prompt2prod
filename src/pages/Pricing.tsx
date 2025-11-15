import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for trying out Prompt2Prod',
      features: [
        { text: 'Up to 5 apps', included: true },
        { text: '2 users', included: true },
        { text: 'Community support', included: true },
        { text: 'Basic integrations', included: true },
        { text: 'Custom branding', included: false },
        { text: 'SSO', included: false },
        { text: 'Priority support', included: false },
      ],
      cta: 'Start Free',
      path: '/start-building',
      popular: false
    },
    {
      name: 'Pro',
      price: '$49',
      description: 'For growing teams building internal tools',
      features: [
        { text: 'Unlimited apps', included: true },
        { text: '10 users', included: true },
        { text: 'Email support', included: true },
        { text: 'All integrations', included: true },
        { text: 'Custom branding', included: true },
        { text: 'SSO', included: false },
        { text: 'Priority support', included: false },
      ],
      cta: 'Start Free Trial',
      path: '/start-building',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with advanced needs',
      features: [
        { text: 'Unlimited apps', included: true },
        { text: 'Unlimited users', included: true },
        { text: 'Dedicated support', included: true },
        { text: 'All integrations', included: true },
        { text: 'Custom branding', included: true },
        { text: 'SSO & SAML', included: true },
        { text: '24/7 priority support', included: true },
      ],
      cta: 'Contact Sales',
      path: '/contact',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#010731] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Simple, transparent
            <br />
            <span className="bg-gradient-to-r from-[#00B4A8] to-[#006A67] bg-clip-text text-transparent">
              pricing
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Choose the plan that's right for your team. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#006A67]/20 to-[#00B4A8]/20 border-2 border-[#00B4A8]'
                  : 'bg-white/5 border border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#006A67] to-[#00B4A8] rounded-full text-white text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.price !== 'Custom' && (
                    <span className="text-white/60 ml-2">/month</span>
                  )}
                </div>
                <p className="text-white/60 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-[#00B4A8] flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="h-5 w-5 text-white/30 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? 'text-white' : 'text-white/40'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link to={plan.path}>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#006A67] to-[#00B4A8] text-white hover:shadow-lg hover:shadow-[#006A67]/30'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {plan.cta}
                </button>
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need a custom plan?</h3>
          <p className="text-white/70 mb-6">
            Contact our sales team to discuss your specific requirements and get a tailored solution.
          </p>
          <Link to="/contact">
            <button className="px-8 py-3 bg-gradient-to-r from-[#006A67] to-[#00B4A8] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#006A67]/30 transition-all">
              Contact Sales
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
