import React from 'react';
import { DollarSign, Clock, Wrench } from 'lucide-react';
import { RepairCost } from '../types';

interface Props {
  item: RepairCost;
  showDescription?: boolean;
}

export default function CostCalculator({ item, showDescription = true }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.service}</h3>
      {showDescription && (
        <p className="text-gray-600 mb-6">{item.description}</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Wrench className="h-5 w-5 text-blue-600 mr-2" />
            <h4 className="font-semibold text-gray-900">DIY</h4>
          </div>
          <p className="text-2xl font-bold text-blue-600 mb-1">${item.diy.cost}</p>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-1" />
            {item.diy.time}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Wrench className="h-5 w-5 text-gray-600 mr-2" />
            <h4 className="font-semibold text-gray-900">Local Shop</h4>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-1">${item.localShop.cost}</p>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-1" />
            {item.localShop.time}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Wrench className="h-5 w-5 text-gray-600 mr-2" />
            <h4 className="font-semibold text-gray-900">Dealership</h4>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-1">${item.dealership.cost}</p>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-1" />
            {item.dealership.time}
          </div>
        </div>
      </div>
    </div>
  );
}