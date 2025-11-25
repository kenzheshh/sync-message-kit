import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Loader2, CheckCircle2, UserCheck, Star, Send, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import confetti from "canvas-confetti";
import whatsappPattern from "@/assets/new-pattern.png";
import whatsappInstructionGif from "@/assets/whatsapp-instruction.gif";
const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [currentDemoIndex, setCurrentDemoIndex] = useState(0);
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

  const goalDemos = {
    "Return your old clients": {
      title: "Client Return Automation",
      explanation: "We automatically remind your clients to come back. You choose the interval (e.g., after 30, 60, or 90 days), and the system sends a friendly message that brings them back.",
      message: "Hi Anna! It's been a while since your last visit. We'd love to see you again – feel free to book your next appointment whenever it's convenient."
    },
    "Increase reviews on maps": {
      title: "Review Collection Automation",
      explanation: "After each visit, your client receives a simple message asking for a rating. If they select 5 – they're asked to leave a public review. If they select 1–4 – the feedback stays private.",
      message: "How would you rate your recent visit from 1 to 5? Your feedback helps us improve!"
    },
    "Send bulk messages": {
      title: "Safe Mass Messaging",
      explanation: "You can send promotional messages to your entire contact list safely. Your number stays protected and messages reach clients without being flagged as spam.",
      message: "Hi! We're launching a special offer this week – 20% off for returning clients. Want to book a slot?"
    }
  };
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

  const handleGoalToggle = (goal: string) => {
    setSelectedGoals(prev => 
      prev.includes(goal) 
        ? prev.filter(g => g !== goal)
        : [...prev, goal]
    );
  };

  const handleGoalsNext = () => {
    if (selectedGoals.length === 0) {
      toast({
        title: "Please select at least one goal",
        description: "Choose what you want to achieve",
        variant: "destructive"
      });
      return;
    }
    setCurrentDemoIndex(0);
    setStep(2);
  };

  const handleSendExample = () => {
    toast({
      title: "Example sent!",
      description: "Check your WhatsApp for the demo message"
    });
  };

  const handleNextDemo = () => {
    if (currentDemoIndex < selectedGoals.length - 1) {
      setCurrentDemoIndex(currentDemoIndex + 1);
    } else {
      setStep(3);
    }
  };

  const handlePrevDemo = () => {
    if (currentDemoIndex > 0) {
      setCurrentDemoIndex(currentDemoIndex - 1);
    }
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
      setStep(4);
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
      setStep(5);
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
          {step === 5 ? (
            <div className="w-full h-2 bg-primary rounded-full transition-all duration-500" />
          ) : (
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4].map(stepNum => <div 
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
              <div 
                onClick={() => handleGoalToggle("Return your old clients")}
                className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition-all hover:bg-accent ${
                  selectedGoals.includes("Return your old clients") 
                    ? "border-primary bg-primary/5" 
                    : "border-border"
                }`}
              >
                <Checkbox 
                  checked={selectedGoals.includes("Return your old clients")}
                  onCheckedChange={() => handleGoalToggle("Return your old clients")}
                  className="pointer-events-none"
                />
                <UserCheck className="w-6 h-6 text-primary" />
                <span className="text-lg font-medium flex-1">Return your old clients</span>
              </div>

              <div 
                onClick={() => handleGoalToggle("Increase reviews on maps")}
                className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition-all hover:bg-accent ${
                  selectedGoals.includes("Increase reviews on maps") 
                    ? "border-primary bg-primary/5" 
                    : "border-border"
                }`}
              >
                <Checkbox 
                  checked={selectedGoals.includes("Increase reviews on maps")}
                  onCheckedChange={() => handleGoalToggle("Increase reviews on maps")}
                  className="pointer-events-none"
                />
                <Star className="w-6 h-6 text-primary" />
                <span className="text-lg font-medium flex-1">Increase reviews on maps</span>
              </div>

              <div 
                onClick={() => handleGoalToggle("Send bulk messages")}
                className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition-all hover:bg-accent ${
                  selectedGoals.includes("Send bulk messages") 
                    ? "border-primary bg-primary/5" 
                    : "border-border"
                }`}
              >
                <Checkbox 
                  checked={selectedGoals.includes("Send bulk messages")}
                  onCheckedChange={() => handleGoalToggle("Send bulk messages")}
                  className="pointer-events-none"
                />
                <Send className="w-6 h-6 text-primary" />
                <span className="text-lg font-medium flex-1">Send bulk messages</span>
              </div>
            </div>

            <div className="max-w-md mx-auto pt-4">
              <Button 
                onClick={handleGoalsNext}
                size="lg"
                className="w-full h-12 text-lg font-medium"
              >
                Continue
              </Button>
            </div>

            <div className="text-center pt-4">
              <Button onClick={handleSkip} variant="ghost" size="lg" className="text-muted-foreground">
                Skip onboarding
              </Button>
            </div>
          </div>}

        {/* Frame 2 - Demo of Selected Goals */}
        {step === 2 && (
          <div className="space-y-6 animate-fade-in max-w-2xl mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Here's how your goals work in practice
              </h2>
            </div>

            {selectedGoals.length > 0 && (
              <div className="space-y-6">
                {/* Demo Card */}
                <div className="bg-muted/30 rounded-xl p-6 space-y-4 border-2 border-border">
                  <h3 className="text-xl font-bold text-foreground">
                    {goalDemos[selectedGoals[currentDemoIndex] as keyof typeof goalDemos].title}
                  </h3>
                  
                  <p className="text-foreground/80">
                    {goalDemos[selectedGoals[currentDemoIndex] as keyof typeof goalDemos].explanation}
                  </p>

                  {/* WhatsApp Message Preview */}
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        Preview
                      </div>
                    </div>
                    <div className="bg-[#DCF8C6] dark:bg-[#005C4B] rounded-lg rounded-tl-none p-3 max-w-[85%]">
                      <p className="text-sm text-foreground">
                        {goalDemos[selectedGoals[currentDemoIndex] as keyof typeof goalDemos].message}
                      </p>
                    </div>
                  </div>

                  <Button 
                    onClick={handleSendExample}
                    variant="outline"
                    className="w-full"
                  >
                    Send example to my WhatsApp
                  </Button>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between gap-4">
                  <Button
                    onClick={handlePrevDemo}
                    variant="outline"
                    disabled={currentDemoIndex === 0}
                    className="flex-1"
                  >
                    Previous
                  </Button>
                  
                  {selectedGoals.length > 1 && (
                    <div className="text-sm text-muted-foreground">
                      {currentDemoIndex + 1} / {selectedGoals.length}
                    </div>
                  )}
                  
                  <Button
                    onClick={handleNextDemo}
                    className="flex-1"
                  >
                    {currentDemoIndex === selectedGoals.length - 1 ? "Continue" : "Next"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Frame 3 - About Your Business */}
        {step === 3 && <div className="space-y-6 animate-fade-in max-w-md mx-auto">
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
                  className="h-16 border-2 border-muted-foreground/30"
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
                    className="w-full h-12 px-3 rounded-md border-2 border-muted-foreground/30 bg-background text-foreground"
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
                    className="w-full h-12 px-3 rounded-md border-2 border-muted-foreground/30 bg-background text-foreground"
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

        {/* Frame 4 - WhatsApp Authorization */}
        {step === 4 && <div className="space-y-6 animate-fade-in max-w-lg mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                WhatsApp Authorization
              </h2>
              <p className="text-muted-foreground">
                To use our service, connect your WhatsApp using this code
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-6 items-start">
              {/* Left Side - Code and Instructions */}
              <div className="space-y-6 flex flex-col h-full">
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
                      {codeCopied ? <CheckCircle2 className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    </Button>
                  </div>
                </div>

                {/* Instructions */}
                <div className="space-y-3 text-left flex-1">
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
              </div>

              {/* Right Side - GIF */}
              <div className="flex items-center justify-center h-full">
                <img 
                  src={whatsappInstructionGif} 
                  alt="WhatsApp connection instructions" 
                  className="rounded-lg border border-border w-full max-w-[320px] object-contain"
                />
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

        {/* Frame 5 - Success */}
        {step === 5 && <div className="text-center space-y-6 animate-scale-in">
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