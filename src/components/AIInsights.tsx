import { motion } from 'framer-motion';
import {
  Bot,
  TrendingUp,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';

const INSIGHTS = [
  {
    icon: <AlertTriangle className="text-amber-400" size={20} />,
    title: 'Dining & Food Overspend Alert',
    badge: 'Category Warning',
    badgeColor: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    description: 'You have utilized 85% of your food budget with 12 days left in the month. Consider pacing takeout orders.',
    impact: 'Estimated savings: ₹2,400'
  },
  {
    icon: <Lightbulb className="text-indigo-400" size={20} />,
    title: 'Recurring Subscription Detected',
    badge: 'Smart Identification',
    badgeColor: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    description: 'Detected a recurring ₹499 payment for Streaming Services due on 24th August. Automatically queued in reminders.',
    impact: 'Auto-categorized'
  },
  {
    icon: <TrendingUp className="text-emerald-400" size={20} />,
    title: 'Emergency Fund Goal Milestone',
    badge: 'Savings Milestone',
    badgeColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    description: 'Your household savings rate is up 14% compared to July 2026. You are on track to achieve your House Down Payment goal.',
    impact: 'Target on schedule'
  }
];

const AIInsights = () => {
  return (
    <section id="insights" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <Bot size={14} />
          <span>Automated Financial Intelligence</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
          Intelligent Insights for <span className="text-gradient">Smarter Decisions</span>
        </h2>
        <p className="text-slate-300 text-base sm:text-lg">
          MS Family automatically analyzes your transaction patterns locally to generate predictive overspending alerts, budget adjustments, and proactive savings milestones.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {INSIGHTS.map((insight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-3xl p-6 sm:p-7 border border-white/[0.08] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                  {insight.icon}
                </div>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${insight.badgeColor}`}>
                  {insight.badge}
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-2">{insight.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                {insight.description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
              <span className="text-slate-400">Insight Benefit:</span>
              <span className="font-semibold text-white">{insight.impact}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AIInsights;
