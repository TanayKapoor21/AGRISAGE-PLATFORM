import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, TrendingUp, TrendingDown, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

//todo: remove mock functionality
const mockPriceData = [
  { month: "Jan", price: 1850 },
  { month: "Feb", price: 1920 },
  { month: "Mar", price: 2100 },
  { month: "Apr", price: 2050 },
  { month: "May", price: 2200 },
  { month: "Jun", price: 2350 },
];

const mockBuyers = [
  {
    name: "Punjab Grain Market",
    location: "Ludhiana",
    distance: "12 km",
    price: 2350,
    phone: "+91-9876543210",
  },
  {
    name: "FPO Collective",
    location: "Amritsar",
    distance: "25 km",
    price: 2380,
    phone: "+91-9876543211",
  },
  {
    name: "Government Mandi",
    location: "Jalandhar",
    distance: "18 km",
    price: 2360,
    phone: "+91-9876543212",
  },
];

export default function AgriMarket() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    setShowResults(true);
    console.log("Searching for crop:", searchQuery);
  };

  const currentPrice = mockPriceData[mockPriceData.length - 1].price;
  const previousPrice = mockPriceData[mockPriceData.length - 2].price;
  const priceChange = ((currentPrice - previousPrice) / previousPrice) * 100;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Search Market Prices</CardTitle>
          <CardDescription>Get live prices and buyer information for your crops</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Enter crop name (e.g., Rice, Wheat, Cotton...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                className="pl-10"
                data-testid="input-market-search"
              />
            </div>
            <Button onClick={handleSearch} data-testid="button-search-market">
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      {showResults && (
        <>
          <Card>
            <CardHeader>
              <CardTitle>Current Market Price</CardTitle>
              <CardDescription>Rice - Basmati</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-3">
                <div className="text-4xl font-bold text-market-blue">
                  ₹{currentPrice}
                </div>
                <Badge
                  variant={priceChange >= 0 ? "default" : "destructive"}
                  className="flex items-center gap-1"
                >
                  {priceChange >= 0 ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {Math.abs(priceChange).toFixed(1)}%
                </Badge>
                <span className="text-sm text-muted-foreground">/quintal</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Price Trend (Last 6 Months)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={mockPriceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="hsl(var(--market-blue))"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Nearby Buyers</CardTitle>
              <CardDescription>Verified procurement centers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {mockBuyers.map((buyer, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 bg-muted rounded-md hover-elevate"
                  data-testid={`buyer-${idx}`}
                >
                  <div className="space-y-2 flex-1">
                    <div className="font-medium text-lg">{buyer.name}</div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {buyer.location} ({buyer.distance})
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        {buyer.phone}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-market-blue">₹{buyer.price}</div>
                      <div className="text-xs text-muted-foreground">/quintal</div>
                    </div>
                    <Button
                      onClick={() => console.log(`Call buyer: ${buyer.name}`)}
                      data-testid={`button-call-buyer-${idx}`}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
