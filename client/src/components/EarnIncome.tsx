import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TreePine, TrendingUp, Calendar, IndianRupee } from "lucide-react";

//todo: remove mock functionality
const mockPartnerships = [
  {
    company: "GreenTech Industries",
    logo: "GT",
    plantType: "Bamboo Plantation",
    compensation: 50000,
    duration: "3 years",
    landRequired: "1 acre",
    maintenance: "Minimal - quarterly monitoring",
  },
  {
    company: "EcoCarbon Solutions",
    logo: "EC",
    plantType: "Fruit Trees (Mango/Guava)",
    compensation: 75000,
    duration: "5 years",
    landRequired: "2 acres",
    maintenance: "Low - bi-annual care",
  },
  {
    company: "Carbon Offset Co.",
    logo: "CO",
    plantType: "Mixed Forest Plantation",
    compensation: 120000,
    duration: "10 years",
    landRequired: "3+ acres",
    maintenance: "Minimal - annual inspection",
  },
];

export default function EarnIncome() {
  return (
    <div className="space-y-6">
      <Card className="border-income-purple">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TreePine className="h-5 w-5 text-income-purple" />
            Carbon Offset Partnerships
          </CardTitle>
          <CardDescription>
            Partner with companies to grow trees on unused land and earn steady income
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3 text-center">
            <div className="p-4 bg-income-purple/10 rounded-md">
              <IndianRupee className="h-6 w-6 mx-auto text-income-purple mb-2" />
              <div className="text-2xl font-bold">₹50k - ₹150k</div>
              <div className="text-sm text-muted-foreground">Annual Income</div>
            </div>
            <div className="p-4 bg-income-purple/10 rounded-md">
              <TreePine className="h-6 w-6 mx-auto text-income-purple mb-2" />
              <div className="text-2xl font-bold">Zero Work</div>
              <div className="text-sm text-muted-foreground">Minimal Maintenance</div>
            </div>
            <div className="p-4 bg-income-purple/10 rounded-md">
              <TrendingUp className="h-6 w-6 mx-auto text-income-purple mb-2" />
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm text-muted-foreground">Environment Friendly</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {mockPartnerships.map((partner, idx) => (
          <Card key={idx} data-testid={`partnership-${idx}`} className="hover-elevate">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-md bg-income-purple text-white flex items-center justify-center font-bold text-lg">
                    {partner.logo}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{partner.company}</CardTitle>
                    <CardDescription>{partner.plantType}</CardDescription>
                  </div>
                </div>
                <Badge className="bg-income-purple hover:bg-income-purple/90">
                  Featured
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3 md:grid-cols-2">
                <div className="flex items-center gap-2">
                  <IndianRupee className="h-4 w-4 text-income-purple" />
                  <span className="text-sm text-muted-foreground">Total Compensation:</span>
                  <span className="font-semibold">₹{partner.compensation.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-income-purple" />
                  <span className="text-sm text-muted-foreground">Duration:</span>
                  <span className="font-semibold">{partner.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <TreePine className="h-4 w-4 text-income-purple" />
                  <span className="text-sm text-muted-foreground">Land Required:</span>
                  <span className="font-semibold">{partner.landRequired}</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-income-purple" />
                  <span className="text-sm text-muted-foreground">Maintenance:</span>
                  <span className="font-semibold">{partner.maintenance}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  className="flex-1"
                  onClick={() => console.log(`Apply for ${partner.company}`)}
                  data-testid={`button-apply-${idx}`}
                >
                  Apply Now
                </Button>
                <Button
                  variant="outline"
                  onClick={() => console.log(`Learn more about ${partner.company}`)}
                  data-testid={`button-learn-${idx}`}
                >
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>How It Works</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-income-purple text-white flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <div className="font-medium">Select a Partnership</div>
                <div className="text-sm text-muted-foreground">
                  Choose a company and plantation type that suits your land
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-income-purple text-white flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <div className="font-medium">Sign Agreement</div>
                <div className="text-sm text-muted-foreground">
                  Complete verification and sign the carbon offset partnership agreement
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-income-purple text-white flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <div className="font-medium">Plantation & Monitoring</div>
                <div className="text-sm text-muted-foreground">
                  Company handles plantation; you provide land and minimal maintenance
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-income-purple text-white flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <div className="font-medium">Receive Income</div>
                <div className="text-sm text-muted-foreground">
                  Get annual payments directly to your bank account
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
