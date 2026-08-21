import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Coins,
  TrendingUp,
  ArrowUp,
  ArrowDown,
  Calculator,
  Info,
  Calendar,
  Sparkles
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';

type MetalType = 'gold24' | 'gold22' | 'silver';

interface MetalConfig {
  name: string;
  purity: string;
  samplePricePerGram: number;
  changePercent: number;
  isPositive: boolean;
  color: string;
  gradientId: string;
  chartData: { date: string; price: number }[];
}

const METAL_CONFIGS: Record<MetalType, MetalConfig> = {
  gold24: {
    name: 'Gold (24 Karat)',
    purity: '99.9% Pure Fine Gold',
    samplePricePerGram: 7280,
    changePercent: 1.15,
    isPositive: true,
    color: '#F59E0B',
    gradientId: 'goldGradient',
    chartData: [
      { date: '13 Aug', price: 7190 },
      { date: '14 Aug', price: 7215 },
      { date: '15 Aug', price: 7200 },
      { date: '16 Aug', price: 7230 },
      { date: '17 Aug', price: 7245 },
      { date: '18 Aug', price: 7260 },
      { date: '19 Aug', price: 7280 }
    ]
  },
  gold22: {
    name: 'Gold (22 Karat)',
    purity: '91.6% Hallmark Jewellery Gold',
    samplePricePerGram: 6675,
    changePercent: 1.05,
    isPositive: true,
    color: '#FBBF24',
    gradientId: 'gold22Gradient',
    chartData: [
      { date: '13 Aug', price: 6590 },
      { date: '14 Aug', price: 6610 },
      { date: '15 Aug', price: 6605 },
      { date: '16 Aug', price: 6630 },
      { date: '17 Aug', price: 6645 },
      { date: '18 Aug', price: 6660 },
      { date: '19 Aug', price: 6675 }
    ]
  },
  silver: {
    name: 'Fine Silver',
    purity: '99.9% Pure Silver (999 Grade)',
    samplePricePerGram: 92.5,
    changePercent: -0.42,
    isPositive: false,
    color: '#94A3B8',
    gradientId: 'silverGradient',
    chartData: [
      { date: '13 Aug', price: 93.4 },
      { date: '14 Aug', price: 93.8 },
      { date: '15 Aug', price: 93.1 },
      { date: '16 Aug', price: 92.9 },
      { date: '17 Aug', price: 93.0 },
      { date: '18 Aug', price: 92.8 },
      { date: '19 Aug', price: 92.5 }
    ]
  }
};

