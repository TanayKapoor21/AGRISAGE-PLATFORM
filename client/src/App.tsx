import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "@/pages/HomePage";
import FarmingHelpPage from "@/pages/FarmingHelpPage";
import AgriMarketPage from "@/pages/AgriMarketPage";
import StubbleManagementPage from "@/pages/StubbleManagementPage";
import EarnIncomePage from "@/pages/EarnIncomePage";
import FinancialServicesPage from "@/pages/FinancialServicesPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/farming-help" component={FarmingHelpPage} />
      <Route path="/agri-market" component={AgriMarketPage} />
      <Route path="/stubble-management" component={StubbleManagementPage} />
      <Route path="/earn-income" component={EarnIncomePage} />
      <Route path="/financial-services" component={FinancialServicesPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
