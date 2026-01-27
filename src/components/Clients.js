import React from 'react';

// Sabhi images ke imports (1-51 and New ones)
import img1 from '../assets/clients/1.jpg';
import img2 from '../assets/clients/2.jpg';
import img3 from '../assets/clients/3.jpg';
import img5 from '../assets/clients/5.jpg';
import img6 from '../assets/clients/6.jpg';
import img7 from '../assets/clients/7.jpg';
import img9 from '../assets/clients/9.jpg';
import img10 from '../assets/clients/10.jpg';
import img11 from '../assets/clients/11.jpg';
import img12 from '../assets/clients/12.jpg';
import img13 from '../assets/clients/13.jpg';
import img14 from '../assets/clients/14.jpg';
import img16 from '../assets/clients/16.jpg';
import img17 from '../assets/clients/17.jpg';
import img18 from '../assets/clients/18.jpeg';
import img19 from '../assets/clients/19.jpeg';
import img20 from '../assets/clients/20.png';
import img21 from '../assets/clients/21.webp';
import img22 from '../assets/clients/22.jpg';
import img23 from '../assets/clients/23.png';
import img24 from '../assets/clients/24.jpg';
import img25 from '../assets/clients/25.png';
import img26 from '../assets/clients/26.jpeg';
import img27 from '../assets/clients/27.png';
import img28 from '../assets/clients/28.webp';
import img29 from '../assets/clients/29.png';
import img30 from '../assets/clients/30.png';
import img31 from '../assets/clients/31.jpeg';
import img32 from '../assets/clients/32.png';
import img33 from '../assets/clients/33.jpg';
import img34 from '../assets/clients/34.png';
import img35 from '../assets/clients/35.png';
import img36 from '../assets/clients/36.png';
import img37 from '../assets/clients/37.jpeg';
import img38 from '../assets/clients/38.png';
import img39 from '../assets/clients/39.png';
import img40 from '../assets/clients/40.png';
import img41 from '../assets/clients/41.png';
import img42 from '../assets/clients/42.png';
import img43 from '../assets/clients/43.jpg';
import img44 from '../assets/clients/44.jpeg';
import img45 from '../assets/clients/45.png';
import img46 from '../assets/clients/46.jpeg';
import img47 from '../assets/clients/47.png';
import img48 from '../assets/clients/48.jpg';
import img49 from '../assets/clients/49.png';
import img50 from '../assets/clients/50.jpg';
import img51 from '../assets/clients/51.png';

// New Imports
import agsLogo from '../assets/clients/New/AGS.jpeg';
import ajubaLogo from '../assets/clients/New/ajuba_solutions_india_pvt_ltd_logo.jpeg';
import amiLogo from '../assets/clients/New/american-megatrends-1-logo-png-transparent.png';
import axlesLogo from '../assets/clients/New/Axles-India-logo.webp';
import icuLogo from '../assets/clients/New/ICU.png';
import infinityLogo from '../assets/clients/New/INFINITY.jpeg';
import isuzuLogo from '../assets/clients/New/Isuzu.svg.png';
import itcLogo from '../assets/clients/New/ITC.jpg';
import omegaLogo from '../assets/clients/New/Omega.png';
import birlaSoftLogo from '../assets/clients/New/BIRLASOFT.jpg';
import cholaMsLogo from '../assets/clients/New/Chola-MS-Insura11876.jpg';
import itpcLogo from '../assets/clients/New/ITPC.png';
import starHealthLogo from '../assets/clients/New/STAR.jpeg';
import recodeLogo from '../assets/clients/New/recode_solutions_logo.jpeg';
import kweLogo from '../assets/clients/New/KWE.png';
import tafeLogo from '../assets/clients/New/TAFE.png';
import tmtlLogo from '../assets/clients/New/TMTL LOGO.jpg';
import transunionLogo from '../assets/clients/New/Transunion.png';
import coromandelLogo from '../assets/clients/New/coromandel logo.png';
import dinexLogo from '../assets/clients/New/DINEX.jpeg';
import gigamonLogo from '../assets/clients/New/Gigamon.png';
import kennametalLogo from '../assets/clients/New/Kennametal.png';
import kobelcoLogo from '../assets/clients/New/Kobelco.png';
import kumaranLogo from '../assets/clients/New/KUMARAN.jpeg';
import globalLogicLogo from '../assets/clients/New/Globallogic.webp';
import agpLogo from '../assets/clients/New/logo_1.png';
import usConsulateLogo from '../assets/clients/New/US CONSULATE.jpg';


const Clients = () => {
  // Sirf image data rakha hai, taaki grid images ke count par chale
  const clientLogos = [
    { src: img1 }, { src: img2 }, { src: img3 }, { src: img5 },
    { src: img6 }, { src: img7 }, { src: img9 }, { src: img10 },
    { src: img11 }, { src: img12 }, { src: img13 }, { src: img14 }, 
    { src: img16 }, { src: img17 }, { src: img18 }, { src: img19 }, 
    { src: img20 }, { src: img21 }, { src: img22 }, { src: img23 }, 
    { src: img24 }, { src: img25 }, { src: img26 }, { src: img27 }, 
    { src: img28 }, { src: img29 }, { src: img30 }, { src: img31 }, 
    { src: img32 }, { src: img33 }, { src: img34 }, { src: img35 }, 
    { src: img36 }, { src: img37 }, { src: img38 }, { src: img39 }, 
    { src: img40 }, { src: img41 }, { src: img42 }, { src: img43 }, 
    { src: img44 }, { src: img45 }, { src: img46 }, { src: img47 }, 
    { src: img48 }, { src: img49 }, { src: img50 }, { src: img51 },
    { src: agsLogo }, { src: ajubaLogo }, 
    { src: amiLogo }, { src: axlesLogo }, { src: icuLogo }, 
    { src: infinityLogo }, { src: isuzuLogo }, { src: itcLogo }, 
    { src: omegaLogo }, { src: birlaSoftLogo },
    { src: cholaMsLogo }, { src: itpcLogo }, { src: starHealthLogo },
    { src: recodeLogo }, { src: kweLogo }, { src: tafeLogo },
    { src: tmtlLogo }, { src: transunionLogo }, { src: coromandelLogo },
    { src: dinexLogo }, { src: gigamonLogo }, { src: kennametalLogo },
    { src: kobelcoLogo }, { src: kumaranLogo }, { src: globalLogicLogo }, 
    { src: agpLogo }, { src: usConsulateLogo }
  ];

  return (
    <section id="clients" className="py-20 bg-white pt-32">
      <div className="container mx-auto px-4 md:px-12">
        <div className="bg-[#1a2b56] rounded-t-[3rem] p-12 text-center text-white shadow-lg">
          <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl text-xl">🤝</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
            Our <span className="text-yellow-400">Trusted Clients</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-300 text-sm md:text-base leading-relaxed font-medium italic">
            Delivering secure and premium transportation services for over 25 years.
          </p>
        </div>

        <div className="py-20 bg-slate-50/50 px-8 border-x border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Grayscale remove kar di hai taaki original color dikhe */}
            {clientLogos.map((client, index) => (
              <div 
                key={`logo-${index}`} 
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center h-40"
              >
                <img 
                  src={client.src} 
                  alt={`Client Logo ${index + 1}`} 
                  className="max-h-full max-w-full object-contain" 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;