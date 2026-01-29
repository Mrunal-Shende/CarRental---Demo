import React from 'react';
import { Link } from 'react-router-dom';

// Icons
import inquiryIcon from '../../assets/inquriy.png'; 
import callIcon from '../../assets/call.png';
import whatsappIcon from '../../assets/whatsapp.png';

const FloatingControls = () => {
  // Common number for both Call and WhatsApp (Country code 91 included)
  const officialNumber = "919791111275"; 

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3">
      
      {/* Inquiry Now */}
      <Link to="/contact" className="w-10 h-10 md:w-12 md:h-12 rounded-full shadow-2xl hover:scale-110 transition-transform group flex items-center justify-center relative">
        <span className="absolute right-14 bg-white text-slate-900 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-slate-100 whitespace-nowrap">Enquiry Now</span>
        <img src={inquiryIcon} alt="Inquiry" className="w-full h-full rounded-full z-10 relative object-cover" />
        <span className="absolute inset-0 rounded-full bg-blue-900 animate-ping opacity-60 scale-125"></span>
      </Link>

      {/* Call Us - Using the same official number */}
      <a href={`tel:+${officialNumber}`} className="w-10 h-10 md:w-12 md:h-12 rounded-full shadow-2xl hover:scale-110 transition-transform group flex items-center justify-center relative">
        <span className="absolute right-14 bg-white text-slate-900 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-slate-100 whitespace-nowrap">Call Us</span>
        <img src={callIcon} alt="Call" className="w-full h-full rounded-full z-10 relative object-cover" />
        <span className="absolute inset-0 rounded-full bg-red-800 animate-ping opacity-60 scale-125"></span>
      </a>
      
      {/* WhatsApp - Using the same official number */}
      <a href={`https://wa.me/${officialNumber}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-full shadow-2xl hover:scale-110 transition-transform group flex items-center justify-center relative">
        <span className="absolute right-14 bg-white text-slate-900 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-slate-100 whitespace-nowrap">WhatsApp</span>
        <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full rounded-full z-10 relative object-cover" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-60 scale-125"></span>
      </a>
    </div>
  );
};

export default FloatingControls;