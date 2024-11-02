import React from 'react';
import { Link } from 'react-router-dom';
import { vehicles } from '../data/vehicles';

export default function BrandList() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Car Brands</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(vehicles).map(([brand, data]) => (
          <Link
            key={brand}
            to={`/brands/${brand.toLowerCase()}`}
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{brand}</h2>
            <p className="text-gray-600">
              {data.models.length} Models ({data.years[0]} - {data.years[data.years.length - 1]})
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}