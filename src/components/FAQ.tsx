import React, { useState } from 'react';
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import { Search, Plus, Minus, ArrowRight, Bot } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "How do I create an account and get started with MSFamily?",
    searchContent: "getting started with msfamily is simple click get started free create your account using your name email and password and complete your personal profile once your account is ready you can add your income and expenses set budgets explore analytics and start managing your finances",
    answer: (
      <div className="space-y-4 text-slate-600">
        <p>Getting started with MSFamily is simple. Click <strong>Get Started Free</strong>, create your account using your name, email, and password, and complete your personal profile. Once your account is ready, you can add your income and expenses, set budgets, explore analytics, and start managing your finances.</p>
        <button className="flex items-center text-primary font-semibold hover:text-purple-700 transition-colors pt-2">
          Get Started Free <ArrowRight size={16} className="ml-1" />
        </button>
      </div>
    )
  },
  {
    id: 2,
    question: "How do I add and manage my daily expenses?",
    searchContent: "from the msfamily dashboard click add expense and enter the amount category date payment method and description you can edit or delete transactions anytime and use filters to find specific expenses your balance spending analytics budget progress and reports will automatically update food travel shopping bills education health entertainment groceries others",
    answer: (
      <div className="space-y-4 text-slate-600">
        <p>From the MSFamily dashboard, click <strong>+ Add Expense</strong> and enter the amount, category, date, payment method, and description. You can edit or delete transactions anytime and use filters to find specific expenses. Your balance, spending analytics, budget progress, and reports will automatically update.</p>
        <div className="bg-slate-50 p-4 rounded-xl text-sm font-medium border border-slate-100 flex flex-wrap gap-2 justify-center mt-4">
          {['Food', 'Travel', 'Shopping', 'Bills', 'Education', 'Health', 'Entertainment', 'Groceries', 'Others'].map(cat => (
            <span key={cat} className="bg-white px-3 py-1 rounded-full shadow-sm border border-slate-200 text-slate-700">{cat}</span>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 3,
    question: "How does the OCR bill scanner work?",
    searchContent: "msfamily makes expense entry faster with its ocr bill scanner upload or capture a photo of your bill or receipt and the system extracts important information such as the merchant name total amount date items tax and suggested category review the extracted information before confirming and adding it to your expenses scan bill ocr processing review details confirm expense added",
    answer: (
      <div className="space-y-4 text-slate-600">
        <p>MSFamily makes expense entry faster with its <strong>OCR Bill Scanner</strong>. Upload or capture a photo of your bill or receipt, and the system extracts important information such as the merchant name, total amount, date, items, tax, and suggested category. Review the extracted information before confirming and adding it to your expenses.</p>
        <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold text-slate-500 flex-wrap justify-center bg-purple-50 p-4 rounded-xl border border-purple-100 mt-4">
          <span className="text-purple-700 text-center">Scan Bill</span> <span>→</span>
          <span className="text-purple-700 text-center">OCR Processing</span> <span>→</span>
          <span className="text-purple-700 text-center">Review Details</span> <span>→</span>
          <span className="text-purple-700 text-center">Confirm</span> <span>→</span>
          <span className="text-purple-700 text-center">Expense Added</span>
        </div>
        <button className="flex items-center text-primary font-semibold hover:text-purple-700 transition-colors pt-2">
          Try OCR Scanner <ArrowRight size={16} className="ml-1" />
        </button>
      </div>
    )
  },
  {
    id: 4,
    question: "What is MSFamily and how can I manage family expenses?",
    searchContent: "msfamily is msfamily family finance feature that helps households manage money together create a family invite family members track individual and shared expenses set family budgets and view member wise spending from one centralized dashboard add family members individual expenses shared expenses family budget member wise analytics family savings goals family spending alerts",
    answer: (
      <div className="space-y-4 text-slate-600">
        <p><strong>MSFamily</strong> is our family finance feature that helps households manage money together. Create a family, invite family members, track individual and shared expenses, set family budgets, and view member-wise spending from one centralized dashboard.</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm bg-pink-50 p-5 rounded-xl border border-pink-100 mt-4">
          <li className="flex items-center gap-2 font-medium text-pink-900"><span role="img" aria-label="family">👨‍👩‍👧</span> Add family members</li>
          <li className="flex items-center gap-2 font-medium text-pink-900"><span role="img" aria-label="money">💸</span> Individual expenses</li>
          <li className="flex items-center gap-2 font-medium text-pink-900"><span role="img" aria-label="handshake">🤝</span> Shared expenses</li>
          <li className="flex items-center gap-2 font-medium text-pink-900"><span role="img" aria-label="budget">💰</span> Family budget</li>
          <li className="flex items-center gap-2 font-medium text-pink-900"><span role="img" aria-label="analytics">📊</span> Member-wise analytics</li>
          <li className="flex items-center gap-2 font-medium text-pink-900"><span role="img" aria-label="target">🎯</span> Family savings goals</li>
          <li className="flex items-center gap-2 font-medium text-pink-900"><span role="img" aria-label="bell">🔔</span> Family spending alerts</li>
        </ul>
        <button className="flex items-center text-pink-600 font-semibold hover:text-pink-700 transition-colors pt-2">
          Explore MSFamily <ArrowRight size={16} className="ml-1" />
        </button>
      </div>
    )
  },
  {
    id: 5,
    question: "How does the AI Financial Assistant help me manage my money?",
    searchContent: "the msfamily ai financial assistant analyzes your spending patterns and provides personalized financial insights it can identify unusual spending highlight areas where you may be overspending suggest saving opportunities provide budget recommendations and generate monthly spending summaries ai insight you spent 18 more on food this month compared with last month reducing food delivery by two orders per week could help you save approximately 1200 per month ai generated insights are for informational purposes only and should not be considered financial investment tax or legal advice",
    answer: (
      <div className="space-y-4 text-slate-600">
        <p>The <strong>MSFamily AI Financial Assistant</strong> analyzes your spending patterns and provides personalized financial insights. It can identify unusual spending, highlight areas where you may be overspending, suggest saving opportunities, provide budget recommendations, and generate monthly spending summaries.</p>
        <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-xl mt-4">
          <p className="font-semibold text-indigo-800 flex items-center gap-2 mb-2"><Bot size={18} /> AI Insight</p>
          <p className="text-sm text-indigo-900 italic leading-relaxed">"You spent 18% more on food this month compared with last month. Reducing food delivery by two orders per week could help you save approximately ₹1,200 per month."</p>
        </div>
        <p className="text-[10px] text-slate-400 leading-tight">AI-generated insights are for informational purposes only and should not be considered financial, investment, tax, or legal advice.</p>
      </div>
    )
  },
  {
    id: 6,
    question: "How can I track daily Gold and Silver rates?",
    searchContent: "open the gold silver section in msfamily to view available daily gold and silver rates percentage changes and price trends you can also monitor your holdings and set price alerts when supported gold 24k gold 12450 gram 1.25 silver 165 gram 0.45 demo market data view gold silver",
    answer: (
      <div className="space-y-4 text-slate-600">
        <p>Open the <strong>Gold & Silver</strong> section in MSFamily to view available daily gold and silver rates, percentage changes, and price trends. You can also monitor your holdings and set price alerts when supported.</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <div className="flex-1 bg-gradient-to-br from-yellow-50 to-orange-50/50 p-5 rounded-xl border border-yellow-200 relative overflow-hidden">
            <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-2"><span role="img" aria-label="gold">🥇</span> Gold</h4>
            <p className="text-xs text-yellow-700 font-medium mb-1">24K Gold</p>
            <p className="text-xl font-bold text-yellow-900">₹12,450 <span className="text-xs font-normal text-yellow-700">/ gram</span></p>
            <p className="text-sm text-green-600 font-bold mt-1">▲ 1.25%</p>
          </div>
          <div className="flex-1 bg-gradient-to-br from-slate-50 to-slate-100 p-5 rounded-xl border border-slate-200 relative overflow-hidden">
            <h4 className="font-bold text-slate-700 flex items-center gap-2 mb-2"><span role="img" aria-label="silver">🥈</span> Silver</h4>
            <p className="text-xs text-slate-500 font-medium mb-1"><br/></p>
            <p className="text-xl font-bold text-slate-800">₹165 <span className="text-xs font-normal text-slate-500">/ gram</span></p>
            <p className="text-sm text-red-500 font-bold mt-1">▼ 0.45%</p>
          </div>
        </div>
        <div className="bg-orange-50 text-orange-600 text-xs px-3 py-1.5 rounded-md inline-block font-medium border border-orange-100">
          Demo Market Data
        </div>
        <button className="flex items-center text-yellow-600 font-semibold hover:text-yellow-700 transition-colors pt-2 block w-full text-left">
          View Gold & Silver <ArrowRight size={16} className="ml-1 inline" />
        </button>
      </div>
    )
  },
  {
    id: 7,
    question: "What features are included in the Premium subscription?",
    searchContent: "msfamily premium unlocks advanced financial management features for users who want more powerful tools and insights premium features include unlimited ocr bill scanning ai financial assistant msfamily advanced analytics gold silver tracking smart financial reminders advanced budget management advanced financial reports detailed spending insights additional premium features as implemented explore premium",
    answer: (
      <div className="space-y-4 text-slate-600">
        <p>MSFamily Premium unlocks advanced financial management features for users who want more powerful tools and insights.</p>
        <p className="font-semibold text-slate-800">Premium features include:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mt-2">
          <li className="flex items-center gap-2"><span role="img" aria-label="camera">📷</span> Unlimited OCR bill scanning</li>
          <li className="flex items-center gap-2"><span role="img" aria-label="robot">🤖</span> AI Financial Assistant</li>
          <li className="flex items-center gap-2"><span role="img" aria-label="family">👨‍👩‍👧</span> MSFamily</li>
          <li className="flex items-center gap-2"><span role="img" aria-label="analytics">📊</span> Advanced analytics</li>
          <li className="flex items-center gap-2"><span role="img" aria-label="gold">🥇</span> Gold & Silver tracking</li>
          <li className="flex items-center gap-2"><span role="img" aria-label="bell">🔔</span> Smart financial reminders</li>
          <li className="flex items-center gap-2"><span role="img" aria-label="money">💰</span> Advanced budget management</li>
          <li className="flex items-center gap-2"><span role="img" aria-label="reports">📑</span> Advanced financial reports</li>
          <li className="flex items-center gap-2"><span role="img" aria-label="insights">📈</span> Detailed spending insights</li>
          <li className="flex items-center gap-2"><span role="img" aria-label="cloud">☁️</span> Additional premium features as implemented</li>
        </ul>
        <button className="flex items-center text-primary font-semibold hover:text-purple-700 transition-colors pt-2">
          Explore Premium <ArrowRight size={16} className="ml-1" />
        </button>
      </div>
    )
  }
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.searchContent.includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h2>
        <p className="text-slate-600 text-lg mb-8">
          Find answers to common questions about MSFamily Expense Tracker.
        </p>

        {/* Search Box */}
        <div className="relative max-w-xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-700 bg-white"
            placeholder="Search your questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <LazyMotion features={domAnimation}>
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              
              return (
                <m.div 
                  key={faq.id}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-primary/30 shadow-md ring-1 ring-primary/10' : 'border-slate-200 shadow-sm hover:border-slate-300'}`}
                >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`font-semibold text-lg transition-colors ${isOpen ? 'text-primary' : 'text-slate-800'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-500'}`}>
                    <m.div
                      initial={false}
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </m.div>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100/50">
                        {faq.answer}
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </m.div>
            );
          })
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 mx-1">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
              <Search size={24} />
            </div>
            <p className="text-slate-600 font-medium text-lg">No matching questions found.</p>
            <p className="text-slate-400 text-sm mt-1">Try adjusting your search terms.</p>
          </div>
        )}
        </div>
      </LazyMotion>

      {/* Bottom CTA */}
      <div className="mt-16 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 rounded-3xl p-8 md:p-10 border border-purple-100 text-center relative overflow-hidden glass">
        <h3 className="text-2xl font-bold text-slate-800 mb-3 relative z-10">Still have questions?</h3>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto relative z-10">We're here to help. Contact our support team if you need assistance with MSFamily.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <button 
            onClick={() => {
              const el = document.getElementById('support');
              if(el) el.scrollIntoView({behavior: 'smooth'});
            }}
            className="bg-gradient-primary text-white px-8 py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all"
          >
            Contact Support &rarr;
          </button>
          <button 
            onClick={() => {
              const el = document.getElementById('support');
              if(el) el.scrollIntoView({behavior: 'smooth'});
            }}
            className="bg-white text-primary border border-primary/20 hover:border-primary px-8 py-3 rounded-xl font-medium shadow-sm transition-all"
          >
            Start Live Chat &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
