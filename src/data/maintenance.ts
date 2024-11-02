import { MaintenanceItem } from '../types';

export const maintenanceItems: MaintenanceItem[] = [
  {
    service: "Oil Change",
    diy: {
      cost: 35,
      time: "30-45 minutes"
    },
    localShop: {
      cost: 65,
      time: "30 minutes"
    },
    dealership: {
      cost: 95,
      time: "30 minutes"
    },
    interval: "Every 5,000-7,500 miles",
    description: "Replace engine oil and filter to maintain engine health"
  },
  {
    service: "Tire Rotation",
    diy: {
      cost: 0,
      time: "45 minutes"
    },
    localShop: {
      cost: 25,
      time: "30 minutes"
    },
    dealership: {
      cost: 40,
      time: "30 minutes"
    },
    interval: "Every 5,000-8,000 miles",
    description: "Rotate tires to ensure even wear and extend tire life"
  },
  {
    service: "Air Filter Replacement",
    diy: {
      cost: 15,
      time: "15 minutes"
    },
    localShop: {
      cost: 45,
      time: "15 minutes"
    },
    dealership: {
      cost: 65,
      time: "15 minutes"
    },
    interval: "Every 15,000-30,000 miles",
    description: "Replace engine air filter to maintain engine performance"
  },
  {
    service: "Cabin Air Filter",
    diy: {
      cost: 20,
      time: "20 minutes"
    },
    localShop: {
      cost: 50,
      time: "20 minutes"
    },
    dealership: {
      cost: 75,
      time: "20 minutes"
    },
    interval: "Every 15,000-25,000 miles",
    description: "Replace cabin air filter to maintain air quality"
  },
  {
    service: "Brake Fluid Flush",
    diy: {
      cost: 25,
      time: "1 hour"
    },
    localShop: {
      cost: 100,
      time: "45 minutes"
    },
    dealership: {
      cost: 150,
      time: "45 minutes"
    },
    interval: "Every 30,000 miles",
    description: "Replace brake fluid to maintain brake system performance"
  }
  // ... more maintenance items
];