import React from 'react';
import { Link } from 'react-router-dom';

// Fixed paths: home folder se assets tak pahunchne ke liye ../../ use kiya hai
import inquiryIcon from '../../assets/inquriy.png'; 
import callIcon from '../../assets/call.png';
import whatsappIcon from '../../assets/whatsapp.png';

const FloatingControls = ({ phoneNumber, whatsappNumber }) => {
  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col gap-5">
      
      {/* Inquiry Now */}
      <Link to="/contact" className="w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group flex items-center justify-center relative">
        <span className="absolute right-20 bg-white text-blue-900 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-slate-100 whitespace-nowrap">Inquiry Now</span>
        <img src={inquiryIcon} alt="Inquiry" className="w-full h-full rounded-full z-10 relative object-cover" />
        <span className="absolute inset-0 rounded-full bg-blue-900 animate-ping opacity-90 scale-150"></span>
      </Link>

      {/* Call Us */}
      <a href={`tel:+${phoneNumber}`} className="w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl hover:scale-110 transition-transform group flex items-center justify-center relative">
        <span className="absolute right-20 bg-white text-slate-900 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-slate-100 whitespace-nowrap">Call Us</span>
        <img src={callIcon} alt="Call" className="w-full h-full rounded-full z-10 relative object-cover" />
        <span className="absolute inset-0 rounded-full bg-red-800 animate-ping opacity-90 scale-150"></span>
      </a>
      
      {/* WhatsApp */}
      <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl hover:scale-110 transition-transform group flex items-center justify-center relative">
        <span className="absolute right-20 bg-white text-slate-900 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-slate-100 whitespace-nowrap">WhatsApp</span>
        <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full rounded-full z-10 relative object-cover" />
        <span className="absolute inset-0 rounded-full bg-[#075E54] animate-ping opacity-90 scale-150"></span>
      </a>
    </div>
  );
};

export default FloatingControls;