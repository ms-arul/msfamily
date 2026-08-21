import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Support from '../components/Support';
import FAQ from '../components/FAQ';
import { AppInfoDocViewer } from '../components/AppInfoDocViewer';

export default function SupportPage() {
  useEffect(() => {
    document.title = 'Support & Help Center — MS Family Customer Care';
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col justify-between">
      <Navbar />
      <main className="pt-24 pb-16 flex-1 space-y-12">
        <Support />
        <div className="max-w-4xl mx-auto px-4">
          <AppInfoDocViewer docId="contact" isDirectRoute={true} />
        </div>
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
