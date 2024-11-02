import { CommonRepair } from '../types';

export const commonRepairs: CommonRepair[] = [
  {
    service: "Brake Pad Replacement",
    complexity: "Basic",
    diy: {
      cost: 50,
      time: "2-3 hours"
    },
    localShop: {
      cost: 250,
      time: "1-2 hours"
    },
    dealership: {
      cost: 400,
      time: "1-2 hours"
    },
    description: "Replace worn brake pads to maintain stopping power"
  },
  {
    service: "Battery Replacement",
    complexity: "Basic",
    diy: {
      cost: 150,
      time: "30 minutes"
    },
    localShop: {
      cost: 200,
      time: "30 minutes"
    },
    dealership: {
      cost: 300,
      time: "30 minutes"
    },
    description: "Replace old or failing battery"
  },
  {
    service: "Alternator Replacement",
    complexity: "Intermediate",
    diy: {
      cost: 250,
      time: "2-3 hours"
    },
    localShop: {
      cost: 500,
      time: "1-2 hours"
    },
    dealership: {
      cost: 800,
      time: "1-2 hours"
    },
    description: "Replace faulty alternator to restore charging system"
  },
  {
    service: "Timing Belt Replacement",
    complexity: "Complex",
    diy: {
      cost: 200,
      time: "4-6 hours"
    },
    localShop: {
      cost: 700,
      time: "3-4 hours"
    },
    dealership: {
      cost: 1000,
      time: "3-4 hours"
    },
    description: "Replace timing belt to prevent engine damage"
  }
  // ... more repair items
];