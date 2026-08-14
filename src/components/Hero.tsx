import React from 'react';
import { motion } from 'framer-motion';
import { Scan, Users, Coins, Bot, ArrowUp, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
            Smart Expense Tracking <br/>
            for <span className="text-gradient">You & Your Family</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
            Track expenses, scan bills with OCR, monitor daily gold & silver rates, and manage individual and family finances in one intelligent platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-gradient-primary text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              Get Started Free
            </button>
            <button className="border-2 border-primary/20 text-primary bg-white px-8 py-3 rounded-xl font-medium shadow-sm hover:border-primary hover:bg-primary/5 transition-all">
              Explore Premium
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:flex sm:gap-6 text-sm font-medium text-slate-700">
            <div className="flex items-center gap-2">
              <Scan className="text-primary" size={20} />
              <span>OCR Bill Scan</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-blue-500" size={20} />
              <span>Family & Individual</span>
            </div>
            <div className="flex items-center gap-2">
              <Coins className="text-yellow-500" size={20} />
              <span>Gold & Silver Rates</span>
            </div>
            <div className="flex items-center gap-2">
              <Bot className="text-pink-500" size={20} />
              <span>AI Insights</span>
            </div>
          </div>
        </motion.div>

        {/* Right Content (Mockup) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 relative"
        >
          {/* Main Phone Mockup */}
          <div className="relative mx-auto w-[320px] h-[650px] bg-black rounded-[3rem] p-3 shadow-2xl border-4 border-slate-800 z-10">
            <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-t-[3rem] z-20 flex justify-center pt-2">
              <div className="w-20 h-5 bg-black rounded-full"></div>
            </div>
            <div className="bg-white w-full h-full rounded-[2.5rem] overflow-hidden flex flex-col p-4 pt-10">
              {/* Inside Mockup */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-xs text-slate-500">Good Morning,</p>
                  <p className="font-semibold">Nithyasree <span role="img" aria-label="wave">👋</span></p>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                  <span className="text-xs">👤</span>
                </div>
              </div>
              
              <div className="bg-gradient-primary rounded-2xl p-4 text-white shadow-lg mb-6">
                <p className="text-sm opacity-80 mb-1">Total Balance</p>
                <div className="flex justify-between items-end">
                  <h3 className="text-2xl font-bold">₹1,24,580</h3>
                  <div className="flex items-center text-xs bg-white/20 px-2 py-1 rounded-lg">
                    <ArrowUp size={12} className="mr-1" /> 12.5%
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-6 text-center">
                <div className="bg-green-50 p-2 rounded-xl border border-green-100">
                  <p className="text-[10px] text-green-700 font-medium">Income</p>
                  <p className="text-xs font-bold text-green-800">₹1,85,000</p>
                </div>
                <div className="bg-red-50 p-2 rounded-xl border border-red-100">
                  <p className="text-[10px] text-red-700 font-medium">Expense</p>
                  <p className="text-xs font-bold text-red-800">₹60,420</p>
                </div>
                <div className="bg-blue-50 p-2 rounded-xl border border-blue-100">
                  <p className="text-[10px] text-blue-700 font-medium">Savings</p>
                  <p className="text-xs font-bold text-blue-800">₹42,300</p>
                </div>
              </div>

              <div className="mb-4 flex justify-between items-center">
                <h4 className="text-sm font-semibold">Quick Add</h4>
                <button className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-lg leading-none shadow-md">+</button>
              </div>
              
              <div className="flex justify-between px-2 mb-6">
                 <div className="flex flex-col items-center gap-1">
                   <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center shadow-sm"><ArrowUp size={20} /></div>
                   <span className="text-[10px] font-medium text-slate-600">Expense</span>
                 </div>
                 <div className="flex flex-col items-center gap-1">
                   <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-500 flex items-center justify-center shadow-sm"><ArrowDown size={20} /></div>
                   <span className="text-[10px] font-medium text-slate-600">Income</span>
                 </div>
                 <div className="flex flex-col items-center gap-1">
                   <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-500 flex items-center justify-center shadow-sm"><Scan size={20} /></div>
                   <span className="text-[10px] font-medium text-slate-600">Scan Bill</span>
                 </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <h4 className="text-sm font-semibold">Recent Transactions</h4>
                <span className="text-[10px] text-primary font-medium">View All</span>
              </div>
              
              <div className="space-y-3 flex-1 overflow-hidden">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-xs">🍔</div>
                    <div>
                      <p className="text-xs font-semibold">Swiggy</p>
                      <p className="text-[10px] text-slate-500">Today</p>
                    </div>
                  </div>
                  <p className="text-xs font-bold text-foreground">-₹450</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs">🚗</div>
                    <div>
                      <p className="text-xs font-semibold">Uber</p>
                      <p className="text-[10px] text-slate-500">Yesterday</p>
                    </div>
                  </div>
                  <p className="text-xs font-bold text-foreground">-₹280</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -right-8 top-12 glass p-4 rounded-2xl shadow-xl z-20 hidden md:block w-48"
          >
            <div className="flex items-center gap-2 mb-1">
              <Coins className="text-yellow-500" size={16} />
              <span className="text-xs font-semibold">Gold Price Today</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold">₹12,450 <span className="text-[10px] text-slate-500 font-normal">/gm</span></span>
              <span className="text-xs text-green-600 flex items-center"><ArrowUp size={12}/> 1.25%</span>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute -left-12 top-1/3 glass p-4 rounded-2xl shadow-xl z-20 hidden md:block w-48"
          >
            <div className="flex items-center gap-2 mb-1">
              <Coins className="text-slate-400" size={16} />
              <span className="text-xs font-semibold">Silver Price Today</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold">₹165 <span className="text-[10px] text-slate-500 font-normal">/gm</span></span>
              <span className="text-xs text-red-500 flex items-center"><ArrowDown size={12}/> 0.45%</span>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -8, 0] }} 
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-16 bottom-16 glass p-4 rounded-2xl shadow-xl z-20 hidden md:flex items-start gap-3 w-64"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary">
              <Bot size={20} />
            </div>
            <div>
              <p className="text-xs font-semibold text-primary mb-1">AI Insight</p>
              <p className="text-[10px] text-slate-600 leading-tight">You spent 18% more on Food this month compared to last month.</p>
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
