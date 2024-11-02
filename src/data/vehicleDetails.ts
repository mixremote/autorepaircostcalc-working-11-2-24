export const vehicleDetails = {
  "Audi": {
    "A3": {
      description: "The Audi A3 is a premium compact car that combines luxury, performance, and technology. Known for its refined interior, strong engine options, and advanced safety features.",
      keyFeatures: [
        "Available Quattro all-wheel drive",
        "Virtual cockpit digital instrument cluster",
        "MMI touch response system",
        "Premium interior materials",
        "Advanced driver assistance systems"
      ],
      commonIssues: [
        {
          issue: "DSG Transmission Issues",
          description: "Some models may experience hesitation or rough shifting",
          typicalCost: {
            diy: 800,
            shop: 2500
          },
          frequency: "Occasional in 2015-2017 models"
        },
        {
          issue: "Oil Consumption",
          description: "Higher than normal oil consumption in some engines",
          typicalCost: {
            diy: 100,
            shop: 400
          },
          frequency: "Common in early 2.0T engines"
        }
      ],
      reliability: {
        score: 4.0,
        summary: "Generally reliable with proper maintenance. Some transmission and engine issues reported."
      },
      fuelEconomy: {
        city: 27,
        highway: 36
      },
      maintenanceTips: [
        "Oil change every 5,000-7,500 miles",
        "DSG transmission service every 40,000 miles",
        "Spark plug replacement every 60,000 miles",
        "Brake fluid flush every 2 years",
        "Air filter replacement every 30,000 miles"
      ],
      awards: [
        "2023 IIHS Top Safety Pick+",
        "2022 Car and Driver Editors' Choice",
        "2021 World Car of the Year Finalist"
      ]
    }
  }
  // Add more brands and models as needed
};