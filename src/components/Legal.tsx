import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  FileText,
  Clock,
  RotateCcw,
  Trash2,
  ArrowRight
} from 'lucide-react';

const Legal = () => {
  return (
    <section id="legal" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <ShieldCheck size={14} />
          <span>Governance & Policy Compliance</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
          Trust, Privacy & <span className="text-gradient">Data Transparency</span>
        </h2>
        <p className="text-slate-300 text-base sm:text-lg">
          We operate with absolute transparency. Review our official legal documents, data retention standards, and account deletion procedures below.
        </p>
      </div>

      {/* Legal Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {/* Privacy Policy Card */}
        <div className="glass-card rounded-3xl p-6 border border-emerald-500/20 flex flex-col justify-between hover:border-emerald-500/40 transition-colors">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Privacy Policy</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Details how data is processed, on-device local SMS parsing, zero third-party data selling, and user rights.
            </p>
            <span className="text-[10px] font-mono text-emerald-400 block mb-4">
              Updated: August 14, 2026
            </span>
          </div>

          <Link
            to="/privacy-policy"
            className="w-full py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-emerald-500/30"
          >
            <span>Read Privacy Policy</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* Terms of Service Card */}
        <div className="glass-card rounded-3xl p-6 border border-indigo-500/20 flex flex-col justify-between hover:border-indigo-500/40 transition-colors">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
              <FileText size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Terms of Service</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Contractual terms, household account usage guidelines, financial disclaimers, and acceptable use rules.
            </p>
            <span className="text-[10px] font-mono text-indigo-400 block mb-4">
              Updated: August 14, 2026
            </span>
          </div>

          <Link
            to="/terms"
            className="w-full py-2.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-indigo-500/30"
          >
            <span>Read Terms of Service</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* Data Retention Card */}
        <div className="glass-card rounded-3xl p-6 border border-purple-500/20 flex flex-col justify-between hover:border-purple-500/40 transition-colors">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
              <Clock size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Data Retention Policy</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              24-hour automatic location coordinate purge, 30-day backup erasure, and active account lifecycles.
            </p>
            <span className="text-[10px] font-mono text-purple-400 block mb-4">
              Updated: August 14, 2026
            </span>
          </div>

          <Link
            to="/retention"
            className="w-full py-2.5 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-purple-500/30"
          >
            <span>Read Retention Policy</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* Subscriptions & Refunds Card */}
        <div className="glass-card rounded-3xl p-6 border border-amber-500/20 flex flex-col justify-between hover:border-amber-500/40 transition-colors">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
              <RotateCcw size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Subscription & Refunds</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Pricing tiers, Google Play billing terms, 14-day refund window, and cancellation instructions.
            </p>
            <span className="text-[10px] font-mono text-amber-400 block mb-4">
              Updated: August 14, 2026
            </span>
          </div>

          <Link
            to="/refund-policy"
            className="w-full py-2.5 rounded-xl bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-amber-500/30"
          >
            <span>Read Refund Policy</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>

      {/* Public Account Deletion Bar */}
      <div className="p-6 rounded-3xl bg-red-500/10 border border-red-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0">
            <Trash2 size={24} />
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-1">Looking for the Account Deletion Portal?</h3>
            <p className="text-xs text-slate-300">
              Permanently delete your account, authentication profile, and wipe all financial/family logs from our servers.
            </p>
          </div>
        </div>

        <Link
          to="/delete-account"
          className="px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 flex-shrink-0 shadow-lg"
        >
          <span>Open Deletion Portal</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
};

export default Legal;
