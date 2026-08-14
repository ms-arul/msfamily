import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DashboardPreview from './components/DashboardPreview';
import OCRScanner from './components/OCRScanner';
import FamilyFinance from './components/FamilyFinance';
import GoldSilver from './components/GoldSilver';
import AIInsights from './components/AIInsights';
import Subscription from './components/Subscription';
import FAQ from './components/FAQ';
import Legal from './components/Legal';
import Support from './components/Support';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-primary selection:text-white relative z-0">
      {/* Background Glowing Orbs for Glassmorphism */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-400/10 blur-[100px]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[60vw] rounded-full bg-purple-400/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-pink-400/10 blur-[100px]"></div>
      </div>
      <Navbar />
      <main>
        <div id="home"><Hero /></div>
        <div id="features"><Features /></div>
        <div id="dashboard"><DashboardPreview /></div>
        <div id="ocr"><OCRScanner /></div>
        <div id="family"><FamilyFinance /></div>
        <div id="gold-silver"><GoldSilver /></div>
        <div id="insights"><AIInsights /></div>
        <div id="subscription"><Subscription /></div>
        <div id="faq"><FAQ /></div>
        <div id="legal"><Legal /></div>
        <div id="support"><Support /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
