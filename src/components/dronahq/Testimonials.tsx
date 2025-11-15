import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'VP of Engineering',
      company: 'TechCorp',
      content: 'Prompt2Prod has transformed how we build internal tools. What used to take weeks now takes hours. The ROI has been incredible.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'DataFlow Inc',
      content: 'The ability to connect to any database and API makes Prompt2Prod incredibly powerful. Our team can now iterate on tools in real-time.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'CTO',
      company: 'StartupHub',
      content: 'We went from idea to production in less than a day. The drag-and-drop builder is intuitive, but you still have full control when needed.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A1647]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Loved by developers and
            <br />
            <span className="bg-gradient-to-r from-[#00B4A8] to-[#006A67] bg-clip-text text-transparent">
              trusted by enterprises
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Join thousands of teams building better internal tools with Prompt2Prod.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-[#00B4A8]/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#00B4A8] text-[#00B4A8]" />
                ))}
              </div>

              <p className="text-white/80 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#006A67] to-[#00B4A8] rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-white/60 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
