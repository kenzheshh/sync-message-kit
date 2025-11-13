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
  const [businessType, setBusinessType] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [remindersSent, setRemindersSent] = useState(false);
  const [respondedChats, setRespondedChats] = useState<number[]>([]);
  const [collectedChats, setCollectedChats] = useState<number[]>([]);
  const [totalEarned, setTotalEarned] = useState(0);
  const [showFinalCTA, setShowFinalCTA] = useState(false);

  const chatList = [
    { id: 1, name: "Anna K.", lastMessage: "Thanks for last time!", timestamp: "1 week ago", avatar: "👩" },
    { id: 2, name: "Mike S.", lastMessage: "Great service", timestamp: "2 weeks ago", avatar: "👨" },
    { id: 3, name: "Sarah L.", lastMessage: "Will come back", timestamp: "3 weeks ago", avatar: "👱‍♀️" },
    { id: 4, name: "John D.", lastMessage: "Amazing!", timestamp: "30+ days ago", avatar: "🧔" },
    { id: 5, name: "Emma W.", lastMessage: "Loved it", timestamp: "30+ days ago", avatar: "👩‍🦰" }
  ];

  const respondingChatIds = [1, 2, 4]; // Only these 3 will respond
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

  const handleSendReminders = () => {
    if (remindersSent) return;
    
    setIsLoading(true);
    setRemindersSent(true);
    
    // Simulate sending and show responses after delay
    setTimeout(() => {
      setIsLoading(false);
      
      // Show responses from 3 clients one by one
      respondingChatIds.forEach((chatId, index) => {
        setTimeout(() => {
          setRespondedChats(prev => [...prev, chatId]);
          
          // Small coin animation for each response
          confetti({
            particleCount: 5,
            angle: 60 + Math.random() * 60,
            spread: 40,
            origin: { x: 0.5, y: 0.5 },
            colors: ['#FBBF24', '#F59E0B'],
            gravity: 1.2,
            scalar: 0.7
          });
        }, index * 800);
      });
    }, 1000);
  };

  const handleCollectFromChat = (chatId: number) => {
    if (collectedChats.includes(chatId)) return;
    
    setCollectedChats(prev => [...prev, chatId]);
    
    // Coin explosion
    confetti({
      particleCount: 30,
      spread: 70,
      origin: { x: 0.5, y: 0.6 },
      colors: ['#FBBF24', '#F59E0B', '#10B981'],
      gravity: 0.9
    });
    
    // Animate counter
    const earnAmount = 15;
    let current = totalEarned;
    const target = totalEarned + earnAmount;
    const increment = earnAmount / 15;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
        
        // Show final CTA after collecting all 3
        if (collectedChats.length + 1 === respondingChatIds.length) {
          setTimeout(() => {
            setShowFinalCTA(true);
          }, 500);
        }
      }
      setTotalEarned(Math.floor(current));
    }, 40);
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

        {/* Frame 3 - Business Setup */}
        {step === 3 && <div className="space-y-6 animate-fade-in max-w-md mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Who's Salem helping today?
              </h2>
              <p className="text-muted-foreground">
                I'll tailor messages for your business type.
              </p>
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

              {/* Business Name Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Business name <span className="text-muted-foreground">(optional)</span>
                </label>
                <Input 
                  type="text" 
                  placeholder="Your brand or company name" 
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
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
              <p className="text-xs text-center text-muted-foreground">
                Takes less than 10 seconds.
              </p>
            </div>
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
                Let's wake up sleeping clients!
              </h2>
              <p className="text-muted-foreground">
                You have clients who haven't visited in a while. Send them a quick reminder.
              </p>
            </div>

            {/* Money Counter */}
            {totalEarned > 0 && (
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold animate-scale-in">
                +${totalEarned}
              </div>
            )}

            {/* Chat List */}
            <div className="max-w-md mx-auto space-y-4">
              {/* Send Reminders Button */}
              {!remindersSent && (
                <Button 
                  onClick={handleSendReminders}
                  disabled={isLoading}
                  className="w-full h-12 text-lg font-medium"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending reminders...
                    </>
                  ) : (
                    <>Send reminder to all</>
                  )}
                </Button>
              )}

              {/* Chat List Items */}
              <div className="space-y-2">
                {chatList.map((chat) => {
                  const hasResponded = respondedChats.includes(chat.id);
                  const isCollected = collectedChats.includes(chat.id);
                  
                  return (
                    <div
                      key={chat.id}
                      className={`bg-background border border-border rounded-lg p-4 transition-all ${
                        hasResponded && !isCollected 
                          ? 'ring-2 ring-primary cursor-pointer hover:shadow-lg animate-scale-in' 
                          : ''
                      } ${isCollected ? 'opacity-50' : ''}`}
                      onClick={() => hasResponded && !isCollected && handleCollectFromChat(chat.id)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{chat.avatar}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <p className="font-medium text-foreground truncate">{chat.name}</p>
                            <span className="text-xs text-muted-foreground whitespace-nowrap">{chat.timestamp}</span>
                          </div>
                          <p className="text-sm text-muted-foreground truncate">
                            {hasResponded && !isCollected 
                              ? "💰 I'm interested! Tell me more" 
                              : isCollected
                              ? "✅ Order placed!"
                              : chat.lastMessage
                            }
                          </p>
                        </div>
                        {hasResponded && !isCollected && (
                          <div className="relative bg-primary/10 rounded-full p-2 animate-glow-pulse">
                            <DollarSign className="w-5 h-5 text-primary" />
                            {respondedChats[0] === chat.id && (
                              <div className="absolute -right-3 top-1/2 -translate-y-1/2 animate-[slide-point_0.6s_ease-in-out_infinite] pointer-events-none">
                                <span className="text-4xl relative z-10">
                                  👆
                                </span>
                                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 animate-[click-ripple_0.6s_ease-out_infinite]">
                                  {/* Top */}
                                  <span className="absolute left-1/2 top-0 w-1 h-4 -ml-0.5 bg-primary rounded-full"></span>
                                  {/* Bottom */}
                                  <span className="absolute left-1/2 bottom-0 w-1 h-4 -ml-0.5 bg-primary rounded-full"></span>
                                  {/* Left */}
                                  <span className="absolute left-0 top-1/2 w-4 h-1 -mt-0.5 bg-primary rounded-full"></span>
                                  {/* Right */}
                                  <span className="absolute right-0 top-1/2 w-4 h-1 -mt-0.5 bg-primary rounded-full"></span>
                                  {/* Top-left diagonal */}
                                  <span className="absolute left-[18%] top-[18%] w-1 h-3.5 bg-primary rounded-full rotate-45 origin-center"></span>
                                  {/* Top-right diagonal */}
                                  <span className="absolute right-[18%] top-[18%] w-1 h-3.5 bg-primary rounded-full -rotate-45 origin-center"></span>
                                  {/* Bottom-left diagonal */}
                                  <span className="absolute left-[18%] bottom-[18%] w-1 h-3.5 bg-primary rounded-full -rotate-45 origin-center"></span>
                                  {/* Bottom-right diagonal */}
                                  <span className="absolute right-[18%] bottom-[18%] w-1 h-3.5 bg-primary rounded-full rotate-45 origin-center"></span>
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                        {isCollected && (
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {remindersSent && respondedChats.length > 0 && !showFinalCTA && (
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 animate-fade-in">
                  <p className="text-sm text-foreground text-center">
                    💡 <span className="font-semibold">Tap on chats with 💰 to collect revenue</span>
                  </p>
                </div>
              )}
            </div>

            {/* Final CTA */}
            {showFinalCTA && (
              <div className="space-y-4 animate-fade-in pt-4">
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 max-w-md mx-auto">
                  <p className="text-sm text-foreground text-center">
                    <span className="font-bold">That's exactly what I do for your real clients</span> — automate reminders that bring you money.
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
                      setRemindersSent(false);
                      setRespondedChats([]);
                      setCollectedChats([]);
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