import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import AboutSection from './components/sections/AboutSection';
import CommunitySection from './components/sections/CommunitySection';
import GuidelinesSection from './components/sections/GuidelinesSection';
import FAQSection from './components/sections/FAQSection';
import GetStartedSection from './components/sections/GetStartedSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SectionWrapper from './components/sections/SectionWrapper';
import { parseReferralFromURL, storeReferral } from './utils/referral';

// Guide Pages
import RegrasDoServidor from './pages/guias/RegrasDoServidor';
import ComoFazerRoleplay from './pages/guias/ComoFazerRoleplay';
import CriarPersonagens from './pages/guias/CriarPersonagens';
import SistemaProgressao from './pages/guias/SistemaProgressao';
import Economia from './pages/guias/Economia';
import FaccoesOrganizacoes from './pages/guias/FaccoesOrganizacoes';
import GuidelineQuiz from './pages/guias/GuidelineQuiz';
import RulesQuiz from './pages/guias/RulesQuiz';
import Diretrizes from './pages/guias/Diretrizes';
import TicketsEBugs from './pages/guias/tickets-e-bugs';
import LiveService from './pages/guias/live-service';
import Historia from './pages/Historia';
import EntrevistaYield from './pages/historia/EntrevistaYield';
import GTAptHistory from './pages/historia/GTApt';

const ReferralHandler = () => {
  const username = parseReferralFromURL();
  if (username) {
    storeReferral(username);
  }
  return <Navigate to="/" replace />;
};

const HomePage = () => (
  <>
    <SectionWrapper>
      <HeroSection />
    </SectionWrapper>
    <SectionWrapper>
      <FeaturesSection />
    </SectionWrapper>
    <SectionWrapper>
      <AboutSection />
    </SectionWrapper>
    <SectionWrapper>
      <CommunitySection />
    </SectionWrapper>
    <SectionWrapper>
      <GuidelinesSection />
    </SectionWrapper>
    <SectionWrapper>
      <GetStartedSection />
    </SectionWrapper>
    <SectionWrapper noDivider>
      <FAQSection />
    </SectionWrapper>
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-neutral-950 text-slate-200 antialiased selection:bg-amber-500/10 selection:text-amber-400">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:username" element={<ReferralHandler />} />
          <Route path="/guias/regras-do-servidor" element={<RegrasDoServidor />} />
          <Route path="/guias/como-fazer-roleplay" element={<ComoFazerRoleplay />} />
          <Route path="/guias/criar-personagens" element={<CriarPersonagens />} />
          <Route path="/guias/sistema-de-progressao" element={<SistemaProgressao />} />
          <Route path="/guias/economia" element={<Economia />} />
          <Route path="/guias/faccoes-e-organizacoes" element={<FaccoesOrganizacoes />} />
          <Route path="/guias/quiz" element={<GuidelineQuiz />} />
          <Route path="/guias/regras-quiz" element={<RulesQuiz />} />
          <Route path="/guias/diretrizes" element={<Diretrizes />} />
          <Route path="/guias/tickets-e-bugs" element={<TicketsEBugs />} />
          <Route path="/guias/live-service" element={<LiveService />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/historia/entrevista-yield" element={<EntrevistaYield />} />
          <Route path="/historia/gtapt" element={<GTAptHistory />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;