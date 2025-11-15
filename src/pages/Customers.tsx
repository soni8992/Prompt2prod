import { Star, ArrowRight } from 'lucide-react';

export function Customers() {
  const caseStudies = [
    {
      company: 'TechCorp',
      industry: 'Technology',
      logo: 'TC',
      title: 'How TechCorp reduced internal tool development time by 80%',
      description: 'TechCorp was spending weeks building custom admin panels. With Prompt2Prod, they now ship new tools in days.',
      results: [
        '80% faster development',
        '$500K saved annually',
        '15+ tools built'
      ],
      quote: 'Prompt2Prod has transformed how we build internal tools. What used to take weeks now takes hours.',
      author: 'Sarah Johnson',
      role: 'VP of Engineering'
    },
    {
      company: 'DataFlow Inc',
      industry: 'Data & Analytics',
      logo: 'DF',
      title: 'DataFlow scales operations with custom dashboards',
      description: 'DataFlow needed real-time dashboards for their operations team. They built 10+ dashboards in a month.',
      results: [
        '10+ dashboards built',
        '90% time savings',
        '100% team adoption'
      ],
      quote: 'The ability to connect to any database and API makes Prompt2Prod incredibly powerful.',
      author: 'Michael Chen',
      role: 'Product Manager'
    },
    {
      company: 'StartupHub',
      industry: 'SaaS',
      logo: 'SH',
      title: 'StartupHub launches internal tools in record time',
      description: 'As a fast-growing startup, StartupHub needed to move quickly. Prompt2Prod helped them ship tools faster.',
      results: [
        'Launched in 1 day',
        '5x productivity gain',
        '95% user satisfaction'
      ],
      quote: 'We went from idea to production in less than a day. The drag-and-drop builder is intuitive.',
      author: 'Emily Rodriguez',
      role: 'CTO'
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      role: 'Engineering Manager',
      company: 'FinTech Solutions',
      content: 'Prompt2Prod has been a game-changer for our team. We can now focus on building features that matter.',
      rating: 5
    },
    {
      name: 'Rachel Green',
      role: 'Head of Operations',
      company: 'E-commerce Co',
      content: 'The platform is incredibly intuitive. Our non-technical team members can build tools without developer help.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'CTO',
      company: 'HealthTech Inc',
      content: 'Security and compliance are critical for us. Prompt2Prod meets all our requirements.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'Product Lead',
      company: 'MarketingHub',
      content: 'We built our entire internal operations suite on Prompt2Prod. Best decision we made.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-[#010731] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Trusted by
            <br />
            <span className="bg-gradient-to-r from-[#00B4A8] to-[#006A67] bg-clip-text text-transparent">
              3,000+ companies
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            See how leading companies are using Prompt2Prod to build better internal tools faster.
          </p>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Customer Success Stories</h2>
          <div className="space-y-12">
            {caseStudies.map((study) => (
              <div
                key={study.company}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#00B4A8]/50 transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#006A67] to-[#00B4A8] rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl font-bold">{study.logo}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{study.company}</h3>
                      <p className="text-white/60 text-sm">{study.industry}</p>
                    </div>
                  </div>
                </div>

                <h4 className="text-2xl font-bold text-white mb-4">{study.title}</h4>
                <p className="text-white/70 mb-6 leading-relaxed">{study.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.results.map((result, index) => (
                    <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                      <p className="text-[#00B4A8] font-semibold">{result}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-white/5 border-l-4 border-[#00B4A8] rounded-lg p-6">
                  <p className="text-white/90 italic mb-4">"{study.quote}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#006A67] to-[#00B4A8] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {study.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{study.author}</p>
                      <p className="text-white/60 text-xs">{study.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#00B4A8] text-[#00B4A8]" />
                  ))}
                </div>
                <p className="text-white/80 mb-4 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-white/60 text-xs">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#006A67]/20 to-[#00B4A8]/20 border border-[#00B4A8]/50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join 3,000+ companies</h2>
          <p className="text-xl text-white/70 mb-6 max-w-2xl mx-auto">
            Start building internal tools 10x faster. No credit card required.
          </p>
          <button className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-[#006A67] to-[#00B4A8] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#006A67]/30 transition-all">
            <span>Get Started Free</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
