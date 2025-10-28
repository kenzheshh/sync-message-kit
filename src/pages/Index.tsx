import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  MessageCircle, Plug, FolderKanban, Rocket, 
  CheckCircle, ArrowRight, Mail, Phone
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      
      {/* Organic blob shapes - Jive inspired */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] opacity-30 animate-blob">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="hsl(45, 95%, 65%)" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.3,84.9C-23.4,82.2,-38.8,73.8,-52.4,63.2C-66,52.6,-77.8,39.8,-83.7,24.8C-89.6,9.8,-89.6,-7.4,-84.4,-22.9C-79.2,-38.4,-68.8,-52.2,-55.4,-59.6C-42,-67,-25.6,-68,-10.4,-70.4C4.8,-72.8,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute top-20 right-0 w-[500px] h-[500px] opacity-40 animate-blob" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="hsl(15, 90%, 55%)" d="M39.5,-66.3C51.4,-58.5,61.3,-48.3,68.4,-36.2C75.5,-24.1,79.8,-10.1,80.1,4.2C80.4,18.5,76.7,33.1,68.5,45.2C60.3,57.3,47.6,66.9,33.6,72.8C19.6,78.7,4.3,80.9,-10.7,78.8C-25.7,76.7,-40.4,70.3,-53.2,61.2C-66,52.1,-76.9,40.3,-82.4,26.4C-87.9,12.5,-88,-3.5,-82.7,-17.4C-77.4,-31.3,-66.7,-43.1,-53.8,-50.5C-40.9,-57.9,-26.8,-60.9,-13.4,-64.1C0,-67.3,27.6,-74.1,39.5,-66.3Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-20 w-[700px] h-[700px] opacity-25 animate-blob" style={{ animationDelay: '4s' }}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="hsl(168, 76%, 50%)" d="M51.1,-83.8C64.8,-75.5,73.9,-58.5,80.2,-41.8C86.5,-25.1,90,-8.7,88.1,7.2C86.2,23.1,78.9,38.5,68.4,50.8C57.9,63.1,44.2,72.3,29.2,77.8C14.2,83.3,-2.1,85.1,-17.7,81.5C-33.3,77.9,-48.2,69,-60.8,56.8C-73.4,44.6,-83.7,29.1,-87.5,11.9C-91.3,-5.3,-88.6,-24.2,-80.2,-40.2C-71.8,-56.2,-57.7,-69.3,-41.6,-76.5C-25.5,-83.7,-7.4,-85,11.7,-82.5C30.8,-80,37.4,-92.1,51.1,-83.8Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute bottom-40 right-20 w-[450px] h-[450px] opacity-35 animate-blob" style={{ animationDelay: '6s' }}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="hsl(270, 70%, 65%)" d="M41.3,-70.5C53.4,-63.2,63.3,-51.5,70.5,-38.2C77.7,-24.9,82.2,-10,83.3,5.5C84.4,21,82.1,37.1,74.4,50.4C66.7,63.7,53.6,74.2,38.8,79.8C24,85.4,7.5,86.1,-8.9,84.2C-25.3,82.3,-41.6,77.8,-55.3,69.1C-69,60.4,-80.1,47.5,-85.3,32.4C-90.5,17.3,-89.8,0,-84.9,-15.4C-80,-30.8,-70.9,-44.3,-59.1,-51.9C-47.3,-59.5,-33.8,-61.2,-21.1,-68.8C-8.4,-76.4,3.5,-89.9,15.3,-92.1C27.1,-94.3,29.2,-77.8,41.3,-70.5Z" transform="translate(100 100)" />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-3xl font-bold">SalemBot</div>
        <div className="flex gap-4">
          <Button variant="ghost" onClick={() => navigate("/auth")}>Login</Button>
          <Button className="bg-foreground text-background hover:bg-foreground/90" onClick={() => navigate("/auth")}>
            Sign up
          </Button>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Don't make connecting awkward
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            No more fumbling for contacts or lost conversations. SalemBot automatically re-engages every customer who ever messaged your business WhatsApp.
          </p>
          
          <div className="pt-6">
            <Button 
              size="lg"
              className="h-16 text-lg px-10 bg-foreground text-background hover:bg-foreground/90 rounded-full"
              onClick={() => navigate("/auth")}
            >
              Sign up free
            </Button>
          </div>
          
          <div className="pt-12">
            <img 
              src="/placeholder.svg" 
              alt="SalemBot Dashboard" 
              className="rounded-3xl shadow-2xl border-2 border-border mx-auto max-w-4xl w-full"
            />
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Here's how it works
            </h2>
            <p className="text-xl text-muted-foreground">
              More engaging, less awkward.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-32">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-square bg-muted rounded-3xl flex items-center justify-center">
                  <Plug className="w-32 h-32 text-primary" />
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <h3 className="text-4xl font-bold">Connect your WhatsApp</h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  When it's time to reconnect with customers, simply link your business WhatsApp number to SalemBot with one click.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-4">
                <h3 className="text-4xl font-bold">Auto-segment contacts</h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  SalemBot instantly scans your chat history and groups everyone into categories: new, active, or past customers.
                </p>
              </div>
              <div>
                <div className="aspect-square bg-muted rounded-3xl flex items-center justify-center">
                  <FolderKanban className="w-32 h-32 text-primary" />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-square bg-muted rounded-3xl flex items-center justify-center">
                  <Rocket className="w-32 h-32 text-primary" />
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <h3 className="text-4xl font-bold">Launch campaigns</h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  At the end of each week, you can quickly review your contacts and send personalized messages to re-engage them.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-20">
            <Button 
              size="lg"
              className="h-14 text-lg px-10 bg-foreground text-background hover:bg-foreground/90 rounded-full"
              onClick={() => navigate("/auth")}
            >
              Start connecting
            </Button>
          </div>
        </div>
      </section>

      {/* 3. STATS */}
      <section className="py-32 bg-muted relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="p-12 text-center">
                <div className="text-5xl font-bold mb-4">10K+</div>
                <p className="text-muted-foreground text-lg">Contacts reached daily</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="p-12 text-center">
                <div className="text-5xl font-bold mb-4">23%</div>
                <p className="text-muted-foreground text-lg">Average repeat rate</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="p-12 text-center">
                <div className="text-5xl font-bold mb-4">2 min</div>
                <p className="text-muted-foreground text-lg">Setup time</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. PRICING */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Simple pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              One plan. Everything included.
            </p>
          </div>

          <Card className="max-w-lg mx-auto border-2 hover:shadow-2xl transition-shadow">
            <CardContent className="p-12 text-center space-y-8">
              <div>
                <div className="text-6xl font-bold mb-2">50,000₸</div>
                <p className="text-muted-foreground">per month</p>
              </div>
              
              <ul className="space-y-4 text-left">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                  <span className="text-lg">Unlimited contacts</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                  <span className="text-lg">Auto-segmentation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                  <span className="text-lg">Campaign templates</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                  <span className="text-lg">Analytics dashboard</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                  <span className="text-lg">Priority support</span>
                </li>
              </ul>

              <Button 
                size="lg"
                className="w-full h-14 text-lg bg-foreground text-background hover:bg-foreground/90 rounded-full"
                onClick={() => navigate("/auth")}
              >
                Get started
              </Button>
              
              <p className="text-sm text-muted-foreground">
                14-day free trial · No credit card required
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="py-32 bg-muted relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold">
              Questions?
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border-2 rounded-2xl px-8 bg-background">
                <AccordionTrigger className="text-left text-xl font-semibold py-6 hover:no-underline">
                  Do you store my messages?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground pb-6">
                  No, all data stays on your device. SalemBot only accesses your WhatsApp to send messages on your behalf — nothing is stored on our servers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-2 rounded-2xl px-8 bg-background">
                <AccordionTrigger className="text-left text-xl font-semibold py-6 hover:no-underline">
                  Is this WhatsApp-compliant?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground pb-6">
                  Yes, 100%. SalemBot follows all WhatsApp guidelines and only sends messages to contacts who have previously messaged you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-2 rounded-2xl px-8 bg-background">
                <AccordionTrigger className="text-left text-xl font-semibold py-6 hover:no-underline">
                  Can my number get blocked?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground pb-6">
                  SalemBot sends messages responsibly with built-in rate limiting and delays to keep your number safe.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-2 rounded-2xl px-8 bg-background">
                <AccordionTrigger className="text-left text-xl font-semibold py-6 hover:no-underline">
                  How long does setup take?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground pb-6">
                  Just 2 minutes! Connect your WhatsApp, let SalemBot scan your contacts, and you're ready to launch your first campaign.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <div className="text-3xl font-bold mb-4">SalemBot</div>
                <p className="text-muted-foreground text-lg mb-6">
                  Built for businesses who grow through conversations.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Mail className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Phone className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <MessageCircle className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4 text-lg">Product</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                    <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                    <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 text-lg">Company</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                    <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                    <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="border-t pt-8 text-center text-muted-foreground">
              <p>&copy; 2025 SalemBot. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
