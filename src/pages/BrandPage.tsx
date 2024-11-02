import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { vehicles } from '../data/vehicles';
import { Car } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function BrandPage() {
  const { brand } = useParams<{ brand: string }>();
  const brandData = brand ? Object.entries(vehicles).find(
    ([brandName]) => brandName.toLowerCase() === brand.toLowerCase()
  ) : null;

  if (!brandData) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Brand not found</h1>
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          Return to home
        </Link>
      </div>
    );
  }

  const [brandName, data] = brandData;

  return (
    <>
      <SEOHead
        title={`${brandName} Vehicle Repair Costs and Maintenance Guide`}
        description={`Get detailed repair costs, maintenance schedules, and reliability information for all ${brandName} models. Compare DIY, local shop, and dealership prices.`}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{brandName} Models</h1>
          <p className="text-gray-600">
            Select a model to view detailed repair and maintenance costs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.models.map((model) => (
            <Link
              key={model}
              to={`/brands/${brandName.toLowerCase()}/${model.toLowerCase().replace(/\s+/g, '-')}`}
              className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-center mb-4">
                <Car className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900">{model}</h2>
              </div>
              <p className="text-gray-600">
                Years: {Math.min(...data.years)} - {Math.max(...data.years)}
              </p>
              <div className="mt-4 text-blue-600 text-sm">
                View repair costs →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}