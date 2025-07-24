import { Moon, Sun, Languages, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useTheme } from "@/hooks/useTheme";
import { useState } from "react";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [language, setLanguage] = useState("IT");

  const languages = [
    { code: "IT", name: "Italiano", flag: "🇮🇹" },
    { code: "EN", name: "English", flag: "🇺🇸" },
    { code: "ES", name: "Español", flag: "🇪🇸" },
    { code: "FR", name: "Français", flag: "🇫🇷" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4">
        {/* Left side - Sidebar trigger */}
        <div className="flex items-center gap-4">
          <SidebarTrigger className="h-8 w-8" />
          <div className="hidden md:block">
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              GlobalData Dashboard
            </h1>
          </div>
        </div>

        {/* Center - Search or breadcrumb could go here */}
        <div className="flex-1 flex justify-center">
          <div className="text-sm text-muted-foreground hidden lg:block">
            Dati aggiornati in tempo reale • Last update: {new Date().toLocaleTimeString("it-IT")}
          </div>
        </div>

        {/* Right side - Controls */}
        <div className="flex items-center gap-2">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Languages className="h-4 w-4" />
                <span className="sr-only">Seleziona lingua</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`${
                    language === lang.code ? "bg-accent text-accent-foreground" : ""
                  }`}
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="h-8 w-8 p-0"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
            <span className="sr-only">Cambia tema</span>
          </Button>
        </div>
      </div>
    </header>
  );
}