import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

//todo: remove mock functionality
const mockSeeds = [
  {
    name: "Basmati Rice Seeds",
    variety: "Pusa Basmati 1121",
    price: 1200,
    sellers: [
      { name: "AgriStore Punjab", rating: 4.5, distance: "2 km", price: 1200 },
      { name: "Farmers Choice", rating: 4.2, distance: "5 km", price: 1250 },
    ],
  },
  {
    name: "Wheat Seeds",
    variety: "HD-2967",
    price: 800,
    sellers: [
      { name: "Green Valley Seeds", rating: 4.7, distance: "3 km", price: 800 },
      { name: "Krishi Kendra", rating: 4.4, distance: "7 km", price: 850 },
    ],
  },
];

const mockFertilizers = [
  {
    name: "Urea Fertilizer",
    type: "Nitrogen-based",
    price: 350,
    sellers: [
      { name: "AgriChem Store", rating: 4.6, distance: "1.5 km", price: 350 },
      { name: "Farmers Hub", rating: 4.3, distance: "4 km", price: 360 },
    ],
  },
  {
    name: "DAP Fertilizer",
    type: "Phosphate-based",
    price: 1450,
    sellers: [
      { name: "Green Harvest", rating: 4.8, distance: "2.5 km", price: 1450 },
      { name: "Krishi Seva", rating: 4.5, distance: "6 km", price: 1480 },
    ],
  },
];

export default function SeedsMarketplace() {
  return (
    <Tabs defaultValue="seeds" className="w-full">
      <TabsList className="grid w-full grid-cols-2" data-testid="tabs-marketplace">
        <TabsTrigger value="seeds" data-testid="tab-seeds">Seeds</TabsTrigger>
        <TabsTrigger value="fertilizers" data-testid="tab-fertilizers">Fertilizers</TabsTrigger>
      </TabsList>

      <TabsContent value="seeds" className="space-y-4">
        {mockSeeds.map((seed, idx) => (
          <Card key={idx} data-testid={`card-seed-${idx}`}>
            <CardHeader>
              <CardTitle className="text-lg">{seed.name}</CardTitle>
              <CardDescription>{seed.variety}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-2xl font-bold text-farming-green">
                ₹{seed.price} <span className="text-sm font-normal text-muted-foreground">/kg</span>
              </div>
              <div className="space-y-3">
                {seed.sellers.map((seller, sellerIdx) => (
                  <div
                    key={sellerIdx}
                    className="flex items-center justify-between p-3 bg-muted rounded-md"
                    data-testid={`seller-${idx}-${sellerIdx}`}
                  >
                    <div className="space-y-1">
                      <div className="font-medium">{seller.name}</div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          {seller.rating}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {seller.distance}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-lg font-semibold">₹{seller.price}</div>
                      <Button
                        size="sm"
                        onClick={() => console.log(`Buy from ${seller.name}`)}
                        data-testid={`button-buy-${idx}-${sellerIdx}`}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Buy
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </TabsContent>

      <TabsContent value="fertilizers" className="space-y-4">
        {mockFertilizers.map((fertilizer, idx) => (
          <Card key={idx} data-testid={`card-fertilizer-${idx}`}>
            <CardHeader>
              <CardTitle className="text-lg">{fertilizer.name}</CardTitle>
              <CardDescription>{fertilizer.type}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-2xl font-bold text-farming-green">
                ₹{fertilizer.price} <span className="text-sm font-normal text-muted-foreground">/bag</span>
              </div>
              <div className="space-y-3">
                {fertilizer.sellers.map((seller, sellerIdx) => (
                  <div
                    key={sellerIdx}
                    className="flex items-center justify-between p-3 bg-muted rounded-md"
                    data-testid={`fertilizer-seller-${idx}-${sellerIdx}`}
                  >
                    <div className="space-y-1">
                      <div className="font-medium">{seller.name}</div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          {seller.rating}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {seller.distance}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-lg font-semibold">₹{seller.price}</div>
                      <Button
                        size="sm"
                        onClick={() => console.log(`Buy from ${seller.name}`)}
                        data-testid={`button-buy-fertilizer-${idx}-${sellerIdx}`}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Buy
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </TabsContent>
    </Tabs>
  );
}
