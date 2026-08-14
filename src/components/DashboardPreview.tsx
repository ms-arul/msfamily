import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Jan', income: 150000, expense: 50000 },
  { name: 'Feb', income: 160000, expense: 55000 },
  { name: 'Mar', income: 155000, expense: 60000 },
  { name: 'Apr', income: 170000, expense: 45000 },
  { name: 'May', income: 180000, expense: 52000 },
  { name: 'Jun', income: 185000, expense: 60420 },
];

const categoryData = [
  { name: 'Food', amount: 15000 },
  { name: 'Travel', amount: 8000 },
  { name: 'Shopping', amount: 12000 },
  { name: 'Bills', amount: 10000 },
  { name: 'Edu', amount: 5000 },
  { name: 'Health', amount: 4000 },
];

const DashboardPreview = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50/50 rounded-[3rem] my-10 border border-slate-100">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Your Financial Life. <span className="text-gradient">One Dashboard.</span>
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Get a complete overview of your finances with beautiful, interactive charts.
        </p>
      </div>

      <div className="glass rounded-[2rem] p-6 md:p-10 shadow-xl border border-white/40">
        
        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-gradient-primary rounded-2xl p-6 text-white shadow-lg">
            <p className="text-sm opacity-80 mb-2">Total Balance</p>
            <h3 className="text-3xl font-bold">₹1,24,580</h3>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <p className="text-sm text-slate-500 mb-2">Income</p>
            <h3 className="text-3xl font-bold text-green-600">₹1,85,000</h3>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <p className="text-sm text-slate-500 mb-2">Expenses</p>
            <h3 className="text-3xl font-bold text-red-500">₹60,420</h3>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <p className="text-sm text-slate-500 mb-2">Savings</p>
            <h3 className="text-3xl font-bold text-blue-600">₹42,300</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h4 className="text-lg font-bold mb-6">Income vs Expenses</h4>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#16a34a" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#16a34a" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                  <Area type="monotone" dataKey="income" stroke="#16a34a" strokeWidth={3} fillOpacity={1} fill="url(#colorIncome)" />
                  <Area type="monotone" dataKey="expense" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorExpense)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Categories Chart */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h4 className="text-lg font-bold mb-6">Top Categories</h4>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData} layout="vertical" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 12, fontWeight: 500}} width={70} />
                  <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 2px 4px rgb(0 0 0 / 0.1)'}} />
                  <Bar dataKey="amount" fill="#6B46C1" radius={[0, 4, 4, 0]} barSize={16} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DashboardPreview;
