import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      label: 'Product',
      hasDropdown: true,
      items: [
        { label: 'Platform Overview', path: '/product/platform' },
        { label: 'App Builder', path: '/product/app-builder' },
        { label: 'Automation', path: '/product/automation' },
        { label: 'Integrations', path: '/integrations' },
        { label: 'Security', path: '/security' }
      ]
    },
    {
      label: 'Solutions',
      hasDropdown: true,
      items: [
        { label: 'By Industry', path: '/solutions/by-industry' },
        { label: 'By Use Case', path: '/solutions/by-use-case' }
      ]
    },
    {
      label: 'Resources',
      hasDropdown: true,
      items: [
        { label: 'Documentation', path: '/documentation' },
        { label: 'Templates', path: '/resources/templates' },
        { label: 'Community', path: '/resources/community' },
        { label: 'Blog', path: '/blog' },
        { label: 'Help Center', path: '/contact' }
      ]
    },
    {
      label: 'Pricing',
      hasDropdown: false,
      path: '/pricing'
    },
    {
      label: 'Customers',
      hasDropdown: false,
      path: '/customers'
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#010731]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-12">
            <Link to="/">
              <Logo />
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                >
                  {item.hasDropdown ? (
                    <>
                      <button className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors text-sm font-medium">
                        <span>{item.label}</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>

                      <div className="absolute top-full left-0 mt-2 w-56 bg-[#0A1647] rounded-lg shadow-2xl border border-white/10 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path || '/'}
                      className="text-white/90 hover:text-white transition-colors text-sm font-medium"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/sign-in">
              <button className="text-white/90 hover:text-white transition-colors text-sm font-medium">
                Sign In
              </button>
            </Link>
            <Link to="/start-building">
              <button className="px-4 py-2 bg-gradient-to-r from-[#006A67] to-[#00B4A8] hover:from-[#005553] hover:to-[#009688] text-white rounded-lg text-sm font-medium transition-all shadow-lg shadow-[#006A67]/20">
                Start Free Trial
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-4 py-2 border border-white/20 hover:border-white/40 text-white rounded-lg text-sm font-medium transition-all">
                Book a Demo
              </button>
            </Link>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-[#0A1647] border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <div key={item.label}>
                {item.hasDropdown ? (
                  <button className="w-full flex items-center justify-between text-white/90 hover:text-white py-2">
                    <span>{item.label}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    to={item.path || '/'}
                    className="block w-full text-left text-white/90 hover:text-white py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-2">
              <button className="w-full px-4 py-2 bg-gradient-to-r from-[#006A67] to-[#00B4A8] text-white rounded-lg text-sm font-medium">
                Start Free Trial
              </button>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full px-4 py-2 border border-white/20 text-white rounded-lg text-sm font-medium">
                  Book a Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
