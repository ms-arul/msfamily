import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Users,
  Target,
  Bot,
  ArrowUp,
  ArrowDown,
  ArrowRight,
  Sparkles,
  Lock,
  FileCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-24 lg:pt-28 pb-10 lg:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden relative">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow"></div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
        {/* Left Column: Heading & Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:w-1/2 text-center lg:text-left"
        >


          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-[1.15]">
            Your Family. Organized.{' '}
            <span className="text-gradient">Connected. Secure.</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
            A private financial and household ecosystem. Features on-device bank SMS detection, joint family bookkeeping, encrypted proof vaults, and smart budget goals.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 mb-6">
            <Link
              to="/login"
              className="w-full sm:w-auto px-7 py-3 rounded-2xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/25 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>Get Started Free</span>
              <ArrowRight size={15} />
            </Link>

            <Link
              to="/privacy-policy"
              className="w-full sm:w-auto px-5 py-3 rounded-2xl font-semibold text-xs sm:text-sm text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all flex items-center justify-center gap-2"
            >
              <ShieldCheck size={15} className="text-emerald-400" />
              <span>Review Privacy Policy</span>
            </Link>
          </div>

          {/* Core Feature Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-left">
            <div className="p-2.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <Lock size={16} className="text-indigo-400 mb-1" />
              <p className="text-xs font-bold text-white">Local SMS</p>
              <p className="text-[10px] text-slate-400">Zero cloud upload</p>
            </div>
            <div className="p-2.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <Users size={16} className="text-pink-400 mb-1" />
              <p className="text-xs font-bold text-white">Family Groups</p>
              <p className="text-[10px] text-slate-400">Shared bookkeeping</p>
            </div>
            <div className="p-2.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <Target size={16} className="text-amber-400 mb-1" />
              <p className="text-xs font-bold text-white">Budget & Goals</p>
              <p className="text-[10px] text-slate-400">Category targets</p>
            </div>
            <div className="p-2.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <FileCheck size={16} className="text-emerald-400 mb-1" />
              <p className="text-xs font-bold text-white">Encrypted Vault</p>
              <p className="text-[10px] text-slate-400">My Proofs storage</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive App Interface Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:w-1/2 relative flex justify-center w-full"
        >
          {/* iOS Device Frame */}
          <div className="relative w-full max-w-[320px] bg-[#0A0E1A] rounded-[2.5rem] p-2.5 shadow-2xl border-4 border-slate-800/80 ring-1 ring-white/10 z-10">
            {/* Dynamic Island / Top Notch */}
            <div className="absolute top-3.5 inset-x-0 flex justify-center z-30 pointer-events-none">
              <div className="w-20 h-4 bg-black rounded-full flex items-center justify-end px-2">
                <div className="w-2 h-2 rounded-full bg-[#1E293B]"></div>
              </div>
            </div>

            {/* Screen Inner Container */}
            <div className="bg-[#0B0F19] text-white w-full h-[510px] rounded-[2rem] overflow-hidden flex flex-col p-3.5 pt-8 text-xs border border-white/[0.05]">
              {/* App Bar Header */}
              <div className="flex justify-between items-center mb-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center font-bold text-white text-[10px] shadow-sm">
                    AM
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-400">Welcome back,</p>
                    <p className="font-bold text-slate-100 text-[11px]">Alex Morgan</p>
                  </div>
                </div>
                <div className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Sync Active</span>
                </div>
              </div>

              {/* Main Balance Card */}
              <div className="bg-gradient-to-br from-indigo-900/60 via-purple-900/40 to-slate-900/80 p-3 rounded-xl border border-white/10 shadow-lg mb-2.5">
                <div className="flex justify-between items-start mb-0.5">
                  <span className="text-[9px] text-slate-400 uppercase tracking-wider font-medium">Household Balance</span>
                  <span className="text-[9px] text-indigo-300 font-mono">August 2026</span>
                </div>
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-xl font-black text-white tracking-tight">$12,450.00</h3>
                  <div className="flex items-center text-[9px] text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">
                    <ArrowUp size={9} className="mr-0.5" /> +12.5%
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-white/[0.08] text-center">
                  <div className="bg-white/[0.03] p-1 rounded-lg">
                    <p className="text-[8px] text-emerald-400 font-medium">Income</p>
                    <p className="font-bold text-white text-[10px]">$18,500</p>
                  </div>
                  <div className="bg-white/[0.03] p-1 rounded-lg">
                    <p className="text-[8px] text-rose-400 font-medium">Expense</p>
                    <p className="font-bold text-white text-[10px]">$6,040</p>
                  </div>
                  <div className="bg-white/[0.03] p-1 rounded-lg">
                    <p className="text-[8px] text-indigo-400 font-medium">Savings</p>
                    <p className="font-bold text-white text-[10px]">$4,230</p>
                  </div>
                </div>
              </div>

              {/* Simulated Smart SMS Auto-Draft Detection Badge */}
              <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/30 mb-2.5 flex items-start gap-1.5">
                <Sparkles size={13} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-bold text-indigo-300">Local SMS Detection</span>
                    <span className="text-[8px] text-slate-400">Just now</span>
                  </div>
                  <p className="text-[9px] text-slate-300 mt-0.5 leading-snug">
                    Detected $42.50 at Supermarket Market (Metro Bank). Categorized as <strong>Groceries</strong>.
                  </p>
                </div>
              </div>

              {/* Quick Actions Bar */}
              <div className="flex justify-between gap-1.5 mb-2.5">
                <button className="flex-1 py-1.5 px-1 rounded-lg bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 flex flex-col items-center gap-0.5 transition-colors">
                  <div className="w-6 h-6 rounded-md bg-rose-500/20 text-rose-400 flex items-center justify-center">
                    <ArrowUp size={12} />
                  </div>
                  <span className="text-[8px] font-medium text-slate-300">+ Expense</span>
                </button>
                <button className="flex-1 py-1.5 px-1 rounded-lg bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 flex flex-col items-center gap-0.5 transition-colors">
                  <div className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <ArrowDown size={12} />
                  </div>
                  <span className="text-[8px] font-medium text-slate-300">+ Income</span>
                </button>
                <button className="flex-1 py-1.5 px-1 rounded-lg bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 flex flex-col items-center gap-0.5 transition-colors">
                  <div className="w-6 h-6 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Target size={12} />
                  </div>
                  <span className="text-[8px] font-medium text-slate-300">+ Budget</span>
                </button>
              </div>

              {/* Recent Activity List */}
              <div className="flex-1 overflow-hidden space-y-1.5">
                <div className="flex justify-between items-center text-[9px] text-slate-400 px-0.5">
                  <span>Recent Activity</span>
                  <span className="text-indigo-400">View All</span>
                </div>
                <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/[0.05] flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-orange-500/10 text-orange-400 flex items-center justify-center text-[10px]">
                      ☕
                    </div>
                    <div>
                      <p className="font-semibold text-slate-200 text-[9px]">City Bistro Order</p>
                      <p className="text-[8px] text-slate-400">Food & Dining • Today</p>
                    </div>
                  </div>
                  <span className="font-bold text-rose-400 text-[10px]">-$24.50</span>
                </div>
                <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/[0.05] flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-[10px]">
                      💼
                    </div>
                    <div>
                      <p className="font-semibold text-slate-200 text-[9px]">Consulting Deposit</p>
                      <p className="text-[8px] text-slate-400">Income • Yesterday</p>
                    </div>
                  </div>
                  <span className="font-bold text-emerald-400 text-[10px]">+$2,500.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Widget 1: Savings Goal Progress */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -right-2 sm:-right-6 top-10 glass-card p-3 rounded-2xl shadow-xl z-20 hidden sm:block w-48 border border-white/10"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] font-bold text-amber-400 flex items-center gap-1">
                <Target size={12} /> Emergency Fund
              </span>
              <span className="text-[8px] text-emerald-400 font-bold">83% Done</span>
            </div>
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-xs font-black text-white">$12,450 <span className="text-[8px] text-slate-400 font-normal">/ $15,000</span></span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
              <div className="w-[83%] h-full bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full"></div>
            </div>
          </motion.div>

          {/* Floating Widget 2: AI Financial Intelligence */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
            className="absolute -left-2 sm:-left-6 bottom-4 glass-card p-3 rounded-2xl shadow-xl z-20 hidden sm:flex items-start gap-2 w-56 border border-white/10"
          >
            <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">
              <Bot size={14} />
            </div>
            <div>
              <p className="text-[9px] font-bold text-purple-300">Smart Financial Alert</p>
              <p className="text-[8px] text-slate-300 leading-tight mt-0.5">
                Dining out is 14% higher than your monthly budget target.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