const GoldSilver = () => {
  const [selectedMetal, setSelectedMetal] = useState<MetalType>('gold24');
  const [grams, setGrams] = useState<number>(8); // 8 grams (1 sovereign default)

  const currentConfig = METAL_CONFIGS[selectedMetal];
  const estimatedValue = useMemo(() => {
    return (grams * currentConfig.samplePricePerGram).toLocaleString('en-IN', {
      maximumFractionDigits: 2
    });
  }, [grams, currentConfig]);

  return (
    <section id="gold-silver" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <Coins size={14} />
          <span>Tangible Asset Tracker</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
          Gold & Silver <span className="text-gradient-gold">Rate Monitors</span>
        </h2>
        <p className="text-slate-300 text-base sm:text-lg">
          Track precious metal valuation, monitor daily market trend indicators, and calculate the estimated worth of your family gold savings.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Interactive Rate Display & Chart (8 cols) */}
        <div className="lg:col-span-8 glass-card rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between">
          <div>
            {/* Metal Selector Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.08]">
              <div className="flex rounded-2xl bg-white/[0.04] p-1 border border-white/10">
                <button
                  onClick={() => setSelectedMetal('gold24')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedMetal === 'gold24'
                      ? 'bg-amber-500 text-black shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Gold 24K
                </button>
                <button
                  onClick={() => setSelectedMetal('gold22')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedMetal === 'gold22'
                      ? 'bg-amber-500 text-black shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Gold 22K
                </button>
                <button
                  onClick={() => setSelectedMetal('silver')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedMetal === 'silver'
                      ? 'bg-slate-300 text-black shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Fine Silver
                </button>
              </div>

              {/* Sample Feed Notice Badge */}
              <div className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] text-slate-400 flex items-center gap-1.5">
                <Info size={12} className="text-amber-400" />
                <span>Simulated Demonstration Rates</span>
              </div>
            </div>

            {/* Price Headline */}
            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
              <div>
                <p className="text-xs text-slate-400 font-medium mb-1">{currentConfig.name} • {currentConfig.purity}</p>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-3xl sm:text-4xl font-black text-white">
                    ₹{currentConfig.samplePricePerGram.toLocaleString('en-IN')}
                    <span className="text-sm font-normal text-slate-400"> / gram</span>
                  </h3>
                  <span
                    className={`inline-flex items-center text-xs font-bold px-2 py-0.5 rounded-md ${
                      currentConfig.isPositive
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                    }`}
                  >
                    {currentConfig.isPositive ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
                    {currentConfig.changePercent}%
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] text-slate-400 block">8g Sovereign Rate:</span>
                <span className="text-lg font-bold text-amber-400">
                  ₹{(currentConfig.samplePricePerGram * 8).toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Recharts Area Chart */}
            <div className="h-56 w-full pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={currentConfig.chartData}>
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={currentConfig.color} stopOpacity={0.4} />
                      <stop offset="95%" stopColor={currentConfig.color} stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="date"
                    stroke="#64748B"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    hide={true}
                    domain={['dataMin - 50', 'dataMax + 50']}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1E293B',
                      borderColor: 'rgba(255,255,255,0.1)',
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '12px'
                    }}
                    formatter={(value: any) => [`₹${Number(value).toLocaleString('en-IN')}/g`, 'Rate']}
                  />
                  <Area
                    type="monotone"
                    dataKey="price"
                    stroke={currentConfig.color}
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill="url(#chartGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
            <span>Historical Trend (7 Days)</span>
            <span className="text-indigo-400 font-medium">Automatic daily refreshes in app</span>
          </div>
        </div>

        {/* Right Column: Holdings Calculator (4 cols) */}
        <div className="lg:col-span-4 glass-card rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-3">
              <Calculator size={16} />
              <span>Family Holdings Estimator</span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">Estimate Your Metal Value</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              Enter your gold/silver weight in grams to calculate your asset worth based on current rates.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs text-slate-400 mb-1.5 font-medium">
                  Weight in Grams (g):
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    max="10000"
                    value={grams}
                    onChange={(e) => setGrams(Math.max(1, Number(e.target.value) || 1))}
                    className="w-full bg-white/[0.04] text-white px-4 py-3 rounded-xl border border-white/10 text-sm font-bold focus:outline-none focus:border-amber-500"
                  />
                  <span className="text-xs text-slate-400 font-semibold px-3 py-3 rounded-xl bg-white/[0.04] border border-white/10">
                    Grams
                  </span>
                </div>
              </div>

              {/* Quick Gram Presets */}
              <div className="flex flex-wrap gap-1.5">
                {[1, 8, 16, 24, 50, 100].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setGrams(preset)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                      grams === preset
                        ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300'
                        : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/10'
                    }`}
                  >
                    {preset}g {preset === 8 && '(1 Sov)'}
                  </button>
                ))}
              </div>
            </div>

            {/* Estimated Output Box */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-center">
              <span className="text-[10px] text-amber-300 uppercase tracking-wider font-bold block mb-1">
                Estimated Value ({grams}g)
              </span>
              <span className="text-2xl font-black text-white block">
                ₹{estimatedValue}
              </span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.08] text-[11px] text-slate-400 text-center">
            Log tangible savings goals directly in MS Family.
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldSilver;
