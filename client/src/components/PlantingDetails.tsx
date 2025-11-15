import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Droplets, Calendar, Leaf, Lock } from "lucide-react";
import { useState } from "react";

export default function PlantingDetails() {
  const [searchQuery, setSearchQuery] = useState("");
  const [details, setDetails] = useState<any>(null);

  const handleSearch = () => {
    //todo: remove mock functionality
    setDetails({
      crop: searchQuery || "Rice",
      sowing: [
        "Prepare field with 2-3 ploughing",
        "Sow seeds 2-3 cm deep",
        "Maintain 20cm row spacing",
        "Use 20-25 kg seeds per hectare",
      ],
      waterSchedule: "Water every 3-4 days for first 2 weeks, then weekly",
      fertilizerPlan: [
        { week: 1, fertilizer: "Urea", quantity: "50 kg/hectare" },
        { week: 4, fertilizer: "DAP", quantity: "100 kg/hectare" },
        { week: 8, fertilizer: "Potash", quantity: "25 kg/hectare" },
      ],
    });
    console.log("Searching for planting details:", searchQuery);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Search Crop Planting Details</CardTitle>
          <CardDescription>Get comprehensive planting guidelines for any crop</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Enter crop name (e.g., Rice, Wheat, Corn...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                className="pl-10"
                data-testid="input-crop-search"
              />
            </div>
            <Button onClick={handleSearch} data-testid="button-search-crop">
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      {details && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-farming-green" />
                Seed Sowing Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {details.sowing.map((step: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-farming-green/10 text-farming-green flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Droplets className="h-5 w-5 text-market-blue" />
                Water Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{details.waterSchedule}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-farming-green" />
                Fertilizer Plan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {details.fertilizerPlan.map((plan: any, idx: number) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-muted rounded-md">
                    <div>
                      <div className="font-medium">Week {plan.week}</div>
                      <div className="text-sm text-muted-foreground">{plan.fertilizer}</div>
                    </div>
                    <Badge variant="secondary">{plan.quantity}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-income-purple">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-income-purple" />
                Premium Features
              </CardTitle>
              <CardDescription>
                Upgrade to access moisture sensors and real-time monitoring
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Soil Moisture Sensors</div>
                  <div className="text-sm text-muted-foreground">Real-time moisture level tracking</div>
                </div>
                <Button variant="outline" onClick={() => console.log("Upgrade clicked")} data-testid="button-upgrade">
                  Upgrade
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
