import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, HelpCircle } from 'lucide-react';

const FloatingControls = ({ phoneNumber, whatsappNumber }) => (
  <div className="fixed bottom-8 right-8 z-[9999] flex flex-col gap-4">
    <Link to="/contact" className="bg-blue-900 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group flex items-center justify-center relative animate-bounce-subtle">
      <span className="absolute right-16 bg-white text-blue-900 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-slate-100">Inquiry Now</span>
      <HelpCircle size={28} />
    </Link>
    <a href={`tel:+${phoneNumber}`} className="bg-[#f25c5c] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform group flex items-center justify-center relative">
      <span className="absolute right-16 bg-white text-slate-900 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-slate-100">Call Us</span>
      <Phone size={28} fill="white" />
      <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-20"></span>
    </a>
    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform group flex items-center justify-center relative">
      <span className="absolute right-16 bg-white text-slate-900 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-slate-100">WhatsApp</span>
      <MessageCircle size={30} fill="white" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
    </a>
  </div>
);

export default FloatingControls;