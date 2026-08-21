import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { LayoutDashboard, ArrowUp, TrendingUp, PieChart } from 'lucide-react';

const MONTHLY_DATA = [
  { name: 'Mar', income: 155000, expense: 60000 },
  { name: 'Apr', income: 170000, expense: 45000 },
  { name: 'May', income: 180000, expense: 52000 },
  { name: 'Jun', income: 185000, expense: 58000 },
  { name: 'Jul', income: 182000, expense: 54000 },
  { name: 'Aug', income: 185000, expense: 60420 },
];

const CATEGORY_DATA = [
  { name: 'Food & Dining', amount: 18450, color: '#F97316' },
  { name: 'Groceries', amount: 14200, color: '#10B981' },
  { name: 'Shopping', amount: 11500, color: '#8B5CF6' },
  { name: 'Utilities & Bills', amount: 9400, color: '#3B82F6' },
  { name: 'Vehicle & Fuel', amount: 6870, color: '#EC4899' },
];

const DashboardPreview = () => {
  return (
    <section id="dashboard" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <LayoutDashboard size={14} />
          <span>Unified Financial Cockpit</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
          Your Entire Financial Life. <span className="text-gradient">One Clean Dashboard.</span>
        </h2>
        <p className="text-slate-300 text-base sm:text-lg">
          Monitor your cash flow, analyze spending trends, track category allocations, and review family contributions with smooth, interactive charts.
        </p>
      </div>

      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10">
        {/* Metric Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-900/60 to-purple-900/40 border border-indigo-500/30">
            <span className="text-xs text-indigo-200 uppercase font-semibold tracking-wider block mb-1">Total Household Balance</span>
            <div className="flex items-baseline justify-between">
              <h3 className="text-2xl sm:text-3xl font-black text-white">₹1,24,580</h3>
              <span className="text-xs text-emerald-400 font-bold flex items-center"><ArrowUp size={12} /> +12.5%</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
            <span className="text-xs text-slate-400 uppercase font-semibold tracking-wider block mb-1">Monthly Income (Aug)</span>
            <div className="flex items-baseline justify-between">
              <h3 className="text-2xl sm:text-3xl font-black text-emerald-400">₹1,85,000</h3>
              <span className="text-[10px] text-slate-400">Stable</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
            <span className="text-xs text-slate-400 uppercase font-semibold tracking-wider block mb-1">Monthly Expenses (Aug)</span>
            <div className="flex items-baseline justify-between">
              <h3 className="text-2xl sm:text-3xl font-black text-rose-400">₹60,420</h3>
              <span className="text-xs text-rose-400 font-bold flex items-center"><ArrowUp size={12} /> 32% spend</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
            <span className="text-xs text-slate-400 uppercase font-semibold tracking-wider block mb-1">Savings Allocated</span>
            <div className="flex items-baseline justify-between">
              <h3 className="text-2xl sm:text-3xl font-black text-indigo-400">₹42,300</h3>
              <span className="text-xs text-emerald-400 font-bold">+14% vs July</span>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Area Cash Flow Chart (8 cols) */}
          <div className="lg:col-span-8 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <TrendingUp size={16} className="text-indigo-400" />
                <span>Income vs Expenses Trend (6 Months)</span>
              </h4>
              <div className="flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Income
                </span>
                <span className="flex items-center gap-1.5 text-rose-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span> Expenses
                </span>
              </div>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={MONTHLY_DATA} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0.0} />
                    </linearGradient>
                    <linearGradient id="expenseGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F43F5E" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#F43F5E" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="name" stroke="#64748B" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748B" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(val) => `₹${val/1000}k`} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1E293B',
                      borderColor: 'rgba(255,255,255,0.1)',
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '12px'
                    }}
                    formatter={(value: any) => [`₹${Number(value).toLocaleString('en-IN')}`, '']}
                  />
                  <Area type="monotone" dataKey="income" stroke="#10B981" strokeWidth={2.5} fillOpacity={1} fill="url(#incomeGrad)" />
                  <Area type="monotone" dataKey="expense" stroke="#F43F5E" strokeWidth={2.5} fillOpacity={1} fill="url(#expenseGrad)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Top Category Spending (4 cols) */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <h4 className="text-sm font-bold text-white mb-6 flex items-center gap-2">
              <PieChart size={16} className="text-purple-400" />
              <span>Top Expense Categories</span>
            </h4>

            <div className="space-y-4">
              {CATEGORY_DATA.map((cat, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-slate-300 font-medium">{cat.name}</span>
                    <span className="font-bold text-white">₹{cat.amount.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${(cat.amount / 60420) * 100}%`,
                        backgroundColor: cat.color
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
