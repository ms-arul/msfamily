import { useState } from 'react';
import { X } from 'lucide-react';
import { GooglePlayIcon, PLAY_STORE_URL } from './PlayStoreButton';

export const MobilePlayStoreBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-3 inset-x-3 z-40 sm:hidden animate-fade-in no-print">
      <div className="bg-[#0B0F19]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-3 shadow-2xl flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <img
            src="/msfamily.webp"
            alt="MS Family App"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/mslogo.png';
            }}
            className="w-10 h-10 rounded-xl object-contain shadow-md flex-shrink-0"
          />
          <div className="min-w-0">
            <p className="text-xs font-bold text-white truncate flex items-center gap-1">
              MS Family
              <span className="text-[9px] px-1 py-0.2 bg-emerald-500/20 text-emerald-400 rounded font-semibold">
                ★ 4.8
              </span>
            </p>
            <p className="text-[10px] text-slate-400 truncate">Free on Google Play</p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xs shadow-md shadow-indigo-600/30 active:scale-95 transition-transform"
          >
            <GooglePlayIcon className="w-3.5 h-3.5" />
            <span>Install</span>
          </a>

          <button
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss Play Store banner"
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
          >
            <X size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
