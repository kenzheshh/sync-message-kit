import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, TrendingUp, Shield, ArrowRight } from "lucide-react";

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const [chatType, setChatType] = useState("");
  const [businessType, setBusinessType] = useState("");
  const navigate = useNavigate();

  const infoSlides = [
    {
      icon: MessageCircle,
      title: "Automatic WhatsApp Bulk Messaging",
      description: "Send personalized messages to your entire contact list with ease. Automate reminders and follow-ups.",
    },
    {
      icon: TrendingUp,
      title: "Grow Your Business",
      description: "Increase client retention and repeat sales through timely, relevant communication.",
    },
    {
      icon: Shield,
      title: "Safe & Transparent",
      description: "Not spam - fully transparent communication with your existing contacts.",
    },
  ];

  const handleNext = () => {
    if (step < infoSlides.length + 1) {
      setStep(step + 1);
    } else {
      navigate("/dashboard");
    }
  };

  const canProceed = () => {
    if (step === infoSlides.length) return chatType !== "";
    if (step === infoSlides.length + 1) return businessType.trim() !== "";
    return true;
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 animate-fade-in">
      <Card className="w-full max-w-2xl p-8 shadow-lg">
        {step < infoSlides.length ? (
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="bg-accent rounded-full p-6">
                {(() => {
                  const Icon = infoSlides[step].icon;
                  return <Icon className="w-16 h-16 text-accent-foreground" />;
                })()}
              </div>
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              {infoSlides[step].title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {infoSlides[step].description}
            </p>
            <div className="flex justify-center gap-2 pt-4">
              {infoSlides.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all ${
                    i === step ? "w-8 bg-primary" : "w-2 bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : step === infoSlides.length ? (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">
              Tell us about your chats
            </h2>
            <p className="text-muted-foreground">
              Are your chats mixed or only work-related?
            </p>
            <RadioGroup value={chatType} onValueChange={setChatType}>
              <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-accent transition-colors">
                <RadioGroupItem value="mixed" id="mixed" />
                <Label htmlFor="mixed" className="cursor-pointer flex-1 text-base">
                  Mixed (personal + work)
                </Label>
              </div>
              <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-accent transition-colors">
                <RadioGroupItem value="work" id="work" />
                <Label htmlFor="work" className="cursor-pointer flex-1 text-base">
                  Work only
                </Label>
              </div>
            </RadioGroup>
          </div>
        ) : (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">
              What type of business do you have?
            </h2>
            <div className="space-y-2">
              <Textarea
                placeholder="We sell and install water filters..."
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="min-h-32 text-base"
              />
            </div>
          </div>
        )}

        <div className="flex justify-between items-center mt-8">
          <div className="text-sm text-muted-foreground">
            Step {step + 1} of {infoSlides.length + 2}
          </div>
          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            className="text-base"
          >
            {step === infoSlides.length + 1 ? "Get Started" : "Next"}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Onboarding;
