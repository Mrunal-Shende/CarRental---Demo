import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, CheckCircle2, PhoneCall } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    if (activeService) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [activeService]);

  const services = [
    {
      title: 'Luxury Car Rental',
      image: 'https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2020/02/12/f7c86e68-4c08-11ea-9b4e-9c10402c07b7_972x_125528.jpg',
      description: 'Experience the ultimate comfort and style with our premium fleet of luxury sedans and SUVs.',
      features: ['Chauffeur Driven', 'Latest Models', 'GPS Tracking', 'Transparent Pricing']
    },
    {
      title: 'Corporate Travel',
      image: 'https://www.silvertaxitoairport.com.au/wp-content/uploads/2024/11/Corporate-Travel-inner-image.jpg',
      description: 'Tailored mobility solutions for businesses, ensuring your executives travel with punctuality and class.',
      features: ['Monthly Invoicing', 'Priority Booking', 'Dedicated Support', 'Professional Attire Drivers']
    },
    {
      title: 'Employee Transport',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop',
      description: 'Safe and efficient daily commute solutions for your entire workforce with real-time tracking.',
      features: ['Safe for Women', 'Panic Button Enabled', 'Automated Routing', '24/7 Control Room']
    },
    {
      title: 'Airport Transfers',
      image: 'https://azureprivatehire.com/wp-content/uploads/2022/11/Perfect-Airport-Transfer-for-Your-Travel-Needs-1000x620.jpg',
      description: 'Reliable pick-and-drop services to ensure you never miss a flight or wait at the arrivals.',
      features: ['Flight Monitoring', 'Meet & Greet', 'Luggage Assistance', 'On-time Guarantee']
    },
    {
      title: 'Executive Protection',
      image: 'https://cdn-gijjp.nitrocdn.com/LIXYzdApuuJORXspMjtQwacGTtiSwhBg/assets/images/optimized/rev-e22c25e/rangerguard.net/wp-content/uploads/2024/11/shutterstock_768847708.jpg',
      description: 'Specialized security-integrated transportation for dignitaries and high-net-worth individuals.',
      features: ['Armed/Unarmed Guards', 'Discreet Operations', 'Route Survey', 'Bulletproof Vehicle Option']
    },
    {
      title: 'VIP Concierge',
      image: 'https://veronikasadventure.com/wp-content/uploads/2024/07/2_private-transfer-from-luxor-hotel-to-the-airport-or-vice-versa.jpg',
      description: 'High-end personalized assistance for VVIPs, celebrities, and diplomats.',
      features: ['Security Detail', 'Discreet Service', 'Red Carpet Arrival', 'Personal Coordinator']
    },
    {
      title: 'Events Logistics',
      image: 'https://www.fabcars.in/assets/images/blog/luxury-car-rental-in-mumbai-for-weddings-body.webp',
      description: 'End-to-end fleet management for large-scale conferences and weddings.',
      features: ['On-site Coordinator', 'Help Desk Setup', 'Multiple Car Options', 'Custom Branding']
    },
    {
      title: 'Outstation Trips',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop',
      description: 'Comfortable and safe long-distance travel across India with experienced highway drivers.',
      features: ['Inter-city Permits', 'Well-rested Drivers', 'Luxury Coaches', 'Flexible Itinerary']
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-6 uppercase tracking-tighter">
            Our <span className="text-blue-600">Services</span>
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto italic leading-relaxed">
            Redefining corporate and luxury travel with safety, comfort, and elite standards.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setActiveService(service)}
              className="group relative h-[450px] rounded-[2rem] overflow-hidden cursor-pointer shadow-xl bg-white"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-black text-white mb-2 leading-tight uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-xs line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 font-medium">
                  {service.description}
                </p>
                <div className="flex items-center space-x-2 text-blue-400 font-black text-[10px] uppercase tracking-widest bg-white/10 w-fit px-4 py-2 rounded-full backdrop-blur-md">
                  <span>Explore Service</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- SMALLER PROFESSIONAL MODAL --- */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/70 backdrop-blur-md"
              onClick={() => setActiveService(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative bg-white w-full max-w-3xl rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[400px]"
            >
              {/* Left side Image (Reduced height/width ratio) */}
              <div className="md:w-[40%] h-56 md:h-auto relative">
                <img
                  src={activeService.image}
                  className="w-full h-full object-cover"
                  alt={activeService.title}
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              {/* Right side Details (Compact padding) */}
              <div className="md:w-[60%] p-8 md:p-10 flex flex-col relative bg-white">
                <button 
                  onClick={() => setActiveService(null)} 
                  className="absolute top-6 right-6 p-2 bg-slate-50 rounded-full text-slate-400 hover:text-blue-600 transition-all"
                >
                  <X size={20} />
                </button>

                <div className="flex items-center gap-2 mb-4">
                    <div className="h-[2px] w-6 bg-blue-600"></div>
                    <span className="text-[9px] font-black text-blue-600 uppercase tracking-[0.2em]">Premium Service</span>
                </div>

                <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter leading-none">
                    {activeService.title}
                </h2>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                    {activeService.description}
                </p>

                <div className="space-y-3 mb-8">
                  {activeService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center">
                        <CheckCircle2 className="text-blue-600" size={14} />
                      </div>
                      <span className="text-slate-700 font-bold text-xs uppercase tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <button className="flex-1 bg-slate-900 text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg active:scale-95">
                    Book Service
                  </button>
                  <a 
                    href="tel:+919518944312" 
                    className="p-4 rounded-xl border-2 border-slate-100 text-slate-900 hover:border-blue-600 transition-all shadow-sm"
                  >
                    <PhoneCall size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;