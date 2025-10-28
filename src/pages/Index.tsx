import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Plug, FolderKanban, Rocket, CheckCircle, ArrowRight, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import heroWhatsapp from "@/assets/hero-whatsapp.png";
import networkVisual from "@/assets/network-visual.png";
import problemVisual from "@/assets/problem-visual.png";
const Index = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  return <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
      
      {/* Organic blob shapes - Green theme */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] opacity-20 animate-blob">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="hsl(142, 76%, 36%)" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.3,84.9C-23.4,82.2,-38.8,73.8,-52.4,63.2C-66,52.6,-77.8,39.8,-83.7,24.8C-89.6,9.8,-89.6,-7.4,-84.4,-22.9C-79.2,-38.4,-68.8,-52.2,-55.4,-59.6C-42,-67,-25.6,-68,-10.4,-70.4C4.8,-72.8,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute top-20 right-0 w-[500px] h-[500px] opacity-25 animate-blob" style={{
      animationDelay: '2s'
    }}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="hsl(142, 76%, 36%)" d="M39.5,-66.3C51.4,-58.5,61.3,-48.3,68.4,-36.2C75.5,-24.1,79.8,-10.1,80.1,4.2C80.4,18.5,76.7,33.1,68.5,45.2C60.3,57.3,47.6,66.9,33.6,72.8C19.6,78.7,4.3,80.9,-10.7,78.8C-25.7,76.7,-40.4,70.3,-53.2,61.2C-66,52.1,-76.9,40.3,-82.4,26.4C-87.9,12.5,-88,-3.5,-82.7,-17.4C-77.4,-31.3,-66.7,-43.1,-53.8,-50.5C-40.9,-57.9,-26.8,-60.9,-13.4,-64.1C0,-67.3,27.6,-74.1,39.5,-66.3Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-20 w-[700px] h-[700px] opacity-15 animate-blob" style={{
      animationDelay: '4s'
    }}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="hsl(142, 76%, 36%)" d="M51.1,-83.8C64.8,-75.5,73.9,-58.5,80.2,-41.8C86.5,-25.1,90,-8.7,88.1,7.2C86.2,23.1,78.9,38.5,68.4,50.8C57.9,63.1,44.2,72.3,29.2,77.8C14.2,83.3,-2.1,85.1,-17.7,81.5C-33.3,77.9,-48.2,69,-60.8,56.8C-73.4,44.6,-83.7,29.1,-87.5,11.9C-91.3,-5.3,-88.6,-24.2,-80.2,-40.2C-71.8,-56.2,-57.7,-69.3,-41.6,-76.5C-25.5,-83.7,-7.4,-85,11.7,-82.5C30.8,-80,37.4,-92.1,51.1,-83.8Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute bottom-40 right-20 w-[450px] h-[450px] opacity-20 animate-blob" style={{
      animationDelay: '6s'
    }}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="hsl(142, 76%, 36%)" d="M41.3,-70.5C53.4,-63.2,63.3,-51.5,70.5,-38.2C77.7,-24.9,82.2,-10,83.3,5.5C84.4,21,82.1,37.1,74.4,50.4C66.7,63.7,53.6,74.2,38.8,79.8C24,85.4,7.5,86.1,-8.9,84.2C-25.3,82.3,-41.6,77.8,-55.3,69.1C-69,60.4,-80.1,47.5,-85.3,32.4C-90.5,17.3,-89.8,0,-84.9,-15.4C-80,-30.8,-70.9,-44.3,-59.1,-51.9C-47.3,-59.5,-33.8,-61.2,-21.1,-68.8C-8.4,-76.4,3.5,-89.9,15.3,-92.1C27.1,-94.3,29.2,-77.8,41.3,-70.5Z" transform="translate(100 100)" />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-3xl font-bold text-primary">SalemBot</div>
        <div className="flex gap-4 items-center">
          <LanguageSwitch />
          <Button variant="ghost" onClick={() => navigate("/auth")}>{t('nav.login')}</Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full" onClick={() => navigate("/auth")}>
            {t('nav.signup')}
          </Button>
        </div>
      </nav>

      {/* 1. HERO / ABOVE THE FOLD */}
      <section className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          <div className="pt-6">
            <Button size="lg" onClick={() => navigate("/auth")} className="h-16 text-lg bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-xl hover:shadow-2xl transition-all px-[48px]">{t('hero.cta')}</Button>
          </div>
          
          <div className="pt-12">
            <img src={problemVisual} alt="WhatsApp automation showing customer engagement and messaging" className="rounded-3xl shadow-2xl border-2 border-border mx-auto max-w-6xl w-full" />
          </div>
        </div>
      </section>

      {/* 2. PROBLEM STATEMENT - Clean & Direct */}
      <section className="py-32 bg-background relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  {t('problem.title')}
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {t('problem.subtitle')}
                </p>
                <div className="flex flex-col gap-4 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 text-sm">✕</span>
                    </div>
                    <p className="text-muted-foreground">{t('problem.point1')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 text-sm">✕</span>
                    </div>
                    <p className="text-muted-foreground">{t('problem.point2')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 text-sm">✕</span>
                    </div>
                    <p className="text-muted-foreground">{t('problem.point3')}</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Card className="border-2 p-8 bg-muted/50">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3 p-4 bg-background rounded-lg border-2 border-red-400/60 opacity-60">
                      <div className="flex items-center gap-3 flex-1">
                        <MessageCircle className="w-5 h-5 text-muted-foreground" />
                        <div className="flex-1">
                          <div className="h-3 bg-muted rounded w-3/4"></div>
                          <div className="h-2 bg-muted rounded w-1/2 mt-2"></div>
                        </div>
                      </div>
                      <span className="text-sm text-red-500/70 font-medium whitespace-nowrap">14 days ago</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 p-4 bg-background rounded-lg border-2 border-red-500/70 opacity-70">
                      <div className="flex items-center gap-3 flex-1">
                        <MessageCircle className="w-5 h-5 text-muted-foreground" />
                        <div className="flex-1">
                          <div className="h-3 bg-muted rounded w-2/3"></div>
                          <div className="h-2 bg-muted rounded w-1/3 mt-2"></div>
                        </div>
                      </div>
                      <span className="text-sm text-red-500/80 font-medium whitespace-nowrap">20 days ago</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 p-4 bg-background rounded-lg border-2 border-red-600/80 opacity-80">
                      <div className="flex items-center gap-3 flex-1">
                        <MessageCircle className="w-5 h-5 text-muted-foreground" />
                        <div className="flex-1">
                          <div className="h-3 bg-muted rounded w-4/5"></div>
                          <div className="h-2 bg-muted rounded w-2/5 mt-2"></div>
                        </div>
                      </div>
                      <span className="text-sm text-red-600/90 font-medium whitespace-nowrap">30+ days ago</span>
                    </div>
                    <div className="text-center py-4 text-muted-foreground text-lg font-medium">
                      {t('problem.mockup')}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION - Clean & Visual */}
      <section className="py-32 bg-muted relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <img src={networkVisual} alt="SalemBot automation network connecting customers" className="rounded-2xl shadow-xl w-full" />
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  {t('solution.title')}
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {t('solution.subtitle')}
                </p>
                <div className="flex flex-col gap-4 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <p className="font-medium">{t('solution.point1')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <p className="font-medium">{t('solution.point2')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <p className="font-medium">{t('solution.point3')}</p>
                  </div>
                </div>
                <div className="pt-4">
                  <Button size="lg" className="h-16 text-lg px-12 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-xl hover:shadow-2xl transition-all" onClick={() => navigate("/auth")}>
                    {t('solution.cta')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-32 bg-muted relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              {t('howitworks.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('howitworks.subtitle')}
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <Card className="border-2 hover:shadow-xl transition-all bg-background">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Plug className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{t('howitworks.step1.title')}</h3>
                <p className="text-muted-foreground">
                  {t('howitworks.step1.desc')}
                </p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-2 hover:shadow-xl transition-all bg-background">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                  <FolderKanban className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{t('howitworks.step2.title')}</h3>
                <p className="text-muted-foreground">
                  {t('howitworks.step2.desc')}
                </p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border-2 hover:shadow-xl transition-all bg-background">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{t('howitworks.step3.title')}</h3>
                <p className="text-muted-foreground">
                  {t('howitworks.step3.desc')}
                </p>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="border-2 hover:shadow-xl transition-all bg-background">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{t('howitworks.step4.title')}</h3>
                <p className="text-muted-foreground">
                  {t('howitworks.step4.desc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. KEY BENEFITS */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              {t('benefits.title')}
            </h2>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:shadow-xl transition-all bg-background">
              <CardContent className="p-10 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{t('benefits.benefit1.title')}</h3>
                <p className="text-lg text-muted-foreground">
                  {t('benefits.benefit1.desc')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all bg-background">
              <CardContent className="p-10 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{t('benefits.benefit2.title')}</h3>
                <p className="text-lg text-muted-foreground">
                  {t('benefits.benefit2.desc')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all bg-background">
              <CardContent className="p-10 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{t('benefits.benefit3.title')}</h3>
                <p className="text-lg text-muted-foreground">
                  {t('benefits.benefit3.desc')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all bg-background">
              <CardContent className="p-10 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{t('benefits.benefit4.title')}</h3>
                <p className="text-lg text-muted-foreground">
                  {t('benefits.benefit4.desc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. SOCIAL PROOF / TRUST */}
      <section className="py-32 bg-muted relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                {t('social.title')}
              </h2>
            </div>

            {/* Testimonial */}
            <Card className="border-2 bg-background">
              <CardContent className="p-12 space-y-6">
                <p className="text-2xl font-semibold leading-relaxed">
                  "{t('social.testimonial.quote')}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">AK</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg">{t('social.testimonial.author')}</p>
                    <p className="text-muted-foreground">{t('social.testimonial.role')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust badges */}
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-5xl font-bold">10K+</div>
                <p className="text-muted-foreground text-lg">Contacts reached daily</p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold">23%</div>
                <p className="text-muted-foreground text-lg">Average repeat rate</p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold">2 min</div>
                <p className="text-muted-foreground text-lg">Setup time</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                ✓ Fully compliant & secure · Built on WhatsApp Business API
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* 6. PRICING / PLAN */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              {t('pricing.title')}
            </h2>
          </div>

          <Card className="max-w-lg mx-auto border-2 hover:shadow-2xl transition-shadow bg-background">
            <CardContent className="p-12 text-center space-y-8">
              <div>
                <div className="text-6xl font-bold mb-2">50,000₸</div>
                <p className="text-muted-foreground text-lg">per month</p>
              </div>
              
              <ul className="space-y-4 text-left">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg">Unlimited contacts</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg">Templates</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg">Analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg">Priority support</span>
                </li>
              </ul>

              <Button size="lg" className="w-full h-16 text-lg bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-xl hover:shadow-2xl transition-all" onClick={() => navigate("/auth")}>
                Try 14 days free
              </Button>
              
              <p className="text-sm text-muted-foreground">
                No credit card required
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 7. FAQ / OBJECTION HANDLING */}
      <section className="py-32 bg-muted relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold">
              {t('faq.title')}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border-2 rounded-2xl px-8 bg-background">
                <AccordionTrigger className="text-left text-xl font-semibold py-6 hover:no-underline">
                  {t('faq.q1')}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground pb-6">
                  {t('faq.a1')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-2 rounded-2xl px-8 bg-background">
                <AccordionTrigger className="text-left text-xl font-semibold py-6 hover:no-underline">
                  {t('faq.q2')}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground pb-6">
                  {t('faq.a2')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-2 rounded-2xl px-8 bg-background">
                <AccordionTrigger className="text-left text-xl font-semibold py-6 hover:no-underline">
                  {t('faq.q3')}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground pb-6">
                  {t('faq.a3')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-2 rounded-2xl px-8 bg-background">
                <AccordionTrigger className="text-left text-xl font-semibold py-6 hover:no-underline">
                  {t('faq.q4')}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground pb-6">
                  {t('faq.a4')}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA / CLOSING */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('cta.subtitle')}
            </p>
            <Button size="lg" className="h-16 text-lg px-12 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-xl hover:shadow-2xl transition-all" onClick={() => navigate("/auth")}>
              {t('cta.button')}
            </Button>
            <p className="text-sm text-muted-foreground">
              No credit card needed · Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-16 pb-8 bg-muted relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <div className="text-3xl font-bold mb-4 text-primary">SalemBot</div>
                <p className="text-muted-foreground text-lg mb-6">
                  Built for businesses who grow through conversations.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Mail className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Phone className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4 text-lg">{t('footer.product')}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><a href="#" className="hover:text-primary transition-colors">{t('footer.features')}</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">{t('footer.pricing')}</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">{t('footer.faq')}</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 text-lg">{t('footer.company')}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><a href="#" className="hover:text-primary transition-colors">{t('footer.about')}</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">{t('footer.privacy')}</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">{t('footer.terms')}</a></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="border-t pt-6 text-center text-muted-foreground">
              <p>{t('footer.copyright')}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;