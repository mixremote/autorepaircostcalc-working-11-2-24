import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Car, Settings, Info } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <Wrench className="h-6 w-6 text-blue-600" />
                <span className="ml-2 font-bold text-xl">Auto Repair Calculator</span>
              </Link>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link to="/brands" className="inline-flex items-center px-1 pt-1 text-gray-900">
                  <Car className="h-4 w-4 mr-1" />
                  Brands
                </Link>
                <Link to="/maintenance" className="inline-flex items-center px-1 pt-1 text-gray-900">
                  <Settings className="h-4 w-4 mr-1" />
                  Maintenance
                </Link>
                <Link to="/repairs" className="inline-flex items-center px-1 pt-1 text-gray-900">
                  <Info className="h-4 w-4 mr-1" />
                  Repairs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {children}
      </main>

      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-300">
                Expert auto repair cost estimates and maintenance guides since 2024.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="https://www.kbb.com" className="text-gray-300 hover:text-white">Kelley Blue Book</a></li>
                <li><a href="https://workshopmanuals.org" className="text-gray-300 hover:text-white">Workshop Manuals</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-300">
                Email: info@autorepairscalculator.com<br />
                Phone: (555) 123-4567
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>© 2024 Auto Repair Cost Calculator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;