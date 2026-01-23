import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Headphones } from 'lucide-react';

const locations = [
  { 
    id: 'chennai', 
    name: 'Chennai (HO)', 
    type: 'HEAD OFFICE', 
    address: 'No.20, Duraisamy Street, Nungambakkam, Chennai-600034', 
    email: 'info@expresstravelcorp.com', 
    phone: '+91-44-2827 2279 / 4203 7171',
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.58667537356!2d80.2405893!3d13.0619623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526643615457ef%3A0x8898980188989801!2sDuraisamy%20St%2C%20Nungambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600034!5e0!3m2!1sen!2sin!4v1700000000000"
  },
  { 
    id: 'bangalore', 
    name: 'Bangalore', 
    type: 'REGIONAL HUB', 
    address: '1038/2, 23rd Main Road, A Block, Sahakaranagar, Bangalore - 560092', 
    email: 'blr@expresstravelcorp.com', 
    phone: '+91 7200091167',
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.8347895431!2d77.5815344!3d13.0747447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae186105c397e1%3A0x6a0a0a0a0a0a0a0a!2sSahakara%20Nagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000001"
  },
  { 
    id: 'bhopal', 
    name: 'Bhopal', 
    type: 'REGIONAL BRANCH', 
    address: 'Flat Number F-05, Shri Ram Complex, Shri Ram Colony, Hoshangabad Road, Bhopal - 462026', 
    email: 'bhopal@expresstravelcorp.com', 
    phone: '+91 7200091168',
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.621234567!2d77.448!3d23.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42!2sHoshangabad%20Rd%2C%20Bhopal!5e0!3m2!1sen!2sin!4v1700000000002"
  },
  { 
    id: 'mahipalpur', 
    name: 'Mahipalpur (Delhi)', 
    type: 'REGIONAL HUB', 
    address: 'K68 2nd Floor, Vasant Kunj Road, Mahipalpur – 110037 (Opposite TVS Ahinsa)', 
    email: 'delhi@expresstravelcorp.com', 
    phone: '+91 7845103222',
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.654321!2d77.123!3d28.545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19!2sMahipalpur%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000003"
  },
];

const Branches = () => {
  const [activeTab, setActiveTab] = useState('chennai');
  const current = locations.find(l => l.id === activeTab);

  return (
    <section className="py-24 px-4 bg-white max-w-7xl mx-auto pt-32 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <p className="text-blue-600 font-bold text-xs tracking-widest uppercase mb-2">Our Presence</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
            Our Strategic <span className="text-blue-600 italic font-medium lowercase">Network</span>
          </h2>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 bg-blue-50 px-5 py-3 rounded-2xl text-blue-600 font-black text-xs border border-blue-100 shadow-sm">
            <MapPin size={16}/> PAN INDIA
          </div>
          <div className="flex items-center gap-2 bg-slate-900 px-5 py-3 rounded-2xl text-white font-black text-xs shadow-lg">
            <Headphones size={16}/> 24/7 SUPPORT
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Sidebar: Branch Tabs */}
        <div className="lg:col-span-4 space-y-3">
          {locations.map((loc) => (
            <button 
              key={loc.id} 
              onClick={() => setActiveTab(loc.id)}
              className={`w-full flex items-center gap-4 p-6 rounded-[2rem] border transition-all duration-300 ${
                activeTab === loc.id 
                ? 'bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-200 translate-x-2' 
                : 'bg-gray-50 border-gray-100 text-slate-600 hover:bg-white hover:shadow-md'
              }`}
            >
              <div className={`p-3 rounded-xl ${activeTab === loc.id ? 'bg-white/20' : 'bg-blue-100 text-blue-600'}`}>
                <MapPin size={22} />
              </div>
              <div className="text-left">
                <p className="font-black text-sm uppercase tracking-tight">{loc.name}</p>
                <p className={`text-[10px] font-bold uppercase tracking-widest ${activeTab === loc.id ? 'text-blue-200' : 'text-gray-400'}`}>
                  {loc.type}
                </p>
              </div>
            </button>
          ))}

          {/* Support Card */}
          <div className="mt-8 p-8 bg-[#0a1128] rounded-[2.5rem] text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
            <Headphones className="text-blue-500 mb-6" size={32} />
            <h4 className="text-xl font-black mb-3">24/7 Dedicated Support</h4>
            <p className="text-xs text-gray-400 leading-relaxed italic">
              Centralized helpdesk for all branches ensuring seamless travel management across India.
            </p>
          </div>
        </div>

        {/* Right Content: Branch Details & Map */}
        <div className="lg:col-span-8 bg-white border border-gray-100 shadow-2xl rounded-[3rem] overflow-hidden flex flex-col">
          <div className="p-10 md:p-12 flex-grow">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
              <div>
                <p className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-2">Selected Location</p>
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">{current.name}</h3>
              </div>
              <a 
                href={`mailto:${current.email}`}
                className="bg-blue-600 text-white px-10 py-4 rounded-full font-black text-xs tracking-widest shadow-xl shadow-blue-100 hover:bg-slate-900 transition-all uppercase"
              >
                Send Email
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
              <div className="space-y-6">
                <div className="flex gap-5">
                  <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 h-fit"><MapPin size={24} /></div>
                  <p className="text-sm font-bold text-slate-600 leading-relaxed">{current.address}</p>
                </div>
                <div className="flex gap-5">
                  <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 h-fit"><Phone size={24} /></div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Call Us</p>
                    <p className="text-base font-black text-slate-900">{current.phone}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-5">
                  <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 h-fit"><Mail size={24} /></div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Email Address</p>
                    <p className="text-base font-black text-slate-900">{current.email}</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 h-fit"><Clock size={24} /></div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Work Hours</p>
                    <p className="text-base font-black text-slate-900">24/7 Operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Map - */}
          <div className="h-[450px] w-full bg-gray-100 grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
              title={current.name}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              src={current.map} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branches;