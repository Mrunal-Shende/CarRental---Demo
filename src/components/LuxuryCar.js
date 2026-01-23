import React, { useState, useMemo } from 'react';
import { Fuel, Gauge, Users, Zap, Star, Search, X, ShieldCheck, ChevronRight } from 'lucide-react';

const LuxuryCar = () => {
  const [activeCategory, setActiveCategory] = useState('All Cars');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCar, setSelectedCar] = useState(null);

  const categories = ["All Cars", "Luxury Sedans", "Luxury SUVs", "Sports Cars", "Premium Fleet"];

  const cars = [
    {
      id: 1,
      name: 'Mercedes Benz S-Class',
      category: 'Luxury Sedans',
      image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/48067/s-class-exterior-right-front-three-quarter-10.png?isig=0&q=80',
      price: '15,500',
      rating: 5.0,
      description: 'The ultimate definition of luxury and class with unparalleled comfort.',
      features: ['Massage Seats', 'Ambient Lighting', 'Soft Close Doors'],
      specs: { fuel: 'PETROL', speed: '250 KMPH', seats: '4 SEATS' }
    },
    {
      id: 2,
      name: 'Lamborghini Urus',
      category: 'Sports Cars',
      image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1000&auto=format&fit=crop',
      price: '45,000',
      rating: 4.9,
      description: 'The soul of a super sports car with the functionality of an SUV.',
      features: ['V8 Bi-turbo', 'Carbon Brakes', 'Alcantara Interior'],
      specs: { fuel: 'PETROL', speed: '305 KMPH', seats: '5 SEATS' }
    },
    {
      id: 3,
      name: 'Rolls Royce Cullinan',
      category: 'Premium Fleet',
      image: 'https://www.topgear.com/sites/default/files/2024/01/1%20Rolls-Royce%20Cullinan%20review.jpg',
      price: '65,000',
      rating: 5.0,
      description: 'Effortless everywhere. The most luxurious SUV ever built.',
      features: ['Spirit of Ecstasy', 'Starlight Headliner', 'Privacy Suite'],
      specs: { fuel: 'PETROL', speed: '250 KMPH', seats: '4 SEATS' }
    },
    {
      id: 4,
      name: 'Range Rover Autobiography',
      category: 'Luxury SUVs',
      image: 'https://imgd.aeplcdn.com/664x374/ec/7F/84/18599/img/m/Land-Rover-Range-Rover-LWB-Right-Front-Three-Quarter-51378_ol.jpg?t=173325477&q=80',
      price: '18,000',
      rating: 4.8,
      description: 'Peerless refinement and luxury for every terrain.',
      features: ['Terrain Response', 'Executive Rear Seating', 'Pivi Pro'],
      specs: { fuel: 'DIESEL', speed: '210 KMPH', seats: '5 SEATS' }
    },
    {
      id: 5,
      name: 'BMW 7 Series',
      category: 'Luxury Sedans',
      image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/132513/new-7-series-exterior-right-front-three-quarter.jpeg?isig=0&q=80',
      price: '12,000',
      rating: 4.7,
      description: 'Masterfully crafted for the modern visionary.',
      features: ['Theatre Screen', 'Sky Lounge', 'iDrive 8'],
      specs: { fuel: 'HYBRID', speed: '250 KMPH', seats: '4 SEATS' }
    }
  ];

  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      const matchesCategory = activeCategory === 'All Cars' || car.category === activeCategory;
      const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-20 selection:bg-blue-100">
      {/* Header Section */}
      <div className="text-center pt-24 pb-16 bg-white border-b border-gray-100">
        <p className="text-blue-600 font-bold text-[10px] tracking-[0.3em] uppercase mb-4 italic">Premium Experience</p>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter">
          Drive Your <span className="text-blue-600 italic">Dream Car</span>
        </h1>
        
        {/* Search Input */}
        <div className="max-w-xl mx-auto mt-10 px-6 relative group">
          <Search className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search by brand or model..." 
            className="w-full pl-14 pr-6 py-4 rounded-2xl bg-gray-50 border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm text-sm"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-xl text-[10px] font-black tracking-widest uppercase transition-all duration-300 ${activeCategory === cat ? 'bg-blue-600 text-white shadow-xl shadow-blue-200 scale-105' : 'bg-white border border-gray-100 text-slate-500 hover:border-blue-300'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCars.map(car => (
            <div key={car.id} className="group bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 p-3">
               <div className="relative h-60 overflow-hidden rounded-[2rem]">
                  <img src={car.image} alt={car.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                    <Star size={12} className="text-yellow-500 fill-yellow-500" />
                    <span className="font-black text-[10px] text-slate-800">{car.rating}</span>
                  </div>
               </div>
               
               <div className="p-6">
                 <p className="text-blue-600 text-[10px] font-black uppercase tracking-widest mb-1">{car.category}</p>
                 <h3 className="text-xl font-bold text-slate-900 mb-6">{car.name}</h3>
                 
                 <div className="flex justify-between border-y border-gray-50 py-4 mb-6">
                    <div className="flex flex-col items-center gap-1">
                      <Fuel size={16} className="text-slate-400" />
                      <span className="text-[9px] font-black text-slate-500 uppercase">{car.specs.fuel}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Gauge size={16} className="text-slate-400" />
                      <span className="text-[9px] font-black text-slate-500 uppercase">{car.specs.speed}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Users size={16} className="text-slate-400" />
                      <span className="text-[9px] font-black text-slate-500 uppercase">{car.specs.seats}</span>
                    </div>
                 </div>

                 <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Daily Rate</span>
                      <span className="text-2xl font-black text-slate-900">₹{car.price}</span>
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

      {/* --- CAR DETAILS MODAL --- */}
      {selectedCar && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setSelectedCar(null)}></div>
          <div className="relative bg-white w-full max-w-5xl rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in duration-500">
            
            <button onClick={() => setSelectedCar(null)} className="absolute top-6 right-6 z-20 bg-white hover:bg-gray-100 p-2 rounded-full shadow-lg transition-all">
              <X size={24} className="text-slate-800" />
            </button>
            
            {/* Modal Image Section */}
            <div className="relative md:w-1/2 min-h-[350px] bg-slate-50 flex items-center justify-center p-10">
              <img src={selectedCar.image} alt={selectedCar.name} 
                className="relative z-10 w-full scale-125 md:scale-150 drop-shadow-[0_40px_60px_rgba(0,0,0,0.15)] transition-transform duration-700" 
              />
              <div className="absolute inset-0 opacity-10 font-black text-7xl flex items-center justify-center select-none uppercase tracking-tighter text-slate-900">
                {selectedCar.name.split(' ')[0]}
              </div>
            </div>

            {/* Modal Content Section */}
            <div className="md:w-1/2 p-10 md:p-14 flex flex-col">
              <div className="flex items-center gap-2 mb-4 text-blue-600">
                <ShieldCheck size={20} />
                <span className="font-black text-xs uppercase tracking-widest">Verified Fleet</span>
              </div>
              
              <h2 className="text-4xl font-black text-slate-900 mb-4">{selectedCar.name}</h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-10 italic">"{selectedCar.description}"</p>

              <div className="mb-12">
                <p className="font-black text-slate-900 mb-6 uppercase text-[10px] tracking-[0.3em]">Key Highlights:</p>
                <div className="flex flex-wrap gap-3">
                  {selectedCar.features.map((feature, idx) => (
                    <span key={idx} className="bg-slate-50 border border-slate-100 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">Total Rental</p>
                  <p className="text-4xl font-black text-blue-600">₹{selectedCar.price}</p>
                </div>
                <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-blue-100 active:scale-95 flex items-center gap-2">
                  Reserve Now <ChevronRight size={18}/>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LuxuryCar;