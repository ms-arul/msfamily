import React, { useState } from 'react';
import { Upload, Scan, CheckCircle2, FileText, Loader2 } from 'lucide-react';

const OCRScanner = () => {
  const [scanningState, setScanningState] = useState<'idle' | 'scanning' | 'complete'>('idle');

  const handleScan = () => {
    setScanningState('scanning');
    setTimeout(() => {
      setScanningState('complete');
    }, 2500);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Turn Bills Into <span className="text-gradient">Expenses Instantly</span>
          </h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Stop typing. Just point, shoot, and let our advanced AI extract the merchant, date, tax, and total amount in seconds.
          </p>

          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 font-bold">1</div>
              <div>
                <h4 className="font-semibold text-foreground">Upload / Capture Bill</h4>
                <p className="text-slate-500 text-sm">Take a photo or upload an image of your receipt.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0 font-bold">2</div>
              <div>
                <h4 className="font-semibold text-foreground">OCR extracts information</h4>
                <p className="text-slate-500 text-sm">AI identifies the merchant, date, amount, and category.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center flex-shrink-0 font-bold">3</div>
              <div>
                <h4 className="font-semibold text-foreground">Review & Save</h4>
                <p className="text-slate-500 text-sm">Quickly verify the details and save it to your expenses.</p>
              </div>
            </div>
          </div>

          <button 
            onClick={scanningState === 'idle' ? handleScan : () => setScanningState('idle')}
            className="bg-gradient-primary text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2"
          >
            {scanningState === 'idle' ? (
              <><Upload size={20} /> Scan Your First Bill</>
            ) : scanningState === 'scanning' ? (
              <><Loader2 className="animate-spin" size={20} /> Processing...</>
            ) : (
              <><Scan size={20} /> Scan Another Bill</>
            )}
          </button>
        </div>

        {/* Right Content - Scanner UI */}
        <div className="lg:w-1/2 w-full max-w-md mx-auto">
          <div className="bg-white rounded-[2rem] p-6 shadow-2xl border border-slate-100 relative overflow-hidden">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Scan size={20} /> Smart Scanner
              </div>
            </div>

            {/* Receipt Area */}
            <div className="relative bg-slate-50 rounded-xl p-4 min-h-[300px] flex flex-col items-center justify-center border-2 border-dashed border-slate-200">
              {scanningState === 'idle' && (
                <div className="text-center text-slate-400">
                  <FileText size={48} className="mx-auto mb-3 opacity-50" />
                  <p>Ready to scan.</p>
                </div>
              )}

              {scanningState === 'scanning' && (
                <div className="absolute inset-0 bg-slate-800/10 rounded-xl overflow-hidden">
                  <div className="w-full h-1 bg-primary/80 absolute shadow-[0_0_15px_rgba(107,70,193,0.8)] animate-[scan_2s_ease-in-out_infinite]"></div>
                  <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80" alt="Receipt" className="w-full h-full object-cover opacity-50" />
                </div>
              )}

              {scanningState === 'complete' && (
                <div className="w-full space-y-4">
                  <div className="flex items-center gap-2 text-green-600 font-semibold justify-center mb-4">
                    <CheckCircle2 size={24} /> Data Extracted!
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 text-sm space-y-3">
                    <div className="flex justify-between border-b border-slate-50 pb-2">
                      <span className="text-slate-500">Merchant</span>
                      <span className="font-semibold">Reliance Fresh</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-50 pb-2">
                      <span className="text-slate-500">Date</span>
                      <span className="font-semibold">14 Aug 2026</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-50 pb-2">
                      <span className="text-slate-500">Category</span>
                      <span className="font-semibold bg-orange-100 text-orange-700 px-2 rounded-md">Groceries</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-slate-500">Total Amount</span>
                      <span className="font-bold text-lg text-primary">₹2,450.00</span>
                    </div>
                  </div>
                  <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-medium mt-4 hover:bg-slate-800 transition-colors">
                    Confirm & Add Expense
                  </button>
                </div>
              )}
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default OCRScanner;
