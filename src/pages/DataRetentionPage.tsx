import { useEffect } from 'react';
import { AppInfoDocViewer } from '../components/AppInfoDocViewer';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DataRetentionPage() {
  useEffect(() => {
    document.title = 'MS Family Data Retention Policy — Archiving & Deletion Lifecycles';
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col justify-between">
      <Navbar />
      <main className="pt-20 lg:pt-22 pb-12 flex-1">
        <AppInfoDocViewer docId="retention" isDirectRoute={true} />
      </main>
      <Footer />
    </div>
  );
}
