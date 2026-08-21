import { motion } from 'framer-motion';
import {
  Smartphone,
  Users,
  FileCheck,
  Target,
  Bot,
  ShieldCheck,
  Zap
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Smartphone className="text-indigo-400" size={28} />,
      title: 'Smart On-Device SMS Reader',
      description: 'Automatically detects bank and UPI transaction alerts locally on your device. Zero raw SMS text is ever uploaded to any cloud server.',
      badge: 'Local & Offline',
      color: 'from-indigo-500/20 to-indigo-500/5'
    },
    {
      icon: <Users className="text-pink-400" size={28} />,
      title: 'Collaborative Family Groups',
      description: 'Manage household expenses together. Track shared balances, settle up loans, control member visibility, and log family budgets in real-time.',
      badge: 'Joint Bookkeeping',
      color: 'from-pink-500/20 to-pink-500/5'
    },
    {
      icon: <FileCheck className="text-emerald-400" size={28} />,
      title: 'Encrypted Proofs Vault (My Proofs)',
      description: 'Store invoices, receipts, warranty cards, and family identity documents securely with granular authorization gates.',
      badge: 'Secure Storage',
      color: 'from-emerald-500/20 to-emerald-500/5'
    },
    {
      icon: <Target className="text-amber-400" size={28} />,
      title: 'Smart Budgets & Goal Tracking',
      description: 'Set custom category limits, build emergency savings funds, and monitor visual progress bars towards long-term family milestones.',
      badge: 'Goal Planning',
      color: 'from-amber-500/20 to-amber-500/5'
    },
    {
      icon: <Bot className="text-purple-400" size={28} />,
      title: 'AI Financial Intelligence',
      description: 'Receive automated spending category breakdowns, predictive overspending warnings, and monthly budget progress reports.',
      badge: 'Analytics & Insights',
      color: 'from-purple-500/20 to-purple-500/5'
    },
    {
      icon: <ShieldCheck className="text-cyan-400" size={28} />,
      title: 'Biometric Lock & Privacy Gates',
      description: 'Protect your financial records with on-device biometric authentication (Fingerprint / Face ID), system PIN, and 24-hr location purge.',
      badge: 'Strict Privacy',
      color: 'from-cyan-500/20 to-cyan-500/5'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <Zap size={14} />
          <span>Complete Household Suite</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
          Everything You Need to <span className="text-gradient">Manage Your Household</span>
        </h2>
        <p className="text-slate-300 text-base sm:text-lg">
          Designed from the ground up for individual financial clarity and collaborative family budgeting.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="glass-card rounded-3xl p-7 flex flex-col justify-between border border-white/[0.08] relative group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} border border-white/10 flex items-center justify-center shadow-md`}>
                  {feature.icon}
                </div>
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-slate-300">
                  {feature.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-indigo-300 transition-colors">
                {feature.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
