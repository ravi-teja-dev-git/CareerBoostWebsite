import React, { useState } from 'react';
import { CreditCard, CheckCircle, ArrowLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

interface LocationState {
  plan: string;
  price: number;
  duration: string;
}

export default function PaymentPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { plan, price, duration } = (location.state as LocationState) || {
    plan: 'Manual Application Service',
    price: 299,
    duration: 'month'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Here you would integrate with your payment processor
    setTimeout(() => {
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </button>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 bg-blue-600 text-white">
            <h1 className="text-3xl font-bold">Complete Your Subscription</h1>
            <p className="mt-2 text-blue-100">Get started with {plan}</p>
          </div>
          
          <div className="p-8">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">{plan}</h2>
                <div className="text-2xl font-bold">${price}/{duration}</div>
              </div>
              <div className="space-y-2">
                {[
                  "Dedicated career expert",
                  "Personalized resume optimization",
                  "Custom cover letters",
                  "Job portal applications",
                  "Direct human support",
                ].map((feature) => (
                  <div key={feature} className="flex items-center text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Card Information
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Card number"
                    className="w-full px-4 py-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                  <CreditCard className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Security Code
                  </label>
                  <input
                    type="text"
                    placeholder="CVC"
                    className="w-full px-4 py-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full py-4 px-6 rounded-md text-white font-semibold text-lg ${
                  isProcessing
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isProcessing ? 'Processing...' : `Pay $${price}`}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              By subscribing, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}