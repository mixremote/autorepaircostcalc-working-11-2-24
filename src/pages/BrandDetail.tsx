import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { vehicles } from '../data/vehicles';

export default function BrandDetail() {
  const { brandId } = useParams<{ brandId: string }>();
  const brand = brandId ? Object.entries(vehicles).find(
    ([brand]) => brand.toLowerCase() === brandId.toLowerCase()
  ) : null;

  if (!brand) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Brand not found</h1>
        <Link to="/brands" className="text-blue-600 hover:text-blue-800">
          Return to brands list
        </Link>
      </div>
    );
  }

  const [brandName, data] = brand;

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{brandName} Models</h1>
        <p className="text-gray-600">
          Select a model to view repair and maintenance costs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.models.map((model) => (
          <Link
            key={model}
            to={`/brand/${brandId}/${model.toLowerCase().replace(/\s+/g, '-')}`}
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{model}</h2>
            <p className="text-gray-600">
              Years: {data.years[0]} - {data.years[data.years.length - 1]}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}