import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, Loader2, CheckCircle2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("+7 999 123-45-67");
  const [isPhoneEditable, setIsPhoneEditable] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const messageTemplates = [
    {
      id: "welcome-back",
      title: "We miss you 💚 here's a thank-you discount.",
      preview: "Привет! Давно не виделись. У нас для вас специальная скидка 15%!",
    },
    {
      id: "new-arrivals",
      title: "New arrivals are here — take a look!",
      preview: "🔥 Новая коллекция уже в наличии! Посмотрите первыми.",
    },
    {
      id: "feedback",
      title: "Your feedback matters — tell us how we did.",
      preview: "Как вам наш сервис? Поделитесь отзывом и получите бонус!",
    },
  ];

  const progress = (step / 4) * 100;

  const handleShowDemo = () => {
    setStep(2);
  };

  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  };

  const handleSendTestMessage = () => {
    if (!validatePhoneNumber(phoneNumber)) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid phone number with country code",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      toast({
        title: "Message sent! 👀",
        description: "Check your WhatsApp",
      });
      setTimeout(() => setStep(3), 2000);
    }, 500);
  };

  const handleSendCampaign = () => {
    if (!selectedTemplate) {
      toast({
        title: "Select a template",
        description: "Please choose one of the message templates",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate campaign send
    setTimeout(() => {
      setIsLoading(false);
      setStep(4);
      // Big confetti celebration
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#10B981', '#FBBF24', '#3B82F6'],
      });
    }, 2000);
  };

  const handleConnectWhatsApp = () => {
    navigate("/dashboard");
  };

  const handleSkip = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-muted flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8 shadow-xl animate-fade-in">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map((stepNum) => (
              <div
                key={stepNum}
                className="flex-1 flex flex-col items-center gap-2"
              >
                <div
                  className={`w-full h-2 rounded-full transition-all duration-500 ${
                    step >= stepNum ? "bg-primary" : "bg-muted"
                  }`}
                />
                <span
                  className={`text-xs transition-colors ${
                    step >= stepNum ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
                >
                  Step {stepNum}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Frame 1 - Welcome */}
        {step === 1 && (
          <div className="text-center space-y-6 animate-slide-up-reveal">
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 rounded-full p-8 animate-glow-pulse">
                <MessageCircle className="w-20 h-20 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-foreground">
              Meet Salem — your WhatsApp sales assistant.
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              I'll help you wake up sleeping clients and bring them back — it takes less than 2 minutes to see how.
            </p>
            <div className="flex flex-col gap-3 pt-4">
              <Button
                onClick={handleShowDemo}
                size="lg"
                className="text-lg font-medium hover:scale-105 transition-transform"
              >
                Show me how it works
              </Button>
              <Button
                onClick={handleSkip}
                variant="ghost"
                size="lg"
                className="text-muted-foreground"
              >
                Skip (I'll explore myself)
              </Button>
            </div>
          </div>
        )}

        {/* Frame 2 - Magic Moment */}
        {step === 2 && (
          <div className="space-y-6 animate-scale-in">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                See how your bot talks to clients.
              </h2>
              <p className="text-muted-foreground">
                This message will be sent from your personal bot to your WhatsApp number.
              </p>
            </div>
            
            <div className="space-y-4 max-w-md mx-auto">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Your WhatsApp number
                </label>
                <Input
                  type="tel"
                  placeholder="+7 999 123-45-67"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  disabled={!isPhoneEditable}
                  className="text-lg h-12 font-mono"
                />
                {!isPhoneEditable && (
                  <button
                    onClick={() => setIsPhoneEditable(true)}
                    className="text-sm text-primary hover:underline"
                  >
                    Use a different number
                  </button>
                )}
              </div>

              {/* Message Preview Box */}
              <div className="bg-muted/50 border border-border rounded-lg p-4 space-y-2">
                <p className="text-xs text-muted-foreground font-medium">Message preview:</p>
                <p className="text-sm text-foreground">
                  Hi [Name], this is your SalemBot 👋<br />
                  Just showing how your business can re-engage clients automatically.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Button
                  onClick={handleSendTestMessage}
                  disabled={isLoading}
                  className="w-full h-12 text-lg font-medium"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message to WhatsApp"
                  )}
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  variant="ghost"
                  size="lg"
                  className="text-muted-foreground"
                >
                  Skip this step
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Frame 3 - Campaign Selection */}
        {step === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Now try a message campaign.
              </h2>
              <p className="text-muted-foreground">
                Pick one template to see how easy it is.
              </p>
            </div>
            <div className="space-y-3">
              {messageTemplates.map((template) => (
                <Card
                  key={template.id}
                  className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                    selectedTemplate === template.id
                      ? "ring-2 ring-primary bg-primary/5"
                      : "hover:bg-accent/50"
                  }`}
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 mt-1 flex items-center justify-center ${
                        selectedTemplate === template.id
                          ? "border-primary bg-primary"
                          : "border-muted-foreground"
                      }`}
                    >
                      {selectedTemplate === template.id && (
                        <CheckCircle2 className="w-3 h-3 text-primary-foreground" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground mb-2">
                        {template.title}
                      </h3>
                      <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
                        {template.preview}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <Button
              onClick={handleSendCampaign}
              disabled={isLoading}
              className="w-full h-12 text-lg font-medium"
              size="lg"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending Campaign...
                </>
              ) : (
                "Send Test Campaign"
              )}
            </Button>
          </div>
        )}

        {/* Frame 4 - Success */}
        {step === 4 && (
          <div className="text-center space-y-6 py-8 animate-scale-in">
            <div className="flex justify-center">
              <div className="bg-success/10 rounded-full p-8 animate-glow-pulse">
                <CheckCircle2 className="w-20 h-20 text-success" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-foreground">
              🔥 You just reactivated your first clients!
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              Connect your real WhatsApp account to start bringing real customers back.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 max-w-md mx-auto">
              <div className="text-3xl font-bold text-primary mb-2">
                ✅ Campaign sent to 5 demo clients
              </div>
              <p className="text-sm text-muted-foreground">
                Imagine this at scale with your real customer base
              </p>
            </div>
            <div className="flex flex-col gap-3 pt-4">
              <Button
                onClick={handleConnectWhatsApp}
                size="lg"
                className="text-lg font-medium hover:scale-105 transition-transform"
              >
                Connect WhatsApp Business
              </Button>
              <Button
                onClick={handleSkip}
                variant="ghost"
                size="lg"
                className="text-muted-foreground"
              >
                I'll do it later
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Onboarding;
