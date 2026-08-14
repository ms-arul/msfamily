import React from 'react';
import { Headphones, HelpCircle, Mail, MessageSquare, Phone } from 'lucide-react';

const Support = () => {
  return (
    <section className="bg-[#FFF8F0] w-full py-16 px-4 sm:px-6 lg:px-8 border-b border-orange-100">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-12 items-center">
        
        {/* Support Header */}
        <div className="xl:w-1/4 flex flex-col items-center xl:items-start text-center xl:text-left">
          <div className="w-20 h-20 text-orange-500 mb-4">
            <Headphones size={80} strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Support</h2>
          <p className="text-slate-600">We're here to help you! Reach out to us anytime.</p>
        </div>

        {/* Support Cards */}
        <div className="xl:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <HelpCircle size={24} />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Help Center</h3>
            <p className="text-xs text-slate-500 mb-6 flex-1">Find answers to common questions.</p>
            <button className="w-full py-2 rounded-xl text-sm font-medium text-blue-600 border border-blue-200 hover:bg-blue-50 transition-colors">
              Visit Help Center
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-full flex items-center justify-center mb-4">
              <Mail size={24} />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Email Us</h3>
            <p className="text-xs text-slate-500 mb-6 flex-1">support@msfamily.com</p>
            <button className="w-full py-2 rounded-xl text-sm font-medium text-sky-600 border border-sky-200 hover:bg-sky-50 transition-colors">
              Send Email
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4">
              <MessageSquare size={24} />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Live Chat</h3>
            <p className="text-xs text-slate-500 mb-6 flex-1">Chat with our support team.</p>
            <button className="w-full py-2 rounded-xl text-sm font-medium text-purple-600 border border-purple-200 hover:bg-purple-50 transition-colors">
              Start Chat
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-4">
              <Phone size={24} />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Call Us</h3>
            <p className="text-xs text-slate-500 mb-6 flex-1">+91 99623 49659</p>
            <button className="w-full py-2 rounded-xl text-sm font-medium text-orange-600 border border-orange-200 hover:bg-orange-50 transition-colors">
              Call Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Support;
