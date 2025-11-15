import { Database, Cloud, Code, Zap } from 'lucide-react';

export function Integrations() {
  const categories = [
    {
      name: 'Databases',
      icon: Database,
      integrations: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Supabase', 'Firebase']
    },
    {
      name: 'APIs',
      icon: Cloud,
      integrations: ['REST APIs', 'GraphQL', 'Stripe', 'Twilio', 'SendGrid', 'Slack']
    },
    {
      name: 'Authentication',
      icon: Code,
      integrations: ['Auth0', 'Okta', 'Google OAuth', 'GitHub OAuth', 'SAML', 'LDAP']
    },
    {
      name: 'Services',
      icon: Zap,
      integrations: ['AWS S3', 'Google Cloud', 'Azure', 'Cloudflare', 'Vercel', 'Netlify']
    }
  ];

  return (
    <div className="min-h-screen bg-[#010731] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Connect to
            <br />
            <span className="bg-gradient-to-r from-[#00B4A8] to-[#006A67] bg-clip-text text-transparent">
              Anything
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Integrate with your existing databases, APIs, and services. No complex setup required.
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.name} className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-[#006A67] to-[#00B4A8] rounded-lg flex items-center justify-center">
                  <category.icon className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">{category.name}</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {category.integrations.map((integration) => (
                  <div
                    key={integration}
                    className="p-4 bg-white/5 border border-white/10 rounded-lg text-center hover:border-[#00B4A8]/50 transition-all"
                  >
                    <p className="text-white font-medium text-sm">{integration}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
