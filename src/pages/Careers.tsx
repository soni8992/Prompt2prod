import { Briefcase, MapPin, Clock } from 'lucide-react';

export function Careers() {
  const positions = [
    {
      title: 'Senior Full Stack Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time'
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time'
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      title: 'Technical Writer',
      department: 'Documentation',
      location: 'Remote',
      type: 'Full-time'
    }
  ];

  return (
    <div className="min-h-screen bg-[#010731] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Join Our
            <br />
            <span className="bg-gradient-to-r from-[#00B4A8] to-[#006A67] bg-clip-text text-transparent">
              Team
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Help us build the future of internal tools. Work with a talented team on challenging problems.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Why Join Prompt2Prod?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-2">Remote-First</h3>
              <p className="text-white/60">Work from anywhere with flexible hours</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Competitive Pay</h3>
              <p className="text-white/60">Top of market salary and equity</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Great Benefits</h3>
              <p className="text-white/60">Health, dental, vision, and 401k</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Open Positions</h2>
          <div className="space-y-4">
            {positions.map((position) => (
              <div
                key={position.title}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#00B4A8]/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
                      <div className="flex items-center space-x-2">
                        <Briefcase className="h-4 w-4" />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{position.type}</span>
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 px-6 py-2 bg-gradient-to-r from-[#006A67] to-[#00B4A8] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#006A67]/30 transition-all">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
