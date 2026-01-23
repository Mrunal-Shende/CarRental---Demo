import React from 'react';

const InquiryForm = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-32 px-6 flex justify-center items-center">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative">
        {/* Background Subtle Car Image like your photo */}
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000" alt="bg" className="w-4/5 object-contain" />
        </div>

        <div className="relative z-10 p-10 md:p-16">
          <h2 className="text-3xl md:text-4xl font-light text-center text-gray-800 mb-12">Car Rental Reservation Form</h2>
          
          <form className="space-y-8">
            {/* Name Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">First Name</label>
                <input type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="First Name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Last Name</label>
                <input type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Last Name" />
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Phone Number</label>
              <input type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="### ### ####" />
            </div>

            {/* Number of Passengers */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Number of Passengers</label>
              <input type="number" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
            </div>

            {/* Vehicle Type */}
            <div className="space-y-4">
              <label className="text-sm font-bold text-gray-700">Vehicle Type</label>
              <div className="flex flex-wrap gap-6">
                {['Coupe', 'SUV', 'Van', 'Bus'].map((type) => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="vehicle" className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500" />
                    <span className="text-gray-600 group-hover:text-blue-600 font-medium">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Pick-up Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Pick-Up Date</label>
                <input type="date" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Pick-Up Time</label>
                <input type="time" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              </div>
            </div>

            {/* Duration */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">For how many days do you need?</label>
              <input type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
            </div>

            <button type="submit" className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xs tracking-[0.2em] uppercase hover:bg-slate-900 transition-all shadow-xl shadow-blue-500/20">
              Submit Reservation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;