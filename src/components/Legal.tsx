import React from 'react';
import { ClipboardCheck, ShieldCheck } from 'lucide-react';

const Legal = () => {
  return (
    <section className="max-w-7xl mx-auto w-full">
      {/* Terms & Conditions Block */}
      <div className="bg-[#F8F5FF] w-full py-12 px-4 sm:px-6 lg:px-8 border-y border-purple-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex items-center gap-4 md:w-1/4">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 relative">
              <ClipboardCheck size={32} />
              <div className="absolute -bottom-2 -right-2 bg-pink-500 rounded-full p-1 text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-slate-800 leading-tight">Terms &<br/>Conditions</h2>
          </div>

          <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-sm text-slate-600">
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center flex-shrink-0 font-semibold text-xs">1</span>
              <p>By using MSFamily Expense Tracker, you agree to provide accurate information.</p>
            </div>
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center flex-shrink-0 font-semibold text-xs">4</span>
              <p>We are not liable for any financial loss or decisions made based on app insights.</p>
            </div>
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center flex-shrink-0 font-semibold text-xs">2</span>
              <p>You are responsible for maintaining the confidentiality of your account.</p>
            </div>
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center flex-shrink-0 font-semibold text-xs">5</span>
              <p>We may update these terms at any time. Continued use means you accept the changes.</p>
            </div>
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center flex-shrink-0 font-semibold text-xs">3</span>
              <p>All financial data is for personal use only and should not be shared.</p>
            </div>
          </div>

          <div className="md:w-1/4 hidden md:flex justify-end opacity-80">
            {/* Simple decorative illustration */}
            <svg width="120" height="120" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="40" y="20" width="120" height="160" rx="8" fill="white" stroke="#E9D5FF" strokeWidth="4"/>
              <line x1="60" y1="60" x2="140" y2="60" stroke="#E9D5FF" strokeWidth="4" strokeLinecap="round"/>
              <line x1="60" y1="90" x2="140" y2="90" stroke="#E9D5FF" strokeWidth="4" strokeLinecap="round"/>
              <line x1="60" y1="120" x2="100" y2="120" stroke="#E9D5FF" strokeWidth="4" strokeLinecap="round"/>
              <path d="M160 120 L130 180" stroke="#8B5CF6" strokeWidth="8" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Privacy Policy Block */}
      <div className="bg-[#F0FDF4] w-full py-12 px-4 sm:px-6 lg:px-8 border-b border-green-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex items-center gap-4 md:w-1/4">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 relative">
              <ShieldCheck size={32} />
              <div className="absolute -bottom-2 -right-2 bg-yellow-500 rounded-full p-1.5 text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-slate-800 leading-tight">Privacy<br/>Policy</h2>
          </div>

          <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-sm text-slate-600">
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-green-200 text-green-700 flex items-center justify-center flex-shrink-0 font-semibold text-xs">1</span>
              <p>We collect only necessary information to provide better services.</p>
            </div>
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-green-200 text-green-700 flex items-center justify-center flex-shrink-0 font-semibold text-xs">4</span>
              <p>You can request data deletion anytime from your account.</p>
            </div>
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-green-200 text-green-700 flex items-center justify-center flex-shrink-0 font-semibold text-xs">2</span>
              <p>Your data is encrypted and stored securely.</p>
            </div>
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-green-200 text-green-700 flex items-center justify-center flex-shrink-0 font-semibold text-xs">5</span>
              <p>We use cookies to improve user experience and app performance.</p>
            </div>
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-green-200 text-green-700 flex items-center justify-center flex-shrink-0 font-semibold text-xs">3</span>
              <p>We do not sell or share your personal data with third parties.</p>
            </div>
          </div>

          <div className="md:w-1/4 hidden md:flex justify-end opacity-80">
             {/* Simple decorative illustration */}
             <svg width="120" height="120" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="40" y="80" width="120" height="90" rx="16" fill="#10B981" />
              <path d="M60 80 V50 C60 25 140 25 140 50 V80" stroke="#10B981" strokeWidth="16" strokeLinecap="round" />
              <circle cx="100" cy="125" r="10" fill="white" />
              <path d="M100 125 L100 145" stroke="white" strokeWidth="4" strokeLinecap="round" />
              <path d="M140 100 L180 100 M160 80 L160 120" stroke="#6EE7B7" strokeWidth="8" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Legal;
