import { 
  Globe, 
  Users, 
  TrendingUp, 
  CloudRain, 
  Leaf, 
  Info, 
  Mail,
  BarChart3
} from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { 
    title: "Dashboard", 
    url: "/", 
    icon: BarChart3,
    description: "Panoramica dati globali"
  },
  { 
    title: "Ambiente", 
    url: "/environment", 
    icon: Leaf,
    description: "Qualità dell'aria e risorse"
  },
  { 
    title: "Popolazione", 
    url: "/population", 
    icon: Users,
    description: "Demografia mondiale"
  },
  { 
    title: "Economia", 
    url: "/economy", 
    icon: TrendingUp,
    description: "PIL e indicatori economici"
  },
  { 
    title: "Clima", 
    url: "/climate", 
    icon: CloudRain,
    description: "Meteo e cambiamenti climatici"
  },
];

const secondaryItems = [
  { 
    title: "Chi Siamo", 
    url: "/about", 
    icon: Info,
    description: "Scopri il progetto"
  },
  { 
    title: "Contatti", 
    url: "/contact", 
    icon: Mail,
    description: "Scrivici"
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const getNavClasses = (isActive: boolean) =>
    `w-full justify-start transition-all duration-300 ${
      isActive 
        ? "bg-primary text-primary-foreground shadow-md" 
        : "hover:bg-secondary hover:text-secondary-foreground"
    }`;

  return (
    <Sidebar collapsible="icon" className="border-r border-border">
      <SidebarContent className="p-4">
        {/* Logo/Brand */}
        <div className="mb-6 px-2">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
              <Globe className="h-5 w-5 text-primary-foreground" />
            </div>
            {!isCollapsed && (
              <div>
                <h2 className="font-bold text-lg text-foreground">GlobalData</h2>
                <p className="text-xs text-muted-foreground">Real-time insights</p>
              </div>
            )}
          </div>
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            {!isCollapsed ? "Sezioni Principali" : ""}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild size="lg">
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className={({ isActive }) => getNavClasses(isActive)}
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!isCollapsed && (
                        <div className="flex flex-col items-start">
                          <span className="font-medium">{item.title}</span>
                          <span className="text-xs opacity-75">{item.description}</span>
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Secondary Navigation */}
        <SidebarGroup className="mt-8">
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            {!isCollapsed ? "Informazioni" : ""}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {secondaryItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild size="lg">
                    <NavLink
                      to={item.url}
                      className={({ isActive }) => getNavClasses(isActive)}
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!isCollapsed && (
                        <div className="flex flex-col items-start">
                          <span className="font-medium">{item.title}</span>
                          <span className="text-xs opacity-75">{item.description}</span>
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}