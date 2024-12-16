// Constants for CO2 calculations (grams of CO2)
const CO2_PER_CIGARETTE = 14;

// Food-related CO2 emissions (g/serving)
const FOOD_CO2 = {
  beef: 2000,    // Per serving
  pork: 800,     // Per serving
  poultry: 400,  // Per serving
  fish: 300,     // Per serving
  dairy: 200,    // Per serving
};

// Housing-related CO2 emissions (g/day)
const HOUSING_CO2 = {
  'no-water': 1000,
  'with-water': 2000,
  apartment: 3000,
  duplex: 4000,
  luxury: 8000,
};

const HOUSE_SIZE_MULTIPLIER = {
  tiny: 0.5,
  medium: 1,
  large: 1.5,
  huge: 2,
};

const TRASH_MULTIPLIER = {
  'much-less': 0.5,
  less: 0.75,
  same: 1,
  more: 1.25,
  'much-more': 1.5,
};

// Transport-related CO2 emissions
const TRANSPORT_CO2 = {
  carPerKm: 120,        // g/km (varies with fuel economy)
  bikePerKm: 80,        // g/km (varies with fuel economy)
  publicTransportPerKm: 30,  // g/km
  flightPerHour: 90000, // g/hour
};

export const calculateCO2Equivalent = (
  foodAnswers: any,
  housingAnswers: any,
  transportAnswers: any
): number => {
  let totalCO2 = 0;

  // Food calculations
  totalCO2 += (foodAnswers.beef * FOOD_CO2.beef) / 7;      // Convert weekly to daily
  totalCO2 += (foodAnswers.pork * FOOD_CO2.pork) / 7;
  totalCO2 += (foodAnswers.poultry * FOOD_CO2.poultry) / 7;
  totalCO2 += (foodAnswers.fish * FOOD_CO2.fish) / 7;
  totalCO2 += (foodAnswers.dairy * FOOD_CO2.dairy) / 7;

  // Housing calculations
  const baseHousingCO2 = HOUSING_CO2[housingAnswers.type] || HOUSING_CO2.apartment;
  const sizeMultiplier = HOUSE_SIZE_MULTIPLIER[housingAnswers.size] || 1;
  const trashMultiplier = TRASH_MULTIPLIER[housingAnswers.trash] || 1;
  const residentDivisor = Math.max(1, Math.sqrt(housingAnswers.residents)); // Square root for shared efficiency
  
  totalCO2 += (baseHousingCO2 * sizeMultiplier * trashMultiplier) / residentDivisor;

  // Transport calculations
  const carCO2 = (transportAnswers.carDistance * TRANSPORT_CO2.carPerKm * 
    (transportAnswers.carFuelEconomy / 8)) / 7; // Adjust for fuel economy and convert to daily
  
  const bikeCO2 = (transportAnswers.bikeDistance * TRANSPORT_CO2.bikePerKm * 
    (transportAnswers.bikeFuelEconomy / 4)) / 7;
  
  const publicTransportCO2 = (transportAnswers.publicTransport * 
    TRANSPORT_CO2.publicTransportPerKm) / 7;
  
  const flightCO2 = (transportAnswers.flightHours * TRANSPORT_CO2.flightPerHour) / 365;

  totalCO2 += carCO2 + bikeCO2 + publicTransportCO2 + flightCO2;

  return totalCO2;
};

export const convertCO2ToCigarettes = (co2Grams: number): number => {
  return Math.round(co2Grams / CO2_PER_CIGARETTE);
};