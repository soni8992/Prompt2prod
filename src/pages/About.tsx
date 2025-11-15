import { Users, Target, Zap, Globe } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Users,
      title: 'Customer First',
      description: 'We build products that solve real problems for developers and teams.'
    },
    {
      icon: Target,
      title: 'Focus on Quality',
      description: 'Every feature is crafted with attention to detail and user experience.'
    },
    {
      icon: Zap,
      title: 'Move Fast',
      description: 'We iterate quickly to deliver value to our customers faster.'
    },
    {
      icon: Globe,
      title: 'Open & Transparent',
      description: 'We believe in open communication and building in public.'
    }
  ];

  const team = [
    { name: 'Alex Chen', role: 'CEO & Co-founder', initials: 'AC' },
    { name: 'Sarah Williams', role: 'CTO & Co-founder', initials: 'SW' },
    { name: 'Michael Brown', role: 'Head of Product', initials: 'MB' },
    { name: 'Emily Davis', role: 'Head of Engineering', initials: 'ED' },
    { name: 'David Johnson', role: 'Head of Design', initials: 'DJ' },
    { name: 'Lisa Martinez', role: 'Head of Sales', initials: 'LM' }
  ];

  return (
    <div className="min-h-screen bg-[#010731] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Building the future of
            <br />
            <span className="bg-gradient-to-r from-[#00B4A8] to-[#006A67] bg-clip-text text-transparent">
              internal tools
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            We're on a mission to help every company build better internal tools faster,
            so teams can focus on what truly matters.
          </p>
        </div>

        <div className="mb-24">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-white/70 text-lg leading-relaxed">
              <p>
                Prompt2Prod was founded in 2023 by a team of developers who were frustrated with
                the time it took to build internal tools. We knew there had to be a better way.
              </p>
              <p>
                After spending months building admin panels, dashboards, and CRUD apps from scratch,
                we realized that most companies were solving the same problems over and over again.
              </p>
              <p>
                That's when we decided to build Prompt2Prod—a platform that would let developers
                build internal tools 10x faster, without sacrificing flexibility or control.
              </p>
              <p>
                Today, over 3,000 companies trust Prompt2Prod to power their internal operations,
                and we're just getting started.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-white/70">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#00B4A8]/50 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#006A67] to-[#00B4A8] rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-white/60 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-white/70">
              The people behind Prompt2Prod
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-[#006A67] to-[#00B4A8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">{member.initials}</span>
                </div>
                <h3 className="text-white font-semibold mb-1">{member.name}</h3>
                <p className="text-white/60 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 bg-gradient-to-r from-[#006A67]/20 to-[#00B4A8]/20 border border-[#00B4A8]/50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Team</h2>
          <p className="text-xl text-white/70 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about building
            great products. Check out our open positions.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-[#006A67] to-[#00B4A8] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#006A67]/30 transition-all">
            View Careers
          </button>
        </div>
      </div>
    </div>
  );
}
