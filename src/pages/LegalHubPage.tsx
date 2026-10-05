import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AppInfoDocViewer } from '../components/AppInfoDocViewer';
import {
  Shield,
  FileText,
  Clock,
  CreditCard,
  Scale,
  GitBranch,
  Info,
  LifeBuoy
} from 'lucide-react';

const DOC_TABS = [
  { id: 'privacy', label: 'Privacy Policy', icon: Shield, path: '/privacy-policy' },
  { id: 'terms', label: 'Terms of Service', icon: FileText, path: '/terms' },
  { id: 'retention', label: 'Data Retention', icon: Clock, path: '/retention' },
  { id: 'subscription', label: 'Subscription & Refunds', icon: CreditCard, path: '/refund-policy' },
  { id: 'legal', label: 'Legal & Disclaimers', icon: Scale, path: '/security' },
  { id: 'changelog', label: 'Changelog', icon: GitBranch, path: '/changelog' },
  { id: 'about', label: 'About MS Family', icon: Info, path: '/about' },
  { id: 'contact', label: 'Contact & Support', icon: LifeBuoy, path: '/support' }
];

export default function LegalHubPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('doc') || 'privacy';

  useEffect(() => {
    document.title = 'Legal & Policy Center — MS Family Compliance';
  }, []);

  const handleTabChange = (docId: string) => {
    setSearchParams({ doc: docId });
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col justify-between">
      <Navbar />

      <main className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        {/* Hub Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Shield size={14} />
            <span>Official Policy & Compliance Hub</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Legal, Privacy & Governance
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            Transparent documentation regarding user privacy, on-device data processing, terms of service, and regulatory disclosures for MS Family v2.1.9.
          </p>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8 no-print">
          {DOC_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex flex-col items-center justify-center p-3.5 rounded-2xl text-center text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 border border-indigo-400/30'
                    : 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                <Icon size={18} className="mb-1.5" />
                <span className="line-clamp-1">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Document Viewer */}
        <AppInfoDocViewer docId={activeTab} />
      </main>

      <Footer />
    </div>
  );
}
