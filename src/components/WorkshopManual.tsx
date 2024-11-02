import React from 'react';
import { BookOpen, Wrench, FileText } from 'lucide-react';

interface Props {
  brand: string;
  model: string;
}

export default function WorkshopManual({ brand, model }: Props) {
  const manualLink = `https://workshopmanuals.org/?s=${encodeURIComponent(model)}`;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-center mb-4">
        <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-900">{brand} Workshop Manual</h2>
      </div>
      
      <div className="space-y-4">
        <p className="text-gray-700">
          {brand} Workshop Manuals and Wiring Diagrams in PDF format. These are the same {brand} Workshop Manuals used by {brand} approved garages worldwide.
        </p>
        
        <div className="flex items-start space-x-3 text-gray-600">
          <Wrench className="h-5 w-5 mt-1 flex-shrink-0" />
          <p>Step by Step Extensive Repair and Service information with hundreds to thousands of pages containing instructions, illustrations or photographs and Wiring Diagrams and/or Electrical systems for {brand} vehicles.</p>
        </div>
        
        <div className="flex items-start space-x-3 text-gray-600">
          <FileText className="h-5 w-5 mt-1 flex-shrink-0" />
          <p>{brand} workshop manuals are manufacturer approved and contain all the information needed to repair or service all {brand} models and years.</p>
        </div>
        
        <div className="mt-6">
          <a
            href={manualLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <BookOpen className="h-5 w-5 mr-2" />
            Access {brand} {model} Workshop Manual
          </a>
        </div>
      </div>
    </div>
  );
}