import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/ui/StatCard";
import { LineChart } from "@/components/charts/LineChart";
import { climateData } from "@/data/mockData";
import { CloudRain, Thermometer, Zap, AlertTriangle } from "lucide-react";

const Climate = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Clima & Meteo
        </h1>
        <p className="text-muted-foreground mt-2">Monitoraggio cambiamenti climatici e eventi meteorologici</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Temp. Anomalia" 
          value="+1.2°C" 
          change={{ value: 0.1, type: "increase", period: "vs pre-industriale" }} 
          icon={Thermometer} 
          variant="warning"
          infoDescription="Differenza tra la temperatura media globale attuale e quella del periodo pre-industriale (1850-1900). Un aumento di 1.5°C è considerato il limite critico per evitare cambiamenti climatici catastrofici secondo l'Accordo di Parigi."
        />
        <StatCard 
          title="Precipitazioni" 
          value="102.1mm" 
          change={{ value: 6.7, type: "increase", period: "vs media" }} 
          icon={CloudRain} 
          variant="default"
          infoDescription="Quantità media di precipitazioni (pioggia, neve) registrate globalmente. I cambiamenti nelle precipitazioni possono indicare alterazioni nei pattern climatici e influenzare agricoltura, risorse idriche e ecosistemi."
        />
        <StatCard 
          title="Eventi Estremi" 
          value="398" 
          change={{ value: -5.5, type: "decrease", period: "vs 2023" }} 
          icon={AlertTriangle} 
          variant="destructive"
          infoDescription="Numero di eventi meteorologici estremi registrati (uragani, ondate di calore, alluvioni, siccità). L'aumento di questi eventi è spesso collegato ai cambiamenti climatici e ha impatti significativi su società ed economia."
        />
        <StatCard 
          title="Energia Solare" 
          value="1,590 TWh" 
          change={{ value: 18.3, type: "increase", period: "crescita" }} 
          icon={Zap} 
          variant="success"
          infoDescription="Quantità di energia elettrica prodotta da impianti solari fotovoltaici in tutto il mondo. La crescita dell'energia solare è fondamentale per ridurre le emissioni di carbonio e combattere i cambiamenti climatici."
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Andamento Temperature Globali</CardTitle>
        </CardHeader>
        <CardContent>
          <LineChart
            data={climateData}
            xKey="year"
            yKeys={[
              { key: "temperature", name: "Anomalia Temperatura (°C)", color: "hsl(var(--chart-1))" }
            ]}
            height={300}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Climate;