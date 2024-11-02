import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { vehicles } from '../data/vehicles';
import { vehicleValues } from '../data/vehicleValues';
import { maintenanceItems } from '../data/maintenance';
import { commonRepairs } from '../data/repairs';
import VehicleValue from '../components/VehicleValue';
import VehicleDetails from '../components/VehicleDetails';
import SEOHead from '../components/SEOHead';

export default function ModelDetail() {
  const { brandId, modelId } = useParams<{ brandId: string; modelId: string }>();
  const brand = brandId ? Object.entries(vehicles).find(
    ([brand]) => brand.toLowerCase() === brandId.toLowerCase()
  ) : null;

  const model = brand?.[1].models.find(
    (model) => model.toLowerCase().replace(/\s+/g, '-') === modelId
  );

  if (!brand || !model) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Model not found</h1>
        <Link to="/brands" className="text-blue-600 hover:text-blue-800">
          Return to brands list
        </Link>
      </div>
    );
  }

  const manualLink = `https://workshopmanuals.org/?s=${encodeURIComponent(model)}`;
  const currentYear = new Date().getFullYear();
  const valueData = vehicleValues[brand[0] as keyof typeof vehicleValues]?.[model as keyof (typeof vehicleValues)[typeof brand[0]]]?.[currentYear as keyof typeof vehicleValues[typeof brand[0]][typeof model]];

  return (
    <>
      <SEOHead
        title={`${brand[0]} ${model} Repair Costs and Maintenance Guide`}
        description={`Get detailed repair costs, maintenance schedules, and reliability information for your ${brand[0]} ${model}. Compare DIY, local shop, and dealership prices.`}
        canonicalUrl={`/brand/${brandId}/${modelId}`}
      />
      
      <div className="space-y-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {brand[0]} {model}
          </h1>
          <p className="text-gray-600">
            Comprehensive guide to repair costs, maintenance, and vehicle information
          </p>
        </div>

        {valueData && (
          <VehicleValue
            brand={brand[0]}
            model={model}
            year={currentYear}
            msrp={valueData.msrp}
            depreciation={valueData.depreciation}
          />
        )}

        <VehicleDetails brand={brand[0]} model={model} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Maintenance Items</h2>
            <div className="space-y-4">
              {maintenanceItems.map((item) => (
                <div key={item.service} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.service}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="font-semibold text-gray-700">DIY</p>
                      <p className="text-gray-600">${item.diy.cost}</p>
                      <p className="text-sm text-gray-500">{item.diy.time}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">Local Shop</p>
                      <p className="text-gray-600">${item.localShop.cost}</p>
                      <p className="text-sm text-gray-500">{item.localShop.time}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">Dealership</p>
                      <p className="text-gray-600">${item.dealership.cost}</p>
                      <p className="text-sm text-gray-500">{item.dealership.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Common Repairs</h2>
            <div className="space-y-4">
              {commonRepairs.map((repair) => (
                <div key={repair.service} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{repair.service}</h3>
                  <p className="text-gray-600 mb-4">{repair.description}</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="font-semibold text-gray-700">DIY</p>
                      <p className="text-gray-600">${repair.diy.cost}</p>
                      <p className="text-sm text-gray-500">{repair.diy.time}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">Local Shop</p>
                      <p className="text-gray-600">${repair.localShop.cost}</p>
                      <p className="text-sm text-gray-500">{repair.localShop.time}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">Dealership</p>
                      <p className="text-gray-600">${repair.dealership.cost}</p>
                      <p className="text-sm text-gray-500">{repair.dealership.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Workshop Manual</h2>
          <p className="text-gray-600 mb-4">
            Get detailed repair instructions and diagrams for your {brand[0]} {model}
          </p>
          <a
            href={manualLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            View Workshop Manual
          </a>
        </div>
      </div>
    </>
  );
}