import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Banknote, Calculator, CheckCircle2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

//todo: remove mock functionality
const mockInsurancePlans = [
  {
    provider: "National Agricultural Insurance",
    coverage: "Crop Damage, Natural Disasters",
    premium: 2500,
    sumAssured: 100000,
    features: ["Weather protection", "Pest damage cover", "Quick claim settlement"],
  },
  {
    provider: "Farmers United Insurance",
    coverage: "Comprehensive Crop + Equipment",
    premium: 4200,
    sumAssured: 200000,
    features: ["Full crop coverage", "Equipment insurance", "Free farm inspection"],
  },
];

const mockLoans = [
  {
    bank: "Punjab National Bank",
    type: "Kisan Credit Card",
    maxAmount: 300000,
    interest: 7,
    features: ["Flexible repayment", "Low interest", "No collateral up to ₹1.6L"],
  },
  {
    bank: "State Bank of India",
    type: "Agricultural Term Loan",
    maxAmount: 1000000,
    interest: 9,
    features: ["Long tenure", "Equipment financing", "Subsidized rates"],
  },
];

export default function FinancialServices() {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [emi, setEmi] = useState(0);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const tenure = parseFloat(loanTenure);
    const rate = 7 / 100 / 12;

    if (!isNaN(principal) && !isNaN(tenure)) {
      const emiValue = (principal * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
      setEmi(Math.round(emiValue));
      console.log("EMI calculated:", emiValue);
    }
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="insurance" className="w-full">
        <TabsList className="grid w-full grid-cols-3" data-testid="tabs-financial">
          <TabsTrigger value="insurance" data-testid="tab-insurance">
            <Shield className="h-4 w-4 mr-2" />
            Insurance
          </TabsTrigger>
          <TabsTrigger value="loans" data-testid="tab-loans">
            <Banknote className="h-4 w-4 mr-2" />
            Loans
          </TabsTrigger>
          <TabsTrigger value="emi" data-testid="tab-emi">
            <Calculator className="h-4 w-4 mr-2" />
            EMI Calculator
          </TabsTrigger>
        </TabsList>

        <TabsContent value="insurance" className="space-y-4">
          <Card className="border-finance-teal">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-finance-teal" />
                Crop Insurance Plans
              </CardTitle>
              <CardDescription>
                Protect your crops from natural disasters and unexpected losses
              </CardDescription>
            </CardHeader>
          </Card>

          {mockInsurancePlans.map((plan, idx) => (
            <Card key={idx} data-testid={`insurance-${idx}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{plan.provider}</CardTitle>
                    <CardDescription>{plan.coverage}</CardDescription>
                  </div>
                  <Badge className="bg-finance-teal hover:bg-finance-teal/90">
                    Recommended
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <div className="text-sm text-muted-foreground">Annual Premium</div>
                    <div className="text-2xl font-bold text-finance-teal">₹{plan.premium}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Sum Assured</div>
                    <div className="text-2xl font-bold">₹{plan.sumAssured.toLocaleString()}</div>
                  </div>
                </div>
                <div className="space-y-2">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-finance-teal" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  className="w-full"
                  onClick={() => console.log(`Apply for ${plan.provider}`)}
                  data-testid={`button-apply-insurance-${idx}`}
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="loans" className="space-y-4">
          <Card className="border-finance-teal">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Banknote className="h-5 w-5 text-finance-teal" />
                Agricultural Loans
              </CardTitle>
              <CardDescription>
                Get financing for seeds, equipment, and farm development
              </CardDescription>
            </CardHeader>
          </Card>

          {mockLoans.map((loan, idx) => (
            <Card key={idx} data-testid={`loan-${idx}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{loan.bank}</CardTitle>
                    <CardDescription>{loan.type}</CardDescription>
                  </div>
                  <Badge variant="outline">{loan.interest}% Interest</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground">Maximum Loan Amount</div>
                  <div className="text-2xl font-bold text-finance-teal">
                    ₹{loan.maxAmount.toLocaleString()}
                  </div>
                </div>
                <div className="space-y-2">
                  {loan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-finance-teal" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  className="w-full"
                  onClick={() => console.log(`Apply for loan from ${loan.bank}`)}
                  data-testid={`button-apply-loan-${idx}`}
                >
                  Check Eligibility
                </Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="emi" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-finance-teal" />
                EMI Calculator
              </CardTitle>
              <CardDescription>Calculate your monthly loan repayment amount</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="loan-amount">Loan Amount (₹)</Label>
                <Input
                  id="loan-amount"
                  type="number"
                  placeholder="Enter loan amount"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  data-testid="input-loan-amount"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="loan-tenure">Tenure (months)</Label>
                <Input
                  id="loan-tenure"
                  type="number"
                  placeholder="Enter tenure in months"
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(e.target.value)}
                  data-testid="input-loan-tenure"
                />
              </div>
              <Button
                onClick={calculateEMI}
                className="w-full"
                disabled={!loanAmount || !loanTenure}
                data-testid="button-calculate-emi"
              >
                Calculate EMI
              </Button>
              {emi > 0 && (
                <div className="p-6 bg-finance-teal/10 rounded-md border border-finance-teal/20 text-center">
                  <div className="text-sm text-muted-foreground mb-2">Monthly EMI</div>
                  <div className="text-4xl font-bold text-finance-teal">₹{emi.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground mt-2">
                    Total Payment: ₹{(emi * parseFloat(loanTenure)).toLocaleString()}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
