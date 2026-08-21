import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Smartphone,
  CheckCircle2,
  Lock,
  ShieldCheck,
  Receipt
} from 'lucide-react';

interface SampleAlert {
  id: string;
  source: string;
  type: 'SMS' | 'OCR';
  rawText: string;
  detectedBank: string;
  amount: string;
  merchant: string;
  category: string;
  date: string;
}

const SAMPLE_ALERTS: SampleAlert[] = [
  {
    id: '1',
    source: 'Bank Card SMS',
    type: 'SMS',
    rawText: 'Alert: $42.50 spent on Card ending 4012 at METRO SUPERMARKET on 18-AUG-2026. Available balance: $4,850.00.',
    detectedBank: 'Metro Bank',
    amount: '$42.50',
    merchant: 'Metro Supermarket',
    category: 'Groceries & Household',
    date: '18 Aug 2026'
  },
  {
    id: '2',
    source: 'Instant Debit Alert',
    type: 'SMS',
    rawText: 'Debit Alert: Account ending 9812 debited $18.25 for City Bistro & Coffee on 19-Aug-2026.',
    detectedBank: 'Global Digital Bank',
    amount: '$18.25',
    merchant: 'City Bistro & Coffee',
    category: 'Food & Dining',
    date: '19 Aug 2026'
  },
  {
    id: '3',
    source: 'Paper Receipt OCR',
    type: 'OCR',
    rawText: 'RECEIPT #8912 • CENTRAL FUEL STATION • 12.5 GAL UNLEADED • TOTAL: $45.60 • PAID VIA CARD',
    detectedBank: 'Receipt OCR Scanner',
    amount: '$45.60',
    merchant: 'Central Fuel Station',
    category: 'Vehicle & Transport',
    date: '19 Aug 2026'
  }
];

const OCRScanner = () => {
  const [selectedAlert, setSelectedAlert] = useState<SampleAlert>(SAMPLE_ALERTS[0]);

  const handleSelect = (alert: SampleAlert) => {
    setSelectedAlert(alert);
  };

  return (
    <section id="sms" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <ShieldCheck size={14} />
          <span>Strict On-Device Privacy</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
          Smart SMS & Receipt Detection — <span className="text-gradient">Zero Cloud Upload</span>
        </h2>
        <p className="text-slate-300 text-base sm:text-lg">
          Try the interactive simulator below to see how bank transaction SMS alerts and receipt images are parsed directly on your smartphone processor using local regex heuristics.
        </p>
      </div>

      {/* Simulator Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 max-w-5xl mx-auto">
        {/* Sample Switcher Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-8 pb-6 border-b border-white/[0.08]">
          <span className="text-xs font-semibold text-slate-400 self-center mr-2">Select Simulation:</span>
          {SAMPLE_ALERTS.map((alert) => (
            <button
              key={alert.id}
              onClick={() => handleSelect(alert)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                selectedAlert.id === alert.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25 border border-indigo-400/30'
                  : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] border border-white/10'
              }`}
            >
              {alert.type === 'SMS' ? <Smartphone size={14} /> : <Receipt size={14} />}
              <span>{alert.source}</span>
            </button>
          ))}
        </div>

        {/* Side-by-Side Parser Simulation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: Input Message */}
          <div className="flex flex-col justify-between bg-black/40 rounded-2xl p-6 border border-white/[0.06]">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-semibold text-slate-400">
                <span className="flex items-center gap-1.5 text-indigo-400">
                  <Smartphone size={14} /> Raw Device Input (Offline)
                </span>
                <span className="px-2 py-0.5 rounded-full bg-slate-800 text-[10px]">
                  {selectedAlert.type}
                </span>
              </div>

              <div className="font-mono text-xs sm:text-sm text-slate-200 bg-black/50 p-4 rounded-xl border border-white/10 leading-relaxed min-h-[110px]">
                {selectedAlert.rawText}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400">
                <Lock size={12} /> Local Regex Engine
              </span>
              <span>Execution Time: &lt; 2ms</span>
            </div>
          </div>

          {/* Right: Parsed Expense Record Output */}
          <div className="flex flex-col justify-between bg-gradient-to-br from-indigo-900/20 to-purple-900/10 rounded-2xl p-6 border border-indigo-500/20 relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-semibold text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 size={14} /> Structured Expense Draft Generated
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                  Verified
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedAlert.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  <div className="flex items-baseline justify-between p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                    <span className="text-xs text-slate-400">Parsed Amount:</span>
                    <span className="text-xl font-black text-white">{selectedAlert.amount}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                      <span className="text-[10px] text-slate-400 block mb-0.5">Merchant:</span>
                      <span className="font-semibold text-white">{selectedAlert.merchant}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                      <span className="text-[10px] text-slate-400 block mb-0.5">Detected Source:</span>
                      <span className="font-semibold text-white">{selectedAlert.detectedBank}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex justify-between items-center text-xs">
                    <span className="text-[10px] text-slate-400">Category Assigned:</span>
                    <span className="font-bold text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded-lg">
                      {selectedAlert.category}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] text-slate-400 flex items-center justify-between">
              <span>Note standard: "Automatically detected from SMS"</span>
              <span className="text-emerald-400 font-bold">Ready to Save</span>
            </div>
          </div>
        </div>

        {/* Privacy Note Callout */}
        <div className="mt-8 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3 text-xs text-slate-400">
          <ShieldCheck size={20} className="text-emerald-400 flex-shrink-0" />
          <p>
            <strong>Data Minimization Compliance:</strong> Raw SMS message bodies are never backed up, stored in databases, or shared with third parties. Users can toggle SMS detection on or off at any time in Settings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OCRScanner;
