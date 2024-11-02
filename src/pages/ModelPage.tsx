import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { vehicles } from '../data/vehicles';
import VehicleDetails from '../components/VehicleDetails';
import VehicleValue from '../components/VehicleValue';
import WorkshopManual from '../components/WorkshopManual';
import { vehicleValues } from '../data/vehicleValues';
import { maintenanceItems } from '../data/maintenance';
import { commonRepairs } from '../data/repairs';
import SEOHead from '../components/SEOHead';
import CostCalculator from '../components/CostCalculator';

export default function ModelPage() {
  const { brand, model } = useParams<{ brand: string; model: string }>();
  
  const brandData = brand ? Object.entries(vehicles).find(
    ([brandName]) => brandName.toLowerCase() === brand.toLowerCase()
  ) : null;

  const modelName = model?.replace(/-/g, ' ');
  const modelData = brandData?.[1].models.find(
    (m) => m.toLowerCase() === modelName?.toLowerCase()
  );

  if (!brandData || !modelData) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Model not found</h1>
        <Link to="/brands" className="text-blue-600 hover:text-blue-800">
          Return to brands
        </Link>
      </div>
    );
  }

  const [brandName] = brandData;
  const currentYear = new Date().getFullYear();
  const valueData = vehicleValues[brandName as keyof typeof vehicleValues]?.[modelData as keyof (typeof vehicleValues)[typeof brandName]]?.[currentYear];

  return (
    <>
      <SEOHead
        title={`${brandName} ${modelData} Repair Costs and Maintenance Guide`}
        description={`Get detailed repair costs, maintenance schedules, workshop manuals, and reliability information for your ${brandName} ${modelData}. Compare DIY, local shop, and dealership prices.`}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {brandName} {modelData}
          </h1>
          <p className="text-gray-600">
            Comprehensive guide to repair costs, maintenance, and vehicle information
          </p>
        </div>

        <WorkshopManual brand={brandName} model={modelData} />

        {valueData && (
          <div className="mb-8">
            <VehicleValue
              brand={brandName}
              model={modelData}
              year={currentYear}
              msrp={valueData.msrp}
              depreciation={valueData.depreciation}
            />
          </div>
        )}

        <VehicleDetails brand={brandName} model={modelData} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Maintenance Items</h2>
            <div className="space-y-6">
              {maintenanceItems.map((item) => (
                <CostCalculator key={item.service} item={item} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Repairs</h2>
            <div className="space-y-6">
              {commonRepairs.map((repair) => (
                <CostCalculator key={repair.service} item={repair} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}