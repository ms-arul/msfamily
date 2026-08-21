import { Link } from 'react-router-dom';
import { Shield, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#070A12] text-slate-400 pt-16 pb-12 border-t border-white/10 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group">
              <img
                src="/msfamily.webp"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/mslogo.png';
                }}
                alt="MS Family Logo"
                className="h-9 w-9 rounded-xl object-contain shadow-md shadow-indigo-500/20"
              />
              <span className="text-2xl font-black text-white tracking-tight">
                MS Family
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                v2.1.8
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 mb-6 max-w-sm leading-relaxed">
              Private, secure, and collaborative family financial management. Features on-device local SMS detection, encrypted proofs vault, and live precious metal monitors.
            </p>

            <div className="text-xs text-slate-400 space-y-1.5">
              <p>Developed & Maintained by <strong className="text-slate-300">XPOOL Technology Pvt Ltd</strong></p>
              <p>Support: <a href="mailto:velgo7686@gmail.com" className="text-indigo-400 hover:underline">velgo7686@gmail.com</a></p>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Product & Features
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="/#features" className="hover:text-white transition-colors">Core Features</a></li>
              <li><a href="/#sms" className="hover:text-white transition-colors">Smart SMS Reader</a></li>
              <li><a href="/#family" className="hover:text-white transition-colors">Family Bookkeeping</a></li>
              <li><a href="/#insights" className="hover:text-white transition-colors">AI Insights</a></li>
              <li><a href="/#subscription" className="hover:text-white transition-colors">Pricing & Plans</a></li>
            </ul>
          </div>

          {/* Compliance & Legal Links (Google Play Mandatory) */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Legal & Compliance
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/privacy-policy" className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors flex items-center gap-1">
                  <Shield size={12} />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/retention" className="hover:text-white transition-colors">
                  Data Retention Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-white transition-colors">
                  Subscription & Refunds
                </Link>
              </li>
              <li>
                <Link to="/security" className="hover:text-white transition-colors">
                  Legal & Disclaimers
                </Link>
              </li>
              <li>
                <Link to="/delete-account" className="text-red-400 hover:text-red-300 font-semibold transition-colors">
                  Account Deletion Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Company & Help
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About MS Family
                </Link>
              </li>
              <li>
                <Link to="/changelog" className="hover:text-white transition-colors">
                  Release Changelog
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-white transition-colors">
                  Customer Support Desk
                </Link>
              </li>
              <li>
                <a
                  href="https://xpool.info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Developer Portal</span>
                  <ExternalLink size={10} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 XPOOL Technology Pvt Ltd. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/delete-account" className="text-red-400 hover:text-red-300 transition-colors">Delete Account</Link>
            <Link to="/legal" className="hover:text-white transition-colors">Legal Hub</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
