import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/dronahq/Navigation';
import { Footer } from './components/dronahq/Footer';
import { Home } from './pages/Home';
import { Pricing } from './pages/Pricing';
import { About } from './pages/About';
import { Customers } from './pages/Customers';
import { Contact } from './pages/Contact';
import { Documentation } from './pages/Documentation';
import { Blog } from './pages/Blog';
import { SignIn } from './pages/SignIn';
import { StartBuilding } from './pages/StartBuilding';
import { Platform } from './pages/product/Platform';
import { AppBuilder } from './pages/product/AppBuilder';
import { Automation } from './pages/product/Automation';
import { ByIndustry } from './pages/solutions/ByIndustry';
import { ByUseCase } from './pages/solutions/ByUseCase';
import { Templates } from './pages/resources/Templates';
import { Community } from './pages/resources/Community';
import { Integrations } from './pages/Integrations';
import { Security } from './pages/Security';
import { Careers } from './pages/Careers';
import { PrivacyPolicy } from './pages/legal/PrivacyPolicy';
import { Terms } from './pages/legal/Terms';
import { CookiePolicy } from './pages/legal/CookiePolicy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#010731]">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/start-building" element={<StartBuilding />} />
          <Route path="/product/platform" element={<Platform />} />
          <Route path="/product/app-builder" element={<AppBuilder />} />
          <Route path="/product/automation" element={<Automation />} />
          <Route path="/solutions/by-industry" element={<ByIndustry />} />
          <Route path="/solutions/by-use-case" element={<ByUseCase />} />
          <Route path="/resources/templates" element={<Templates />} />
          <Route path="/resources/community" element={<Community />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/security" element={<Security />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
