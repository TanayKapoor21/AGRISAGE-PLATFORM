import LanguagePicker from "@/components/LanguagePicker";
import AccessibilityBar from "@/components/AccessibilityBar";
import SearchChatbot from "@/components/SearchChatbot";
import FeatureCard from "@/components/FeatureCard";
import EmergencyButton from "@/components/EmergencyButton";
import ThemeToggle from "@/components/ThemeToggle";
import { Sprout, ShoppingBag, Recycle, TrendingUp, Landmark } from "lucide-react";
import { useLocation } from "wouter";

export default function HomePage() {
  const [, setLocation] = useLocation();

  const features = [
    {
      title: "Farming Help",
      description: "Get crop suggestions, planting details, climate alerts, and pest control assistance",
      icon: Sprout,
      color: "hsl(142, 76%, 36%)",
      path: "/farming-help",
    },
    {
      title: "Agri Market",
      description: "View market prices, find buyers, and get the best rates for your crops",
      icon: ShoppingBag,
      color: "hsl(221, 83%, 53%)",
      path: "/agri-market",
    },
    {
      title: "Stubble Management",
      description: "Find waste centers, earn credits, and contribute to environmental protection",
      icon: Recycle,
      color: "hsl(32, 95%, 44%)",
      path: "/stubble-management",
    },
    {
      title: "Earn Extra Income",
      description: "Partner with companies for tree plantation and carbon offset programs",
      icon: TrendingUp,
      color: "hsl(280, 65%, 60%)",
      path: "/earn-income",
    },
    {
      title: "Financial Services",
      description: "Compare crop insurance, check loan eligibility, and calculate EMI",
      icon: Landmark,
      color: "hsl(180, 84%, 40%)",
      path: "/financial-services",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 space-y-8 max-w-7xl">
        <header className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl font-bold text-farming-green" data-testid="text-app-title">
              Agrisage
            </h1>
            <p className="text-sm text-muted-foreground">
              Unified Digital Platform for Farmers
            </p>
          </div>
          <ThemeToggle />
        </header>

        <div className="flex flex-col gap-4 items-start md:flex-row md:items-center md:justify-between">
          <LanguagePicker />
          <AccessibilityBar />
        </div>

        <div className="py-8">
          <SearchChatbot />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              color={feature.color}
              onClick={() => setLocation(feature.path)}
            />
          ))}
        </div>

        <div className="flex justify-center py-6">
          <EmergencyButton />
        </div>

        <div className="text-center py-8 space-y-4">
          <h2 className="text-2xl font-semibold">Platform Features</h2>
          <div className="grid gap-4 md:grid-cols-4 text-sm">
            <div className="p-4 bg-muted rounded-md">
              <div className="text-3xl font-bold text-farming-green mb-2">30%</div>
              <div className="text-muted-foreground">Increase in farmer income</div>
            </div>
            <div className="p-4 bg-muted rounded-md">
              <div className="text-3xl font-bold text-stubble-orange mb-2">50%</div>
              <div className="text-muted-foreground">Reduction in stubble burning</div>
            </div>
            <div className="p-4 bg-muted rounded-md">
              <div className="text-3xl font-bold text-market-blue mb-2">20%</div>
              <div className="text-muted-foreground">Water conservation</div>
            </div>
            <div className="p-4 bg-muted rounded-md">
              <div className="text-3xl font-bold text-income-purple mb-2">15%</div>
              <div className="text-muted-foreground">Yield improvement</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
