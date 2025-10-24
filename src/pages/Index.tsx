import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  MessageCircle, Plug, FolderKanban, Rocket, Shield, Clock, 
  BarChart3, Lock, CheckCircle, TrendingUp, Users, Eye,
  Send, Calendar, Zap, Target, Phone, Mail, Sparkles, ArrowRight
} from "lucide-react";
import { useState } from "react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import heroDashboard from "@/assets/hero-dashboard.jpg";
import networkVisual from "@/assets/network-visual.jpg";
import gradientBg from "@/assets/gradient-bg.jpg";

const Index = () => {
  const navigate = useNavigate();
  const [contactCount, setContactCount] = useState(1000);
  const roiEstimate = Math.round(contactCount * 0.01 * 500);

  // Chart data
  const salesData = [
    { month: 'Jan', sales: 45 },
    { month: 'Feb', sales: 52 },
    { month: 'Mar', sales: 61 },
    { month: 'Apr', sales: 80 },
    { month: 'May', sales: 95 },
    { month: 'Jun', sales: 115 }
  ];

  const segmentData = [
    { name: 'Active', value: 450, color: 'hsl(168, 76%, 42%)' },
    { name: 'New', value: 250, color: 'hsl(145, 77%, 49%)' },
    { name: 'Inactive', value: 300, color: 'hsl(215, 16%, 47%)' }
  ];

  const engagementData = [
    { day: 'Mon', messages: 120 },
    { day: 'Tue', messages: 150 },
    { day: 'Wed', messages: 180 },
    { day: 'Thu', messages: 160 },
    { day: 'Fri', messages: 200 },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl animate-pulse-scale"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl animate-pulse-scale" style={{ animationDelay: '1s' }}></div>

      {/* 1. HERO SECTION */}
      <section className="container mx-auto px-4 py-20 lg:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">AI-Powered Automation</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
                SalemBot
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Your Smart WhatsApp Sales Assistant
              </h2>
              <p className="text-xl text-muted-foreground">
                Connect your business WhatsApp and automatically re-engage every customer who ever messaged you.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="h-14 text-lg px-8 shadow-primary hover:shadow-glow transition-all duration-300 group"
                  onClick={() => navigate("/auth")}
                >
                  Get Started — Connect WhatsApp
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="h-14 text-lg px-8 border-2"
                  onClick={() => document.getElementById('onboarding')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  See 5-Step Onboarding
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  2-minute setup
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-success" />
                  No data stored
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-success" />
                  100% compliant
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-3xl"></div>
            <img 
              src={heroDashboard} 
              alt="WhatsApp Campaign Dashboard" 
              className="relative rounded-3xl shadow-glow border-2 border-primary/20 hover:scale-105 transition-transform duration-500"
            />
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

      {/* 3. VALUE & SOCIAL PROOF WITH CHARTS */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why SalemBot Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Businesses already reach tens of thousands of clients through SalemBot — driving real sales from past conversations.
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5 hover:shadow-primary transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3 animate-float" />
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">10K+</div>
                <p className="text-muted-foreground font-medium">Contacts reached</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-success/20 bg-gradient-to-br from-card to-success/5 hover:shadow-glow transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <BarChart3 className="w-8 h-8 text-success mx-auto mb-3 animate-float" style={{ animationDelay: '0.2s' }} />
                <div className="text-5xl font-bold text-success mb-2">23%</div>
                <p className="text-muted-foreground font-medium">Avg repeat sales</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-accent/20 bg-gradient-to-br from-card to-accent/5 hover:shadow-primary transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-accent mx-auto mb-3 animate-float" style={{ animationDelay: '0.4s' }} />
                <div className="text-5xl font-bold text-accent mb-2">1-3</div>
                <p className="text-muted-foreground font-medium">Days to ROI</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-secondary/20 bg-gradient-to-br from-card to-secondary/5 hover:shadow-primary transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Shield className="w-8 h-8 text-secondary mx-auto mb-3 animate-float" style={{ animationDelay: '0.6s' }} />
                <div className="text-5xl font-bold text-secondary mb-2">100%</div>
                <p className="text-muted-foreground font-medium">Safe & Compliant</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {/* Sales Growth Chart */}
            <Card className="border-2 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Sales Growth Over Time
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="sales" 
                      stroke="hsl(168, 76%, 42%)" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(168, 76%, 42%)', r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Contact Segments Pie Chart */}
            <Card className="border-2 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Contact Segmentation
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={segmentData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {segmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-2 bg-card px-6 py-3 rounded-full border-2 border-success/20 shadow-sm">
              <Shield className="w-5 h-5 text-success" />
              <span className="font-medium">Verified Secure</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-6 py-3 rounded-full border-2 border-success/20 shadow-sm">
              <Lock className="w-5 h-5 text-success" />
              <span className="font-medium">Privacy Compliant</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-6 py-3 rounded-full border-2 border-success/20 shadow-sm">
              <MessageCircle className="w-5 h-5 text-success" />
              <span className="font-medium">WhatsApp Connected</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURE DEEP DIVE */}
      <section className="py-20 relative" style={{ backgroundImage: `url(${gradientBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-background/90"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              See it in Action
            </h2>
            <p className="text-muted-foreground text-lg">
              Powerful features that drive real results
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="space-y-6 animate-slide-up">
              <div className="flex items-start gap-4 group">
                <div className="bg-gradient-primary rounded-xl p-4 mt-1 group-hover:shadow-primary transition-all">
                  <FolderKanban className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Auto-segment chats</h3>
                  <p className="text-muted-foreground">Automatically categorize all your contacts based on activity</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-gradient-secondary rounded-xl p-4 mt-1 group-hover:shadow-glow transition-all">
                  <Send className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Ready-to-use templates</h3>
                  <p className="text-muted-foreground">Personalized message templates that convert</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-gradient-primary rounded-xl p-4 mt-1 group-hover:shadow-primary transition-all">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Schedule & automate messages</h3>
                  <p className="text-muted-foreground">Set it and forget it — campaigns run on autopilot</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-gradient-secondary rounded-xl p-4 mt-1 group-hover:shadow-glow transition-all">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">View performance analytics</h3>
                  <p className="text-muted-foreground">Track what works and optimize your campaigns</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-gradient-primary rounded-xl p-4 mt-1 group-hover:shadow-primary transition-all">
                  <Lock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">100% safe and private</h3>
                  <p className="text-muted-foreground">Your data stays yours — nothing is stored externally</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Engagement Chart */}
              <Card className="border-2 shadow-glow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Weekly Engagement</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={engagementData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }} 
                      />
                      <Bar dataKey="messages" fill="hsl(168, 76%, 42%)" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Campaign Preview Card */}
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="bg-success/10 rounded-lg p-4 border border-success/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Active Clients</span>
                        <CheckCircle className="w-5 h-5 text-success animate-pulse" />
                      </div>
                      <p className="text-sm text-muted-foreground">450 contacts selected</p>
                    </div>
                    
                    <div className="bg-card rounded-lg border-2 p-4">
                      <p className="text-xs font-semibold mb-2 text-muted-foreground">PREVIEW MESSAGE:</p>
                      <p className="text-sm">
                        Hi {"{{name}}"}, we have a special offer just for you! 
                        Use code <span className="font-bold text-primary">{"{{promo_code}}"}</span> for 20% off.
                      </p>
                    </div>

                    <Button className="w-full shadow-primary hover:shadow-glow transition-all group" size="lg">
                      <Rocket className="w-5 h-5 mr-2 group-hover:translate-y-[-2px] transition-transform" />
                      Launch Campaign
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
            <Lock className="w-4 h-4 inline mr-1" />
            All actions run through your WhatsApp. No messages are stored.
          </p>
        </div>
      </section>

      {/* 5. ONBOARDING PREVIEW */}
      <section id="onboarding" className="py-20 relative">
        <div className="absolute inset-0 opacity-10">
          <img src={networkVisual} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              5-Step Onboarding
            </h2>
            <p className="text-muted-foreground text-lg">
              From connection to your first campaign in minutes
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { icon: Plug, title: "Connect", desc: "Link your WhatsApp", active: true, gradient: "bg-gradient-primary" },
              { icon: FolderKanban, title: "Scan & Segment", desc: "SalemBot groups contacts automatically", active: true, gradient: "bg-gradient-secondary" },
              { icon: Eye, title: "Preview Campaigns", desc: "Personalized templates ready to send", active: true, gradient: "bg-gradient-primary" },
              { icon: Calendar, title: "Schedule & Launch", desc: "Automated delivery system", active: false, gradient: "bg-muted" },
              { icon: BarChart3, title: "Track & Optimize", desc: "See who replied and what worked", active: false, gradient: "bg-muted" }
            ].map((step, idx) => (
              <Card 
                key={idx}
                className={`border-2 transition-all duration-300 ${
                  step.active 
                    ? 'border-primary shadow-primary hover:scale-[1.02] bg-gradient-to-r from-card to-primary/5' 
                    : 'opacity-60 hover:opacity-80'
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-5">
                    <div className={`rounded-2xl p-5 ${step.active ? step.gradient : 'bg-muted'} shadow-lg`}>
                      <step.icon className={`w-7 h-7 ${step.active ? 'text-white' : 'text-muted-foreground'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-1">
                        Step {idx + 1}: {step.title}
                      </h3>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                    {step.active && (
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-7 h-7 text-success animate-pulse" />
                        <span className="text-sm font-semibold text-success">Active</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-colors group"
              onClick={() => navigate("/onboarding")}
            >
              Explore Full Onboarding 
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* 6. PRICING & ROI */}
      <section className="py-20 relative bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Pricing & ROI
            </h2>
            <p className="text-muted-foreground text-lg">
              Simple pricing with instant returns
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="border-2 border-border hover:border-primary/50 transition-all hover:scale-105 hover:shadow-lg">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Starter</h3>
                  <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1">25,000₸</div>
                  <p className="text-sm text-muted-foreground">per month</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="bg-success/10 rounded-full p-1">
                      <CheckCircle className="w-5 h-5 text-success" />
                    </div>
                    <span className="text-sm">Up to 1,000 contacts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-success/10 rounded-full p-1">
                      <CheckCircle className="w-5 h-5 text-success" />
                    </div>
                    <span className="text-sm">Basic automation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-success/10 rounded-full p-1">
                      <CheckCircle className="w-5 h-5 text-success" />
                    </div>
                    <span className="text-sm">Email support</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" size="lg">Start Free Trial</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary relative shadow-primary scale-105 bg-gradient-to-br from-card to-primary/5">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                ⭐ Popular
              </div>
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Growth</h3>
                  <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1">50,000₸</div>
                  <p className="text-sm text-muted-foreground">per month</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="bg-success/10 rounded-full p-1">
                      <CheckCircle className="w-5 h-5 text-success" />
                    </div>
                    <span className="text-sm">Up to 5,000 contacts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-success/10 rounded-full p-1">
                      <CheckCircle className="w-5 h-5 text-success" />
                    </div>
                    <span className="text-sm">Advanced automation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-success/10 rounded-full p-1">
                      <CheckCircle className="w-5 h-5 text-success" />
                    </div>
                    <span className="text-sm">Priority support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-success/10 rounded-full p-1">
                      <CheckCircle className="w-5 h-5 text-success" />
                    </div>
                    <span className="text-sm">Analytics dashboard</span>
                  </li>
                </ul>
                <Button className="w-full shadow-glow" size="lg">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-accent/50 transition-all hover:scale-105 hover:shadow-lg">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Pro</h3>
                  <div className="text-4xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-1">100,000₸</div>
                  <p className="text-sm text-muted-foreground">per month</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="bg-success/10 rounded-full p-1">
                      <CheckCircle className="w-5 h-5 text-success" />
                    </div>
                    <span className="text-sm">Unlimited contacts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-success/10 rounded-full p-1">
                      <CheckCircle className="w-5 h-5 text-success" />
                    </div>
                    <span className="text-sm">Full automation suite</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-success/10 rounded-full p-1">
                      <CheckCircle className="w-5 h-5 text-success" />
                    </div>
                    <span className="text-sm">24/7 support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-success/10 rounded-full p-1">
                      <CheckCircle className="w-5 h-5 text-success" />
                    </div>
                    <span className="text-sm">Advanced analytics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-success/10 rounded-full p-1">
                      <CheckCircle className="w-5 h-5 text-success" />
                    </div>
                    <span className="text-sm">API access</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" size="lg">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-3xl mx-auto border-2 border-primary shadow-primary bg-gradient-to-br from-card to-primary/10">
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
