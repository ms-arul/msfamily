import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import DataRetentionPage from './pages/DataRetentionPage';
import SubscriptionRefundPolicyPage from './pages/SubscriptionRefundPolicyPage';
import SecurityInfoPage from './pages/SecurityInfoPage';
import ChangelogPage from './pages/ChangelogPage';
import AboutPage from './pages/AboutPage';
import LegalHubPage from './pages/LegalHubPage';
import PublicDeleteAccountPage from './pages/PublicDeleteAccountPage';
import SupportPage from './pages/SupportPage';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0F19] font-sans text-slate-100 selection:bg-indigo-500 selection:text-white relative">
      <BrowserRouter>
        <Routes>
          {/* Main Homepage */}
          <Route path="/" element={<Home />} />

          {/* Authentication Entry */}
          <Route path="/login" element={<Login />} />

          {/* Canonical Google Play Privacy Policy Route */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />

          {/* Direct Legal & Compliance Routes */}
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/retention" element={<DataRetentionPage />} />
          <Route path="/refund-policy" element={<SubscriptionRefundPolicyPage />} />
          <Route path="/security" element={<SecurityInfoPage />} />
          <Route path="/legal" element={<LegalHubPage />} />

          {/* Public Account Deletion Portal (Google Play Requirement) */}
          <Route path="/delete-account" element={<PublicDeleteAccountPage />} />

          {/* Information & Support Routes */}
          <Route path="/changelog" element={<ChangelogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/support" element={<SupportPage />} />

          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
