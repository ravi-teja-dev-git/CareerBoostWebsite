import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PricingCardProps {
  title: string;
  price: number;
  duration: string;
  features: string[];
  isPopular?: boolean;
  onSelect?: () => void;
}

export default function PricingCard({ title, price, duration, features, isPopular, onSelect }: PricingCardProps) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onSelect) {
      onSelect();
    }
    navigate('/payment', { 
      state: { plan: title, price, duration } 
    });
  };
  
  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`bg-white rounded-xl p-6 transform transition-all duration-300 ${
        isHovered ? 'scale-105 shadow-xl border-2 border-blue-500' : 'shadow-md border border-gray-200'
      }`}
    >
      {isPopular && (
        <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
          Most Popular
        </span>
      )}
      <h3 className={`text-xl font-semibold ${isHovered ? 'text-blue-600' : ''}`}>
        {title}
      </h3>
      <div className="mt-2">
        <span className={`text-3xl font-bold ${isHovered ? 'text-blue-600' : ''}`}>
          ${price}
        </span>
        <span className="text-gray-600">/{duration}</span>
      </div>
      <ul className="mt-6 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start">
            <Check className={`h-5 w-5 mr-2 flex-shrink-0 mt-0.5 transition-colors ${
              isHovered ? 'text-blue-500' : 'text-green-500'
            }`} />
            <span className={`transition-colors ${
              isHovered ? 'text-gray-900' : 'text-gray-700'
            }`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <button
        onClick={handleClick}
        className={`w-full mt-6 py-2 px-4 rounded-md text-center transition-all flex items-center justify-center gap-2 ${
          isHovered
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
        <ArrowRight className={`h-4 w-4 transform transition-transform ${
          isHovered ? 'translate-x-1' : ''
        }`} />
      </button>
    </div>
  );
}