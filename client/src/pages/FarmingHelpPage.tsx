import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CropSuggestion from "@/components/CropSuggestion";
import SeedsMarketplace from "@/components/SeedsMarketplace";
import PlantingDetails from "@/components/PlantingDetails";
import ClimateAlerts from "@/components/ClimateAlerts";
import ThemeToggle from "@/components/ThemeToggle";

export default function FarmingHelpPage() {
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
              <h1 className="text-3xl font-bold text-farming-green">Farming Help</h1>
              <p className="text-sm text-muted-foreground">
                Complete farming assistance from planning to harvest
              </p>
            </div>
          </div>
          <ThemeToggle />
        </header>

        <Tabs defaultValue="crop-suggestion" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4" data-testid="tabs-farming">
            <TabsTrigger value="crop-suggestion" data-testid="tab-crop">
              Crop Suggestion
            </TabsTrigger>
            <TabsTrigger value="seeds" data-testid="tab-seeds">
              Seeds & Fertilizers
            </TabsTrigger>
            <TabsTrigger value="planting" data-testid="tab-planting">
              Planting Details
            </TabsTrigger>
            <TabsTrigger value="climate" data-testid="tab-climate">
              Climate Alerts
            </TabsTrigger>
          </TabsList>

          <TabsContent value="crop-suggestion" className="space-y-6">
            <CropSuggestion />
          </TabsContent>

          <TabsContent value="seeds" className="space-y-6">
            <SeedsMarketplace />
          </TabsContent>

          <TabsContent value="planting" className="space-y-6">
            <PlantingDetails />
          </TabsContent>

          <TabsContent value="climate" className="space-y-6">
            <ClimateAlerts />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
