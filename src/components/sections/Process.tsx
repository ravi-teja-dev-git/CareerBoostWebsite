import React from 'react';
import ProcessStep from '../ProcessStep';
import { ClipboardCheck, FileEdit, Briefcase, Users, ArrowRight, ArrowDown } from 'lucide-react';

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600">Our proven process to help you land your dream job</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          <ProcessStep
            icon={ClipboardCheck}
            title="Career Audit"
            description="We analyze your experience and career goals to create a tailored strategy"
          />
          <ArrowDown className="md:hidden h-8 w-8 text-blue-500" />
          <ArrowRight className="hidden md:block h-8 w-8 text-blue-500 flex-shrink-0" />
          
          <ProcessStep
            icon={FileEdit}
            title="Resume Preparation"
            description="Optimize your resume and create compelling cover letters"
          />
          <ArrowDown className="md:hidden h-8 w-8 text-blue-500" />
          <ArrowRight className="hidden md:block h-8 w-8 text-blue-500 flex-shrink-0" />
          
          <ProcessStep
            icon={Briefcase}
            title="Job Applications"
            description="We handle applications across multiple job portals"
          />
          <ArrowDown className="md:hidden h-8 w-8 text-blue-500" />
          <ArrowRight className="hidden md:block h-8 w-8 text-blue-500 flex-shrink-0" />
          
          <ProcessStep
            icon={Users}
            title="Land Your Dream Job"
            description="Successfully transition into your new role"
          />
        </div>
      </div>
    </section>
  );
}