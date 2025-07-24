import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/ui/StatCard";
import { LineChart } from "@/components/charts/LineChart";
import { BarChart } from "@/components/charts/BarChart";
import { populationTrend, populationByCountry } from "@/data/mockData";
import { Users, Baby, UserMinus, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Population = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Demografia Mondiale
          </h1>
          <p className="text-muted-foreground mt-2">
            Analisi della crescita demografica, natalità e tendenze globali
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-primary border-primary">
            <Users className="w-3 h-3 mr-1" />
            Dati real-time
          </Badge>
        </div>
      </div>

      {/* Key Demographics Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Popolazione Mondiale"
          value="8.045B"
          change={{ value: 0.87, type: "increase", period: "crescita annuale" }}
          icon={Globe}
          variant="default"
          description="Totale abitanti sulla Terra"
          infoDescription="Numero totale di persone che vivono attualmente sul pianeta. La crescita della popolazione mondiale sta rallentando rispetto ai decenni passati, ma continua ad aumentare principalmente grazie al miglioramento dell'aspettativa di vita."
        />
        <StatCard
          title="Nascite/Anno"
          value="133M"
          change={{ value: 1.5, type: "increase", period: "vs 2023" }}
          icon={Baby}
          variant="success"
          description="Nuove nascite annuali"
          infoDescription="Numero di bambini nati ogni anno nel mondo. Questo dato è influenzato dai tassi di fertilità regionali, dalle politiche sanitarie e dalle condizioni socio-economiche delle diverse nazioni."
        />
        <StatCard
          title="Decessi/Anno"
          value="58M"
          change={{ value: 3.4, type: "increase", period: "vs 2023" }}
          icon={UserMinus}
          variant="warning"
          description="Decessi registrati"
          infoDescription="Numero totale di decessi registrati annualmente nel mondo. Include mortalità naturale, malattie, incidenti e altri fattori. I miglioramenti nella sanità globale tendono a ridurre questo numero nel tempo."
        />
        <StatCard
          title="Crescita Netta"
          value="+75M"
          change={{ value: -0.8, type: "decrease", period: "rallentamento" }}
          icon={Users}
          variant="default"
          description="Incremento demografico annuale"
          infoDescription="Differenza tra nascite e decessi che determina l'effettivo aumento della popolazione mondiale. La crescita sta rallentando in molte regioni sviluppate mentre continua ad essere sostenuta in Africa e Asia."
        />
      </div>

      {/* Population Trend Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            Andamento Popolazione Mondiale
          </CardTitle>
        </CardHeader>
        <CardContent>
          <LineChart
            data={populationTrend}
            xKey="year"
            yKeys={[
              { key: "population", name: "Popolazione (milioni)", color: "hsl(var(--chart-1))" }
            ]}
            height={300}
          />
        </CardContent>
      </Card>

      {/* Birth/Death Rate Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Baby className="h-5 w-5 text-success" />
              Natalità vs Mortalità
            </CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart
              data={populationTrend}
              xKey="year"
              yKeys={[
                { key: "births", name: "Nascite (milioni)", color: "hsl(var(--chart-2))" },
                { key: "deaths", name: "Decessi (milioni)", color: "hsl(var(--chart-5))" }
              ]}
              height={250}
            />
          </CardContent>
        </Card>

        {/* Top Countries by Population */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-warning" />
              Top 10 Paesi per Popolazione
            </CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart
              data={populationByCountry.slice(0, 6)}
              xKey="country"
              yKeys={[
                { key: "population", name: "Popolazione (milioni)", color: "hsl(var(--chart-3))" }
              ]}
              height={250}
            />
          </CardContent>
        </Card>
      </div>

      {/* Detailed Country Statistics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            Statistiche Dettagliate per Paese
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">Paese</th>
                  <th className="text-left py-3 px-4 font-semibold">Popolazione</th>
                  <th className="text-left py-3 px-4 font-semibold">Crescita Annuale</th>
                  <th className="text-left py-3 px-4 font-semibold">Tendenza</th>
                </tr>
              </thead>
              <tbody>
                {populationByCountry.map((country, index) => (
                  <tr key={index} className="border-b border-border/50 hover:bg-muted/50">
                    <td className="py-3 px-4 font-medium">{country.country}</td>
                    <td className="py-3 px-4">{country.population.toLocaleString()}M</td>
                    <td className="py-3 px-4">
                      <Badge 
                        variant={country.growth > 1 ? "default" : country.growth > 0 ? "secondary" : "destructive"}
                      >
                        {country.growth > 0 ? "+" : ""}{country.growth}%
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1">
                        {country.growth > 1.5 ? (
                          <span className="text-success">📈 Rapida</span>
                        ) : country.growth > 0.5 ? (
                          <span className="text-warning">📊 Moderata</span>
                        ) : country.growth > 0 ? (
                          <span className="text-muted-foreground">📉 Lenta</span>
                        ) : (
                          <span className="text-destructive">📉 Negativa</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Demographic Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="p-6">
          <div className="text-center">
            <Baby className="h-8 w-8 text-success mx-auto mb-2" />
            <h3 className="font-semibold text-lg mb-1">Tasso di Natalità</h3>
            <div className="text-2xl font-bold text-success">16.5‰</div>
            <p className="text-sm text-muted-foreground">nascite per 1000 abitanti</p>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="text-center">
            <UserMinus className="h-8 w-8 text-destructive mx-auto mb-2" />
            <h3 className="font-semibold text-lg mb-1">Tasso di Mortalità</h3>
            <div className="text-2xl font-bold text-destructive">7.2‰</div>
            <p className="text-sm text-muted-foreground">decessi per 1000 abitanti</p>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="text-center">
            <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold text-lg mb-1">Densità Media</h3>
            <div className="text-2xl font-bold text-primary">54.2</div>
            <p className="text-sm text-muted-foreground">abitanti per km²</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Population;