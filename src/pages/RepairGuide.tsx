import React from 'react';
import { commonRepairs } from '../data/repairs';

export default function RepairGuide() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Repair Guide</h1>
        <p className="text-gray-600">
          Common repairs and their estimated costs
        </p>
      </div>

      <div className="space-y-6">
        {commonRepairs.map((repair) => (
          <div key={repair.service} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-gray-900">{repair.service}</h2>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {repair.complexity}
              </span>
            </div>
            
            <p className="text-gray-600 mb-6">{repair.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">DIY Cost</h3>
                <p className="text-2xl font-bold text-gray-900 mb-1">${repair.diy.cost}</p>
                <p className="text-gray-600">Time: {repair.diy.time}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Local Shop</h3>
                <p className="text-2xl font-bold text-gray-900 mb-1">${repair.localShop.cost}</p>
                <p className="text-gray-600">Time: {repair.localShop.time}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Dealership</h3>
                <p className="text-2xl font-bold text-gray-900 mb-1">${repair.dealership.cost}</p>
                <p className="text-gray-600">Time: {repair.dealership.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}