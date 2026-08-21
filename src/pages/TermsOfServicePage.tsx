import { useEffect } from 'react';
import { AppInfoDocViewer } from '../components/AppInfoDocViewer';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsOfServicePage() {
  useEffect(() => {
    document.title = 'MS Family Terms of Service — Terms & Conditions of Use';
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col justify-between">
      <Navbar />
      <main className="pt-20 lg:pt-22 pb-12 flex-1">
        <AppInfoDocViewer docId="terms" isDirectRoute={true} />
      </main>
      <Footer />
    </div>
  );
}
