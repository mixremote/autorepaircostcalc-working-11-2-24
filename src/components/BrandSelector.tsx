import React from 'react';
import { CarFront, Calendar } from 'lucide-react';

interface BrandSelectorProps {
  selectedBrand: string;
  selectedModel: string;
  selectedYear: string;
  onBrandChange: (brand: string) => void;
  onModelChange: (model: string) => void;
  onYearChange: (year: string) => void;
}

export function BrandSelector({
  selectedBrand,
  selectedModel,
  selectedYear,
  onBrandChange,
  onModelChange,
  onYearChange,
}: BrandSelectorProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Brand
          </label>
          <div className="relative">
            <CarFront className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedBrand}
              onChange={(e) => onBrandChange(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              <option value="">Select Brand</option>
              <option value="toyota">Toyota</option>
              <option value="honda">Honda</option>
              <option value="ford">Ford</option>
              {/* Add more brands */}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Model
          </label>
          <div className="relative">
            <CarFront className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedModel}
              onChange={(e) => onModelChange(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              disabled={!selectedBrand}
            >
              <option value="">Select Model</option>
              {/* Models will be populated based on selected brand */}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Year
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedYear}
              onChange={(e) => onYearChange(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              disabled={!selectedModel}
            >
              <option value="">Select Year</option>
              {/* Years will be populated based on selected model */}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}