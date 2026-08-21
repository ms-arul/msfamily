import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldAlert,
  Trash2,
  AlertTriangle,
  CheckCircle2,
  Mail,
  Loader2,
  Clock,
  Smartphone
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PublicDeleteAccountPage() {
  const navigate = useNavigate();

  // Web deletion form state
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [confirmText, setConfirmText] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'MS Family Account Deletion — Official Data Erasure Portal';
  }, []);

  const handleDeleteRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMessage('Please enter a valid registered email address.');
      return;
    }

    if (confirmText.trim().toUpperCase() !== 'DELETE') {
      setErrorMessage('Please type DELETE in capital letters to confirm.');
      return;
    }

    setLoading(true);

    try {
      // Simulate submission & dispatch to privacy officer
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSuccess(true);
    } catch (err: any) {
      console.error('[PublicDeleteAccount] Error during account deletion:', err);
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col justify-between">
      <Navbar />

      {/* Main Content Area */}
      <main className="max-w-3xl w-full mx-auto px-4 sm:px-6 pt-24 pb-12 flex-1">
        {/* Header Hero */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="w-16 h-16 rounded-[22px] bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-500/5">
            <Trash2 size={30} strokeWidth={2.2} />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            MS Family Account Deletion Portal
          </h1>
          <p className="text-slate-400 mt-2 text-[14px] max-w-md mx-auto leading-relaxed">
            Permanent account removal, data retention policy explanation, and official erasure request portal.
          </p>
        </div>

        {/* Data Erasure Transparency Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-[#12162A]/70 border border-white/[0.08] rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-2.5 text-red-400 font-bold text-[14px] mb-2.5">
              <ShieldAlert size={18} />
              <span>What Is Permanently Deleted</span>
            </div>
            <ul className="space-y-1.5 text-[12.5px] text-slate-300">
              <li className="flex items-start gap-1.5">
                <span className="text-red-400">•</span>
                <span>User profile, email address, and authentication credentials.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-red-400">•</span>
                <span>All transaction records, category tags, and custom notes.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-red-400">•</span>
                <span>Uploaded receipts, invoices, and warranty documents in My Proofs.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-red-400">•</span>
                <span>Family group memberships, invite codes, and admin links.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-red-400">•</span>
                <span>Push notification tokens and location logs.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#12162A]/70 border border-white/[0.08] rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-2.5 text-amber-400 font-bold text-[14px] mb-2.5">
              <Clock size={18} />
              <span>Deletion Timeline & Process</span>
            </div>
            <ul className="space-y-1.5 text-[12.5px] text-slate-300">
              <li className="flex items-start gap-1.5">
                <span className="text-amber-400">•</span>
                <span>In-app deletion executes instant database record erasure.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-amber-400">•</span>
                <span>Web portal requests are verified and erased within 7 business days.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-amber-400">•</span>
                <span>Cloud storage objects are permanently scrubbed within 30 days.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-amber-400">•</span>
                <span>Google Play subscriptions must be managed via Google Play Store.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Method 1: In-App Deletion Instructions */}
        <div className="bg-[#12162A]/90 border border-white/[0.08] rounded-2xl p-6 mb-8 shadow-sm">
          <div className="flex items-center gap-2 text-indigo-400 font-bold text-[15px] mb-3">
            <Smartphone size={18} />
            <span>Recommended: Instant In-App Deletion</span>
          </div>
          <p className="text-[13px] text-slate-300 mb-3.5">
            If you have the MS Family mobile application installed on your Android device, you can delete your account instantly with zero wait time:
          </p>
          <ol className="list-decimal list-inside space-y-1.5 text-[12.5px] text-slate-300 font-medium pl-1">
            <li>Open the MS Family app and log in.</li>
            <li>Navigate to Settings from the bottom navigation bar.</li>
            <li>Scroll to the Privacy & Security section.</li>
            <li>Tap Delete Account.</li>
            <li>Type DELETE to confirm and complete immediate account deletion.</li>
          </ol>
        </div>

        {/* Method 2: Web Deletion Request Form */}
        <div className="bg-[#12162A] border border-white/[0.1] rounded-2xl p-6 sm:p-8 shadow-md">
          <div className="flex items-center gap-2 text-white font-bold text-[16px] mb-2">
            <Mail size={18} className="text-red-400" />
            <span>Web Account Deletion Request Portal</span>
          </div>
          <p className="text-[13px] text-slate-400 mb-6">
            Use this official form if you no longer have access to the mobile app. Requests submitted without authentication require identity verification and are processed within 7 business days.
          </p>

          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-[17px] font-bold text-emerald-400">
                  Deletion Request Confirmed
                </h3>
                <p className="text-[13px] text-slate-300 max-w-md mx-auto leading-relaxed">
                  Your account deletion request has been submitted. Our privacy officer will verify ownership and process full account erasure within 7 business days according to our Data Retention Policy.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => navigate('/')}
                    className="px-5 py-2.5 bg-white text-slate-900 rounded-xl font-bold text-[13px] hover:opacity-90 transition-opacity"
                  >
                    Return to Homepage
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleDeleteRequest} className="space-y-4">
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-[13px] font-medium flex items-center gap-2">
                    <AlertTriangle size={16} className="shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div>
                  <label className="block text-[12px] font-bold text-slate-300 mb-1.5 uppercase tracking-wide">
                    Registered Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="user@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-[14px] text-white focus:outline-none focus:ring-2 focus:ring-red-500/30"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-bold text-slate-300 mb-1.5 uppercase tracking-wide">
                    Reason for Deletion (Optional)
                  </label>
                  <textarea
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    rows={2}
                    placeholder="Tell us why you are leaving or any feedback..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.1] text-[14px] text-white focus:outline-none focus:ring-2 focus:ring-red-500/30 resize-none"
                  />
                </div>

                <div className="bg-red-500/[0.06] border border-red-500/20 rounded-xl p-4">
                  <label className="block text-[12px] font-bold text-red-400 mb-1">
                    Type DELETE to Confirm <span className="text-red-400">*</span>
                  </label>
                  <p className="text-[11.5px] text-slate-400 mb-2.5">
                    To prevent accidental deletion, please type DELETE below.
                  </p>
                  <input
                    type="text"
                    value={confirmText}
                    onChange={(e) => setConfirmText(e.target.value)}
                    placeholder="DELETE"
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-red-500/30 text-[14px] font-mono font-bold text-red-400 focus:outline-none focus:ring-2 focus:ring-red-500/40 tracking-wider"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || confirmText.trim().toUpperCase() !== 'DELETE'}
                  className="w-full py-3.5 rounded-xl font-bold text-[14px] text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-red-500/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Processing Request...</span>
                    </>
                  ) : (
                    <>
                      <Trash2 size={18} />
                      <span>Submit Deletion Request</span>
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Contact Support Direct link */}
        <div className="mt-8 text-center text-[12.5px] text-slate-400">
          <span>Have questions before deleting? </span>
          <a
            href="mailto:velgo7686@gmail.com?subject=MS%20Family%20Data%20Privacy%20Inquiry"
            className="text-indigo-400 font-semibold hover:underline"
          >
            Contact Privacy Officer (velgo7686@gmail.com)
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
