import { Github, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function Footer() {
  const footerLinks = {
    Product: [
      { label: 'Platform', path: '/product/platform' },
      { label: 'Integrations', path: '/integrations' },
      { label: 'Security', path: '/security' },
      { label: 'Pricing', path: '/pricing' }
    ],
    Solutions: [
      { label: 'By Industry', path: '/solutions/by-industry' },
      { label: 'By Use Case', path: '/solutions/by-use-case' }
    ],
    Resources: [
      { label: 'Documentation', path: '/documentation' },
      { label: 'Templates', path: '/resources/templates' },
      { label: 'Community', path: '/resources/community' },
      { label: 'Blog', path: '/blog' }
    ],
    Company: [
      { label: 'About', path: '/about' },
      { label: 'Careers', path: '/careers' },
      { label: 'Customers', path: '/customers' },
      { label: 'Contact Us', path: '/contact' }
    ]
  };

  return (
    <footer className="bg-[#010731] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <div className="mb-4">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              The low-code platform for building internal tools 10x faster. Trusted by 3,000+ companies worldwide.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00B4A8]/50 rounded-lg flex items-center justify-center transition-all">
                <Twitter className="h-5 w-5 text-white/60 hover:text-white" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00B4A8]/50 rounded-lg flex items-center justify-center transition-all">
                <Github className="h-5 w-5 text-white/60 hover:text-white" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00B4A8]/50 rounded-lg flex items-center justify-center transition-all">
                <Linkedin className="h-5 w-5 text-white/60 hover:text-white" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00B4A8]/50 rounded-lg flex items-center justify-center transition-all">
                <Youtube className="h-5 w-5 text-white/60 hover:text-white" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className="text-white/60 hover:text-white text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © 2024 Prompt2Prod. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <Link to="/privacy-policy" className="text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/60 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookie-policy" className="text-white/60 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
