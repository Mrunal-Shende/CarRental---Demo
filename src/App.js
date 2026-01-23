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
import InquiryForm from './components/InquiryForm'; // 1. Check karein spelling sahi hai (InquiryForm)

// Page change hone par scroll top par le jane ke liye
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      
      {/* 2. 'pt-0' kiya hai taaki Home aur About page top se touch hon. 
          Padding sirf un pages par aayegi jahan zarurat hai (CSS handle karega) */}
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
          
          {/* 3. Redirection Fix: Ye line Inquiry form ko connect karegi */}
          <Route path="/inquiry" element={<InquiryForm />} /> 
        </Routes>
      </div>
      
      <Footer />
    </Router>
  );
}

export default App;