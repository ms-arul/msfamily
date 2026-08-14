import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Users, ScanLine, Bot, Coins, Bell } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Wallet className="text-blue-500" size={32} />,
      title: 'Personal Finance',
      description: 'Track income, expenses, savings, budgets, categories, and recurring payments effortlessly.',
      color: 'bg-blue-50 border-blue-100'
    },
    {
      icon: <Users className="text-pink-500" size={32} />,
      title: 'Family Finance',
      description: 'Create family groups, track individual and shared expenses, and set family budgets.',
      color: 'bg-pink-50 border-pink-100'
    },
    {
      icon: <ScanLine className="text-purple-500" size={32} />,
      title: 'OCR Expense Scanner',
      description: 'Scan bills to automatically extract merchant, amount, date, taxes, and categories.',
      color: 'bg-purple-50 border-purple-100'
    },
    {
      icon: <Bot className="text-indigo-500" size={32} />,
      title: 'AI Financial Assistant',
      description: 'Get smart spending analysis, budget suggestions, and warnings for overspending.',
      color: 'bg-indigo-50 border-indigo-100'
    },
    {
      icon: <Coins className="text-yellow-500" size={32} />,
      title: 'Gold & Silver',
      description: 'Monitor daily gold & silver rates, historical charts, and estimate your holdings.',
      color: 'bg-yellow-50 border-yellow-100'
    },
    {
      icon: <Bell className="text-orange-500" size={32} />,
      title: 'Smart Notifications',
      description: 'Receive bill reminders, budget alerts, and your daily financial summaries.',
      color: 'bg-orange-50 border-orange-100'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Everything You Need to <span className="text-gradient">Manage Your Money</span>
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Powerful features designed for both personal and family financial success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`p-8 rounded-3xl border ${feature.color} hover:shadow-xl hover:-translate-y-1 transition-all glass`}
          >
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${feature.color.split(' ')[0]}`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
            <p className="text-slate-600 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
