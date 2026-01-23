import React, { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import { ArrowRight, X, CheckCircle2, PhoneCall, Car, Building2, Bus, PlaneTakeoff, ShieldCheck, Star, CalendarDays, MapPin } from 'lucide-react';



const Services = () => {

  const [activeService, setActiveService] = useState(null);



  // Modal khulne par scroll lock karne ke liye

  useEffect(() => {

    if (activeService) document.body.style.overflow = 'hidden';

    else document.body.style.overflow = 'unset';

  }, [activeService]);



  const services = [

    {

      title: 'Luxury Car Rental',

      icon: <Car className="w-6 h-6" />,

      image: 'https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2020/02/12/f7c86e68-4c08-11ea-9b4e-9c10402c07b7_972x_125528.jpg',

      description: 'Experience the ultimate comfort and style with our premium fleet of luxury sedans and SUVs.',

      features: ['Chauffeur Driven', 'Latest Models', 'GPS Tracking', 'Transparent Pricing']

    },

    {

      title: 'Corporate Travel',

      icon: <Building2 className="w-6 h-6" />,

      image: 'https://www.silvertaxitoairport.com.au/wp-content/uploads/2024/11/Corporate-Travel-inner-image.jpg',

      description: 'Tailored mobility solutions for businesses, ensuring your executives travel with punctuality and class.',

      features: ['Monthly Invoicing', 'Priority Booking', 'Dedicated Support', 'Professional Attire Drivers']

    },

    {

      title: 'Employee Transport',

      icon: <Bus className="w-6 h-6" />,

      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop',

      description: 'Safe and efficient daily commute solutions for your entire workforce with real-time tracking.',

      features: ['Safe for Women', 'Panic Button Enabled', 'Automated Routing', '24/7 Control Room']

    },

    {

      title: 'Airport Transfers',

      icon: <PlaneTakeoff className="w-6 h-6" />,

      image: 'https://azureprivatehire.com/wp-content/uploads/2022/11/Perfect-Airport-Transfer-for-Your-Travel-Needs-1000x620.jpg',

      description: 'Reliable pick-and-drop services to ensure you never miss a flight or wait at the arrivals.',

      features: ['Flight Monitoring', 'Meet & Greet', 'Luggage Assistance', 'On-time Guarantee']

    },

    {

      title: 'Executive Protection',

      icon: <ShieldCheck className="w-6 h-6" />,

      image: 'https://cdn-gijjp.nitrocdn.com/LIXYzdApuuJORXspMjtQwacGTtiSwhBg/assets/images/optimized/rev-e22c25e/rangerguard.net/wp-content/uploads/2024/11/shutterstock_768847708.jpg',

      description: 'Specialized security-integrated transportation for dignitaries and high-net-worth individuals.',

      features: ['Armed/Unarmed Guards', 'Discreet Operations', 'Route Survey', 'Bulletproof Vehicle Option']

    },

    {

      title: 'VIP Concierge',

      icon: <Star className="w-6 h-6" />,

      image: 'https://veronikasadventure.com/wp-content/uploads/2024/07/2_private-transfer-from-luxor-hotel-to-the-airport-or-vice-versa.jpg',

      description: 'High-end personalized assistance for VVIPs, celebrities, and diplomats.',

      features: ['Security Detail', 'Discreet Service', 'Red Carpet Arrival', 'Personal Coordinator']

    },

    {

      title: 'Events Logistics',

      icon: <CalendarDays className="w-6 h-6" />,

      image: 'https://www.fabcars.in/assets/images/blog/luxury-car-rental-in-mumbai-for-weddings-body.webp',

      description: 'End-to-end fleet management for large-scale conferences and weddings.',

      features: ['On-site Coordinator', 'Help Desk Setup', 'Multiple Car Options', 'Custom Branding']

    },

    {

      title: 'Outstation Trips',

      icon: <MapPin className="w-6 h-6" />,

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

          <motion.span

            initial={{ opacity: 0, y: 10 }}

            whileInView={{ opacity: 1, y: 0 }}

            className="text-blue-600 font-bold tracking-widest uppercase text-sm"

          >

            Premium Mobility Solutions

          </motion.span>

          <motion.h2

            initial={{ opacity: 0, y: 20 }}

            whileInView={{ opacity: 1, y: 0 }}

            transition={{ delay: 0.1 }}

            className="text-4xl md:text-6xl font-black text-gray-900 mt-2 mb-6"

          >

            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Services</span>

          </motion.h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">

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

              className="group relative h-[450px] rounded-[2rem] overflow-hidden cursor-pointer bg-gray-900 shadow-xl"

            >

              {/* Background Image with Overlay */}

              <img

                src={service.image}

                alt={service.title}

                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-50"

              />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/20 to-transparent" />



              {/* Card Content */}

              <div className="absolute inset-0 p-8 flex flex-col justify-end">

                <div className="mb-4 w-12 h-12 bg-blue-600/20 backdrop-blur-md border border-blue-400/30 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">

                  {service.icon}

                </div>

                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">

                  {service.title}

                </h3>

                <p className="text-gray-300 text-sm line-clamp-2 mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">

                  {service.description}

                </p>

                <div className="flex items-center space-x-2 text-blue-400 font-bold text-xs tracking-tighter uppercase">

                  <span>Explore Service</span>

                  <ArrowRight size={16} />

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>



      {/* --- MODERN SERVICE DETAILS MODAL --- */}

      <AnimatePresence>

        {activeService && (

          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">

            <motion.div

              initial={{ opacity: 0 }}

              animate={{ opacity: 1 }}

              exit={{ opacity: 0 }}

              className="absolute inset-0 bg-gray-950/80 backdrop-blur-lg"

              onClick={() => setActiveService(null)}

            />

           

            <motion.div

              initial={{ opacity: 0, scale: 0.9, y: 20 }}

              animate={{ opacity: 1, scale: 1, y: 0 }}

              exit={{ opacity: 0, scale: 0.9, y: 20 }}

              className="relative bg-white w-full max-w-4xl rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[500px]"

            >

              {/* Modal Left: Image */}

              <div className="md:w-1/2 h-64 md:h-auto relative">

                <img

                  src={activeService.image}

                  className="w-full h-full object-cover"

                  alt={activeService.title}

                />

                <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />

                <button

                  onClick={() => setActiveService(null)}

                  className="absolute top-6 left-6 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-all md:hidden"

                >

                  <X size={20} />

                </button>

              </div>



              {/* Modal Right: Details */}

              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">

                <button

                  onClick={() => setActiveService(null)}

                  className="absolute top-8 right-8 p-2 text-gray-400 hover:text-gray-900 hidden md:block"

                >

                  <X size={28} />

                </button>



                <div className="inline-flex items-center gap-2 text-blue-600 font-bold mb-4 uppercase tracking-widest text-xs">

                  <div className="w-8 h-[2px] bg-blue-600" />

                  Premium Service

                </div>

                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">{activeService.title}</h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">

                  {activeService.description}

                </p>



                <div className="grid grid-cols-1 gap-4 mb-10">

                  {activeService.features.map((feature, idx) => (

                    <div key={idx} className="flex items-center space-x-3 group">

                      <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">

                        <CheckCircle2 className="text-blue-600 group-hover:text-white" size={14} />

                      </div>

                      <span className="font-medium text-gray-700">{feature}</span>

                    </div>

                  ))}

                </div>



                <div className="flex flex-col sm:flex-row gap-4 mt-auto">

                  <a

                    href="#ContactUs"

                    onClick={() => setActiveService(null)}

                    className="flex-1 bg-gray-900 text-white text-center py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-gray-200 hover:shadow-blue-200"

                  >

                    Book Appointment

                  </a>

                  <a

                    href="tel:+919518944312"

                    className="flex items-center justify-center gap-2 px-6 py-4 border-2 border-gray-100 rounded-2xl font-bold text-gray-700 hover:bg-gray-50 transition-all"

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