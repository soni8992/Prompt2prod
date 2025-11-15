import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Our team typically responds within 24 hours',
      contact: 'hello@prompt2prod.com'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Available Monday-Friday, 9am-6pm EST',
      contact: 'Start a conversation'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our sales team',
      contact: '+1 (555) 123-4567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Our headquarters',
      contact: 'San Francisco, CA'
    }
  ];

  return (
    <div className="min-h-screen bg-[#010731] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Get in
            <br />
            <span className="bg-gradient-to-r from-[#00B4A8] to-[#006A67] bg-clip-text text-transparent">
              touch
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method) => (
            <div
              key={method.title}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#00B4A8]/50 transition-all text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#006A67] to-[#00B4A8] rounded-xl flex items-center justify-center mx-auto mb-4">
                <method.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
              <p className="text-white/60 text-sm mb-3">{method.description}</p>
              <p className="text-[#00B4A8] font-medium">{method.contact}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00B4A8] transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00B4A8] transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00B4A8] transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00B4A8] transition-colors"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  How can we help?
                </label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#00B4A8] transition-colors">
                  <option value="">Select a topic</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00B4A8] transition-colors resize-none"
                  placeholder="Tell us more about your needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#006A67] to-[#00B4A8] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#006A67]/30 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">Do you offer a free trial?</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Yes! All plans include a 14-day free trial. No credit card required.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Can I cancel anytime?</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Absolutely. You can cancel your subscription at any time with no penalties.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Do you offer enterprise plans?</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Yes, we offer custom enterprise plans with dedicated support and advanced features.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">How secure is Prompt2Prod?</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    We're SOC 2 certified and take security very seriously. All data is encrypted in transit and at rest.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#006A67]/20 to-[#00B4A8]/20 border border-[#00B4A8]/50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-3">Need immediate help?</h3>
              <p className="text-white/70 mb-4">
                Check out our documentation or join our community forum for quick answers.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="px-6 py-2 bg-white/10 border border-white/20 text-white rounded-lg font-medium hover:bg-white/20 transition-all">
                  Documentation
                </button>
                <button className="px-6 py-2 bg-white/10 border border-white/20 text-white rounded-lg font-medium hover:bg-white/20 transition-all">
                  Community
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
