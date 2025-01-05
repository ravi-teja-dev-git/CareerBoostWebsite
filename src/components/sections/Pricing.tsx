import React, { useState } from 'react';
import PricingCard from '../PricingCard';

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-gray-600">Select the perfect plan for your career goals</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingCard
            title="Trial Package"
            price={299}
            duration="2 months"
            features={[
              "Dedicated career expert",
              "Personalized resume optimization",
              "Custom cover letters",
              "Job portal applications",
              "Direct human support",
              "Professional portfolio website",
              "Basic interview materials"
            ]}
            onSelect={() => setSelectedPlan('trial')}
          />
          
          <PricingCard
            title="Premium Package"
            price={699}
            duration="6 months"
            isPopular={true}
            features={[
              "Everything in Trial Package",
              "Extended support period",
              "Priority application handling",
              "Regular portfolio updates",
              "Comprehensive interview prep",
              "Job search strategy sessions",
              "Weekly progress reviews"
            ]}
            onSelect={() => setSelectedPlan('premium')}
          />
        </div>
      </div>
    </section>
  );
}