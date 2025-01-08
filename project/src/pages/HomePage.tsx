import React from 'react';
import Header from '../components/Header';
import Hero from '../components/sections/Hero';
import ServiceCard from '../components/ServiceCard';
import Process from '../components/sections/Process';
import JobPortals from '../components/sections/JobPortals';
import Testimonials from '../components/sections/Testimonials';
import Pricing from '../components/sections/Pricing';
import { BriefcaseIcon } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      
      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard
              title="Manual Application Service"
              description="Get paired with a dedicated career expert who will handle your entire job application process"
              features={[
                "Personalized resume optimization",
                "Custom cover letters",
                "Job portal applications",
                "Direct human support",
                "Application tracking"
              ]}
              isAvailable={true}
            />
            <ServiceCard
              title="AI-Powered Service"
              description="Let our advanced AI system streamline your job application process"
              features={[
                "AI resume enhancement",
                "Automated cover letter generation",
                "Smart job matching",
                "Multi-portal submission",
                "24/7 availability"
              ]}
              isAvailable={false}
            />
          </div>
        </div>
      </section>

      <JobPortals />
      <Process />
      <Pricing />
      <Testimonials />

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <BriefcaseIcon className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">CareerBoost</span>
            </div>
            <div className="text-sm">
              © 2024 CareerBoost. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}