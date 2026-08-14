import React from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A192F] text-slate-300 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <img src="/mslogo.png" alt="MSFamily Logo" className="h-10 w-auto bg-white rounded-lg p-1" />
              <span className="ml-2 text-3xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">MSFamily</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">
              Smart financial management for individuals and families.
            </p>

          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wider">PRODUCT</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#ocr" className="hover:text-primary transition-colors">OCR Scanner</a></li>
              <li><a href="#gold-silver" className="hover:text-primary transition-colors">Gold & Silver</a></li>
              <li><a href="#insights" className="hover:text-primary transition-colors">AI Insights</a></li>
              <li><a href="#subscription" className="hover:text-primary transition-colors">Subscription</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wider">COMPANY</h3>
            <ul className="space-y-3">
              <li><a href="#support" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#support" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#support" className="hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wider">LEGAL</h3>
            <ul className="space-y-3">
              <li><a href="#legal" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
              <li><a href="#legal" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2026 MSFamily Expense Tracker. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#legal" className="hover:text-white transition-colors">Terms</a>
            <a href="#legal" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
