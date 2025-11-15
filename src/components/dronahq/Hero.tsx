import { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { VideoModal } from '../VideoModal';

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#010731] via-[#0A1647] to-[#010731]"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#006A67] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00B4A8] rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
            <span className="w-2 h-2 bg-[#00B4A8] rounded-full animate-pulse"></span>
            <span className="text-white/80 text-sm">New: AI-Powered App Builder</span>
            <ArrowRight className="h-4 w-4 text-white/60" />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Build Internal Tools
            <br />
            <span className="bg-gradient-to-r from-[#00B4A8] to-[#006A67] bg-clip-text text-transparent">
              10x Faster
            </span>
          </h1>

          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed">
            The low-code platform trusted by developers to build custom internal tools,
            dashboards, admin panels, and workflows in minutes, not months.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/start-building">
              <button className="group px-8 py-4 bg-gradient-to-r from-[#006A67] to-[#00B4A8] hover:from-[#005553] hover:to-[#009688] text-white rounded-lg text-lg font-semibold transition-all shadow-2xl shadow-[#006A67]/30 hover:shadow-[#006A67]/50 flex items-center space-x-2">
                <span>Start Building for Free</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <button
              onClick={() => setIsVideoOpen(true)}
              className="group px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white rounded-lg text-lg font-semibold transition-all flex items-center space-x-2"
            >
              <Play className="h-5 w-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-white/60 text-sm">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#00B4A8]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#00B4A8]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free forever plan</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#00B4A8]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>5-minute setup</span>
            </div>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#006A67] to-[#00B4A8] opacity-20 blur-2xl rounded-3xl"></div>
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-2 shadow-2xl">
            <div className="bg-[#0A1647] rounded-xl overflow-hidden">
              <div className="flex items-center space-x-2 px-4 py-3 border-b border-white/10">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center text-white/40 text-sm">app.prompt2prod.com</div>
              </div>
              <div
                className="aspect-video bg-gradient-to-br from-[#0A1647] to-[#010731] flex items-center justify-center relative group cursor-pointer"
                onClick={() => setIsVideoOpen(true)}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-[#006A67] to-[#00B4A8] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                  <Play className="h-10 w-10 text-white ml-1" />
                </div>
                <div className="absolute bottom-8 text-white/40 text-lg">Click to watch demo</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  );
}
