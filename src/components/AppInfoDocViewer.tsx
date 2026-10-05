import { useState, useMemo, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Copy,
  Share2,
  Printer,
  Search,
  X,
  CheckCircle2,
  Shield,
  FileText,
  Clock,
  List,
  ChevronRight
} from 'lucide-react';
import { APP_INFO_DOCS, type AppInfoDoc } from '../data/appInfoDocs';

interface AppInfoDocViewerProps {
  docId: string;
  isDirectRoute?: boolean;
}

const ALL_DOC_LINKS = [
  { id: 'privacy', title: 'Privacy Policy', path: '/privacy-policy' },
  { id: 'terms', title: 'Terms of Service', path: '/terms' },
  { id: 'retention', title: 'Data Retention', path: '/retention' },
  { id: 'subscription', title: 'Subscription & Refunds', path: '/refund-policy' },
  { id: 'legal', title: 'Legal & Disclaimers', path: '/security' },
  { id: 'changelog', title: 'Release Changelog', path: '/changelog' },
  { id: 'about', title: 'About MS Family', path: '/about' },
  { id: 'contact', title: 'Support & Contact', path: '/support' }
];

export function AppInfoDocViewer({ docId, isDirectRoute = false }: AppInfoDocViewerProps) {
  const navigate = useNavigate();
  const doc = useMemo<AppInfoDoc | null>(() => APP_INFO_DOCS[docId] || null, [docId]);

  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [docId]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const getDocText = (): string => {
    if (!doc) return '';
    let text = `${doc.title}\n`;
    if (doc.subtitle) text += `${doc.subtitle}\n`;
    if (doc.lastUpdated) text += `Last Updated: ${doc.lastUpdated}\n\n`;

    doc.sections.forEach((s) => {
      text += `\n${s.title}\n`;
      if (Array.isArray(s.content)) {
        text += s.content.join('\n');
      } else {
        text += s.content;
      }
      text += '\n';
    });
    return text;
  };

  const handleCopy = () => {
    const text = getDocText();
    navigator.clipboard.writeText(text);
    showToast('Copied full document to clipboard!');
  };

  const handleShare = async () => {
    const text = getDocText();
    if (navigator.share) {
      try {
        await navigator.share({
          title: doc?.title || 'MS Family Policy',
          text: text.slice(0, 300) + '...',
          url: window.location.href,
        });
      } catch {
        // user cancelled or share failed
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Page URL copied to clipboard!');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const scrollToSection = (idx: number) => {
    const el = document.getElementById(`doc-section-${idx}`);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) return <span>{text}</span>;
    const parts = text.split(new RegExp(`(${highlight.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <mark key={i} className="bg-yellow-400/30 text-yellow-200 px-1 py-0.5 rounded font-medium">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  const filteredSections = useMemo(() => {
    if (!doc) return [];
    if (!searchQuery.trim()) return doc.sections;

    const q = searchQuery.toLowerCase().trim();
    return doc.sections.filter((s) => {
      const matchTitle = s.title.toLowerCase().includes(q);
      const matchContent = Array.isArray(s.content)
        ? s.content.some((c) => c.toLowerCase().includes(q))
        : s.content.toLowerCase().includes(q);
      return matchTitle || matchContent;
    });
  }, [doc, searchQuery]);

  if (!doc) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <Shield size={48} className="text-slate-600 mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">Document Not Found</h2>
        <p className="text-slate-400 mb-6">The requested document could not be located in our official index.</p>
        <Link
          to="/legal"
          className="px-6 py-2.5 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-medium transition-all"
        >
          Return to Legal Hub
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900/90 text-white px-5 py-3 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl flex items-center gap-2.5 text-sm font-medium animate-fade-in">
          <CheckCircle2 size={18} className="text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Compact Top Action & Breadcrumb Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.08] no-print">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <button
            onClick={() => (isDirectRoute ? navigate('/legal') : window.history.length > 1 ? navigate(-1) : navigate('/legal'))}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back</span>
          </button>
          <span className="text-slate-600">/</span>
          <Link to="/legal" className="hover:text-white transition-colors">Legal Hub</Link>
          <span className="text-slate-600">/</span>
          <span className="text-slate-200 font-semibold truncate max-w-[200px]">{doc.title}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            title="Copy Text"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors"
          >
            <Copy size={14} />
            <span className="hidden sm:inline">Copy Text</span>
          </button>
          <button
            onClick={handleShare}
            title="Share Document"
            className="p-1.5 sm:px-3 sm:py-1.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors inline-flex items-center gap-1.5"
          >
            <Share2 size={14} />
            <span className="hidden sm:inline">Share</span>
          </button>
          <button
            onClick={handlePrint}
            title="Print Document"
            className="p-1.5 sm:px-3 sm:py-1.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors inline-flex items-center gap-1.5"
          >
            <Printer size={14} />
            <span className="hidden sm:inline">Print</span>
          </button>
        </div>
      </div>

      {/* Main 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sticky Sidebar (4 cols on Desktop) */}
        <aside className="lg:col-span-4 space-y-5 lg:sticky lg:top-24 no-print">
          {/* Metadata Card */}
          <div className="glass-card rounded-2xl p-5 border border-white/10">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-indigo-400 mb-3">
              <FileText size={13} />
              <span>Official Compliance Document</span>
            </div>

            <h3 className="text-base font-bold text-white mb-2">{doc.title}</h3>
            {doc.subtitle && (
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">{doc.subtitle}</p>
            )}

            <div className="space-y-2 pt-3 border-t border-white/[0.08] text-xs text-slate-400">
              {doc.lastUpdated && (
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Clock size={13} /> Last Updated:
                  </span>
                  <span className="font-semibold text-slate-200">{doc.lastUpdated}</span>
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Shield size={13} className="text-emerald-400" /> Developer:
                </span>
                <span className="font-semibold text-slate-200">XPOOL Technology Pvt Ltd</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">App Version:</span>
                <span className="font-semibold text-indigo-300 font-mono">v2.3.0 (build 230)</span>
              </div>
            </div>
          </div>

          {/* Table of Contents (Desktop List) */}
          <div className="glass-card rounded-2xl p-5 border border-white/10 hidden lg:block">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
              <List size={14} className="text-indigo-400" />
              <span>Sections in this Document</span>
            </h4>
            <nav className="space-y-1 max-h-[320px] overflow-y-auto pr-1">
              {doc.sections.map((section, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(idx)}
                  className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors truncate block"
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>

          {/* Other Documents Quick Switcher */}
          <div className="glass-card rounded-2xl p-4 border border-white/10 hidden lg:block">
            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
              Other Legal Policies
            </h4>
            <div className="space-y-1 text-xs">
              {ALL_DOC_LINKS.filter((l) => l.id !== docId).slice(0, 5).map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.05] transition-colors group"
                >
                  <span>{link.title}</span>
                  <ChevronRight size={13} className="text-slate-500 group-hover:text-indigo-400 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </aside>

        {/* Right Content Column (8 cols on Desktop) */}
        <main className="lg:col-span-8 space-y-6">
          {/* Header & Search Banner */}
          <div className="glass-card rounded-2xl p-5 sm:p-7 border border-white/10 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative z-10">
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                {doc.title}
              </h1>
              {doc.subtitle && (
                <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                  {doc.subtitle}
                </p>
              )}

              {/* Integrated Search Input */}
              <div className="relative no-print">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Filter inside ${doc.title}...`}
                  className="w-full bg-white/[0.04] text-white placeholder-slate-500 pl-10 pr-9 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-indigo-500 text-xs sm:text-sm transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Document Content Sections */}
          <div className="space-y-4">
            {filteredSections.length === 0 ? (
              <div className="text-center py-10 glass-card rounded-2xl p-6">
                <Search size={28} className="mx-auto text-slate-500 mb-2" />
                <p className="text-slate-300 text-sm font-medium">No sections match "{searchQuery}"</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-2 text-xs text-indigo-400 hover:underline"
                >
                  Clear search filter
                </button>
              </div>
            ) : (
              filteredSections.map((section, idx) => (
                <article
                  key={idx}
                  id={`doc-section-${idx}`}
                  className="glass-card rounded-2xl p-5 sm:p-7 border border-white/[0.08] scroll-mt-24"
                >
                  <h2 className="text-base sm:text-lg font-bold text-white mb-3 flex items-center gap-2">
                    {highlightText(section.title, searchQuery)}
                  </h2>

                  <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2.5">
                    {Array.isArray(section.content) ? (
                      <ul className="space-y-2">
                        {section.content.map((item, itemIdx) => (
                          <li key={itemIdx} className="leading-relaxed">
                            {highlightText(item, searchQuery)}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>{highlightText(section.content, searchQuery)}</p>
                    )}
                  </div>
                </article>
              ))
            )}
          </div>

          {/* Legal Footer Note */}
          <div className="pt-6 border-t border-white/10 text-center sm:text-left text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>© 2026 XPOOL Technology Pvt Ltd. All rights reserved.</p>
            <p>
              Support: <a href="mailto:velgo7686@gmail.com" className="text-indigo-400 hover:underline">velgo7686@gmail.com</a>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
