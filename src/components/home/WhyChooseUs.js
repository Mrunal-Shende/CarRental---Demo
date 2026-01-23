import React from 'react';
import { ChevronRight, HeartHandshake, Users, Sparkles } from 'lucide-react';
import whyChooseUsImg from '../../assets/whychooseus.jpeg';

const WhyChooseUs = () => (
  <section className="relative h-auto py-12 lg:h-[500px] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${whyChooseUsImg})` }}>
      <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]"></div> 
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center text-white">
      <div className="mb-12">
        <p className="text-blue-400 font-black tracking-[0.3em] text-[12px] md:text-[14px] uppercase mb-1">The ETC Edge</p>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Why Choose Us?</h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full shadow-lg"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        <Feature icon={<ChevronRight size={40}/>} title="Various Services" items={["Airport Transfers", "Corporate Services", "Conference & MICE", "Rent A Cab (RAP)"]} />
        <Feature icon={<HeartHandshake size={40}/>} title="Value Added" items={["24/7 Availability", "Mobile App Enabled", "On-Board Ent.", "Safety First"]} />
        <Feature icon={<Users size={40}/>} title="Driver Profile" items={["Punctuality", "Well-Groomed", "Local Knowledge", "Uniformed"]} />
        <Feature icon={<Sparkles size={40}/>} title="Salient Features" items={["Hotel Booking", "All Credit Cards", "Online Booking", "100% Disinfected"]} />
      </div>
    </div>
  </section>
);

const Feature = ({ icon, title, items }) => (
  <div className="flex flex-col items-center group">
    <div className="w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center mb-6 bg-white/10 backdrop-blur-md group-hover:border-blue-400 transition-all duration-500 text-blue-400">
      {icon}
    </div>
    <h3 className="text-[16px] font-black uppercase tracking-tighter mb-4 border-b border-white/20 pb-2 w-full">{title}</h3>
    <ul className="space-y-1 text-center text-gray-200 text-[14px] uppercase">
      {items.map((item, idx) => <li key={idx}>{item}</li>)}
    </ul>
  </div>
);

export default WhyChooseUs;