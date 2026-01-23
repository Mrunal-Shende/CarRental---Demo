import React from 'react';
import { DownloadCloud } from 'lucide-react';
import tariffImg from '../../assets/tariff.jpeg';

const TariffSection = ({ onDownload }) => (
  <section className="py-8 bg-white px-6">
    <div className="max-w-7xl mx-auto relative group">
      <div className="relative h-[350px] md:h-[420px] overflow-hidden rounded-[2.5rem] shadow-2xl text-left">
        <img src={tariffImg} alt="Premium Fleet" className="w-full h-full object-cover grayscale brightness-[0.4] group-hover:scale-105 transition-transform duration-[3000ms]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-[#1C4D8D]/20 to-transparent" />
      </div>
      <div className="absolute bottom-6 right-6 left-6 md:left-auto md:right-8 md:bottom-8 md:w-[350px] bg-white/95 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-slate-200 shadow-2xl z-20 transition-all duration-500 hover:translate-y-[-5px] text-left">
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1C4D8D]"></div>
            <span className="text-[#1C4D8D] font-black tracking-widest text-[8px] uppercase">Corporate</span>
          </div>
          <span className="bg-slate-100 text-slate-600 text-[8px] font-black px-3 py-1 rounded-md uppercase">Valid 2026</span>
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-none tracking-tighter uppercase">Our <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C4D8D] to-cyan-600 italic">Tariff.</span></h2>
          <p className="text-slate-500 text-[13px] font-medium leading-relaxed max-w-[250px]">Transparent corporate pricing for luxury mobility.</p>
          <div className="flex items-center gap-2 pt-4">
            <button onClick={onDownload} className="flex-1 bg-[#1C4D8D] hover:bg-slate-900 text-white font-black text-[10px] py-4 rounded-xl transition-all duration-300 uppercase tracking-widest shadow-lg">Download PDF</button>
            <button onClick={onDownload} className="w-12 h-12 border-2 border-[#1C4D8D] text-[#1C4D8D] hover:bg-[#1C4D8D] hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 group/btn"><DownloadCloud size={18} className="group-hover/btn:scale-110" /></button>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-[8px] font-black text-slate-400 uppercase tracking-widest">
          <span>Updated 2023-24</span>
          <span className="text-[#1C4D8D]/70">Fixed Rate Guarantee</span>
        </div>
      </div>
    </div>
  </section>
);

export default TariffSection;