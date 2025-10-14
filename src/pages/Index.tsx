import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, TrendingUp, Users, Shield } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex justify-center mb-8">
            <div className="bg-primary rounded-full p-6 animate-pulse-scale">
              <MessageCircle className="w-16 h-16 text-primary-foreground" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            WhatsApp Bulk Messaging Made Simple
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Automate your customer communications, boost retention, and grow your business with intelligent WhatsApp campaigns
          </p>
          
          <Button 
            size="lg"
            className="h-14 text-lg px-8"
            onClick={() => navigate("/auth")}
          >
            Get Started Now
          </Button>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center space-y-4 p-6 rounded-lg hover:bg-accent transition-colors">
            <div className="flex justify-center">
              <div className="bg-accent rounded-full p-4">
                <TrendingUp className="w-8 h-8 text-accent-foreground" />
              </div>
            </div>
            <h3 className="text-xl font-semibold">Increase Sales</h3>
            <p className="text-muted-foreground">
              Drive repeat purchases with timely, personalized messages to your customers
            </p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-lg hover:bg-accent transition-colors">
            <div className="flex justify-center">
              <div className="bg-accent rounded-full p-4">
                <Users className="w-8 h-8 text-accent-foreground" />
              </div>
            </div>
            <h3 className="text-xl font-semibold">Smart Automation</h3>
            <p className="text-muted-foreground">
              Schedule campaigns and let the system handle distribution automatically
            </p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-lg hover:bg-accent transition-colors">
            <div className="flex justify-center">
              <div className="bg-accent rounded-full p-4">
                <Shield className="w-8 h-8 text-accent-foreground" />
              </div>
            </div>
            <h3 className="text-xl font-semibold">Safe & Compliant</h3>
            <p className="text-muted-foreground">
              Fully transparent, permission-based messaging to your existing contacts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
