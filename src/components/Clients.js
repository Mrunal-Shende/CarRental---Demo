import React from 'react';

const Clients = () => {
  // 1. Aapke Second Code ka image data (Logo based)
  const clientLogos = [
    { name: "Alliance Française", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Logo-partenaire-alliance-francaise-paris.png/250px-Logo-partenaire-alliance-francaise-paris.png" },
    { name: "Alstom", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2NFVrvV1hDlLoz_5qjNcQNgIfQeO8ERXgZA&s" },
    { name: "AGS Health", src: "https://mma.prnewswire.com/media/1036804/AGS_Health_Logo.jpg?p=facebook" },
    { name: "Cytec", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Cytec_Logo.svg/1200px-Cytec_Logo.svg.png" },
    { name: "Travel House", src: "https://latest.sundayguardianlive.com/wp-content/uploads/2018/02/international-travel-house-rajiv%20kapoor.jpg" },
    { name: "ITC Welcomgroup", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVtHZ6uiPUItrKIPKyQZi169NQ_al15fQiNA&s" },
    { name: "Kennametal", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQonPp9WeUA9cuI2xWd7m6t3vZf0uXqsQr7A&s" },
    { name: "Petron", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrmA1ry-pYjFON3e4H4RSard9ZuHtANa9_UQ&s" },
    { name: "Taj Hotels", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Mkn1kGjXQbg7cg896Nq612ihFFuBkyFcOmP8pvqai5p-SGReC7vJmWIfgCvCfvMiAWM&usqp=CAU" },
    { name: "L&T Insurance", src: "https://cms-img.coverfox.com/L&T-insurance.jpg" },
    { name: "Birlasoft", src: "https://photos.prnewswire.com/prnfull/20130923/642400" }
  ];

  // 2. Aapke Second Code ki text-based client list
  const clientNames = [
    "coronis", "American Megatrends", "Axles India Limited",
    "CGI", "Chola MS", "Coromandel", "Dinex", "Gigamon", "Global Logo", "Hexaware",
    "icu medical", "infinity", "ISUZU", "ITC Limited", "ITPC", "Kobelco", "Kumaran Systems",
    "KWE Kintetsu World Express", "AG&P", "Malaysia Tourism", "Nexteer",
    "Omega Healthcare", "Pfizer", "Recorde", "Rockwell Collins",
    "TAFE", "TMTL", "TransUnion", "WIZ", "Zoho"
  ];

  return (
    <section id="clients" className="py-20 bg-white overflow-hidden pt-32">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* UI from 1st Code: Hero Header Section */}
        <div className="bg-[#1a2b56] rounded-t-[3rem] p-12 text-center text-white shadow-lg">
          <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
            <span className="text-xl">🤝</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
            Our <span className="text-yellow-400">Trusted Clients</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-300 text-sm md:text-base leading-relaxed font-medium">
            We partner with leading organizations across industries — proud to deliver secure, 
            reliable and premium transportation services for over 25 years.
          </p>
        </div>

        {/* UI from 1st Code: The Main Grid */}
        <div className="py-20 bg-slate-50/50 px-8 border-x border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-slate-800 mb-2 uppercase tracking-tight">Trusted by Industry Leaders</h3>
            <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full mb-4"></div>
            <p className="text-slate-500 text-sm font-bold">Below are the companies that trust us for corporate transport.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Displaying Image Logos from Data 2 */}
            {clientLogos.map((client, index) => (
              <div 
                key={`logo-${index}`} 
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center h-40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group"
              >
                <img 
                  src={client.src} 
                  alt={client.name} 
                  className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-110 cursor-pointer" 
                  onError={(e) => { e.target.parentElement.innerHTML = `<span class="text-slate-400 font-black text-xs uppercase text-center">${client.name}</span>` }}
                />
              </div>
            ))}

            {/* Displaying Text Names from Data 2 */}
            {clientNames.map((name, index) => (
              <div 
                key={`name-${index}`} 
                className="h-32 border border-gray-200 rounded-2xl flex items-center justify-center p-6 bg-white shadow-sm hover:shadow-xl hover:border-yellow-100 hover:-translate-y-2 transition-all duration-500 group"
              >
                <span className="text-slate-400 font-black text-[10px] md:text-xs text-center uppercase tracking-tighter group-hover:text-blue-900 transition-colors">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* UI from 1st Code: Partnering for Success - 360° Animation Version */}
        <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] rounded-b-[3rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-[60px]"></div>

          <div className="relative z-10 max-w-5xl mx-auto">
            <h4 className="text-lg md:text-xl font-black mb-10 tracking-[0.3em] uppercase opacity-90">
              Partnering for <span className="text-yellow-400">Success</span>
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { icon: "🎖️", value: "50+", label: "MNC Partners" },
                { icon: "🌐", value: "15+", label: "Cities Served" },
                { icon: "🤝", value: "25+", label: "Years of Excellence" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white/5 backdrop-blur-lg p-8 rounded-[2.5rem] border border-white/10 transition-all duration-500 hover:bg-white/15 hover:-translate-y-2 shadow-lg"
                >
                  {/* 360 Degree Rotating Icon Animation */}
                  <div className="w-14 h-14 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center border border-white/5 group-hover:rotate-[360deg] transition-transform duration-1000 ease-in-out">
                      <span className="text-3xl drop-shadow-md">{item.icon}</span>
                  </div>

                  <div className="text-4xl md:text-5xl font-black mb-2 italic tracking-tighter">
                    {item.value}
                  </div>
                  
                  <p className="text-blue-100 text-[10px] font-black uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity">
                    {item.label}
                  </p>

                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 bg-yellow-400 group-hover:w-1/3 transition-all duration-500 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;