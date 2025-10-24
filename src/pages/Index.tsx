import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  MessageCircle, Plug, FolderKanban, Rocket, Shield, Clock, 
  BarChart3, Lock, CheckCircle, TrendingUp, Users, Eye,
  Send, Calendar, Zap, Target, Phone, Mail
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  const navigate = useNavigate();
  const [contactCount, setContactCount] = useState(1000);
  const roiEstimate = Math.round(contactCount * 0.01 * 500); // 1% conversion * 500₸ avg order

  return (
    <div className="min-h-screen bg-background">
      
      {/* 1. HERO SECTION */}
      <section className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                SalemBot — Your Smart WhatsApp Sales Assistant
              </h1>
              <p className="text-xl text-muted-foreground">
                Connect your business WhatsApp and automatically re-engage every customer who ever messaged you.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="h-14 text-lg px-8"
                  onClick={() => navigate("/auth")}
                >
                  Get Started — Connect WhatsApp
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="h-14 text-lg px-8"
                  onClick={() => document.getElementById('onboarding')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  See 5-Step Onboarding
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                2-minute setup · No data stored · 100% compliant
              </p>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-accent/50 rounded-lg">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">New Clients (250)</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Active (450)</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
                  <span className="text-sm font-medium">Inactive (300)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg">
              Three simple steps to start engaging your customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors animate-fade-in">
              <CardContent className="p-8 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="bg-primary/10 rounded-full p-6">
                    <Plug className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">Connect your WhatsApp</h3>
                <p className="text-muted-foreground">
                  Link your existing business number — no new setup needed.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="bg-primary/10 rounded-full p-6">
                    <FolderKanban className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">Automatic Segmentation</h3>
                <p className="text-muted-foreground">
                  SalemBot scans your chat history and groups contacts by type: new, active, or inactive.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="bg-primary/10 rounded-full p-6">
                    <Rocket className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">Launch Smart Campaigns</h3>
                <p className="text-muted-foreground">
                  Choose your audience, personalize messages, and let the system send automatically.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-center text-muted-foreground mt-8 text-sm">
            Most users recover their subscription cost within just <span className="font-semibold text-primary">1–3 days</span>
          </p>
        </div>
      </section>

      {/* 3. VALUE & SOCIAL PROOF */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why SalemBot Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Businesses already reach tens of thousands of clients through SalemBot — driving real sales from past conversations.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <p className="text-muted-foreground">Contacts reached</p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">23%</div>
                <p className="text-muted-foreground">Avg repeat sales</p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">1-3</div>
                <p className="text-muted-foreground">Days to ROI</p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Safe & Compliant</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-success" />
              <span className="text-sm">Verified Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-success" />
              <span className="text-sm">Privacy Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-success" />
              <span className="text-sm">WhatsApp Connected</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURE DEEP DIVE */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              See it in Action
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-3 mt-1">
                  <FolderKanban className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Auto-segment chats</h3>
                  <p className="text-muted-foreground">Automatically categorize all your contacts based on activity</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-3 mt-1">
                  <Send className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Ready-to-use templates</h3>
                  <p className="text-muted-foreground">Personalized message templates that convert</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-3 mt-1">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Schedule & automate messages</h3>
                  <p className="text-muted-foreground">Set it and forget it — campaigns run on autopilot</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-3 mt-1">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">View performance analytics</h3>
                  <p className="text-muted-foreground">Track what works and optimize your campaigns</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-3 mt-1">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">100% safe and private</h3>
                  <p className="text-muted-foreground">Your data stays yours — nothing is stored externally</p>
                </div>
              </div>
            </div>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="bg-accent/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Active Clients</span>
                      <CheckCircle className="w-5 h-5 text-success" />
                    </div>
                    <p className="text-sm text-muted-foreground">450 contacts selected</p>
                  </div>
                  
                  <div className="bg-card rounded-lg border p-4">
                    <p className="text-sm mb-2 font-medium">Preview Message:</p>
                    <p className="text-sm text-muted-foreground">
                      Hi {"{{name}}"}, we have a special offer just for you! 
                      Use code {"{{promo_code}}"} for 20% off.
                    </p>
                  </div>

                  <Button className="w-full" size="lg">
                    <Rocket className="w-4 h-4 mr-2" />
                    Launch Campaign
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
            <Lock className="w-4 h-4 inline mr-1" />
            All actions run through your WhatsApp. No messages are stored.
          </p>
        </div>
      </section>

      {/* 5. ONBOARDING PREVIEW */}
      <section id="onboarding" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              5-Step Onboarding
            </h2>
            <p className="text-muted-foreground text-lg">
              From connection to your first campaign in minutes
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { icon: Plug, title: "Connect", desc: "Link your WhatsApp", active: true },
              { icon: FolderKanban, title: "Scan & Segment", desc: "SalemBot groups contacts automatically", active: true },
              { icon: Eye, title: "Preview Campaigns", desc: "Personalized templates ready to send", active: true },
              { icon: Calendar, title: "Schedule & Launch", desc: "Automated delivery system", active: false },
              { icon: BarChart3, title: "Track & Optimize", desc: "See who replied and what worked", active: false }
            ].map((step, idx) => (
              <Card 
                key={idx}
                className={`border-2 transition-all ${step.active ? 'border-primary bg-accent/20' : 'opacity-60'}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`rounded-full p-4 ${step.active ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">
                        Step {idx + 1}: {step.title}
                      </h3>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                    {step.active && <CheckCircle className="w-6 h-6 text-success" />}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate("/onboarding")}
            >
              Explore Full Onboarding →
            </Button>
          </div>
        </div>
      </section>

      {/* 6. PRICING & ROI */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pricing & ROI
            </h2>
            <p className="text-muted-foreground text-lg">
              Simple pricing with instant returns
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="border-2">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Starter</h3>
                  <div className="text-3xl font-bold text-primary mb-1">25,000₸</div>
                  <p className="text-sm text-muted-foreground">per month</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm">Up to 1,000 contacts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm">Basic automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm">Email support</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Start Free Trial</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Popular
              </div>
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Growth</h3>
                  <div className="text-3xl font-bold text-primary mb-1">50,000₸</div>
                  <p className="text-sm text-muted-foreground">per month</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm">Up to 5,000 contacts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm">Advanced automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm">Priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm">Analytics dashboard</span>
                  </li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Pro</h3>
                  <div className="text-3xl font-bold text-primary mb-1">100,000₸</div>
                  <p className="text-sm text-muted-foreground">per month</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm">Unlimited contacts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm">Full automation suite</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm">24/7 support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm">Advanced analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm">API access</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-2xl mx-auto border-2 border-primary/50 bg-accent/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">ROI Calculator</h3>
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    How many contacts do you have?
                  </label>
                  <Input 
                    type="number" 
                    value={contactCount}
                    onChange={(e) => setContactCount(Number(e.target.value))}
                    className="text-lg"
                  />
                </div>
                <div className="bg-primary/10 rounded-lg p-6 text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    With 1% re-engagement rate:
                  </p>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {roiEstimate.toLocaleString()}₸
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Potential monthly revenue increase
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Most users recover their subscription within <span className="font-semibold text-primary">1–3 days</span>
          </p>
        </div>
      </section>

      {/* 7. FAQ & PRIVACY */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Do you store my messages?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No, all data stays on your device. SalemBot only accesses your WhatsApp to send messages on your behalf — nothing is stored on our servers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Is this WhatsApp-compliant?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, 100%. SalemBot follows all WhatsApp guidelines and only sends messages to contacts who have previously messaged you. It's permission-based messaging.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Can my number get blocked?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  SalemBot sends messages responsibly with built-in rate limiting and delays to keep your number safe. Our system follows best practices to prevent any issues.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How long does setup take?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Just 2 minutes! Connect your WhatsApp, let SalemBot scan your contacts, and you're ready to launch your first campaign.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What kind of businesses use SalemBot?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Beauty salons, retail shops, online stores, service providers, agencies — any business that communicates with customers via WhatsApp.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-12">
              <Button variant="link" className="text-primary">
                See full privacy policy →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-muted/50 border-t py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle className="w-6 h-6 text-primary" />
                <span className="font-bold text-xl">SalemBot</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Built for businesses who grow through conversations.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+7 (777) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>hello@salembot.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 SalemBot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
