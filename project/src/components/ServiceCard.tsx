import React from 'react';
import { Check } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  isAvailable: boolean;
}

export default function ServiceCard({ title, description, features, isAvailable }: ServiceCardProps) {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:border-blue-500 transition-all duration-300">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={isAvailable ? scrollToPricing : undefined}
        className={`w-full py-2 px-4 rounded-md text-center ${
          isAvailable
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
        disabled={!isAvailable}
      >
        {isAvailable ? 'Get Started' : 'Coming Soon'}
      </button>
    </div>
  );
}