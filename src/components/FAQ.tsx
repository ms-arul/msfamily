import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HelpCircle,
  Search,
  ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
  category: string;
  keywords: string;
}

const FAQS: FAQItem[] = [
  {
    id: '1',
    category: 'General',
    question: 'What is MS Family and how does it work?',
    keywords: 'what is ms family overview features finance budget household app',
    answer: (
      <div className="space-y-2 text-slate-300">
        <p>
          MS Family is an integrated financial management and household organization application developed by XPOOL Technology Pvt Ltd. It provides private income and expense tracking, collaborative family bookkeeping, encrypted proof document storage (My Proofs), smart budget goal planning, and local Smart SMS transaction detection.
        </p>
      </div>
    )
  },
  {
    id: '2',
    category: 'Privacy & SMS',
    question: 'How does the Smart SMS Reader protect my privacy?',
    keywords: 'smart sms reader privacy permissions on device regex cloud upload data bank alerts',
    answer: (
      <div className="space-y-2 text-slate-300">
        <p>
          The Smart SMS Reader parses transaction messages <strong>strictly on your device</strong> using local regex algorithms. Raw SMS text is never uploaded, transmitted, or stored on our cloud servers. Only the resulting structured expense draft (amount, bank, merchant, date, category) is saved. You can disable this feature at any time in Settings.
        </p>
      </div>
    )
  },
  {
    id: '3',
    category: 'Family Groups',
    question: 'How do collaborative Family Groups work?',
    keywords: 'family groups invite code members roles admin shared budget bookkeeping split',
    answer: (
      <div className="space-y-2 text-slate-300">
        <p>
          You can create a Family Group and invite family members using a secure group invitation code. Group members can view shared household expenses, log member contributions, track category budgets, and calculate settle-up balances in real-time. Group Admins maintain full control over member access and permissions.
        </p>
      </div>
    )
  },
  {
    id: '4',
    category: 'Storage & Proofs',
    question: 'Where are my uploaded invoices, receipts, and proofs stored?',
    keywords: 'my proofs vault storage encrypted receipts invoices documents rls security',
    answer: (
      <div className="space-y-2 text-slate-300">
        <p>
          Files uploaded to the <strong>My Proofs</strong> locker are stored in private cloud storage buckets protected by infrastructure-level encryption at rest and PostgreSQL Row-Level Security (RLS). Only you and explicitly authorized members of your verified family group can view your uploaded documents.
        </p>
      </div>
    )
  },
  {
    id: '5',
    category: 'Compliance & Deletion',
    question: 'How can I permanently delete my account and personal data?',
    keywords: 'delete account data erasure wipe cascade remove profile privacy',
    answer: (
      <div className="space-y-2 text-slate-300">
        <p>
          You have complete control over your data. You can delete your account directly in the app via <em>Settings → Privacy & Security → Delete Account</em>, or via our public <Link to="/delete-account" className="text-indigo-400 underline font-semibold">Account Deletion Portal</Link>, or by emailing <a href="mailto:velgo7686@gmail.com" className="text-indigo-400 underline">velgo7686@gmail.com</a>. Account deletion immediately cascades and permanently wipes your authentication profile, transactions, family links, and uploaded files.
        </p>
      </div>
    )
  },
  {
    id: '6',
    category: 'Subscriptions',
    question: 'How do subscriptions, billing, and refunds work?',
    keywords: 'subscription pricing premium family billing google play refund 14 day cancellation',
    answer: (
      <div className="space-y-2 text-slate-300">
        <p>
          MS Family offers a robust Free tier, a Premium tier (₹99/mo or ₹79/mo billed annually), and a Family Pro plan (₹199/mo). Android mobile subscriptions are processed securely through Google Play Billing. We offer a 14-day refund window for first-time subscribers. You can review full terms on our <Link to="/refund-policy" className="text-indigo-400 underline font-semibold">Subscription & Refund Policy</Link> page.
        </p>
      </div>
    )
  },
  {
    id: '7',
    category: 'Support',
    question: 'How can I contact customer support or report a bug?',
    keywords: 'support contact help desk bug email customer care phone',
    answer: (
      <div className="space-y-2 text-slate-300">
        <p>
          Our customer support and engineering desk can be reached directly via email at <a href="mailto:velgo7686@gmail.com" className="text-indigo-400 underline font-semibold">velgo7686@gmail.com</a>. We respond to support tickets and bug inquiries within 24 hours on business days.
        </p>
      </div>
    )
  }
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState<string | null>('1');

  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return FAQS;
    const q = searchQuery.toLowerCase().trim();
    return FAQS.filter(
      (f) =>
        f.question.toLowerCase().includes(q) ||
        f.keywords.toLowerCase().includes(q) ||
        f.category.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <HelpCircle size={14} />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
          Got Questions? We Have <span className="text-gradient">Answers</span>
        </h2>
        <p className="text-slate-300 text-base sm:text-lg mb-8">
          Clear answers about security, family management, on-device parsing, and data governance.
        </p>

        {/* FAQ Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g., SMS privacy, deletion, pricing)..."
            className="w-full bg-white/[0.04] text-white placeholder-slate-500 pl-11 pr-4 py-3.5 rounded-2xl border border-white/10 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all shadow-inner"
          />
        </div>
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 glass-card rounded-2xl p-6">
            <p className="text-slate-300">No questions found matching "{searchQuery}".</p>
            <p className="text-xs text-slate-500 mt-2">
              Have a specific question? Contact us at{' '}
              <a href="mailto:velgo7686@gmail.com" className="text-indigo-400 underline">
                velgo7686@gmail.com
              </a>
            </p>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="glass-card rounded-2xl border border-white/[0.08] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleOpen(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-white font-bold text-base sm:text-lg hover:text-indigo-300 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs px-2 py-0.5 rounded-md bg-white/[0.05] text-slate-400 font-normal">
                      {faq.category}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-indigo-400' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/[0.04]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default FAQ;
