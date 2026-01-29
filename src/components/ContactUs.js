import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

const ContactUs = () => {
  return (
    <section className="py-24 px-4 bg-white max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter">
          Ready to <span className="text-blue-600">Travel?</span>
        </h2>
        {/* Sharp Edge Line */}
        <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-none"></div>
      </div>

      {/* Main Container with Sharp Edges */}
      <div className="flex flex-col lg:flex-row bg-white rounded-none overflow-hidden shadow-2xl border border-gray-100 min-h-[600px]">
        
        {/* Left Side: Contact Info */}
        <div className="lg:w-1/3 bg-[#0a1128] p-12 text-white flex flex-col justify-start">
          <div className="text-left">
            <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">Contact Information</h3>
            <p className="text-gray-400 mb-12 leading-relaxed text-sm font-medium italic">
              Have a specific requirement? Our dedicated corporate desk is available 24/7 to assist you.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start gap-5">
                <div className="bg-blue-600/20 p-4 rounded-none border border-blue-500/30 text-blue-400 shrink-0">
                  <Phone size={24} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-black mb-2">Call for booking</p>
                  <p className="text-lg font-bold leading-relaxed">+91 44 2822 4413<br />+91 44 2827 2279<br />+91 97 9111 1275</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-blue-600/20 p-4 rounded-none border border-blue-500/30 text-blue-400 shrink-0">
                  <Mail size={24} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-black mb-2">Email Us</p>
                  <p className="text-lg font-bold">enquiry@expresstravelcorp.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-blue-600/20 p-4 rounded-none border border-blue-500/30 text-blue-400 shrink-0">
                  <Clock size={24} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-black mb-2">Response Time</p>
                  <p className="text-lg font-bold text-green-400 tracking-tight">Approximate 15 Minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:w-2/3 p-12 bg-gray-50/50">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Full Name</label>
              <input type="text" placeholder="Enter your name" className="w-full p-5 rounded-none border border-gray-200 focus:border-blue-500 bg-white transition-all outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Work Email</label>
              <input type="email" placeholder="name@company.com" className="w-full p-5 rounded-none border border-gray-200 focus:border-blue-500 bg-white transition-all outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Phone Number</label>
              <input type="tel" placeholder="+91 00000 00000" className="w-full p-5 rounded-none border border-gray-200 focus:border-blue-500 bg-white transition-all outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Service Required</label>
              <div className="relative">
                <select className="w-full p-5 rounded-none border border-gray-200 bg-white appearance-none cursor-pointer focus:border-blue-500 outline-none">
                  <option>Corporate Fleet</option>
                  <option>Luxury Rental</option>
                </select>
              </div>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Your Requirements</label>
              <textarea rows="4" placeholder="Tell us about your travel needs..." className="w-full p-5 rounded-none border border-gray-200 focus:border-blue-500 bg-white transition-all outline-none resize-none"></textarea>
            </div>
            <button className="md:col-span-2 bg-blue-600 hover:bg-slate-900 text-white font-black py-5 rounded-none transition-all uppercase tracking-[0.2em] text-xs shadow-xl">
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;