import React from 'react';
import { maintenanceItems } from '../data/maintenance';

export default function MaintenanceGuide() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Maintenance Guide</h1>
        <p className="text-gray-600">
          Common maintenance items and their estimated costs
        </p>
      </div>

      <div className="space-y-6">
        {maintenanceItems.map((item) => (
          <div key={item.service} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{item.service}</h2>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <p className="text-blue-600 mb-4">Interval: {item.interval}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">DIY Cost</h3>
                <p className="text-2xl font-bold text-gray-900 mb-1">${item.diy.cost}</p>
                <p className="text-gray-600">Time: {item.diy.time}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Local Shop</h3>
                <p className="text-2xl font-bold text-gray-900 mb-1">${item.localShop.cost}</p>
                <p className="text-gray-600">Time: {item.localShop.time}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Dealership</h3>
                <p className="text-2xl font-bold text-gray-900 mb-1">${item.dealership.cost}</p>
                <p className="text-gray-600">Time: {item.dealership.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}