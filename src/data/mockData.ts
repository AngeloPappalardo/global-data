// Dati finti per la dashboard globale

export const globalStats = {
  population: {
    total: "8,045,311,447",
    change: { value: 0.87, type: "increase" as const, period: "quest'anno" },
    description: "Popolazione mondiale attuale"
  },
  co2: {
    total: "421.2 ppm",
    change: { value: 2.1, type: "increase" as const, period: "vs anno scorso" },
    description: "Concentrazione di CO₂ nell'atmosfera"
  },
  temperature: {
    total: "+1.2°C",
    change: { value: 0.1, type: "increase" as const, period: "vs era pre-industriale" },
    description: "Anomalia temperatura globale"
  },
  gdp: {
    total: "$105.4T",
    change: { value: 3.1, type: "increase" as const, period: "crescita annuale" },
    description: "PIL mondiale"
  }
};

export const populationTrend = [
  { year: "2018", population: 7631, births: 140, deaths: 56 },
  { year: "2019", population: 7713, births: 143, deaths: 58 },
  { year: "2020", population: 7794, births: 140, deaths: 61 },
  { year: "2021", population: 7874, births: 134, deaths: 59 },
  { year: "2022", population: 7953, births: 129, deaths: 57 },
  { year: "2023", population: 8031, births: 131, deaths: 56 },
  { year: "2024", population: 8045, births: 133, deaths: 58 }
];

export const co2Emissions = [
  { year: "2018", level: 411.2, trend: 2.4 },
  { year: "2019", level: 414.7, trend: 2.1 },
  { year: "2020", level: 417.1, trend: 1.8 },
  { year: "2021", level: 419.3, trend: 2.2 },
  { year: "2022", level: 420.8, trend: 2.0 },
  { year: "2023", level: 421.0, trend: 1.9 },
  { year: "2024", level: 421.2, trend: 2.1 }
];

export const economicData = [
  { region: "Nord America", gdp: 28420, unemployment: 3.7, inflation: 2.1 },
  { region: "Europa", gdp: 24220, unemployment: 6.2, inflation: 1.8 },
  { region: "Asia", gdp: 31890, unemployment: 4.1, inflation: 2.7 },
  { region: "Sud America", gdp: 4200, unemployment: 8.9, inflation: 4.2 },
  { region: "Africa", gdp: 2780, unemployment: 7.3, inflation: 3.1 },
  { region: "Oceania", gdp: 1620, unemployment: 3.2, inflation: 1.9 }
];

export const climateData = [
  { year: "2018", temperature: 0.83, precipitation: 98.2, extremeEvents: 281 },
  { year: "2019", temperature: 0.98, precipitation: 101.4, extremeEvents: 308 },
  { year: "2020", temperature: 1.02, precipitation: 97.8, extremeEvents: 289 },
  { year: "2021", temperature: 0.85, precipitation: 99.1, extremeEvents: 314 },
  { year: "2022", temperature: 0.89, precipitation: 103.2, extremeEvents: 387 },
  { year: "2023", temperature: 1.48, precipitation: 95.7, extremeEvents: 421 },
  { year: "2024", temperature: 1.2, precipitation: 102.1, extremeEvents: 398 }
];

export const airQualityData = [
  { city: "Tokyo", aqi: 45, pm25: 12, status: "Buona" },
  { city: "New York", aqi: 62, pm25: 18, status: "Moderata" },
  { city: "Londra", aqi: 38, pm25: 10, status: "Buona" },
  { city: "Pechino", aqi: 156, pm25: 89, status: "Malsana" },
  { city: "Delhi", aqi: 287, pm25: 183, status: "Pericolosa" },
  { city: "Los Angeles", aqi: 73, pm25: 21, status: "Moderata" },
  { city: "Mumbai", aqi: 164, pm25: 94, status: "Malsana" },
  { city: "Città del Messico", aqi: 89, pm25: 31, status: "Moderata" }
];

export const populationByCountry = [
  { country: "Cina", population: 1411, growth: 0.39 },
  { country: "India", population: 1380, growth: 0.99 },
  { country: "USA", population: 331, growth: 0.59 },
  { country: "Indonesia", population: 273, growth: 1.07 },
  { country: "Pakistan", population: 225, growth: 2.00 },
  { country: "Brasile", population: 213, growth: 0.72 },
  { country: "Nigeria", population: 211, growth: 2.58 },
  { country: "Bangladesh", population: 165, growth: 1.01 },
  { country: "Russia", population: 146, growth: -0.04 },
  { country: "Messico", population: 129, growth: 1.06 }
];

export const energyData = [
  { source: "Carbone", percentage: 27.2, production: 8840, trend: -2.1 },
  { source: "Gas Naturale", percentage: 24.7, production: 8020, trend: 1.8 },
  { source: "Idroelettrico", percentage: 15.8, production: 5130, trend: 3.2 },
  { source: "Nucleare", percentage: 10.1, production: 3280, trend: -1.4 },
  { source: "Eolico", percentage: 7.5, production: 2440, trend: 12.8 },
  { source: "Solare", percentage: 4.9, production: 1590, trend: 18.3 },
  { source: "Biomasse", percentage: 5.2, production: 1690, trend: 4.7 },
  { source: "Geotermico", percentage: 0.4, production: 130, trend: 2.9 },
  { source: "Altri", percentage: 4.2, production: 1360, trend: 1.1 }
];

export const newsData = [
  {
    id: 1,
    title: "Record storico di temperature globali nel 2024",
    summary: "L'anno 2024 registra le temperature più alte mai misurate, con un aumento di 1.2°C rispetto ai livelli pre-industriali.",
    category: "Clima",
    timestamp: "2 ore fa",
    impact: "high"
  },
  {
    id: 2,
    title: "Crescita demografica rallenta in Asia",
    summary: "I tassi di natalità in molti paesi asiatici mostrano una tendenza al ribasso, influenzando le proiezioni demografiche globali.",
    category: "Demografia",
    timestamp: "5 ore fa",
    impact: "medium"
  },
  {
    id: 3,
    title: "Energia rinnovabile supera il 30% del mix energetico globale",
    summary: "Per la prima volta nella storia, le fonti rinnovabili rappresentano più di un terzo della produzione energetica mondiale.",
    category: "Energia",
    timestamp: "1 giorno fa",
    impact: "high"
  },
  {
    id: 4,
    title: "Miglioramento della qualità dell'aria in Europa",
    summary: "Le nuove politiche ambientali mostrano risultati positivi con una riduzione media del 15% delle emissioni di PM2.5.",
    category: "Ambiente",
    timestamp: "2 giorni fa",
    impact: "medium"
  }
];