import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, Loader2, CheckCircle2, Sparkles, HelpCircle, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import confetti from "canvas-confetti";
const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [showTooltip, setShowTooltip] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("+7 999 123-45-67");
  const [isPhoneEditable, setIsPhoneEditable] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sentMessages, setSentMessages] = useState<number[]>([]);
  const [showReplies, setShowReplies] = useState<number[]>([]);
  const [moneyCollected, setMoneyCollected] = useState(false);
  const [totalEarned, setTotalEarned] = useState(0);
  const [showFinalCTA, setShowFinalCTA] = useState(false);
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const messageTemplates = [{
    id: "welcome-back",
    title: "We miss you 💚 here's a thank-you discount.",
    preview: "Привет! Давно не виделись. У нас для вас специальная скидка 15%!"
  }, {
    id: "new-arrivals",
    title: "New arrivals are here — take a look!",
    preview: "🔥 Новая коллекция уже в наличии! Посмотрите первыми."
  }, {
    id: "feedback",
    title: "Your feedback matters — tell us how we did.",
    preview: "Как вам наш сервис? Поделитесь отзывом и получите бонус!"
  }];
  const progress = step / 4 * 100;
  useEffect(() => {
    if (step === 1) {
      const showTimer = setTimeout(() => {
        setShowTooltip(true);
      }, 4000);
      const hideTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 7000);
      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [step]);
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
        variant: "destructive"
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
        origin: {
          y: 0.6
        }
      });
      toast({
        title: "Message sent! 👀",
        description: "Check your WhatsApp"
      });
      setTimeout(() => setStep(3), 2000);
    }, 500);
  };
  const handleSendCampaign = () => {
    if (!selectedTemplate) {
      toast({
        title: "Select a template",
        description: "Please choose one of the message templates",
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);
    // Simulate campaign send
    setTimeout(() => {
      setIsLoading(false);
      setStep(4);
    }, 2000);
  };

  const handleSendMessage = (messageNum: number) => {
    if (sentMessages.includes(messageNum)) return;
    
    setSentMessages([...sentMessages, messageNum]);
    
    // Show reply after delay
    setTimeout(() => {
      setShowReplies([...showReplies, messageNum]);
      
      // Trigger coin animation
      const coinCount = messageNum === 1 ? 1 : messageNum === 2 ? 2 : 5;
      for (let i = 0; i < coinCount; i++) {
        setTimeout(() => {
          confetti({
            particleCount: 3,
            angle: 60 + Math.random() * 60,
            spread: 30,
            origin: { x: 0.7, y: 0.6 },
            colors: ['#FBBF24', '#F59E0B'],
            gravity: 1.5,
            scalar: 0.8
          });
        }, i * 100);
      }
      
      // Show money stack after all messages
      if (messageNum === 3) {
        setTimeout(() => {
          // Stack appears - no auto-collection
        }, 800);
      }
    }, 800);
  };

  const handleCollectMoney = () => {
    if (moneyCollected) return;
    
    setMoneyCollected(true);
    
    // Big coin explosion
    confetti({
      particleCount: 50,
      spread: 100,
      origin: { x: 0.7, y: 0.8 },
      colors: ['#FBBF24', '#F59E0B', '#10B981'],
      gravity: 0.8
    });
    
    // Animate counter
    let current = 0;
    const target = 50;
    const increment = target / 20;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
        
        // Show final CTA after counter finishes
        setTimeout(() => {
          setShowFinalCTA(true);
        }, 500);
      }
      setTotalEarned(Math.floor(current));
    }, 50);
  };
  const handleConnectWhatsApp = () => {
    navigate("/dashboard");
  };
  const handleSkip = () => {
    navigate("/dashboard");
  };
  return <div className="min-h-screen bg-muted flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8 shadow-xl animate-fade-in">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map(stepNum => <div key={stepNum} className="flex-1 flex flex-col items-center gap-2">
                <div className={`w-full h-2 rounded-full transition-all duration-500 ${step >= stepNum ? "bg-primary" : "bg-muted"}`} />
                <span className={`text-xs transition-colors ${step >= stepNum ? "text-primary font-medium" : "text-muted-foreground"}`}>
                  Step {stepNum}
                </span>
              </div>)}
          </div>
        </div>

        {/* Frame 1 - Welcome */}
        {step === 1 && <div className="text-center space-y-6 animate-slide-up-reveal">
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 rounded-full p-8 animate-glow-pulse">
                <MessageCircle className="w-20 h-20 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-foreground">
              <TooltipProvider>
                <Tooltip open={showTooltip} onOpenChange={setShowTooltip}>
                  <TooltipTrigger asChild>
                    <span className="inline-flex items-center gap-1 cursor-help">
                      Salem
                      <HelpCircle className="w-5 h-5 text-muted-foreground" />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Salem means Hi in Kazakh</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {" "} Boost your revenue via best retention tool
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              I'll help you wake up sleeping clients and bring them back — it takes less than 2 minutes to see how.
            </p>
            <div className="flex flex-col gap-3 pt-4">
              <Button onClick={handleShowDemo} size="lg" className="text-lg font-medium hover:scale-105 transition-transform">
                Show me how it works
              </Button>
              <Button onClick={handleSkip} variant="ghost" size="lg" className="text-muted-foreground">
                Skip (I'll explore myself)
              </Button>
            </div>
          </div>}

        {/* Frame 2 - Magic Moment */}
        {step === 2 && <div className="space-y-6 animate-scale-in">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                See how your bot talks to clients.
              </h2>
              <p className="text-muted-foreground">This message will be sent from SalemBot to your WhatsApp number.</p>
            </div>
            
            <div className="space-y-4 max-w-md mx-auto">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Your WhatsApp number
                </label>
                <Input type="tel" placeholder="+7 999 123-45-67" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} disabled={!isPhoneEditable} className="text-lg h-12 font-mono" />
                {!isPhoneEditable && <button onClick={() => setIsPhoneEditable(true)} className="text-sm text-primary hover:underline">
                    Use a different number
                  </button>}
              </div>

              {/* Message Preview Box */}
              <div className="bg-muted/50 border border-border rounded-lg p-4 space-y-2">
                <p className="text-xs text-muted-foreground font-medium">Message preview:</p>
                <p className="text-sm text-foreground">
                  Salem, this is your SalemBot 👋<br />
                  Just showing how your business can re-engage clients automatically.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Button onClick={handleSendTestMessage} disabled={isLoading} className="w-full h-12 text-lg font-medium" size="lg">
                  {isLoading ? <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </> : "Send Message to WhatsApp"}
                </Button>
                <Button onClick={() => setStep(3)} variant="ghost" size="lg" className="text-muted-foreground">
                  Skip this step
                </Button>
              </div>
            </div>
          </div>}

        {/* Frame 3 - Campaign Selection */}
        {step === 3 && <div className="space-y-6 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Now try a message campaign.
              </h2>
              <p className="text-muted-foreground">
                Pick one template to see how easy it is.
              </p>
            </div>
            <div className="space-y-3">
              {messageTemplates.map(template => <Card key={template.id} className={`p-4 cursor-pointer transition-all hover:shadow-md ${selectedTemplate === template.id ? "ring-2 ring-primary bg-primary/5" : "hover:bg-accent/50"}`} onClick={() => setSelectedTemplate(template.id)}>
                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 mt-1 flex items-center justify-center ${selectedTemplate === template.id ? "border-primary bg-primary" : "border-muted-foreground"}`}>
                      {selectedTemplate === template.id && <CheckCircle2 className="w-3 h-3 text-primary-foreground" />}
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
                </Card>)}
            </div>
            <Button onClick={handleSendCampaign} disabled={isLoading} className="w-full h-12 text-lg font-medium" size="lg">
              {isLoading ? <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending Campaign...
                </> : "Send Test Campaign"}
            </Button>
          </div>}

        {/* Frame 4 - Chat-to-Cash Game */}
        {step === 4 && <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">SalemBot says:</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Let's earn some cash!
              </h2>
              <p className="text-muted-foreground">
                Try sending these messages — see how Salem turns conversations into revenue.
              </p>
            </div>

            {/* Money Counter */}
            {totalEarned > 0 && (
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold animate-scale-in">
                +${totalEarned}
              </div>
            )}

            {/* Chat Container */}
            <div className="max-w-md mx-auto">
              <div className="bg-gradient-to-b from-muted/30 to-muted/10 border border-border rounded-3xl p-4 space-y-3 min-h-[400px] shadow-lg">
                
                {/* Message 1 */}
                <div className="space-y-2">
                  {!sentMessages.includes(1) ? (
                    <div className="flex items-center gap-2 bg-[#DCF8C6] p-3 rounded-2xl rounded-br-sm ml-auto max-w-[80%]">
                      <span className="text-sm flex-1">Hi Anna 👋 how have you been?</span>
                      <Button 
                        size="sm" 
                        onClick={() => handleSendMessage(1)}
                        className="h-7 px-3 text-xs bg-primary hover:bg-primary/90"
                      >
                        Send
                      </Button>
                    </div>
                  ) : (
                    <div className="bg-[#DCF8C6] p-3 rounded-2xl rounded-br-sm ml-auto max-w-[80%] animate-slide-in-right">
                      <p className="text-sm">Hi Anna 👋 how have you been?</p>
                    </div>
                  )}
                  
                  {showReplies.includes(1) && (
                    <div className="bg-background p-3 rounded-2xl rounded-bl-sm mr-auto max-w-[80%] animate-scale-in border border-border">
                      <p className="text-sm">Hey! Long time. Sounds interesting 😍</p>
                    </div>
                  )}
                </div>

                {/* Message 2 */}
                {sentMessages.includes(1) && (
                  <div className="space-y-2">
                    {!sentMessages.includes(2) ? (
                      <div className="flex items-center gap-2 bg-[#DCF8C6] p-3 rounded-2xl rounded-br-sm ml-auto max-w-[80%]">
                        <span className="text-sm flex-1">We've got new offers just for you.</span>
                        <Button 
                          size="sm" 
                          onClick={() => handleSendMessage(2)}
                          className="h-7 px-3 text-xs bg-primary hover:bg-primary/90"
                        >
                          Send
                        </Button>
                      </div>
                    ) : (
                      <div className="bg-[#DCF8C6] p-3 rounded-2xl rounded-br-sm ml-auto max-w-[80%] animate-slide-in-right">
                        <p className="text-sm">We've got new offers just for you.</p>
                      </div>
                    )}
                    
                    {showReplies.includes(2) && (
                      <div className="bg-background p-3 rounded-2xl rounded-bl-sm mr-auto max-w-[80%] animate-scale-in border border-border">
                        <p className="text-sm">Tell me more! 🤩</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Message 3 */}
                {sentMessages.includes(2) && (
                  <div className="space-y-2">
                    {!sentMessages.includes(3) ? (
                      <div className="flex items-center gap-2 bg-[#DCF8C6] p-3 rounded-2xl rounded-br-sm ml-auto max-w-[80%]">
                        <span className="text-sm flex-1">Click below to grab your discount.</span>
                        <Button 
                          size="sm" 
                          onClick={() => handleSendMessage(3)}
                          className="h-7 px-3 text-xs bg-primary hover:bg-primary/90"
                        >
                          Send
                        </Button>
                      </div>
                    ) : (
                      <div className="bg-[#DCF8C6] p-3 rounded-2xl rounded-br-sm ml-auto max-w-[80%] animate-slide-in-right">
                        <p className="text-sm">Click below to grab your discount.</p>
                      </div>
                    )}
                    
                    {showReplies.includes(3) && (
                      <div className="bg-background p-3 rounded-2xl rounded-bl-sm mr-auto max-w-[80%] animate-scale-in border border-border">
                        <p className="text-sm">I'm in! Here's my order. 💳</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Money Stack */}
                {showReplies.includes(3) && !moneyCollected && (
                  <div className="flex justify-center pt-4 animate-scale-in">
                    <button
                      onClick={handleCollectMoney}
                      className="group relative"
                    >
                      <div className="bg-gradient-to-br from-[#FBBF24] to-[#F59E0B] rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-110 animate-glow-pulse">
                        <DollarSign className="w-12 h-12 text-white" />
                      </div>
                      <p className="text-xs font-medium text-muted-foreground mt-2 group-hover:text-foreground transition-colors">
                        Tap to collect 💰
                      </p>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Final CTA */}
            {showFinalCTA && (
              <div className="space-y-4 animate-fade-in pt-4">
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 max-w-md mx-auto">
                  <p className="text-sm text-foreground text-center">
                    <span className="font-bold">That's exactly what I do for your real clients</span> — automate chats that bring you money.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <Button 
                    onClick={handleConnectWhatsApp} 
                    size="lg" 
                    className="text-lg font-medium hover:scale-105 transition-transform"
                  >
                    Connect WhatsApp Business and start earning for real
                  </Button>
                  <Button 
                    onClick={() => {
                      setSentMessages([]);
                      setShowReplies([]);
                      setMoneyCollected(false);
                      setTotalEarned(0);
                      setShowFinalCTA(false);
                    }} 
                    variant="ghost" 
                    size="lg"
                  >
                    Replay demo
                  </Button>
                </div>
              </div>
            )}
          </div>}
      </Card>
    </div>;
};
export default Onboarding;