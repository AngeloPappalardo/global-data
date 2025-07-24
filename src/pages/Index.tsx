import { StatCard } from "@/components/ui/StatCard";
import { LineChart } from "@/components/charts/LineChart";
import { BarChart } from "@/components/charts/BarChart";
import { 
  globalStats,
  populationTrend, 
  co2Emissions, 
  climateData,
  economicData 
} from "@/data/mockData";

const Index = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Global Data Dashboard</h1>
        <p className="text-xl text-muted-foreground">
          Real-time insights into global population, environment, economy, and climate data
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Global Population"
          value={globalStats.population.total}
          change={globalStats.population.change}
          description={globalStats.population.description}
          infoDescription="This displays the current global population count and its growth trend. The data shows how the world's population is changing over time, indicating increases in birth rates and life expectancy globally."
        />
        <StatCard
          title="CO₂ Level"
          value={globalStats.co2.total}
          change={globalStats.co2.change}
          description={globalStats.co2.description}
          variant="warning"
          infoDescription="Carbon dioxide concentration in the atmosphere measured in parts per million (ppm). Higher CO₂ levels contribute to climate change and global warming. The current level is significantly higher than pre-industrial levels."
        />
        <StatCard
          title="Global GDP"
          value={globalStats.gdp.total}
          change={globalStats.gdp.change}
          description={globalStats.gdp.description}
          variant="success"
          infoDescription="Gross Domestic Product represents the total economic output of all countries combined. This metric shows the overall health and growth of the global economy, measured in trillions of US dollars."
        />
        <StatCard
          title="Temperature"
          value={globalStats.temperature.total}
          change={globalStats.temperature.change}
          description={globalStats.temperature.description}
          variant="destructive"
          infoDescription="Global temperature anomaly compared to the 20th century average. Positive values indicate warming above historical norms. This metric is crucial for understanding climate change impacts on our planet."
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Population Growth</h2>
          <LineChart 
            data={populationTrend} 
            xKey="year"
            yKeys={[
              { key: "population", name: "Population (millions)", color: "hsl(var(--primary))" }
            ]}
            title="Global Population Over Time"
            height={300}
          />
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">CO₂ Atmospheric Levels</h2>
          <BarChart 
            data={co2Emissions} 
            xKey="year"
            yKeys={[
              { key: "level", name: "CO₂ Level (ppm)", color: "hsl(var(--warning))" }
            ]}
            title="CO₂ Concentration (ppm)"
            height={300}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Temperature Anomaly</h2>
          <LineChart 
            data={climateData} 
            xKey="year"
            yKeys={[
              { key: "temperature", name: "Temperature Change (°C)", color: "hsl(var(--destructive))" }
            ]}
            title="Global Temperature Change"
            height={300}
          />
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Economic Indicators</h2>
          <BarChart 
            data={economicData} 
            xKey="region"
            yKeys={[
              { key: "gdp", name: "GDP (Billions USD)", color: "hsl(var(--success))" }
            ]}
            title="GDP by Region (Billions USD)"
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
