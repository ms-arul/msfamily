import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const Subscription = () => {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      name: 'FREE',
      price: 0,
      description: 'Perfect for individuals just starting out.',
      features: [
        'Basic expense tracking',
        'Basic dashboard',
        'Basic categories',
        'Monthly summary',
        'Up to 50 transactions/month'
      ],
      buttonText: 'Get Started',
      popular: false,
    },
    {
      name: 'PREMIUM',
      price: isYearly ? 99 : 149,
      description: 'Advanced features for serious financial tracking.',
      features: [
        'Unlimited expenses',
        'OCR bill scanning (100/mo)',
        'AI financial insights',
        'Gold & silver tracking',
        'Advanced analytics & reports',
        'Unlimited budgets'
      ],
      buttonText: 'Upgrade to Premium',
      popular: true,
      popularText: 'MOST POPULAR'
    },
    {
      name: 'FAMILY',
      price: isYearly ? 199 : 249,
      description: 'Manage finances together with your loved ones.',
      features: [
        'Everything in Premium',
        'Up to 5 family members',
        'Shared family budgets',
        'Family analytics & reports',
        'Member-wise spending',
        'Shared expenses tracking'
      ],
      buttonText: 'Choose Family',
      popular: false,
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          Choose the Plan That <span className="text-gradient">Fits You</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 max-w-2xl mx-auto text-lg mb-8"
        >
          Simple, transparent pricing. Upgrade anytime.
        </motion.p>
        
        {/* Toggle */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center p-1 bg-slate-100 rounded-full border border-slate-200"
        >
          <button 
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${!isYearly ? 'bg-white shadow-md text-foreground' : 'text-slate-500'}`}
            onClick={() => setIsYearly(false)}
          >
            Monthly
          </button>
          <button 
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${isYearly ? 'bg-white shadow-md text-foreground' : 'text-slate-500'}`}
            onClick={() => setIsYearly(true)}
          >
            Yearly <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full">Save 20%</span>
          </button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative rounded-[2rem] p-8 ${plan.popular ? 'bg-slate-900 text-white shadow-2xl scale-105 border-0' : 'bg-white text-foreground border border-slate-200 shadow-lg'}`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-primary text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest flex items-center gap-1 shadow-md">
                <Star size={12} className="fill-white" /> {plan.popularText}
              </div>
            )}
            
            <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-slate-800'}`}>{plan.name}</h3>
            <p className={`text-sm mb-6 ${plan.popular ? 'text-slate-300' : 'text-slate-500'}`}>{plan.description}</p>
            
            <div className="mb-8">
              <span className="text-4xl font-bold">₹{plan.price}</span>
              <span className={`text-sm ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>/month</span>
              {isYearly && plan.price > 0 && (
                <p className={`text-xs mt-1 ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>billed annually (₹{plan.price * 12}/year)</p>
              )}
            </div>
            
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className={`mt-1 rounded-full p-0.5 ${plan.popular ? 'bg-primary/20 text-primary-300' : 'bg-green-100 text-green-600'}`}>
                    <Check size={14} />
                  </div>
                  <span className={`text-sm ${plan.popular ? 'text-slate-200' : 'text-slate-600'}`}>{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
              plan.popular 
                ? 'bg-gradient-primary text-white shadow-lg hover:shadow-xl hover:scale-105' 
                : 'bg-slate-100 text-slate-800 hover:bg-slate-200 hover:scale-105'
            }`}>
              {plan.buttonText}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Subscription;
