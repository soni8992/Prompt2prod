import { MessageCircle, Users, BookOpen, Award } from 'lucide-react';

export function Community() {
  return (
    <div className="min-h-screen bg-[#010731] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Join the
            <br />
            <span className="bg-gradient-to-r from-[#00B4A8] to-[#006A67] bg-clip-text text-transparent">
              Community
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Connect with thousands of developers building with Prompt2Prod.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            { icon: MessageCircle, title: 'Community Forum', desc: '5,000+ active members sharing knowledge' },
            { icon: Users, title: 'Discord Server', desc: 'Real-time chat and support' },
            { icon: BookOpen, title: 'Community Guides', desc: 'Tutorials written by the community' },
            { icon: Award, title: 'Showcase', desc: 'Share your apps and get featured' }
          ].map((item) => (
            <div key={item.title} className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-r from-[#006A67] to-[#00B4A8] rounded-xl flex items-center justify-center mb-6">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-white/60 leading-relaxed text-lg">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#006A67]/20 to-[#00B4A8]/20 border border-[#00B4A8]/50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join our Discord</h2>
          <p className="text-xl text-white/70 mb-6">
            Get help, share ideas, and connect with other builders.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-[#006A67] to-[#00B4A8] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#006A67]/30 transition-all">
            Join Discord
          </button>
        </div>
      </div>
    </div>
  );
}
