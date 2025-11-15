import { ArrowRight, Sparkles } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#010731] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#006A67] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00B4A8] rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
          <Sparkles className="h-4 w-4 text-[#00B4A8]" />
          <span className="text-white/80 text-sm">Start building today</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to build your
          <br />
          <span className="bg-gradient-to-r from-[#00B4A8] to-[#006A67] bg-clip-text text-transparent">
            next internal tool?
          </span>
        </h2>

        <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
          Join 3,000+ companies building faster with Prompt2Prod. Start for free, no credit card required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="group px-8 py-4 bg-gradient-to-r from-[#006A67] to-[#00B4A8] hover:from-[#005553] hover:to-[#009688] text-white rounded-lg text-lg font-semibold transition-all shadow-2xl shadow-[#006A67]/30 hover:shadow-[#006A67]/50 flex items-center space-x-2">
            <span>Get Started Free</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white rounded-lg text-lg font-semibold transition-all">
            Schedule a Demo
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-[#00B4A8]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-[#00B4A8]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-[#00B4A8]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Setup in minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
