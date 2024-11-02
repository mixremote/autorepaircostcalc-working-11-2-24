import React from 'react';
import { Star, AlertCircle, Fuel, Award, Settings } from 'lucide-react';
import { vehicleDetails } from '../data/vehicleDetails';

interface Props {
  brand: string;
  model: string;
}

export default function VehicleDetails({ brand, model }: Props) {
  const details = vehicleDetails[brand as keyof typeof vehicleDetails]?.[model as keyof (typeof vehicleDetails)[typeof brand]];

  if (!details) return null;

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
        <p className="text-gray-600">{details.description}</p>
        
        <div className="mt-4">
          <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {details.keyFeatures.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Star className="h-6 w-6 text-yellow-500 mr-2" />
            <h3 className="text-xl font-semibold text-gray-900">Reliability</h3>
          </div>
          <div className="flex items-center mb-2">
            <div className="flex-1 h-2 bg-gray-200 rounded-full">
              <div 
                className="h-2 bg-green-500 rounded-full"
                style={{ width: `${(details.reliability.score / 5) * 100}%` }}
              ></div>
            </div>
            <span className="ml-2 font-semibold">{details.reliability.score}/5</span>
          </div>
          <p className="text-gray-600">{details.reliability.summary}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Fuel className="h-6 w-6 text-blue-500 mr-2" />
            <h3 className="text-xl font-semibold text-gray-900">Fuel Economy</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">City</p>
              <p className="text-2xl font-bold">{details.fuelEconomy.city} MPG</p>
            </div>
            <div>
              <p className="text-gray-600">Highway</p>
              <p className="text-2xl font-bold">{details.fuelEconomy.highway} MPG</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <AlertCircle className="h-6 w-6 text-red-500 mr-2" />
          <h3 className="text-xl font-semibold text-gray-900">Common Issues</h3>
        </div>
        <div className="space-y-4">
          {details.commonIssues.map((issue, index) => (
            <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
              <h4 className="font-semibold text-gray-900 mb-2">{issue.issue}</h4>
              <p className="text-gray-600 mb-2">{issue.description}</p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Frequency: {issue.frequency}</span>
                <span className="text-gray-500">
                  Repair Cost: ${issue.typicalCost.diy} - ${issue.typicalCost.shop}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Settings className="h-6 w-6 text-gray-700 mr-2" />
            <h3 className="text-xl font-semibold text-gray-900">Maintenance Tips</h3>
          </div>
          <ul className="space-y-2">
            {details.maintenanceTips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-2"></span>
                <span className="text-gray-600">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Award className="h-6 w-6 text-yellow-500 mr-2" />
            <h3 className="text-xl font-semibold text-gray-900">Awards & Recognition</h3>
          </div>
          <ul className="space-y-2">
            {details.awards.map((award, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-2"></span>
                <span className="text-gray-600">{award}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}