import { Shield, Lock, Eye, FileCheck } from 'lucide-react';

export function Security() {
  return (
    <div className="min-h-screen bg-[#010731] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Enterprise-Grade
            <br />
            <span className="bg-gradient-to-r from-[#00B4A8] to-[#006A67] bg-clip-text text-transparent">
              Security
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Built with security at the core. SOC 2 compliant with industry-leading security practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            { icon: Shield, title: 'SOC 2 Certified', desc: 'Independently audited and certified' },
            { icon: Lock, title: 'Encryption', desc: 'Data encrypted in transit and at rest' },
            { icon: Eye, title: 'Access Control', desc: 'Role-based permissions and SSO' },
            { icon: FileCheck, title: 'Compliance', desc: 'GDPR, HIPAA, and SOC 2 compliant' }
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

        <div className="bg-white/5 border border-white/10 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6">Security Features</h2>
          <ul className="space-y-4 text-white/70 text-lg">
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#00B4A8] rounded-full mt-2"></div>
              <span>End-to-end encryption for all data</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#00B4A8] rounded-full mt-2"></div>
              <span>Regular security audits and penetration testing</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#00B4A8] rounded-full mt-2"></div>
              <span>Role-based access control and audit logs</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#00B4A8] rounded-full mt-2"></div>
              <span>SSO and SAML authentication</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
