import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wrench, DollarSign, Clock, Car } from 'lucide-react';
import VehicleSelector from '../components/VehicleSelector';
import { useNavigate } from 'react-router-dom';
import { maintenanceItems } from '../data/maintenance';
import { commonRepairs } from '../data/repairs';
import CostCalculator from '../components/CostCalculator';

const Home = () => {
  const navigate = useNavigate();

  const handleVehicleSelect = (brand: string, model: string, year: number) => {
    navigate(`/brands/${brand.toLowerCase()}/${model.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <>
      <Helmet>
        <title>Auto Repair Cost Calculator - Estimate Car Repair Costs</title>
        <meta name="description" content="Get instant estimates for common car repairs and maintenance. Compare DIY, local shop, and dealership prices for your vehicle make and model." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
        <section className="text-center py-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white">
          <h1 className="text-4xl font-bold mb-4">Auto Repair Cost Calculator</h1>
          <p className="text-xl mb-8">Get instant estimates for your vehicle repairs and maintenance</p>
          <div className="max-w-3xl mx-auto">
            <VehicleSelector onSelect={handleVehicleSelect} />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Wrench className="h-8 w-8 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-gray-900">Common Repairs</h2>
            <p className="text-gray-700">Browse estimates for the most common car repairs</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <DollarSign className="h-8 w-8 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-gray-900">Price Comparison</h2>
            <p className="text-gray-700">Compare DIY, local shop, and dealership prices</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Clock className="h-8 w-8 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-gray-900">Time Estimates</h2>
            <p className="text-gray-700">Get repair time estimates for better planning</p>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900">Common Maintenance Items</h2>
          <div className="grid grid-cols-1 gap-6">
            {maintenanceItems.slice(0, 3).map((item) => (
              <CostCalculator key={item.service} item={item} />
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900">Common Repairs</h2>
          <div className="grid grid-cols-1 gap-6">
            {commonRepairs.slice(0, 3).map((repair) => (
              <CostCalculator key={repair.service} item={repair} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;