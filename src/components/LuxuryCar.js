import React, { useState, useMemo } from 'react';
import { 
  Fuel, Gauge, Users, Zap, Star, Search, X, 
  ShieldCheck, ChevronRight, ArrowUpDown, CheckCircle2, 
  User, Phone, Calendar 
} from 'lucide-react';

// Images Import
import BENZ_S from '../assets/luxury/BENZ_S.jpeg';
import BENZ_E from '../assets/luxury/BENZ_E.jpg';
import KIA_7788 from '../assets/luxury/KIA_7788.jpg';
import FORTUNER from '../assets/luxury/FORTUNER.jpeg';
import ALTIS from '../assets/luxury/ALTIS.jpg';
import HONDA_CITY from '../assets/luxury/HONDA_CITY.jpg';
import CRYSTA from '../assets/luxury/CRYSTA.jpg';
import DZIRE from '../assets/luxury/DZIRE.jpg';
import AMAZE from '../assets/luxury/AMAZE.jpg';
import COMMUTER_1 from '../assets/luxury/COMMUTER_1.jpg';
import COMMUTER_2 from '../assets/luxury/COMMUTER_2.jpg';
import MINI_COACH from '../assets/luxury/MINI_COACH.jpg';
import LARGE_BUS from '../assets/luxury/LARGE_BUS.png';

