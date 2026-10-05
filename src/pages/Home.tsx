import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import DashboardPreview from '../components/DashboardPreview';
import OCRScanner from '../components/OCRScanner';
import FamilyFinance from '../components/FamilyFinance';
import AIInsights from '../components/AIInsights';
import { AppDownloadBanner } from '../components/AppDownloadBanner';
import { MobilePlayStoreBar } from '../components/MobilePlayStoreBar';
import Subscription from '../components/Subscription';
import FAQ from '../components/FAQ';
import Legal from '../components/Legal';
import Support from '../components/Support';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="relative z-0">
      <Navbar />
      <main>
        <div id="home"><Hero /></div>
        <div id="features"><Features /></div>
        <div id="dashboard"><DashboardPreview /></div>
        <div id="ocr"><OCRScanner /></div>
        <div id="family"><FamilyFinance /></div>
        <div id="insights"><AIInsights /></div>
        <div id="download"><AppDownloadBanner /></div>
        <div id="subscription"><Subscription /></div>
        <div id="faq"><FAQ /></div>
        <div id="legal"><Legal /></div>
        <div id="support"><Support /></div>
      </main>
      <Footer />
      <MobilePlayStoreBar />
    </div>
  );
}

export default Home;
