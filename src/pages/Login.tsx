import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, LogIn, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [infoMessage, setInfoMessage] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setInfoMessage(
      'To access your MS Family cloud dashboard, please log in via the Android application or verify that your enterprise cloud instance is connected.'
    );
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col justify-between">
      <Navbar />

      <main className="pt-32 pb-20 px-4 flex items-center justify-center relative z-0 flex-1">
        {/* Background Glowing Ambient Orbs */}
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

        {/* Glassmorphism Login Card */}
        <div className="w-full max-w-md glass-card rounded-3xl p-8 sm:p-10 border border-white/10 relative shadow-2xl">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-4 group">
              <img
                src="/msfamily.webp"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/mslogo.png';
                }}
                alt="MS Family"
                className="h-10 w-10 rounded-xl object-contain shadow-md shadow-indigo-500/20"
              />
            </Link>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              Sign In to MS Family
            </h1>
            <p className="text-xs sm:text-sm text-slate-400">
              Access your personal & household financial vault
            </p>
          </div>

          {infoMessage && (
            <div className="mb-6 p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs leading-relaxed flex items-start gap-2.5">
              <AlertCircle size={16} className="text-indigo-400 mt-0.5 flex-shrink-0" />
              <span>{infoMessage}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="h-4 w-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/[0.04] text-white placeholder-slate-500 pl-11 pr-4 py-3.5 rounded-xl border border-white/10 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Account Password
              </label>
              <div className="relative">
                <Lock className="h-4 w-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/[0.04] text-white placeholder-slate-500 pl-11 pr-11 py-3.5 rounded-xl border border-white/10 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 p-1"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer text-slate-400">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-white/20 bg-white/5 text-indigo-600 focus:ring-indigo-500"
                />
                <span>Remember me</span>
              </label>
              <a href="mailto:velgo7686@gmail.com?subject=MS%20Family%20Password%20Reset" className="text-indigo-400 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/25 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <LogIn size={16} />
              <span>Sign In to Dashboard</span>
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/[0.08] text-center text-xs text-slate-400">
            <p>
              New to MS Family?{' '}
              <Link to="/#subscription" className="text-indigo-400 font-semibold hover:underline">
                Explore Subscription Plans
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Login;
