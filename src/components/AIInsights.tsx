import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Lightbulb, TrendingDown, AlertTriangle, Clock, CreditCard } from 'lucide-react';

const AIInsights = () => {
  const insights = [
    {
      type: 'insight',
      icon: <Bot size={24} className="text-purple-500" />,
      color: 'bg-purple-50 border-purple-100',
      message: 'You spent ₹4,500 on food this month, which is 18% higher than last month.',
      suggestion: 'Reduce food delivery by 2 orders/week.',
      saving: '₹1,200',
      actionText: 'Review Food Expenses'
    },
    {
      type: 'opportunity',
      icon: <Lightbulb size={24} className="text-yellow-500" />,
      color: 'bg-yellow-50 border-yellow-100',
      message: 'You have ₹15,000 sitting idle in your checking account.',
      suggestion: 'Move ₹10,000 to a high-yield savings account or invest in Silver.',
      saving: '₹600/year',
      actionText: 'Explore Investments'
    },
    {
      type: 'warning',
      icon: <AlertTriangle size={24} className="text-red-500" />,
      color: 'bg-red-50 border-red-100',
      message: 'You are currently 82% through your monthly Shopping budget.',
      suggestion: 'Hold off on non-essential purchases for the next 12 days.',
      actionText: 'View Budget'
    },
    {
      type: 'reminder',
      icon: <Clock size={24} className="text-blue-500" />,
      color: 'bg-blue-50 border-blue-100',
      message: 'Upcoming Bill: Electricity (approx ₹1,800) is due in 3 days.',
      actionText: 'Pay Now'
    },
    {
      type: 'subscription',
      icon: <CreditCard size={24} className="text-orange-500" />,
      color: 'bg-orange-50 border-orange-100',
      message: 'You haven\'t used your "FitnessApp" subscription in 2 months.',
      suggestion: 'Cancel this subscription to save money.',
      saving: '₹499/month',
      actionText: 'Manage Subscriptions'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between mb-12">
        <div className="mb-6 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Personal <span className="text-gradient">Financial Intelligence</span>
          </h2>
          <p className="text-slate-600 max-w-xl text-lg">
            Our AI analyzes your spending patterns to find savings, warn you about budgets, and keep you on track.
          </p>
        </div>
        <div className="hidden md:flex w-24 h-24 bg-gradient-primary rounded-full items-center justify-center text-white shadow-xl animate-pulse shadow-primary/30">
          <Bot size={48} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {insights.map((insight, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`p-6 rounded-[2rem] border shadow-sm hover:shadow-md transition-shadow flex flex-col h-full bg-white`}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${insight.color}`}>
                {insight.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-800 text-sm tracking-wide uppercase mb-1">
                  {insight.type === 'insight' ? 'Spending Insight' : 
                   insight.type === 'opportunity' ? 'Saving Opportunity' : 
                   insight.type === 'warning' ? 'Budget Warning' : 
                   insight.type === 'reminder' ? 'Upcoming Bill' : 'Subscription Alert'}
                </h4>
                <p className="text-foreground font-medium leading-snug">{insight.message}</p>
              </div>
            </div>
            
            {insight.suggestion && (
              <div className="bg-slate-50 rounded-xl p-3 mb-4 text-sm text-slate-600 flex gap-2 items-start border border-slate-100 mt-auto">
                <Lightbulb size={16} className="text-yellow-600 mt-0.5 flex-shrink-0" />
                <span>{insight.suggestion}</span>
              </div>
            )}
            
            <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-100">
              {insight.saving ? (
                <div className="text-green-600 font-semibold text-sm flex items-center gap-1">
                  <TrendingDown size={14} /> Save {insight.saving}
                </div>
              ) : <div></div>}
              <button className="text-primary font-medium text-sm hover:underline">
                {insight.actionText} &rarr;
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AIInsights;
