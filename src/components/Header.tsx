import React from 'react';
import { Car, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Car className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-semibold text-gray-900">AutoCost</span>
          </div>
          
          <button className="lg:hidden">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          
          <div className="hidden lg:flex items-center gap-6">
            <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="/brands" className="text-gray-600 hover:text-blue-600">Brands</a>
            <a href="/maintenance" className="text-gray-600 hover:text-blue-600">Maintenance</a>
            <a href="/repairs" className="text-gray-600 hover:text-blue-600">Repairs</a>
          </div>
        </div>
      </nav>
    </header>
  );
}