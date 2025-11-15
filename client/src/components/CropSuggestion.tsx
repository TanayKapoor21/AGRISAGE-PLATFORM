import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Droplets, Sprout, MapPin } from "lucide-react";
import { useState } from "react";

export default function CropSuggestion() {
  const [soilType, setSoilType] = useState("");
  const [location, setLocation] = useState("");
  const [recommendations, setRecommendations] = useState<any[]>([]);

  const handleGetRecommendations = () => {
    //todo: remove mock functionality
    const mockRecommendations = [
      {
        crop: "Rice",
        variety: "Basmati 370",
        waterNeed: "High (1500-2000mm)",
        duration: "120-140 days",
        yield: "4-5 tons/hectare",
      },
      {
        crop: "Wheat",
        variety: "PBW 550",
        waterNeed: "Medium (450-650mm)",
        duration: "135-140 days",
        yield: "5-6 tons/hectare",
      },
    ];
    setRecommendations(mockRecommendations);
    console.log("Getting crop recommendations for:", { soilType, location });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sprout className="h-5 w-5 text-farming-green" />
            Crop Suggestion
          </CardTitle>
          <CardDescription>Get personalized crop recommendations based on your soil and location</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="soil-type">Soil Type</Label>
              <Select value={soilType} onValueChange={setSoilType}>
                <SelectTrigger id="soil-type" data-testid="select-soil-type">
                  <SelectValue placeholder="Select soil type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clay">Clay Soil</SelectItem>
                  <SelectItem value="loamy">Loamy Soil</SelectItem>
                  <SelectItem value="sandy">Sandy Soil</SelectItem>
                  <SelectItem value="silt">Silt Soil</SelectItem>
                  <SelectItem value="peaty">Peaty Soil</SelectItem>
                  <SelectItem value="chalky">Chalky Soil</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Your Location</Label>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger id="location" data-testid="select-location">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="punjab">Punjab</SelectItem>
                  <SelectItem value="haryana">Haryana</SelectItem>
                  <SelectItem value="up">Uttar Pradesh</SelectItem>
                  <SelectItem value="mp">Madhya Pradesh</SelectItem>
                  <SelectItem value="maharashtra">Maharashtra</SelectItem>
                  <SelectItem value="karnataka">Karnataka</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button
            onClick={handleGetRecommendations}
            disabled={!soilType || !location}
            data-testid="button-get-recommendations"
            className="w-full"
          >
            Get Recommendations
          </Button>
        </CardContent>
      </Card>

      {recommendations.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2">
          {recommendations.map((rec, idx) => (
            <Card key={idx} data-testid={`card-recommendation-${idx}`}>
              <CardHeader>
                <CardTitle className="text-lg">{rec.crop}</CardTitle>
                <CardDescription>Variety: {rec.variety}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Droplets className="h-4 w-4 text-market-blue" />
                  <span className="text-muted-foreground">Water Need:</span>
                  <span className="font-medium">{rec.waterNeed}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-farming-green" />
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">{rec.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Sprout className="h-4 w-4 text-farming-green" />
                  <span className="text-muted-foreground">Expected Yield:</span>
                  <span className="font-medium">{rec.yield}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
