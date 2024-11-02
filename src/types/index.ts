export interface Vehicle {
  brand: string;
  model: string;
  years: number[];
}

export interface VehicleValue {
  msrp: number;
  depreciation: {
    threeYear: number;
    fiveYear: number;
    tenYear: number;
  };
}

export interface VehicleDetails {
  description: string;
  keyFeatures: string[];
  commonIssues: {
    issue: string;
    description: string;
    typicalCost: {
      diy: number;
      shop: number;
    };
    frequency: string;
  }[];
  reliability: {
    score: number;
    summary: string;
  };
  fuelEconomy: {
    city: number;
    highway: number;
  };
  maintenanceTips: string[];
  awards: string[];
}

export interface RepairCost {
  service: string;
  diy: {
    cost: number;
    time: string;
  };
  localShop: {
    cost: number;
    time: string;
  };
  dealership: {
    cost: number;
    time: string;
  };
  description: string;
}

export interface MaintenanceItem extends RepairCost {
  interval: string;
}

export interface CommonRepair extends RepairCost {
  complexity: 'Basic' | 'Intermediate' | 'Complex';
}