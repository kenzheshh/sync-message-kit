import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Payment = () => {
  const handleKaspiPayment = () => {
    // TODO: Integrate with Kaspi Pay API
    console.log("Initiating Kaspi Pay payment");
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Choose Your Plan</h1>
          <p className="text-muted-foreground">Start growing your business today</p>
        </div>

        <Card className="border-2 border-primary">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Premium Plan</CardTitle>
            <CardDescription className="text-xl mt-2">
              <span className="text-4xl font-bold text-foreground">50,000 ₸</span>
              <span className="text-muted-foreground"> / month</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Unlimited mass distributions</p>
                  <p className="text-sm text-muted-foreground">Send campaigns to unlimited contacts</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Content Plan</p>
                  <p className="text-sm text-muted-foreground">Access to content planning tools</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button 
                onClick={handleKaspiPayment}
                className="w-full h-12 text-lg"
                size="lg"
              >
                Pay with Kaspi Pay
              </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground">
              Secure payment processing via Kaspi Pay
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Payment;
