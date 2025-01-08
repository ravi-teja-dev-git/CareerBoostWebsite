import React from 'react';
import { Building2, AlertCircle } from 'lucide-react';

const portals = [
  "LinkedIn",
  "Indeed",
  "Glassdoor",
  "ZipRecruiter",
  "Dice",
  "CareerBuilder",
  "Monster",
  "AngelList"
];

export default function JobPortals() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">We Apply Across Major US Job Portals</h2>
          <p className="text-gray-600 mb-4">Our experts handle applications on all leading job platforms</p>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-center">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <p className="text-sm">
              We target 40+ applications daily
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {portals.map((portal) => (
            <div key={portal} className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-3">
              <Building2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
              <span className="font-medium">{portal}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}