import React from 'react';

export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.msfamily.app&pcampaignid=web_share';

interface PlayStoreButtonProps {
  variant?: 'hero' | 'navbar' | 'compact' | 'footer' | 'card' | 'badge-only';
  className?: string;
}

/**
 * Official Google Play 2022 Rounded Triangle Icon
 * Uses exact brand colors: Blue (#4285F4), Green (#34A853), Red (#EA4335), Yellow (#FBBC04)
 */
export const GooglePlayTriangle: React.FC<{ className?: string }> = ({
  className = 'w-6 h-6',
}) => {
  return (
    <svg
      viewBox="0 0 28.5 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Bottom Red Segment */}
      <path
        d="M13.54 15.28.12 29.34a3.64 3.64 0 0 0 5.33 2.16l15.1-8.6z"
        fill="#EA4335"
      />
      {/* Right Yellow Beak */}
      <path
        d="m27.11 12.89-6.53-3.74-7.35 6.45 7.38 7.28 6.48-3.7a3.55 3.55 0 0 0 0-6.29z"
        fill="#FBBC04"
      />
      {/* Left Blue Segment */}
      <path
        d="M.12 2.66a3.46 3.46 0 0 0-.12.92v24.84a3.66 3.66 0 0 0 .12.92L14 15.64Z"
        fill="#4285F4"
      />
      {/* Top Green Segment */}
      <path
        d="m13.64 16 6.94-6.85L5.5.51A3.72 3.72 0 0 0 3.63 0 3.64 3.64 0 0 0 .12 2.65Z"
        fill="#34A853"
      />
    </svg>
  );
};

export const GooglePlayIcon = GooglePlayTriangle;

/**
 * Official Google Play Wordmark (Vector Typography)
 */
export const GooglePlayWordmark: React.FC<{ className?: string }> = ({
  className = 'h-4 w-auto text-white',
}) => {
  return (
    <svg
      viewBox="38 5 125 26"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="m159.36 13.46-3 7.64h-.09l-3.13-7.64h-2.83L155 24.14l-2.68 5.94h2.75l7.23-16.62zm-21.2-6.34h-2.62v17.62h2.62zm-9.86 0H122v17.62h2.64v-6.67h3.67a5.59 5.59 0 0 0 5.78-5.47 5.6 5.6 0 0 0-5.79-5.48Zm.07 8.49h-3.73v-6h3.74a3 3 0 0 1 0 6Zm16.25-2.53a4.94 4.94 0 0 0-4.69 2.7l2.34 1a2.48 2.48 0 0 1 2.4-1.28 2.52 2.52 0 0 1 2.76 2.27v.18a5.73 5.73 0 0 0-2.73-.69c-2.51 0-5.07 1.38-5.07 4 0 2.36 2.05 3.88 4.37 3.88a3.66 3.66 0 0 0 3.34-1.72h.1v1.36H150V18c0-3.13-2.34-4.87-5.36-4.87Zm-.31 9.66c-.86 0-2.06-.44-2.06-1.5 0-1.36 1.49-1.88 2.79-1.88a4.67 4.67 0 0 1 2.4.59 3.19 3.19 0 0 1-3.13 2.79Zm-94.82 2.38A9.46 9.46 0 0 1 40 15.81a9.46 9.46 0 0 1 9.49-9.31 8.91 8.91 0 0 1 6.41 2.57l-1.81 1.79A6.51 6.51 0 0 0 49.49 9a6.77 6.77 0 0 0 0 13.54 6.25 6.25 0 0 0 4.72-1.87 5.26 5.26 0 0 0 1.39-3.2h-6.11V15h8.6a8.38 8.38 0 0 1 .13 1.59 8.37 8.37 0 0 1-2.21 6 8.57 8.57 0 0 1-6.52 2.53Zm22.03-6a5.94 5.94 0 1 1-11.87 0 5.94 5.94 0 1 1 11.87 0zm-2.6 0a3.35 3.35 0 1 0-6.67 0 3.35 3.35 0 1 0 6.67 0zm15.9 0a5.93 5.93 0 1 1-11.86 0 5.93 5.93 0 1 1 11.86 0zm-2.59 0a3.35 3.35 0 1 0-6.67 0 3.35 3.35 0 1 0 6.67 0zm15.57-5.63v10.77c0 4.42-2.63 6.24-5.73 6.24a5.75 5.75 0 0 1-5.34-3.5L89 26a3.33 3.33 0 0 0 3 2.13c2 0 3.22-1.23 3.22-3.52v-.86h-.1A4.12 4.12 0 0 1 92 25.12a6 6 0 0 1 0-12 4.18 4.18 0 0 1 3.16 1.34h.1v-1h2.54Zm-2.33 5.66a3.39 3.39 0 0 0-3.21-3.66 3.48 3.48 0 0 0-3.36 3.66 3.45 3.45 0 0 0 3.36 3.61 3.35 3.35 0 0 0 3.21-3.61Zm6.96-12.01v17.61h-2.64V7.14Zm10.4 13.96 2.06 1.36a6 6 0 0 1-5 2.66 5.81 5.81 0 0 1-5.89-6 5.52 5.52 0 0 1 10.75-2.18l.27.69-8 3.31a3.07 3.07 0 0 0 2.92 1.82 3.44 3.44 0 0 0 2.89-1.66zm-6.31-2.16 5.38-2.22a2.34 2.34 0 0 0-2.24-1.27 3.29 3.29 0 0 0-3.14 3.49z" />
    </svg>
  );
};

