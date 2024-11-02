import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Wrench className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Auto Repair Cost Calculator</span>
            </div>
            <p className="mt-4 text-gray-400">
              Get instant estimates for common car repairs and maintenance.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/brands" className="text-gray-400 hover:text-white">Brands</Link></li>
              <li><Link to="/maintenance" className="text-gray-400 hover:text-white">Maintenance Guide</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-400">support@autorepair.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-400">1-800-AUTO-HELP</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://www.kbb.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Kelley Blue Book</a></li>
              <li><a href="https://workshopmanuals.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Workshop Manuals</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Auto Repair Cost Calculator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}