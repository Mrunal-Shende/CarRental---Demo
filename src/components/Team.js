import React from 'react';
import { Quote } from 'lucide-react';
import mohanImg from '../assets/mohan.jpg';
import alagarImg from '../assets/alagarswamy.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: "Mohan Ramadass",
      role: "Founder & Managing Director",
      image: mohanImg, 
      bio: "He stands as a beacon of entrepreneurial spirit and resilience, having elevated ETC from humble beginnings over the past 25 years. Through visionary leadership and steadfast determination, he has not only navigated challenges but also defined industry standards.",
      vision: "With a deep passion for travel, looking in the future, He is focused on driving further innovation and expanding the company's services to enhance the car travel experience.",
      experience: "25+ Years"
    },
    {
      name: "Alagarsamy",
      role: "Chief Operating Officer",
      image: alagarImg,
      bio: "Alagarswamy with 23-year journey in the car rental industry, starting from the ground up, worked across car rental industry like AVIS, Car Club & Carzonrent.",
      vision: "Responsible for leading the ETC business in all verticals, operations, driving profitability, deliver exceptional results, strategic planning, and team development.",
      experience: "23+ Years"
    }
  ];

  return (
    <section id="team" className="py-24 bg-[#fafafa]">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm mb-4">Leadership</h4>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Our <span className="text-blue-600">Experts</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Side-by-Side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-6 lg:p-10 shadow-lg border border-gray-100 flex flex-col h-full"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-6">
                {/* Image Container - Fixed for Full Image on Mobile */}
                <div className="w-full md:w-1/2 lg:w-2/5 shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-2"></div>
                    
                    {/* Fixed Logic: aspect-auto and object-contain for full visibility on mobile */}
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="relative z-10 w-full h-auto md:h-72 lg:h-80 object-contain md:object-cover object-top rounded-2xl shadow-md transition-all duration-500"
                    />
                    
                    <div className="absolute -bottom-2 -right-2 z-20 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
                      <p className="text-[10px] font-black uppercase tracking-tighter leading-none">Exp: {member.experience}</p>
                    </div>
                  </div>
                </div>

                {/* Name and Role */}
                <div className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left mt-6 md:mt-0">
                  <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-1 leading-tight">{member.name}</h3>
                  <p className="text-blue-600 font-bold uppercase text-xs tracking-wider mb-6">{member.role}</p>
                  
                  <div className="relative">
                    <Quote className="hidden md:block absolute -top-4 -left-4 w-8 h-8 text-blue-50 opacity-60" />
                    <p className="text-slate-600 text-sm lg:text-base leading-relaxed italic relative z-10 font-medium">
                      "{member.bio}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision Box */}
              <div className="mt-auto bg-slate-50 p-6 rounded-2xl border-l-4 border-blue-600">
                <p className="text-slate-700 text-sm font-bold leading-relaxed">
                  <span className="text-blue-600 uppercase text-[10px] block mb-2 tracking-widest font-black">Strategic Vision</span>
                  {member.vision}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;