import { Layout, Palette, Layers, Code } from 'lucide-react';

export function AppBuilder() {
  const features = [
    {
      icon: Layout,
      title: 'Drag & Drop Interface',
      description: 'Build interfaces by dragging components onto the canvas. Instant visual feedback.'
    },
    {
      icon: Palette,
      title: 'Pre-built Components',
      description: 'Tables, forms, charts, modals, and more. All styled and ready to use.'
    },
    {
      icon: Layers,
      title: 'Responsive Design',
      description: 'Apps automatically work on desktop, tablet, and mobile devices.'
    },
    {
      icon: Code,
      title: 'Custom Code',
      description: 'Write JavaScript or use custom React components when you need more control.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#010731] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Visual App
            <br />
            <span className="bg-gradient-to-r from-[#00B4A8] to-[#006A67] bg-clip-text text-transparent">
              Builder
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Build beautiful, responsive interfaces without writing code. Drag, drop, and configure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-8 bg-white/5 border border-white/10 rounded-2xl"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#006A67] to-[#00B4A8] rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed text-lg">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">How It Works</h2>
          <div className="space-y-6 text-white/70 text-lg leading-relaxed">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-[#006A67] to-[#00B4A8] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Choose Your Components</h3>
                <p>Select from tables, forms, charts, buttons, and 50+ other components.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-[#006A67] to-[#00B4A8] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Configure Properties</h3>
                <p>Customize styling, behavior, and data bindings through the property panel.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-[#006A67] to-[#00B4A8] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Connect Your Data</h3>
                <p>Bind components to your data sources with a few clicks.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-[#006A67] to-[#00B4A8] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">4</span>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Deploy Instantly</h3>
                <p>Click deploy and your app is live. No build process or deployment configuration.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#006A67]/20 to-[#00B4A8]/20 border border-[#00B4A8]/50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Try the App Builder</h2>
          <p className="text-xl text-white/70 mb-6">
            Build your first app in under 10 minutes with our interactive tutorial.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-[#006A67] to-[#00B4A8] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#006A67]/30 transition-all">
            Start Building Free
          </button>
        </div>
      </div>
    </div>
  );
}
