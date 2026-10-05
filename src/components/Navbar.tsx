import { useState, useEffect } from 'react';
import { Menu, X, Shield, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { PlayStoreButton, GooglePlayIcon, PLAY_STORE_URL } from './PlayStoreButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: isHomePage ? '#features' : '/#features' },
    { name: 'Smart SMS', href: isHomePage ? '#sms' : '/#sms' },
    { name: 'Family', href: isHomePage ? '#family' : '/#family' },
    { name: 'Pricing', href: isHomePage ? '#subscription' : '/#subscription' },
    { name: 'FAQ', href: isHomePage ? '#faq' : '/#faq' },
    { name: 'Legal & Privacy', href: '/legal' },
    { name: 'Support', href: '/support' }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2.5 group">
            <img
              src="/msfamily.webp"
              onError={(e) => {
                // Fallback to mslogo.png if webp is not found
                (e.currentTarget as HTMLImageElement).src = '/mslogo.png';
              }}
              alt="MS Family Logo"
              className="h-9 w-9 rounded-xl object-contain shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-white flex items-center gap-1.5">
                MS Family
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-indigo-500/20 border border-indigo-500/30 text-indigo-300">
                  v2.3.0
                </span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <PlayStoreButton variant="navbar" />

            <Link
              to="/login"
              className="px-4 py-2 text-xs font-bold rounded-xl text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 flex items-center gap-1.5"
            >
              <span>Launch Web App</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2 rounded-xl bg-white/[0.04] border border-white/10"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass-nav border-t border-white/10 mt-3 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 via-indigo-600 to-purple-600 shadow-lg shadow-indigo-600/30 active:scale-95 transition-transform"
            >
              <GooglePlayIcon className="w-4 h-4" />
              <span>Install from Google Play</span>
            </a>

            <Link
              to="/privacy-policy"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-white/[0.04] border border-white/10"
            >
              <Shield size={14} className="text-emerald-400" />
              <span>Official Privacy Policy</span>
            </Link>
            <Link
              to="/delete-account"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold text-red-400 bg-red-500/10 border border-red-500/20"
            >
              <span>Account Deletion Portal</span>
            </Link>
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white bg-white/[0.08] hover:bg-white/[0.12] border border-white/10"
            >
              <span>Sign In / Web Portal</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
