import React from 'react';
import { ShieldCheck, Globe, Clock, Smartphone, Building2, Award, FileText, CheckCircle } from 'lucide-react';
import bgImage from '../assets/About.jpeg'; 

const About = () => {
  const stats = [
    { label: "Years of Experience", value: "30+", icon: <Clock size={20} /> },
    { label: "Owned Fleet", value: "50+", icon: <Building2 size={20} /> },
    { label: "Major Cities", value: "PAN India", icon: <Globe size={20} /> },
  ];

  const objectives = [
    {
      title: "PAN India Network",
      desc: "Branch operations in Chennai, Bangalore, Hyderabad, New Delhi, Bhopal, and Pune. Expanding to Tier 2 & 3 cities.",
      icon: <Globe size={24} />
    },
    {
      title: "In-House Technology",
      desc: "New age mobile tool app engineered for cost-effective, transparent, and reliable travel management.",
      icon: <Smartphone size={24} />
    },
    {
      title: "Young Fleet Policy",
      desc: "We maintain our vehicles strictly, ensuring no car in our fleet exceeds 30 months of age.",
      icon: <ShieldCheck size={24} />
    },
    {
      title: "24/7 Dedicated Support",
      desc: "Dedicated corporate desk available round the clock for bookings and emergency assistance.",
      icon: <Clock size={24} />
    }
  ];

  const accreditations = [
    { title: "ISO 9001:2015", subtitle: "QUALITY MANAGEMENT", desc: "International standards for service quality and safety.", icon: <Award size={24} /> },
    { title: "IATA Accredited", subtitle: "TRAVEL EXCELLENCE", desc: "Recognized member of global travel and transport standards.", icon: <CheckCircle size={24} /> },
    { title: "GST Compliant", subtitle: "TAXATION & LEGAL", desc: "Fully registered and compliant for corporate tax processing.", icon: <FileText size={24} /> },
    { title: "Safety Verified", subtitle: "FLEET AUDITED", desc: "Regular 30-point safety checks on all luxury vehicles.", icon: <ShieldCheck size={24} /> },
  ];

  const clients = [
    "British Deputy High Commission", "Birla Soft", "Taj Group of Hotels", "ITC Park Sheraton Hotels",
    "Kenna Metal Widia", "Dun & Brad Trans Union Ltd", "Oxford University Press", "Reliance Petro Marketing"
  ];

  return (
    <main className="bg-white pt-0"> 
      
      {/* 1. HERO SECTION - Reduced padding from pt-44/pb-24 to pt-32/pb-16 */}
      <section className="bg-[#0a1128] pt-32 pb-16 px-6 text-center text-white relative border-b border-white/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-blue-400 font-bold tracking-[0.4em] uppercase text-[9px] mb-4 italic">Established Since 1990</p>
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-tight">
            About <span className="text-blue-500 italic">Express Travel</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed italic max-w-2xl mx-auto border-l-2 border-blue-600/30 pl-6">
            "Clients are our Prime Assets. We nurture a culture founded on TRUST, PRIDE and TEAM WORK."
          </p>
        </div>
      </section>

      {/* 2. HISTORY & LEADERSHIP - Reduced padding */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-black text-slate-900 uppercase leading-tight tracking-tighter">
              Successful <br/><span className="text-blue-600 italic">Entrepreneurship</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm font-medium">
              <p>Express Travel was founded by <b>Mr. B.R. Arumugam</b>. Today, led by <b>Mr. A. Bharath</b>, we operate nearly 50+ premium fleets.</p>
              <p>Our vision has enabled the group to carve a special <span className="font-bold text-blue-600 italic uppercase">Niche</span> in the Travel industry.</p>
            </div>
            
            <div className="grid grid-cols-3 gap-3 pt-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-center">
                  <div className="text-blue-600 flex justify-center mb-1">{stat.icon}</div>
                  <div className="text-xl font-black text-slate-900">{stat.value}</div>
                  <div className="text-[8px] uppercase font-bold text-gray-400 tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white">
              <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200" alt="Corporate" className="w-full h-64 md:h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* --- BACKGROUND SECTION (Mission & Objectives) - Reduced py --- */}
      <div className="relative bg-cover bg-fixed bg-center py-16 px-6" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="absolute inset-0 bg-black/85 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold text-blue-400 mb-3 italic">"Our Mission"</h3>
              <p className="text-gray-300 text-sm leading-relaxed">To provide safe, reliable, and cost-effective travel solutions through innovation and customer-centricity.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold text-blue-400 mb-3 italic">"Our Vision"</h3>
              <p className="text-gray-300 text-sm leading-relaxed">To be the most preferred travel partner globally by setting benchmarks in service quality.</p>
            </div>
          </div>

          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Scope & <span className="text-blue-500">Objectives</span></h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((obj, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-lg p-6 rounded-[1.5rem] border border-white/10 group">
                <div className="mb-4 p-3 bg-blue-500/20 w-fit rounded-xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">{obj.icon}</div>
                <h3 className="text-lg font-black mb-2 uppercase text-white leading-tight">{obj.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. GLOBAL STANDARDS (Accreditations) - Updated to Light Background to match spacing logic */}
      <section className="bg-slate-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-black mb-12 uppercase tracking-tighter text-slate-900">Global Standards</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accreditations.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 hover:shadow-lg transition-all">
              <div className="text-blue-600 flex justify-center mb-4">{item.icon}</div>
              <h3 className="font-black text-sm uppercase text-slate-900">{item.title}</h3>
              <p className="text-blue-600 text-[8px] font-black tracking-widest mb-2 uppercase">{item.subtitle}</p>
              <p className="text-slate-500 text-[11px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      
    </main>
  );
};

export default About;