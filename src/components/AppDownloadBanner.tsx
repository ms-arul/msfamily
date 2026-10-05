import { ShieldCheck, Smartphone, Zap, Lock, QrCode } from 'lucide-react';
import { PlayStoreButton, PLAY_STORE_URL } from './PlayStoreButton';

export const AppDownloadBanner = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-indigo-600/20 via-purple-600/15 to-emerald-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 bg-gradient-to-b from-[#111827]/90 via-[#0B0F19]/95 to-[#070A12]/95 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck size={14} />
              <span>Official Google Play Verified • v2.3.0</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Get MS Family on{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
                Google Play
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              Transform your household finance with automated on-device SMS transaction detection, encrypted proofs vault, joint family bookkeeping, and live budget goals — all in one secure Android app.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <Lock size={15} className="text-indigo-400 flex-shrink-0" />
                <span className="text-xs text-slate-300 font-medium">On-Device SMS</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <Zap size={15} className="text-amber-400 flex-shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Instant Sync</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <Smartphone size={15} className="text-emerald-400 flex-shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Android 8.0+</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <PlayStoreButton variant="hero" />

              <div className="text-xs text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>100% Free Starter Plan • No Card Needed</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase & QR Code */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-6">
            {/* Quick QR Code Card for Desktop Users */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 bg-slate-900/80 backdrop-blur-md text-center max-w-xs w-full shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mx-auto mb-3">
                <QrCode size={22} />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">Scan to Install on Android</h3>
              <p className="text-[11px] text-slate-400 mb-4">
                Point your mobile camera to open directly in Google Play Store.
              </p>

              {/* Styled SVG QR Code linked to Play Store URL */}
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-auto w-40 h-40 p-2.5 bg-white rounded-xl shadow-lg hover:scale-105 transition-transform"
                title="Scan or click to open Google Play"
              >
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.msfamily.app%26pcampaignid%3Dweb_share"
                  alt="QR Code for MS Family on Google Play"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </a>

              <div className="mt-3.5 text-[10px] text-slate-400 flex items-center justify-center gap-1.5">
                <ShieldCheck size={12} className="text-emerald-400" />
                <span>Play Protect Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
