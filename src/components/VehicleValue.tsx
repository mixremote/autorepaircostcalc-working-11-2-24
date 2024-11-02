import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Props {
  brand: string;
  model: string;
  year: number;
  msrp: number;
  depreciation: {
    threeYear: number;
    fiveYear: number;
    tenYear: number;
  };
}

export default function VehicleValue({ brand, model, year, msrp, depreciation }: Props) {
  const kbbUrl = `https://www.kbb.com/${brand.toLowerCase()}/${model.toLowerCase()}/${year}`;
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  
  const getEstimatedValue = () => {
    if (age <= 3) return msrp * (1 - (depreciation.threeYear * (age / 3)));
    if (age <= 5) return msrp * (1 - depreciation.fiveYear);
    if (age <= 10) return msrp * (1 - depreciation.tenYear);
    return msrp * 0.1; // 10% of MSRP for vehicles over 10 years
  };

  const estimatedValue = getEstimatedValue();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Vehicle Value Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <p className="text-gray-600">Original MSRP</p>
          <p className="text-2xl font-bold text-gray-900">${msrp.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-gray-600">Estimated Current Value</p>
          <p className="text-2xl font-bold text-blue-600">${Math.round(estimatedValue).toLocaleString()}</p>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-4 mb-6">
        <p className="text-sm text-gray-600">
          Vehicle age: {age} years<br />
          Estimated depreciation: {Math.round((1 - (estimatedValue / msrp)) * 100)}%
        </p>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-gray-600 text-sm">
          Get accurate, up-to-date pricing
        </p>
        <a
          href={kbbUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          Check KBB Value
          <ExternalLink className="h-4 w-4 ml-1" />
        </a>
      </div>
    </div>
  );
}