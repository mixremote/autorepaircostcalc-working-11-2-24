export interface RepairCost {
  service: string;
  description: string;
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
}