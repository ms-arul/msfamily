import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  Star,
  CreditCard,
  ArrowRight,
  RotateCcw,
  Users,
  User,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Subscription = () => {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      id: 'free',
      name: 'Free Forever',
      icon: <User size={20} className="text-slate-400" />,
      price: 0,
      priceFormatted: '₹0',
      period: 'Forever free',
      billingNote: 'No credit card required',
      description: 'Essential expense tracking and personal bookkeeping for individual use.',
      features: [
        'Up to 50 transactions / month',
        '1 Family Group (up to 3 members)',
        '50MB Encrypted Proofs Vault storage',
        'Manual income & expense categorization',
        'Standard monthly budget tracking',
        'Offline local database caching'
      ],
      ctaText: 'Get Started Free',
      ctaLink: '/login',
      popular: false,
      badge: 'Starter'
    },
    {
      id: 'personal',
      name: 'Personal Premium',
      icon: <Zap size={20} className="text-indigo-400" />,
      price: isYearly ? 99 : 9,
      priceFormatted: isYearly ? '₹99' : '₹9',
      period: isYearly ? '/ year' : '/ month',
      billingNote: isYearly ? 'Billed annually (Save 8%)' : 'Billed monthly (Pay as you go)',
      description: 'Full automation, unlimited transactions, and smart tools for individuals.',
      features: [
        'Premium access for 1 user',
        'Unlimited monthly transactions',
        '5GB Encrypted Proofs Vault storage',
        'Automated on-device Smart SMS Reader drafts',
        'Smart Savings & Category Budget Goals',
        'Predictive AI spending alerts & insights',
        'Cloud Sync & Automated Backup',
        'Priority customer email support'
      ],
      ctaText: 'Get Personal Premium',
      ctaLink: '/login',
      popular: false,
      badge: 'Individual'
    },
    {
      id: 'family',
      name: 'Family Premium',
      icon: <Users size={20} className="text-amber-400" />,
      price: isYearly ? 299 : 29,
      priceFormatted: isYearly ? '₹299' : '₹29',
      period: isYearly ? '/ year' : '/ month',
      billingNote: isYearly ? 'Billed annually (Save 15%)' : 'Billed monthly (Pay as you go)',
      description: 'One subscription protects and empowers your entire household.',
      features: [
        'One subscription covers all members',
        'Unlimited Family Members & Groups',
        '20GB Encrypted Proofs Vault storage',
        'Shared bookkeeping & balance settlements',
        'Automated SMS transaction detection for all',
        'Granular Admin roles & category budget gates',
        'Live family safety tracking (24-hr auto purge)',
        'Priority customer support'
      ],
      ctaText: 'Get Family Premium',
      ctaLink: '/login',
      popular: true,
      badge: 'MOST POPULAR'
    }
  ];

  return (
    <section id="subscription" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <CreditCard size={14} />
          <span>Transparent & Affordable Pricing</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
          Choose the Perfect Plan for <span className="text-gradient">Your Household</span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg mb-8">
          No hidden fees, no data-selling, and zero ads. Full 14-day refund guarantee.
        </p>

        {/* Monthly / Yearly Switcher */}
        <div className="inline-flex items-center p-1 bg-white/[0.04] rounded-full border border-white/10">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              !isYearly
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
              isYearly
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>Annual Membership</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
              Save up to 15%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mb-12">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
              plan.popular
                ? 'border-2 border-indigo-500/80 shadow-2xl shadow-indigo-500/10 scale-100 lg:scale-105 z-10 bg-gradient-to-b from-[#161B2E]/90 to-[#0B0F19]/90'
                : 'border border-white/10 hover:border-white/20'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-[10px] font-black uppercase tracking-wider shadow-md flex items-center gap-1">
                <Star size={11} className="fill-white" />
                <span>{plan.badge}</span>
              </div>
            )}

            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                    {!plan.popular && (
                      <span className="text-[10px] text-slate-400 font-medium">{plan.badge}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-black text-white">{plan.priceFormatted}</span>
                  <span className="text-xs text-slate-400 font-medium">{plan.period}</span>
                </div>
                <p className="text-[11px] text-indigo-300 font-medium mt-1">{plan.billingNote}</p>
              </div>

              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                {plan.description}
              </p>

              {/* Feature List */}
              <div className="space-y-3 pt-4 border-t border-white/[0.08] mb-8">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Included Features:</p>
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} />
                    </div>
                    <span className="leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to={plan.ctaLink}
              className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-center transition-all flex items-center justify-center gap-2 ${
                plan.popular
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-600/30 hover:scale-[1.02]'
                  : 'bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10'
              }`}
            >
              <span>{plan.ctaText}</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>

      {/* Compliance & Refund Guarantee Banner */}
      <div className="max-w-4xl mx-auto glass-card rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-left">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0">
            <RotateCcw size={20} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">14-Day Money-Back Guarantee</h4>
            <p className="text-xs text-slate-400">
              Not completely satisfied? Request a hassle-free refund through Google Play or contact support within 14 days.
            </p>
          </div>
        </div>
        <Link
          to="/refund-policy"
          className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 hover:underline flex-shrink-0"
        >
          Read Refund Policy →
        </Link>
      </div>
    </section>
  );
};

export default Subscription;
