import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/ui/StatCard";
import { LineChart } from "@/components/charts/LineChart";
import { BarChart } from "@/components/charts/BarChart";
import { airQualityData, co2Emissions, energyData } from "@/data/mockData";
import { Leaf, Wind, Zap, Droplets } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Environment = () => {
  const chartColors = {
    co2: "hsl(var(--chart-1))",
    trend: "hsl(var(--chart-2))"
  };

  const energyColors = energyData.map((_, index) => 
    `hsl(var(--chart-${(index % 5) + 1}))`
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-success to-accent bg-clip-text text-transparent">
            Ambiente & Risorse
          </h1>
          <p className="text-muted-foreground mt-2">
            Monitoraggio qualità dell'aria, emissioni e fonti energetiche globali
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-success border-success">
            <Leaf className="w-3 h-3 mr-1" />
            Aggiornato ora
          </Badge>
        </div>
      </div>

      {/* Key Environmental Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="CO₂ Atmosferico"
          value="421.2 ppm"
          change={{ value: 2.1, type: "increase", period: "vs 2023" }}
          icon={Wind}
          variant="destructive"
          description="Concentrazione atmosferica"
          infoDescription="Misura la concentrazione di anidride carbonica nell'atmosfera in parti per milione. Livelli più alti contribuiscono all'effetto serra e al riscaldamento globale. I livelli attuali sono i più alti degli ultimi 800.000 anni."
        />
        <StatCard
          title="Energia Rinnovabile"
          value="32.8%"
          change={{ value: 5.2, type: "increase", period: "crescita annuale" }}
          icon={Zap}
          variant="success"
          description="% del mix energetico globale"
          infoDescription="Percentuale di energia prodotta da fonti rinnovabili come solare, eolico, idroelettrico e geotermico. Un aumento indica una transizione verso un sistema energetico più sostenibile e la riduzione delle emissioni di carbonio."
        />
        <StatCard
          title="Deforestazione"
          value="-10.2M ha"
          change={{ value: -15.3, type: "decrease", period: "vs 2023" }}
          icon={Leaf}
          variant="destructive"
          description="Perdita forestale annuale"
          infoDescription="Quantità di foreste perse ogni anno a causa di attività umane come disboscamento, agricoltura e urbanizzazione. Le foreste sono cruciali per assorbire CO₂ e mantenere la biodiversità del pianeta."
        />
        <StatCard
          title="Qualità Aria"
          value="84 AQI"
          change={{ value: -7.8, type: "decrease", period: "miglioramento" }}
          icon={Droplets}
          variant="success"
          description="Media globale AQI"
          infoDescription="Indice di Qualità dell'Aria che misura la concentrazione di inquinanti atmosferici. Valori più bassi indicano aria più pulita. AQI sotto 50 è considerato buono, mentre valori sopra 100 possono essere dannosi per la salute."
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* CO2 Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wind className="h-5 w-5 text-destructive" />
              Andamento CO₂ Atmosferico
            </CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart
              data={co2Emissions}
              xKey="year"
              yKeys={[
                { key: "level", name: "CO₂ (ppm)", color: chartColors.co2 },
                { key: "trend", name: "Trend", color: chartColors.trend }
              ]}
              height={250}
            />
          </CardContent>
        </Card>

        {/* Energy Mix */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-warning" />
              Mix Energetico Globale
            </CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart
              data={energyData.slice(0, 6)}
              xKey="source"
              yKeys={[
                { key: "percentage", name: "% Produzione", color: "hsl(var(--chart-3))" }
              ]}
              height={250}
            />
          </CardContent>
        </Card>
      </div>

      {/* Air Quality Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Droplets className="h-5 w-5 text-primary" />
            Qualità dell'Aria per Città
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">Città</th>
                  <th className="text-left py-3 px-4 font-semibold">AQI</th>
                  <th className="text-left py-3 px-4 font-semibold">PM2.5</th>
                  <th className="text-left py-3 px-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {airQualityData.map((city, index) => (
                  <tr key={index} className="border-b border-border/50 hover:bg-muted/50">
                    <td className="py-3 px-4 font-medium">{city.city}</td>
                    <td className="py-3 px-4">
                      <Badge 
                        variant={city.aqi <= 50 ? "default" : city.aqi <= 100 ? "secondary" : "destructive"}
                      >
                        {city.aqi}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">{city.pm25} μg/m³</td>
                    <td className="py-3 px-4">
                      <Badge 
                        variant={
                          city.status === "Buona" ? "default" :
                          city.status === "Moderata" ? "secondary" :
                          "destructive"
                        }
                      >
                        {city.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Energy Production Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-success" />
            Dettaglio Produzione Energetica
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {energyData.map((source, index) => (
              <div 
                key={source.source} 
                className="p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{source.source}</h4>
                  <Badge 
                    variant={source.trend > 0 ? "default" : "secondary"}
                    className={source.trend > 0 ? "text-success" : "text-destructive"}
                  >
                    {source.trend > 0 ? "+" : ""}{source.trend}%
                  </Badge>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold">{source.percentage}%</div>
                  <div className="text-sm text-muted-foreground">
                    {source.production.toLocaleString()} TWh
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Environment;