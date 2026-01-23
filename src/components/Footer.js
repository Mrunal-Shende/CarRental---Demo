import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, Facebook, Instagram, 
  Linkedin, MapPin, MessageCircle, ChevronRight, ExternalLink, Youtube 
} from 'lucide-react';

const Footer = () => {
  // Navigation links for 'Information' column
  const infoLinks = [
   // { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    //{ name: 'Luxury car Rentals', path: '/luxury-car' },
    //{ name: 'Team', path: '/team' },
    { name: 'Clients', path: '/clients' },
    //{ name: 'Tariff', path: '/tariff' },
    { name: 'Branches', path: '/branches' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <footer className="bg-[#0a1128] text-white pt-3 pb-3 relative overflow-hidden font-sans">
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
        
   

        {/* --- MAIN CONTENT GRID --- */}
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
            {/* Bold White Brand Text */}
            <p className="text-white text-[12px] font-black uppercase tracking-widest leading-relaxed">
              Express Travel Corporate <br /> Services Private Limited
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 text-white">
                <MapPin className="w-5 h-5 text-[#1C4D8D] shrink-0 mt-1" />
                <p className="text-[13px] leading-relaxed font-bold">
                  3rd No.20, Duraisamy Street, <br />
                  Nungambakkam, Chennai-600034
                </p>
              </div>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#1C4D8D] hover:text-white transition-colors"
              >
                Find Us on Map <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* 2. INFORMATION - BOLD WHITE LINKS */}
          <div className="space-y-6">
            <h4 className="text-[#1C4D8D] font-black text-sm uppercase tracking-widest border-l-4 border-[#1C4D8D] pl-3">
              Information
            </h4>
            <ul className="grid grid-cols-1 gap-2.5">
              {infoLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white hover:text-[#1C4D8D] text-[12px] font-black uppercase tracking-widest transition-all flex items-center group">
                    <ChevronRight size={14} className="text-[#1C4D8D] mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. CONTACT INFO - BOLD CONTENT */}
          <div className="space-y-6">
            <h4 className="text-[#1C4D8D] font-black text-sm uppercase tracking-widest border-l-4 border-[#1C4D8D] pl-3">
              Contact Info
            </h4>
            <div className="space-y-5">
              <div>
                <p className="text-[#1C4D8D] font-black text-[10px] uppercase mb-1 tracking-tighter">Phone Line</p>
                <p className="text-white text-base font-black tracking-tight tracking-wider">
                  +91-44-2827 2279
                </p>
              </div>
              <div>
                <p className="text-[#1C4D8D] font-black text-[10px] uppercase mb-1 tracking-tighter">Mobile Support</p>
                <p className="text-white font-black text-base tracking-wider">
                  +91-9791111275
                </p>
              </div>
              <div className="pt-2 flex items-center gap-2 text-[#1C4D8D] text-[11px] font-black uppercase italic tracking-[0.1em]">
                <div className="w-2 h-2 bg-[#1C4D8D] rounded-full animate-pulse" />
                Since 1999
              </div>
            </div>
          </div>

          {/* 4. CONNECT WITH US */}
          <div className="space-y-6">
            <h4 className="text-[#1C4D8D] font-black text-sm uppercase tracking-widest border-l-4 border-[#1C4D8D] pl-3">
              Connect
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#1C4D8D] rounded-lg">
                  <Mail size={18} className="text-white" />
                </div>
                <a href="mailto:info@expresstravelcorp.com" className="text-[12px] text-white hover:text-[#1C4D8D] font-black transition-colors break-all">
                  info@expresstravelcorp.com
                </a>
              </div>
            </div>
            
            <div className="pt-4 flex gap-4">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-[#1C4D8D] hover:border-[#1C4D8D] transition-all duration-300 shadow-lg">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-5 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 font-black text-[10px] uppercase tracking-[0.2em]">
          <p>© 2026 Express Travel Corporate Services. All Rights Reserved.</p>
          <div className="flex gap-6 italic text-[#1C4D8D]">
             <span>Premium Mobility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;