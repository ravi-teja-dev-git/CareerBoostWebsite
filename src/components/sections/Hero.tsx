import React from 'react';

export default function Hero() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Career Success, Our Priority
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our experts handle your job applications while you focus on interview preparation
          </p>
          <button 
            onClick={scrollToPricing}
            className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition"
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}