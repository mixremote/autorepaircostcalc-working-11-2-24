import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BrandList from './pages/BrandList';
import BrandPage from './pages/BrandPage';
import ModelPage from './pages/ModelPage';
import MaintenanceGuide from './pages/MaintenanceGuide';
import RepairGuide from './pages/RepairGuide';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brands" element={<BrandList />} />
            <Route path="/brands/:brand" element={<BrandPage />} />
            <Route path="/brands/:brand/:model" element={<ModelPage />} />
            <Route path="/maintenance" element={<MaintenanceGuide />} />
            <Route path="/repairs" element={<RepairGuide />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;