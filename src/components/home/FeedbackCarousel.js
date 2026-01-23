import React from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import clientBgImg from '../../assets/clientfeedback.jpeg';

const FeedbackCarousel = ({ testimonials, activeIndex, onPrev, onNext, onSelect }) => (
  <section className="py-8 px-6 overflow-hidden relative">
    <div className="absolute inset-0 bg-cover bg-center z-0 opacity-10" style={{ backgroundImage: `url(${clientBgImg})` }}></div>
    <div className="max-w-3xl mx-auto text-center relative z-10">
      <p className="text-[#1C4D8D] font-black tracking-[0.3em] uppercase text-[9px] mb-2 italic">Testimonials</p>
      <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter mb-10 leading-none">What Our <span className="text-[#1C4D8D] italic">Clients Say</span></h2>
      <div className="relative flex items-center justify-center mb-10">
        <button onClick={onPrev} className="absolute left-0 md:-left-8 z-20 p-1.5 text-[#1C4D8D] hover:bg-[#1C4D8D] hover:text-white rounded-full transition-all border border-[#1C4D8D]"><ChevronLeft size={20} /></button>
        <div className="flex items-center gap-3 md:gap-6 py-2">
          {testimonials.map((item, index) => (
            <div key={item.id} onClick={() => onSelect(index)} className={`cursor-pointer transition-all duration-500 rounded-full flex items-center justify-center font-black shadow-md ${index === activeIndex ? 'w-16 h-16 md:w-20 md:h-20 text-lg border-[3px] border-[#1C4D8D] scale-105 z-10' : 'w-10 h-10 md:w-12 md:h-12 text-[10px] opacity-40 grayscale'} bg-[#1C4D8D] text-white`}>{item.initials}</div>
          ))}
        </div>
        <button onClick={onNext} className="absolute right-0 md:-right-8 z-20 p-1.5 text-[#1C4D8D] hover:bg-[#1C4D8D] hover:text-white rounded-full transition-all border border-[#1C4D8D]"><ChevronRight size={20} /></button>
      </div>
      <div className="relative max-w-xl mx-auto" key={activeIndex}>
        <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-[2.5rem] shadow-lg border border-slate-100 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <Quote className="absolute -top-4 left-1/2 -translate-x-1/2 text-white bg-[#1C4D8D] p-2 rounded-full shadow-md" size={36} />
          <p className="text-slate-600 text-sm md:text-base leading-relaxed italic font-medium mb-5">"{testimonials[activeIndex].text}"</p>
          <div className="flex flex-col items-center">
            <p className="font-black text-[#1C4D8D] uppercase tracking-tighter text-base mb-1">{testimonials[activeIndex].name}</p>
            <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-yellow-500 fill-yellow-500" />)}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeedbackCarousel;