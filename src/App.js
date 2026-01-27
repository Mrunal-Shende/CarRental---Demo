import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import LuxuryCar from './components/LuxuryCar';
import Team from './components/Team';
import Clients from './components/Clients';
import Branches from './components/Branches';
import ContactUs from './components/ContactUs';
import InquiryForm from './components/InquiryForm';

// FloatingControls import (Home folder se)
import FloatingControls from './components/home/FloatingControls';

// Page change hone par scroll top par le jane ke liye
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  // Aapka common contact data
  const contactInfo = {
    phoneNumber: "8805547785",
    whatsappNumber: "8805547785"
  };

  return (
    <Router>
      <ScrollToTop />
      <Header />
      
      {/* Main Content Area */}
      <div className="min-h-screen pt-0"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/luxury-car" element={<LuxuryCar />} />
          <Route path="/team" element={<Team />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/inquiry" element={<InquiryForm />} /> 
        </Routes>
      </div>

      {/* --- Floating Controls (Inquiry, Call, WhatsApp) --- */}
      <FloatingControls 
        phoneNumber={contactInfo.phoneNumber} 
        whatsappNumber={contactInfo.whatsappNumber} 
      />
      
      <Footer />
    </Router>
  );
}

export default App;