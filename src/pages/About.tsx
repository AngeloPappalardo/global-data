import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Database, BarChart3, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-4">
          Chi Siamo
        </h1>
        <p className="text-xl text-muted-foreground">
          GlobalData è una piattaforma che monitora e visualizza i dati più importanti del nostro pianeta
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              La Nostra Missione
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Rendiamo accessibili i dati globali su popolazione, ambiente, economia e clima attraverso 
              visualizzazioni intuitive e aggiornamenti in tempo reale.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-success" />
              Fonti Dati
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Badge variant="outline">World Bank</Badge>
              <Badge variant="outline">UN Population Division</Badge>
              <Badge variant="outline">NASA Climate Data</Badge>
              <Badge variant="outline">IEA Energy Statistics</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;