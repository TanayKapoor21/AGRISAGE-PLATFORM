import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import AgriMarket from "@/components/AgriMarket";
import ThemeToggle from "@/components/ThemeToggle";

export default function AgriMarketPage() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 space-y-6 max-w-6xl">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLocation("/")}
              data-testid="button-back"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-market-blue">Agri Market</h1>
              <p className="text-sm text-muted-foreground">
                Find the best prices and buyers for your crops
              </p>
            </div>
          </div>
          <ThemeToggle />
        </header>

        <AgriMarket />
      </div>
    </div>
  );
}
