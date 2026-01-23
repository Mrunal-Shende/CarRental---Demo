import React, { useState } from 'react';
import Hero from './Hero';
import FloatingControls from './home/FloatingControls';
import Discovery from './home/Discovery';
import WhyChooseUs from './home/WhyChooseUs';
import TariffSection from './home/TariffSection';
import FeedbackCarousel from './home/FeedbackCarousel';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Home = () => {
  const [activeFeedback, setActiveFeedback] = useState(1);
  const phoneNumber = "8805547785";
  const whatsappNumber = "8805547785";

  const testimonials = [
    { id: 0, name: "Jestin Mathew", role: "Director", initials: "JM", text: "We would like to appreciate your good office for arranging travel trip to Maldives for our Director. The experience was coordinated perfectly." },
    { id: 1, name: "Mr. D.Venkateswaran", role: "Corporate Lead", initials: "DV", text: "The professional approach of Express Travel is commendable. Their fleet quality and punctuality were exactly what we were looking for." },
    { id: 2, name: "Ramesh Babu", role: "Executive VP", initials: "RB", text: "Chauffeur Mr. Parameswaran reported to duty on time and picked up all the dignitaries with utmost care and safety." },
    { id: 3, name: "Santosh Krinsky", role: "International Traveler", initials: "SK", text: "Thank you for your efforts to make our 2 week tour successful. Highly pleased with the service and drivers." }
  ];

  const handleDownloadTariff = () => {
    const link = document.createElement("a");
    link.href = "/tariff-details.pdf";
    link.download = "ETC_Tariff_Details.pdf";
    link.click();
  };

  return (
    <main className="bg-white antialiased relative">
      <Hero />
      <FloatingControls phoneNumber={phoneNumber} whatsappNumber={whatsappNumber} />
      <Discovery />
      
      {/* Services Mini Grid */}
      <section className="py-8 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Our Premium Services</h2>
            <div className="w-12 h-1 bg-[#1C4D8D] mx-auto mt-2"></div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { title: 'Luxury Car Rental', image: 'https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2020/02/12/f7c86e68-4c08-11ea-9b4e-9c10402c07b7_972x_125528.jpg' },
            { title: 'Corporate Travel Services', image: 'https://www.silvertaxitoairport.com.au/wp-content/uploads/2024/11/Corporate-Travel-inner-image.jpg' },
            { title: 'Airport Transfers', image: 'https://azureprivatehire.com/wp-content/uploads/2022/11/Perfect-Airport-Transfer-for-Your-Travel-Needs-1000x620.jpg' },
            { title: 'VIP Concierge Services', image: 'https://veronikasadventure.com/wp-content/uploads/2024/07/2_private-transfer-from-luxor-hotel-to-the-airport-or-vice-versa.jpg' },
            { title: 'Event Car Rental', image: 'https://www.fabcars.in/assets/images/blog/luxury-car-rental-in-mumbai-for-weddings-body.webp' }
          ].map((service, index) => (
            <div key={index} className="group relative h-[250px] rounded-xl overflow-hidden cursor-pointer shadow-md">
              <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C4D8D]/90 via-[#1C4D8D]/20 to-transparent" />
              <div className="absolute inset-0 p-4 flex flex-col justify-end text-white text-left">
                <h3 className="text-xs font-black uppercase tracking-tight mb-2">{service.title}</h3>
                <ArrowRight className="w-4 h-4 text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <WhyChooseUs />
      <TariffSection onDownload={handleDownloadTariff} />
      
      <FeedbackCarousel 
        testimonials={testimonials} 
        activeIndex={activeFeedback}
        onPrev={() => setActiveFeedback(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
        onNext={() => setActiveFeedback(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
        onSelect={setActiveFeedback}
      />

     
      <style jsx>{`
        @keyframes bounce-subtle { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .animate-bounce-subtle { animation: bounce-subtle 2.5s ease-in-out infinite; }
      `}</style>
    </main>
  );
};

export default Home;