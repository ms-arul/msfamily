import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, ArrowDown, BellRing, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const goldData = [
  { time: '10:00', price: 12350 },
  { time: '11:00', price: 12400 },
  { time: '12:00', price: 12380 },
  { time: '13:00', price: 12450 },
  { time: '14:00', price: 12420 },
  { time: '15:00', price: 12450 },
];

const silverData = [
  { time: '10:00', price: 168 },
  { time: '11:00', price: 167 },
  { time: '12:00', price: 169 },
  { time: '13:00', price: 166 },
  { time: '14:00', price: 164 },
  { time: '15:00', price: 165 },
];

const GoldSilver = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-900 rounded-[3rem] my-10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Track Gold & Silver <span className="text-yellow-400">Every Day</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Monitor precious metals, set price alerts, and manage your wealth alongside your expenses.
          <br/><span className="text-xs text-slate-500 italic mt-2 block">*Demo Market Data</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {/* GOLD CARD */}
        <div className="bg-slate-800/50 backdrop-blur-md rounded-[2rem] p-8 border border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                  <TrendingUp size={16} />
                </div>
                <h3 className="text-slate-300 font-semibold tracking-wider">24K GOLD</h3>
              </div>
              <div className="flex items-end gap-3">
                <h4 className="text-4xl font-bold text-white">₹12,450</h4>
                <span className="text-sm text-slate-400 mb-1">/ gram</span>
              </div>
            </div>
            <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
              <ArrowUp size={14} /> 1.25%
            </div>
          </div>
          
          <div className="h-48 w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={goldData}>
                <Line type="monotone" dataKey="price" stroke="#EAB308" strokeWidth={3} dot={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1E293B', border: 'none', borderRadius: '8px', color: '#F8FAFC' }}
                  itemStyle={{ color: '#EAB308' }}
                  formatter={(value: any) => [`₹${value}`, 'Price']}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* SILVER CARD */}
        <div className="bg-slate-800/50 backdrop-blur-md rounded-[2rem] p-8 border border-slate-400/20 hover:border-slate-400/40 transition-colors">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-slate-400/20 flex items-center justify-center text-slate-300">
                  <TrendingUp size={16} />
                </div>
                <h3 className="text-slate-300 font-semibold tracking-wider">SILVER</h3>
              </div>
              <div className="flex items-end gap-3">
                <h4 className="text-4xl font-bold text-white">₹165</h4>
                <span className="text-sm text-slate-400 mb-1">/ gram</span>
              </div>
            </div>
            <div className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
              <ArrowDown size={14} /> 0.45%
            </div>
          </div>
          
          <div className="h-48 w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={silverData}>
                <Line type="monotone" dataKey="price" stroke="#94A3B8" strokeWidth={3} dot={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1E293B', border: 'none', borderRadius: '8px', color: '#F8FAFC' }}
                  itemStyle={{ color: '#94A3B8' }}
                  formatter={(value: any) => [`₹${value}`, 'Price']}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center relative z-10">
        <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-xl font-medium transition-colors flex items-center gap-2 backdrop-blur-sm">
          <BellRing size={18} /> Set Price Alert
        </button>
      </div>
    </section>
  );
};

export default GoldSilver;
