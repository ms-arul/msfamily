import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Gold & Silver', href: '#gold-silver' },
    { name: 'Subscription', href: '#subscription' },
    { name: 'About Us', href: '#support' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-pink-900/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(107,70,193,0.15)] border-b border-white/20 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <img src="/mslogo.png" alt="MSFamily Logo" className="h-10 w-auto" />
            <span className="ml-2 text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">MSFamily</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white px-6 py-2 rounded-full font-medium transition-all hover:shadow-[0_0_20px_rgba(107,70,193,0.6)] hover:scale-105">
              <span>Login / Sign Up</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full border-t border-border shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-primary/5"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full mt-4 flex justify-center items-center space-x-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white px-6 py-3 rounded-xl font-medium transition-all hover:shadow-[0_0_20px_rgba(107,70,193,0.6)] hover:scale-105">
              <LogIn size={18} />
              <span>Login / Sign Up</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
