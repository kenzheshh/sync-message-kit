import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Loader2, CheckCircle2, UserCheck, Star, Send, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";
import whatsappPattern from "@/assets/whatsapp-pattern.png";
const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [selectedGoal, setSelectedGoal] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [revenue, setRevenue] = useState("");
  const [averageCheck, setAverageCheck] = useState("");
  const [whatsappCode] = useState("A1B2C3D4");
  const [isLoading, setIsLoading] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const businessCategories = [
    "Beauty & wellness",
    "Retail / eCommerce",
    "Food & delivery",
    "Real estate",
    "Education / courses",
    "Services (repairs, cleaning, etc.)"
  ];

  const revenueOptions = [
    "Less than $10k/month",
    "$10k - $50k/month",
    "$50k - $100k/month",
    "$100k - $500k/month",
    "More than $500k/month"
  ];

  const averageCheckOptions = [
    "Less than $10",
    "$10 - $50",
    "$50 - $100",
    "$100 - $500",
    "More than $500"
  ];

  const handleGoalSelect = (goal: string) => {
    setSelectedGoal(goal);
    setTimeout(() => setStep(2), 300);
  };

  const handleBusinessSetup = () => {
    if (!businessType.trim()) {
      toast({
        title: "Business type required",
        description: "Please tell us what type of business you have",
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(3);
    }, 500);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(whatsappCode);
    setCodeCopied(true);
    toast({
      title: "Code copied!",
      description: "Paste it in WhatsApp to continue"
    });
    setTimeout(() => setCodeCopied(false), 2000);
  };

  const handleWhatsAppConnect = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
      });
      setStep(4);
    }, 1000);
  };
  const handleConnectWhatsApp = () => {
    navigate("/dashboard");
  };
  const handleSkip = () => {
    navigate("/dashboard");
  };
  return <div className="min-h-screen bg-muted flex items-center justify-center p-4 relative" style={{
      backgroundImage: `url(${whatsappPattern})`,
      backgroundRepeat: 'repeat',
      backgroundSize: '400px'
    }}>
      <div className="absolute inset-0 bg-background/60" />
      <Card className="w-full max-w-2xl p-8 shadow-xl animate-fade-in relative z-10">
        {/* Progress Bar */}
        <div className="mb-8">
          {step === 4 ? (
            <div className="w-full h-2 bg-primary rounded-full transition-all duration-500" />
          ) : (
            <div className="flex items-center gap-2">
              {[1, 2, 3].map(stepNum => <div 
                  key={stepNum} 
                  className="flex-1 flex flex-col items-center gap-2"
                  onClick={() => {
                    if (stepNum < step) {
                      setStep(stepNum);
                    }
                  }}
                >
                  <div className={`w-full h-2 rounded-full transition-all duration-500 ${
                    step >= stepNum ? "bg-primary" : "bg-muted"
                  } ${stepNum < step ? "cursor-pointer hover:opacity-80" : ""}`} />
                  <span className={`text-xs transition-colors ${
                    step >= stepNum ? "text-primary font-medium" : "text-muted-foreground"
                  } ${stepNum < step ? "cursor-pointer hover:underline" : ""}`}>
                    Step {stepNum}
                  </span>
                </div>)}
            </div>
          )}
        </div>

        {/* Frame 1 - Choose Goal */}
        {step === 1 && <div className="space-y-6 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Choose your goal
              </h2>
            </div>
            
            <div className="space-y-3 max-w-md mx-auto">
              <Button 
                onClick={() => handleGoalSelect("Return your old clients")}
                variant="outline"
                size="lg"
                className="w-full h-16 text-lg font-medium justify-between hover:bg-accent hover:scale-[1.02] hover:shadow-md transition-all group"
              >
                <span className="flex items-center gap-3">
                  <UserCheck className="w-6 h-6 text-primary" />
                  Return your old clients
                </span>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Button>
              <Button 
                onClick={() => handleGoalSelect("Increase reviews on maps")}
                variant="outline"
                size="lg"
                className="w-full h-16 text-lg font-medium justify-between hover:bg-accent hover:scale-[1.02] hover:shadow-md transition-all group"
              >
                <span className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-primary" />
                  Increase reviews on maps
                </span>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Button>
              <Button 
                onClick={() => handleGoalSelect("Send bulk messages")}
                variant="outline"
                size="lg"
                className="w-full h-16 text-lg font-medium justify-between hover:bg-accent hover:scale-[1.02] hover:shadow-md transition-all group"
              >
                <span className="flex items-center gap-3">
                  <Send className="w-6 h-6 text-primary" />
                  Send bulk messages
                </span>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Button>
            </div>

            <div className="text-center pt-4">
              <Button onClick={handleSkip} variant="ghost" size="lg" className="text-muted-foreground">
                Skip onboarding
              </Button>
            </div>
          </div>}

        {/* Frame 2 - About Your Business */}
        {step === 2 && <div className="space-y-6 animate-fade-in max-w-md mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                About your business
              </h2>
            </div>
            
            <div className="space-y-5">
              {/* Business Type Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  What type of business do you have? <span className="text-destructive">*</span>
                </label>
                <Input 
                  type="text" 
                  placeholder="Example: beauty salon, car service, online store…" 
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="h-12"
                  list="business-categories"
                />
                <datalist id="business-categories">
                  {businessCategories.map((category) => (
                    <option key={category} value={category} />
                  ))}
                </datalist>
              </div>

              {/* Revenue and Average Check Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Revenue
                  </label>
                  <select
                    value={revenue}
                    onChange={(e) => setRevenue(e.target.value)}
                    className="w-full h-12 px-3 rounded-md border border-input bg-background text-foreground"
                  >
                    <option value="">Select...</option>
                    {revenueOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Average check
                  </label>
                  <select
                    value={averageCheck}
                    onChange={(e) => setAverageCheck(e.target.value)}
                    className="w-full h-12 px-3 rounded-md border border-input bg-background text-foreground"
                  >
                    <option value="">Select...</option>
                    {averageCheckOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleBusinessSetup} 
              disabled={isLoading}
              className="w-full h-12 text-lg font-medium" 
              size="lg"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Setting up...
                </>
              ) : (
                "Next"
              )}
            </Button>
          </div>}

        {/* Frame 3 - WhatsApp Authorization */}
        {step === 3 && <div className="space-y-6 animate-fade-in max-w-lg mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                WhatsApp Authorization
              </h2>
              <p className="text-muted-foreground">
                To use our service, connect your WhatsApp using this code
              </p>
            </div>

            {/* Video Instruction Placeholder */}
            <div className="bg-muted rounded-lg aspect-video flex items-center justify-center border border-border">
              <p className="text-muted-foreground">Video instruction</p>
            </div>

            {/* Code Display */}
            <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="font-mono text-3xl font-bold text-foreground tracking-widest">
                  {whatsappCode}
                </div>
                <Button 
                  onClick={handleCopyCode}
                  variant="outline"
                  size="lg"
                  className="shrink-0"
                >
                  {codeCopied ? <CheckCircle2 className="w-5 h-5" /> : "Copy"}
                </Button>
              </div>
            </div>

            {/* Instructions */}
            <div className="space-y-3 text-left">
              <div className="flex gap-3">
                <span className="text-xl">①</span>
                <p className="text-foreground">Open WhatsApp on your phone</p>
              </div>
              <div className="flex gap-3">
                <span className="text-xl">②</span>
                <p className="text-foreground">On Android tap Menu ⋮ · On iPhone tap Settings ⚙️</p>
              </div>
              <div className="flex gap-3">
                <span className="text-xl">③</span>
                <p className="text-foreground">Tap Linked Devices, then Link a Device</p>
              </div>
              <div className="flex gap-3">
                <span className="text-xl">④</span>
                <p className="text-foreground">Tap "Link with Phone Number" and enter this code</p>
              </div>
            </div>

            <Button 
              onClick={handleWhatsAppConnect}
              disabled={isLoading}
              className="w-full h-12 text-lg font-medium" 
              size="lg"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Connecting...
                </>
              ) : (
                "I've connected WhatsApp"
              )}
            </Button>
          </div>}

        {/* Frame 4 - Success */}
        {step === 4 && <div className="text-center space-y-6 animate-scale-in">
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 rounded-full p-8 animate-glow-pulse">
                <CheckCircle2 className="w-20 h-20 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-foreground">
              Success!
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              Your WhatsApp is connected and ready to help grow your business
            </p>
            <div className="flex flex-col gap-3 pt-4">
              <Button onClick={handleConnectWhatsApp} size="lg" className="text-lg font-medium hover:scale-105 transition-transform">
                Go to Dashboard
              </Button>
            </div>
          </div>}
      </Card>
    </div>;
};
export default Onboarding;