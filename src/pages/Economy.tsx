import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/ui/StatCard";
import { BarChart } from "@/components/charts/BarChart";
import { economicData } from "@/data/mockData";
import { TrendingUp, DollarSign, Briefcase, PieChart } from "lucide-react";

const Economy = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-warning to-primary bg-clip-text text-transparent">
          Economia Globale
        </h1>
        <p className="text-muted-foreground mt-2">
          Analisi PIL, disoccupazione e indicatori economici mondiali
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="PIL Mondiale"
          value="$105.4T"
          change={{ value: 3.1, type: "increase", period: "crescita annuale" }}
          icon={DollarSign}
          variant="success"
          infoDescription="Prodotto Interno Lordo mondiale che rappresenta il valore totale di tutti i beni e servizi prodotti nell'economia globale. Un indicatore chiave della salute economica mondiale e del tenore di vita delle popolazioni."
        />
        <StatCard
          title="Disoccupazione Media"
          value="5.2%"
          change={{ value: -0.8, type: "decrease", period: "miglioramento" }}
          icon={Briefcase}
          variant="success"
          infoDescription="Percentuale media di persone in età lavorativa che cercano attivamente un impiego ma non riescono a trovarlo. Un tasso più basso indica un'economia più sana e maggiori opportunità di lavoro per la popolazione."
        />
        <StatCard
          title="Inflazione Globale"
          value="2.6%"
          change={{ value: -1.2, type: "decrease", period: "stabilizzazione" }}
          icon={TrendingUp}
          variant="warning"
          infoDescription="Tasso medio di aumento dei prezzi di beni e servizi nell'economia mondiale. Un'inflazione moderata (2-3%) è considerata sana, mentre valori troppo alti o troppo bassi possono indicare problemi economici."
        />
        <StatCard
          title="Crescita Media"
          value="3.1%"
          change={{ value: 0.4, type: "increase", period: "ripresa" }}
          icon={PieChart}
          variant="default"
          infoDescription="Tasso medio di crescita del PIL delle principali economie mondiali. Indica la velocità con cui l'economia globale si sta espandendo e rappresenta un indicatore di prosperità e sviluppo economico."
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>PIL per Regione</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart
            data={economicData}
            xKey="region"
            yKeys={[
              { key: "gdp", name: "PIL (Trilioni $)", color: "hsl(var(--chart-1))" }
            ]}
            height={300}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Economy;