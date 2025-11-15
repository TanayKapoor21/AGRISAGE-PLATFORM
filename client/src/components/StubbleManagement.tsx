import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation, Calculator, Recycle, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

//todo: remove mock functionality
const mockCenters = [
  {
    name: "Green Recycling Hub",
    location: "Sector 12, Ludhiana",
    distance: "5.2 km",
    capacity: "High",
    credits: 150,
  },
  {
    name: "Eco Waste Management",
    location: "Industrial Area, Jalandhar",
    distance: "12.8 km",
    capacity: "Medium",
    credits: 145,
  },
  {
    name: "AgriWaste Collector",
    location: "Near Highway, Amritsar",
    distance: "18.5 km",
    capacity: "Low",
    credits: 140,
  },
];

export default function StubbleManagement() {
  const [stubbleAmount, setStubbleAmount] = useState("");
  const [estimatedCredits, setEstimatedCredits] = useState(0);

  const calculateCredits = () => {
    const amount = parseFloat(stubbleAmount);
    if (!isNaN(amount)) {
      const credits = amount * 150;
      setEstimatedCredits(credits);
      console.log("Calculated credits:", credits);
    }
  };

  return (
    <div className="space-y-6">
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Say No to Stubble Burning!</AlertTitle>
        <AlertDescription>
          Deliver your crop residue to authorized centers and earn rewards while protecting the environment.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-stubble-orange" />
            Credits Calculator
          </CardTitle>
          <CardDescription>Calculate rewards for your stubble delivery</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="stubble-amount">Stubble Amount (tons)</Label>
            <Input
              id="stubble-amount"
              type="number"
              placeholder="Enter amount in tons"
              value={stubbleAmount}
              onChange={(e) => setStubbleAmount(e.target.value)}
              data-testid="input-stubble-amount"
            />
          </div>
          <Button onClick={calculateCredits} className="w-full" data-testid="button-calculate">
            Calculate Credits
          </Button>
          {estimatedCredits > 0 && (
            <div className="p-4 bg-stubble-orange/10 rounded-md border border-stubble-orange/20">
              <div className="text-sm text-muted-foreground">Estimated Credits</div>
              <div className="text-3xl font-bold text-stubble-orange">₹{estimatedCredits}</div>
              <div className="text-sm text-muted-foreground mt-1">
                Redeemable for fertilizers, seeds, or organic products
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-stubble-orange" />
            Nearby Waste Centers
          </CardTitle>
          <CardDescription>Authorized recycling and collection centers</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {mockCenters.map((center, idx) => (
            <div
              key={idx}
              className="p-4 bg-muted rounded-md space-y-3 hover-elevate"
              data-testid={`center-${idx}`}
            >
              <div className="flex items-start justify-between">
                <div className="space-y-1 flex-1">
                  <div className="font-medium text-lg">{center.name}</div>
                  <div className="text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {center.location}
                  </div>
                </div>
                <Badge
                  variant={
                    center.capacity === "High"
                      ? "default"
                      : center.capacity === "Medium"
                      ? "secondary"
                      : "outline"
                  }
                >
                  {center.capacity} Capacity
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-muted-foreground">Distance: {center.distance}</span>
                  <span className="text-stubble-orange font-semibold">
                    ₹{center.credits}/ton
                  </span>
                </div>
                <Button
                  size="sm"
                  onClick={() => console.log(`Navigate to ${center.name}`)}
                  data-testid={`button-navigate-${idx}`}
                  className="gap-2"
                >
                  <Navigation className="h-4 w-4" />
                  Navigate
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Recycle className="h-5 w-5 text-farming-green" />
            Recycling Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <p className="text-muted-foreground">
              Your crop residue can be recycled into valuable products:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-farming-green mt-1">•</span>
                <span>Bio-fuel and renewable energy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-farming-green mt-1">•</span>
                <span>Organic fertilizer and compost</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-farming-green mt-1">•</span>
                <span>Animal feed supplements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-farming-green mt-1">•</span>
                <span>Paper and packaging materials</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
