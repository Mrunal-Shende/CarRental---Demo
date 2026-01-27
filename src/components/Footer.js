import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, Instagram, Linkedin, MapPin, ChevronRight, 
  Youtube, FileText, Download, Phone, Mail 
} from 'lucide-react';
import rwtlogo from '../assets/rwtlogo.png'; 

const Footer = () => {
  const infoLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Clients', path: '/clients' },
    { name: 'Branches', path: '/branches' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const handleDownloadTariff = () => {
    const link = document.createElement("a");
    link.href = "/tariff-details.pdf"; 
    link.download = "ETC_Tariff_Details.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-[#0a1128] text-white pt-10 pb-3 relative overflow-hidden font-sans border-t border-white/10">
      {/* Background World Map Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/world-map.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* 1. BRAND & IDENTITY */}
          <div className="space-y-6">
            <div className="h-12 w-48 mb-4">
               <img 
                 src="https://www.etconline.in/images/logo.png" 
                 alt="ETC Logo" 
                 className="h-full object-contain brightness-0 invert" 
               />
            </div>
            {/* Font size uniform with other headings/text */}
            <p className="text-white text-sm font-black uppercase tracking-widest leading-relaxed">
              Express Travel Corporate <br /> Services Private Limited
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 text-white">
                <MapPin className="w-5 h-5 text-[#1C4D8D] shrink-0 mt-1" />
                {/* Fixed Address Font Size to match UI */}
                <p className="text-sm leading-relaxed font-bold">
                  3rd No.20, Duraisamy Street, <br />
                  Nungambakkam, Chennai-600034
                </p>
              </div>
            </div>
          </div>

          {/* 2. INFORMATION */}
          <div className="space-y-6">
            <h4 className="text-[#1C4D8D] font-black text-sm uppercase tracking-widest border-l-4 border-[#1C4D8D] pl-3">
              Information
            </h4>
            <ul className="grid grid-cols-1 gap-3">
              {infoLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white hover:text-[#1C4D8D] text-sm font-bold uppercase tracking-widest transition-all flex items-center group">
                    <ChevronRight size={16} className="text-[#1C4D8D] mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. CONTACT & TARIFF (Uniform Font Sizes) */}
          <div className="space-y-6">
            <h4 className="text-[#1C4D8D] font-black text-sm uppercase tracking-widest border-l-4 border-[#1C4D8D] pl-3">
              Tariff & Contact
            </h4>
            <div className="space-y-4">
              <button 
                onClick={handleDownloadTariff}
                className="bg-[#1C4D8D] text-white px-5 py-3 rounded-xl flex items-center gap-3 animate-pulse border border-blue-400/30 hover:scale-105 transition-transform"
              >
                <FileText size={20} />
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-tighter leading-none">Download</p>
                  <p className="text-sm font-black uppercase">Tariff 2026</p>
                </div>
                <Download size={14} className="ml-1" />
              </button>

              <div className="pt-2 space-y-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-[#1C4D8D]" />
                    <p className="text-white text-sm font-black tracking-tight">+91-9791111275</p>
                  </div>

                </div>
                
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-[#1C4D8D]" />
                  <p className="text-white text-sm font-bold lowercase tracking-wide">info@expresstravelcorp.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* 4. CONNECT */}
          <div className="space-y-6">
            <h4 className="text-[#1C4D8D] font-black text-sm uppercase tracking-widest border-l-4 border-[#1C4D8D] pl-3">
              Connect
            </h4>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#!" className="p-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-[#1C4D8D] transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2 text-[#1C4D8D] text-xs font-black uppercase italic">
                <div className="w-2 h-2 bg-[#1C4D8D] rounded-full animate-ping" />
                Since 1999
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-5 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 font-black text-[10px] uppercase tracking-[0.2em]">
          <p>© 2026 Express Travel Corporate Services. All Rights Reserved.</p>
          
          <div className="flex items-center gap-3">
            <span className="text-[8px] text-gray-500 uppercase tracking-widest">Powered By</span>
            <img 
              src={rwtlogo} 
              alt="RWT Logo" 
              className="h-8 w-auto object-contain opacity-80" 
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.02); box-shadow: 0 0 15px rgba(28, 77, 141, 0.5); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;