/**
 * Full Authentic Google Play 2022 Logo (Triangle + Wordmark)
 */
export const GooglePlayFullLogo: React.FC<{ className?: string }> = ({
  className = 'h-7 w-auto',
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <GooglePlayTriangle className="h-full w-auto flex-shrink-0" />
      <GooglePlayWordmark className="h-4/5 w-auto text-white flex-shrink-0" />
    </div>
  );
};

export const PlayStoreButton: React.FC<PlayStoreButtonProps> = ({
  variant = 'hero',
  className = '',
}) => {
  // Hero Variant: Exact official badge format with authentic vector wordmark
  if (variant === 'hero') {
    return (
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative inline-flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-[#0B0F19] hover:bg-[#121829] border border-white/20 hover:border-indigo-400/60 shadow-xl shadow-black/50 hover:shadow-indigo-500/20 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] ${className}`}
        aria-label="Download MS Family on Google Play"
      >
        {/* Subtle Ambient Hover Glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity blur-md -z-10" />

        {/* Authentic Google Play Triangle */}
        <GooglePlayTriangle className="w-7 h-7 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />

        <div className="text-left flex flex-col justify-center">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-indigo-300 transition-colors leading-none mb-1">
            GET IT ON
          </span>
          {/* Authentic Vector Wordmark */}
          <GooglePlayWordmark className="h-4.5 w-24 text-white group-hover:text-white transition-colors" />
        </div>
      </a>
    );
  }

  // Navbar Variant: Compact & sleek for top bar
  if (variant === 'navbar') {
    return (
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-xl text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-indigo-400/40 shadow-sm transition-all hover:scale-105 active:scale-95 ${className}`}
        aria-label="Download on Google Play"
      >
        <GooglePlayTriangle className="w-4 h-4 flex-shrink-0" />
        <span className="hidden md:inline">Get on</span>
        <span>Google Play</span>
      </a>
    );
  }

  // Card Variant: For inside feature cards or banners
  if (variant === 'card') {
    return (
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`group inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#0B0F19] hover:bg-[#121829] border border-white/20 hover:border-emerald-400/50 text-white transition-all duration-200 hover:scale-[1.02] ${className}`}
        aria-label="Get it on Google Play"
      >
        <GooglePlayTriangle className="w-6 h-6 flex-shrink-0 group-hover:scale-110 transition-transform" />
        <div className="text-left flex flex-col justify-center">
          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 leading-none mb-1">
            GET IT ON
          </span>
          <GooglePlayWordmark className="h-3.5 w-20 text-white" />
        </div>
      </a>
    );
  }

  // Footer Variant: Classic official Play Store badge
  if (variant === 'footer') {
    return (
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`group inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#0B0F19] hover:bg-[#121829] border border-white/20 hover:border-white/30 transition-all ${className}`}
        aria-label="Download MS Family on Google Play"
      >
        <GooglePlayTriangle className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
        <div className="text-left flex flex-col justify-center">
          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 leading-none mb-1">
            GET IT ON
          </span>
          <GooglePlayWordmark className="h-3 w-16 text-white" />
        </div>
      </a>
    );
  }

  // Default / Compact Variant
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0B0F19] hover:bg-[#121829] border border-white/20 text-white text-xs font-bold transition-all hover:scale-105 ${className}`}
    >
      <GooglePlayTriangle className="w-4 h-4 flex-shrink-0" />
      <span>Google Play</span>
    </a>
  );
};
