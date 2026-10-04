import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveAppShowcase from './components/InteractiveAppShowcase';
import BetaTestingHub from './components/BetaTestingHub';
import EngineeringStandards from './components/EngineeringStandards';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CompliancePolicyModal from './components/CompliancePolicyModal';
import BrandKitModal from './components/BrandKitModal';
import DomainManagerModal from './components/DomainManagerModal';

export default function App() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [brandKitModalOpen, setBrandKitModalOpen] = useState(false);
  const [domainModalOpen, setDomainModalOpen] = useState(false);
  const [betaTargetApp, setBetaTargetApp] = useState<string>('pauzen-vault');

  const handleSelectAppForBeta = (appId: string) => {
    setBetaTargetApp(appId);
    const betaSection = document.getElementById('beta-program');
    if (betaSection) {
      betaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090A0F] text-slate-100 flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* 3-Zone Top Bar */}
      <Navbar
        onOpenBrandKit={() => setBrandKitModalOpen(true)}
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenDomain={() => setDomainModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenDomain={() => setDomainModalOpen(true)} />

        {/* Interactive App Showcase & Smartphone Simulator */}
        <InteractiveAppShowcase
          onOpenPrivacy={() => setPrivacyModalOpen(true)}
          onSelectAppForBeta={handleSelectAppForBeta}
        />

        {/* Engineering Philosophy & Bento Grid */}
        <EngineeringStandards />

        {/* Google Play 14-Day Closed Testing Hub (20 Testers) */}
        <BetaTestingHub initialSelectedApp={betaTargetApp} />

        {/* Formal Contact & Direct Inquiry */}
        <ContactSection />
      </main>

      {/* Formal Footer */}
      <Footer
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenBrandKit={() => setBrandKitModalOpen(true)}
        onOpenDomain={() => setDomainModalOpen(true)}
      />

      {/* Compliance / Privacy Policy Modal (Mandatory for Google Play) */}
      <CompliancePolicyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

      {/* Brand Kit & Logo Modal */}
      <BrandKitModal
        isOpen={brandKitModalOpen}
        onClose={() => setBrandKitModalOpen(false)}
      />

      {/* Domain & Hosting Manager Modal */}
      <DomainManagerModal
        isOpen={domainModalOpen}
        onClose={() => setDomainModalOpen(false)}
      />
    </div>
  );
}
