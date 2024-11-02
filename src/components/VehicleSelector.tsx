import React, { useState } from 'react';
import { vehicles } from '../data/vehicles';
import { useNavigate } from 'react-router-dom';

interface Props {
  onSelect: (brand: string, model: string, year: number) => void;
}

export default function VehicleSelector({ onSelect }: Props) {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState<number | ''>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (brand && model && year) {
      onSelect(brand, model, year);
      navigate(`/brands/${brand.toLowerCase()}/${model.toLowerCase().replace(/\s+/g, '-')}`);
    }
  };

  const brandData = brand ? vehicles[brand as keyof typeof vehicles] : null;

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label htmlFor="brand" className="block text-sm font-medium text-gray-900 mb-1">
            Brand
          </label>
          <select
            id="brand"
            value={brand}
            onChange={(e) => {
              setBrand(e.target.value);
              setModel('');
              setYear('');
            }}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
          >
            <option value="">Select Brand</option>
            {Object.keys(vehicles).map((b) => (
              <option key={b} value={b} className="text-gray-900">
                {b}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="model" className="block text-sm font-medium text-gray-900 mb-1">
            Model
          </label>
          <select
            id="model"
            value={model}
            onChange={(e) => {
              setModel(e.target.value);
              setYear('');
            }}
            disabled={!brand}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 disabled:bg-gray-100"
          >
            <option value="">Select Model</option>
            {brandData?.models.map((m) => (
              <option key={m} value={m} className="text-gray-900">
                {m}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="year" className="block text-sm font-medium text-gray-900 mb-1">
            Year
          </label>
          <select
            id="year"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            disabled={!model}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 disabled:bg-gray-100"
          >
            <option value="">Select Year</option>
            {brandData?.years.map((y) => (
              <option key={y} value={y} className="text-gray-900">
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={!brand || !model || !year}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        Get Estimates
      </button>
    </form>
  );
}