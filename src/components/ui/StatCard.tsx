import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { TrendingUp, TrendingDown, Minus, LucideIcon, Info } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    type: "increase" | "decrease" | "stable";
    period: string;
  };
  icon?: LucideIcon;
  description?: string;
  variant?: "default" | "success" | "warning" | "destructive";
  infoDescription?: string;
}

export function StatCard({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  description, 
  variant = "default",
  infoDescription 
}: StatCardProps) {
  const getChangeIcon = () => {
    switch (change?.type) {
      case "increase":
        return <TrendingUp className="h-3 w-3" />;
      case "decrease":
        return <TrendingDown className="h-3 w-3" />;
      default:
        return <Minus className="h-3 w-3" />;
    }
  };

  const getChangeColor = () => {
    switch (change?.type) {
      case "increase":
        return "text-success";
      case "decrease":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  const getCardVariant = () => {
    switch (variant) {
      case "success":
        return "border-success/20 bg-success/5";
      case "warning":
        return "border-warning/20 bg-warning/5";
      case "destructive":
        return "border-destructive/20 bg-destructive/5";
      default:
        return "";
    }
  };

  return (
    <Card className={`transition-all duration-300 hover:shadow-lg ${getCardVariant()}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="flex items-center gap-2">
          {Icon && (
            <Icon className={`h-4 w-4 ${
              variant === "success" ? "text-success" :
              variant === "warning" ? "text-warning" :
              variant === "destructive" ? "text-destructive" :
              "text-muted-foreground"
            }`} />
          )}
          {infoDescription && (
            <Dialog>
              <DialogTrigger asChild>
                <button className="h-4 w-4 rounded-full hover:bg-muted flex items-center justify-center transition-colors">
                  <Info className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {infoDescription}
                </p>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {change && (
          <div className={`flex items-center space-x-1 text-xs ${getChangeColor()}`}>
            {getChangeIcon()}
            <span>
              {change.value > 0 ? "+" : ""}{change.value}% {change.period}
            </span>
          </div>
        )}
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}