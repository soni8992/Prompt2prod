import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Github, ArrowRight } from 'lucide-react';

export function StartBuilding() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-[#010731] pt-24 pb-16">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-3">
            Start building
            <br />
            <span className="bg-gradient-to-r from-[#00B4A8] to-[#006A67] bg-clip-text text-transparent">
              for free
            </span>
          </h1>
          <p className="text-white/60">
            No credit card required. Get started in seconds.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <div className="mb-6 grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-all">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span>Google</span>
            </button>
            <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-all">
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#010731] text-white/60">Or sign up with email</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00B4A8] transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Work Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00B4A8] transition-colors"
                  placeholder="john@company.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00B4A8] transition-colors"
                  placeholder="••••••••"
                  required
                />
              </div>
              <p className="mt-2 text-white/40 text-xs">
                At least 8 characters with a mix of letters and numbers
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#006A67] to-[#00B4A8] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#006A67]/30 transition-all flex items-center justify-center space-x-2"
            >
              <span>Create Account</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>

          <p className="mt-6 text-center text-white/60 text-sm">
            Already have an account?{' '}
            <Link to="/sign-in" className="text-[#00B4A8] hover:underline">
              Sign in
            </Link>
          </p>
        </div>

        <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 className="text-white font-semibold mb-3">What you get for free:</h3>
          <ul className="space-y-2 text-white/70 text-sm">
            <li className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-[#00B4A8] rounded-full"></div>
              <span>5 apps and unlimited users</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-[#00B4A8] rounded-full"></div>
              <span>Connect to any database or API</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-[#00B4A8] rounded-full"></div>
              <span>All core features included</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-[#00B4A8] rounded-full"></div>
              <span>Community support</span>
            </li>
          </ul>
        </div>

        <p className="mt-8 text-center text-white/40 text-xs">
          By creating an account, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}
