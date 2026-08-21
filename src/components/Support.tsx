import {
  Mail,
  Bug,
  Trash2,
  Building2,
  ExternalLink,
  HelpCircle,
  Clock,
  Send
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Support = () => {
  return (
    <section id="support" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <HelpCircle size={14} />
          <span>Customer Care & Developer Communications</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
          We're Here to <span className="text-gradient">Help You</span>
        </h2>
        <p className="text-slate-300 text-base sm:text-lg">
          Have questions regarding family groups, on-device parsing, or subscriptions? Reach out to our customer care and engineering desks directly.
        </p>
      </div>

      {/* Support Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Customer Care Desk */}
        <div className="glass-card rounded-3xl p-6 border border-white/[0.08] flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
              <Mail size={22} />
            </div>
            <h3 className="text-base font-bold text-white mb-1.5">Customer Support</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Assistance with family groups, budgets, transactions, or subscription upgrades.
            </p>
            <p className="text-xs font-semibold text-indigo-300 font-mono mb-4">
              velgo7686@gmail.com
            </p>
          </div>
          <a
            href="mailto:velgo7686@gmail.com?subject=MS%20Family%20Customer%20Support"
            className="w-full py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-white/10"
          >
            <span>Email Support</span>
            <Send size={12} />
          </a>
        </div>

        {/* Bug & SMS Parser Reporting */}
        <div className="glass-card rounded-3xl p-6 border border-white/[0.08] flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
              <Bug size={22} />
            </div>
            <h3 className="text-base font-bold text-white mb-1.5">Bug & SMS Reporting</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Report unparsed bank alert formats, UI glitches, or app crash logs directly to engineering.
            </p>
            <p className="text-xs font-semibold text-purple-300 font-mono mb-4">
              velgo7686@gmail.com
            </p>
          </div>
          <a
            href="mailto:velgo7686@gmail.com?subject=MS%20Family%20Bug%20Report"
            className="w-full py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-white/10"
          >
            <span>Report Issue</span>
            <Send size={12} />
          </a>
        </div>

        {/* Account Deletion Desk */}
        <div className="glass-card rounded-3xl p-6 border border-white/[0.08] flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center mb-4">
              <Trash2 size={22} />
            </div>
            <h3 className="text-base font-bold text-white mb-1.5">Account Deletion</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Request immediate manual account removal and complete cascade database wipe.
            </p>
            <p className="text-xs font-semibold text-red-400 font-mono mb-4">
              /delete-account
            </p>
          </div>
          <Link
            to="/delete-account"
            className="w-full py-2.5 rounded-xl bg-red-600/20 hover:bg-red-600/30 text-red-300 text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-red-500/30"
          >
            <span>Open Portal</span>
          </Link>
        </div>

        {/* Corporate Office */}
        <div className="glass-card rounded-3xl p-6 border border-white/[0.08] flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
              <Building2 size={22} />
            </div>
            <h3 className="text-base font-bold text-white mb-1.5">Developer Office</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              XPOOL Technology Pvt Ltd. Corporate inquiries & partnership requests.
            </p>
            <p className="text-xs font-semibold text-cyan-300 font-mono mb-4">
              xpool.info
            </p>
          </div>
          <a
            href="https://xpool.info"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-white/10"
          >
            <span>Visit Website</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Support SLA Notice */}
      <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center gap-2 text-xs text-slate-400 text-center">
        <Clock size={15} className="text-indigo-400 flex-shrink-0" />
        <span>We respond to all verified customer tickets and bug inquiries within 24 hours on business days (Mon–Fri).</span>
      </div>
    </section>
  );
};

export default Support;