const LuxuryCar = () => {
  // --- States ---
  const [activeCategory, setActiveCategory] = useState('All Cars');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCar, setSelectedCar] = useState(null);
  const [sortOrder, setSortOrder] = useState('default');
  
  // Checkout States
  const [bookingStep, setBookingStep] = useState('details'); 
  const [formData, setFormData] = useState({ name: '', phone: '', date: '' });

  const categories = ["All Cars", "Luxury Cars", "Premium Cars", "Economy Cars", "Luxury Van", "Mini Coach", "Large Bus"];

  const cars = [
    { id: 1, name: 'BENZ S', category: 'Luxury Cars', image: BENZ_S, price: '15500', rating: 5.0, description: 'The ultimate definition of luxury and class with unparalleled comfort.', features: ['Massage Seats', 'Ambient Lighting', 'Soft Close Doors'], specs: { fuel: 'PETROL', speed: '250 KMPH', seats: '4 SEATS' } },
    { id: 2, name: 'BENZ E', category: 'Luxury Cars', image: BENZ_E, price: '8500', rating: 4.7, description: 'Dynamic performance meets executive comfort.', features: ['Sunroof', 'Harman Kardon', 'Gesture Control'], specs: { fuel: 'DIESEL', speed: '240 KMPH', seats: '5 SEATS' } },
    { id: 3, name: 'KIA 7788', category: 'Premium Cars', image: KIA_7788, price: '4500', rating: 4.6, description: 'Reliable, efficient, and surprisingly comfortable.', features: ['Hybrid Engine', 'Quiet Cabin', 'Cruise Control'], specs: { fuel: 'HYBRID', speed: '180 KMPH', seats: '5 SEATS' } },
    { id: 4, name: 'FORTUNER', category: 'Premium Cars', image: FORTUNER, price: '22000', rating: 4.9, description: 'First-class travel for groups with premium captain seats.', features: ['Reclining Seats', '360 Camera', 'Work Tables'], specs: { fuel: 'DIESEL', speed: '190 KMPH', seats: '5 SEATS' } },
    { id: 5, name: 'ALTIS', category: 'Premium Cars', image: ALTIS, price: '7000', rating: 4.4, description: 'Perfect for family outings and airport transfers.', features: ['Roof AC', 'Ample Legroom', 'Music System'], specs: { fuel: 'DIESEL', speed: '120 KMPH', seats: '5 SEATS' } },
    { id: 6, name: 'HONDA CITY', category: 'Premium Cars', image: HONDA_CITY, price: '14000', rating: 4.7, description: 'The best way for medium groups to travel in style.', features: ['Pushback Seats', 'LCD Screen', 'Ice Box'], specs: { fuel: 'DIESEL', speed: '110 KMPH', seats: '5 SEATS' } },
    { id: 7, name: 'CRYSTA', category: 'Economy Cars', image: CRYSTA, price: '18000', rating: 4.8, description: 'The gold standard for family comfort.', features: ['Plush Leather Seats', 'Rear AC Vents', 'Ample Boot Space'], specs: { fuel: 'DIESEL', speed: '120 KMPH', seats: '7 SEATS' } },
    { id: 8, name: 'DZIRE', category: 'Economy Cars', image: DZIRE, price: '8000', rating: 4.3, description: 'Compact, efficient, and perfect for city transfers.', features: ['Bluetooth Audio', 'Air Conditioning', 'Generous Legroom'], specs: { fuel: 'PETROL/CNG', speed: '110 KMPH', seats: '4 SEATS' } },
    { id: 9, name: 'AMAZE', category: 'Economy Cars', image: AMAZE, price: '9500', rating: 4.5, description: 'A smooth, premium sedan experience for small families.', features: ['Touchscreen Infotainment', 'ISOFIX Mounts', 'Power Windows'], specs: { fuel: 'PETROL', speed: '115 KMPH', seats: '4 SEATS' } },
    { id: 10, name: 'COMMUTER (Std)', category: 'Luxury Van', image: COMMUTER_1, price: '22000', rating: 4.7, description: 'Spacious high-roof van ideal for corporate team travel.', features: ['Reclining Seats', 'Mic Connectivity', 'Ambiance Lighting'], specs: { fuel: 'DIESEL', speed: '100 KMPH', seats: '12 SEATS' } },
    { id: 11, name: 'COMMUTER (Exec)', category: 'Luxury Van', image: COMMUTER_2, price: '26000', rating: 5.0, description: 'Top-tier luxury travel for high-profile delegations.', features: ['Captain Seats', 'WiFi Hotspot', 'Premium Sound System'], specs: { fuel: 'DIESEL', speed: '100 KMPH', seats: '9 SEATS' } },
    { id: 12, name: 'MINI COACH', category: 'Mini Coach', image: MINI_COACH, price: '32000', rating: 4.6, description: 'The perfect mid-sized solution for tour groups.', features: ['Overhead Luggage Rack', 'PA System', 'Individual Reading Lights'], specs: { fuel: 'DIESEL', speed: '90 KMPH', seats: '21 SEATS' } },
    { id: 13, name: 'LARGE BUS', category: 'Large Bus', image: LARGE_BUS, price: '48000', rating: 4.9, description: 'Ultimate high-capacity transport for large events.', features: ['Air Suspension', 'On-board Washroom', 'Multiple TV Screens'], specs: { fuel: 'DIESEL', speed: '85 KMPH', seats: '50 SEATS' } },
  ];

  // --- Logic ---
  const filteredCars = useMemo(() => {
    let result = cars.filter(car => {
      const matchesCategory = activeCategory === 'All Cars' || car.category === activeCategory;
      const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    if (sortOrder === 'low') result.sort((a, b) => parseInt(a.price) - parseInt(b.price));
    else if (sortOrder === 'high') result.sort((a, b) => parseInt(b.price) - parseInt(a.price));
    return result;
  }, [activeCategory, searchQuery, sortOrder]);

  const closeModal = () => {
    setSelectedCar(null);
    setBookingStep('details');
    setFormData({ name: '', phone: '', date: '' });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingStep('success');
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-20 selection:bg-blue-100">
      {/* Header */}
      <div className="text-center pt-24 pb-16 bg-white border-b border-gray-100">
        <p className="text-blue-600 font-bold text-[10px] tracking-[0.3em] uppercase mb-4 italic">Premium Experience</p>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter">
          Drive Your <span className="text-blue-600 italic">Dream Car</span>
        </h1>
        
        <div className="max-w-2xl mx-auto mt-10 px-6 flex flex-col md:flex-row gap-4">
          <div className="relative group flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by brand or model..." 
              className="w-full pl-12 pr-6 py-4 rounded-2xl bg-gray-50 border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm text-sm"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="relative">
            <ArrowUpDown className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
            <select 
              className="w-full md:w-48 pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 outline-none appearance-none text-xs font-bold uppercase tracking-wider text-slate-600 cursor-pointer"
              onChange={(e) => setSortOrder(e.target.value)}
              value={sortOrder}
            >
              <option value="default">Sort by Price</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-xl text-[10px] font-black tracking-widest uppercase transition-all duration-300 ${activeCategory === cat ? 'bg-blue-600 text-white shadow-xl scale-105' : 'bg-white border border-gray-100 text-slate-500 hover:border-blue-300'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCars.map(car => (
            <div key={car.id} className="group bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 p-3">
              <div className="relative h-60 w-full overflow-hidden rounded-[2rem] bg-gray-50 flex items-center justify-center p-6">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" 
                  style={{ mixBlendMode: 'multiply' }} 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                  <Star size={12} className="text-yellow-500 fill-yellow-500" />
                  <span className="font-black text-[10px] text-slate-800">{car.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-blue-600 text-[10px] font-black uppercase tracking-widest mb-1">{car.category}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-6">{car.name}</h3>
                <div className="flex justify-between border-y border-gray-50 py-4 mb-6">
                  <div className="flex flex-col items-center gap-1"><Fuel size={16} className="text-slate-400" /><span className="text-[9px] font-black text-slate-500 uppercase">{car.specs.fuel}</span></div>
                  <div className="flex flex-col items-center gap-1"><Gauge size={16} className="text-slate-400" /><span className="text-[9px] font-black text-slate-500 uppercase">{car.specs.speed}</span></div>
                  <div className="flex flex-col items-center gap-1"><Users size={16} className="text-slate-400" /><span className="text-[9px] font-black text-slate-500 uppercase">{car.specs.seats}</span></div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Daily Rate</span>
                    <span className="text-2xl font-black text-slate-900">₹{parseInt(car.price).toLocaleString()}</span>
                  </div>
                  <button onClick={() => setSelectedCar(car)} className="bg-slate-900 text-white p-4 rounded-2xl hover:bg-blue-600 transition-all shadow-lg active:scale-90">
                    <Zap size={20} fill="currentColor"/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL --- */}
      {selectedCar && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-md" onClick={closeModal}></div>
          
          <div className="relative bg-white w-full max-w-5xl rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
            
            <button onClick={closeModal} className="absolute top-6 right-6 z-50 bg-white hover:bg-gray-100 p-2 rounded-full shadow-lg">
              <X size={24} className="text-slate-800" />
            </button>
            
            <div className={`relative md:w-1/2 min-h-[400px] flex items-center justify-center p-12 transition-colors duration-500 ${bookingStep === 'success' ? 'bg-green-500' : 'bg-gray-50'}`}>
              {bookingStep !== 'success' ? (
                <>
                  <img src={selectedCar.image} alt={selectedCar.name} className="relative z-10 w-full h-full object-contain drop-shadow-2xl" style={{ mixBlendMode: 'multiply' }} />
                  <div className="absolute inset-0 opacity-5 font-black text-9xl flex items-center justify-center select-none uppercase tracking-tighter text-slate-900">
                    {selectedCar.name.split(' ')[0]}
                  </div>
                </>
              ) : (
                <div className="text-white text-center">
                  <CheckCircle2 size={120} className="mx-auto mb-6" />
                  <h2 className="text-4xl font-black uppercase tracking-tighter">Reservation<br/>Confirmed!</h2>
                </div>
              )}
            </div>

            <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center bg-white">
              {bookingStep === 'details' && (
                <div>
                  <div className="flex items-center gap-2 mb-4 text-blue-600 font-black text-xs uppercase tracking-widest">
                    <ShieldCheck size={18} /> Verified Fleet Premium
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 mb-4">{selectedCar.name}</h2>
                  <p className="text-slate-500 text-lg mb-8 italic leading-relaxed">"{selectedCar.description}"</p>
                  
                  <div className="space-y-4 mb-10">
                    {selectedCar.features.slice(0,3).map((f, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                        <div className="w-2 h-2 bg-blue-600 rounded-full" /> {f}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Rate</p>
                      <p className="text-3xl font-black text-blue-600">₹{parseInt(selectedCar.price).toLocaleString()}</p>
                    </div>
                    <button 
                      onClick={() => setBookingStep('form')}
                      className="bg-blue-600 text-white px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-900 transition-all shadow-xl flex items-center gap-2"
                    >
                      Reserve Now <ChevronRight size={18}/>
                    </button>
                  </div>
                </div>
              )}

              {bookingStep === 'form' && (
                <form onSubmit={handleBookingSubmit}>
                  <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">Booking Details</h3>
                  <div className="space-y-5 mb-10">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input required type="text" placeholder="Full Name" className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 transition-all" 
                        onChange={(e) => setFormData({...formData, name: e.target.value})} />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input required type="tel" placeholder="Phone Number" className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 transition-all" 
                        onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                    </div>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input required type="date" className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-xl outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 transition-all" 
                        onChange={(e) => setFormData({...formData, date: e.target.value})} />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setBookingStep('details')} className="px-6 py-5 rounded-xl bg-slate-100 font-bold text-slate-500 uppercase text-[10px]">Back</button>
                    <button type="submit" className="flex-1 bg-slate-900 text-white py-5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl">Confirm & Reserve</button>
                  </div>
                </form>
              )}

              {bookingStep === 'success' && (
                <div className="text-center">
                  <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase">Success, {formData.name.split(' ')[0]}!</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed">We've received your request for the <span className="text-slate-900 font-bold">{selectedCar.name}</span>. Our concierge will call you at <span className="text-slate-900 font-bold">{formData.phone}</span> shortly.</p>
                  <div className="bg-blue-50 p-6 rounded-[2rem] border border-blue-100 mb-8">
                    <div className="flex justify-between mb-2 text-[10px] font-black uppercase text-slate-400 tracking-widest"><span>Booking ID</span><span className="text-blue-600">#LUX-{Math.floor(Math.random()*9000)+1000}</span></div>
                    <div className="flex justify-between text-[10px] font-black uppercase text-slate-400 tracking-widest"><span>Travel Date</span><span className="text-slate-900">{formData.date}</span></div>
                  </div>
                  <button onClick={closeModal} className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all">Return to Fleet</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LuxuryCar;