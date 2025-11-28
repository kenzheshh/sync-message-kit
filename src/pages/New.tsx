import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, CreditCard, RefreshCw, Shield, TrendingUp, Users, CheckCircle, Check, MessageCircle, Mail, Phone, Brain, ArrowRight, Tag } from "lucide-react";
import networkVisual from "@/assets/network-visual.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitch } from "@/components/LanguageSwitch";

const New = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  return <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
      {/* Organic blob shapes */}
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

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="text-4xl font-bold text-primary">SalemBot</div>
        </div>
        <div className="flex gap-4 items-center">
          <LanguageSwitch />
          <Button size="lg" onClick={() => navigate("/auth")} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-medium text-xl">{t('new.nav.login')}</Button>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            {t('new.hero.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('new.hero.subtitle')}
          </p>
          
          <div className="pt-6">
            <Button size="lg" onClick={() => navigate("/auth")} className="h-16 text-lg bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-xl hover:shadow-2xl transition-all px-[36px]">{t('new.hero.cta')}</Button>
          </div>
          
          <div className="pt-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl opacity-50 animate-pulse-slow"></div>
            
          </div>
        </div>
      </section>

      {/* 2. ПОЧЕМУ ЭТО ВАЖНО */}
      <section id="features" className="py-20 bg-muted relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {t('new.why.title')}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 hover:shadow-xl transition-all bg-background">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <CreditCard className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{t('new.why.card1.title')}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {t('new.why.card1.desc')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all bg-background">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <RefreshCw className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{t('new.why.card2.title')}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {t('new.why.card2.desc')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all bg-background">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{t('new.why.card3.title')}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {t('new.why.card3.desc')}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-xl text-muted-foreground italic">
                {t('new.why.tagline')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. КАК ЭТО РАБОТАЕТ */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                {t('new.steps.title')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-2 hover:shadow-xl transition-all bg-background relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                  1
                </div>
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{t('new.steps.step1.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('new.steps.step1.desc')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all bg-background relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                  2
                </div>
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{t('new.steps.step2.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('new.steps.step2.desc')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all bg-background relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                  3
                </div>
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{t('new.steps.step3.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('new.steps.step3.desc')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all bg-background relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                  4
                </div>
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{t('new.steps.step4.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('new.steps.step4.desc')}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground">
                {t('new.steps.tagline')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* СЕГМЕНТАЦИЯ КЛИЕНТСКОЙ БАЗЫ */}
      <section className="py-20 bg-background relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                {t('new.ai.title')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t('new.ai.subtitle')}
              </p>
            </div>

            {/* Визуализация потока данных */}
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Левая часть - Хаотичная база клиентов */}
                <div className="relative">
                  <Card className="border-2 bg-muted/50 backdrop-blur">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <MessageCircle className="w-5 h-5 text-primary" />
                        {t('new.ai.chats')}
                      </h3>
                      <div className="space-y-3">
                        {[
                          {
                            name: t('new.ai.chat1.name'),
                            message: t('new.ai.chat1.message'),
                            time: t('new.ai.chat1.time')
                          },
                          {
                            name: t('new.ai.chat2.name'),
                            message: t('new.ai.chat2.message'),
                            time: t('new.ai.chat2.time')
                          },
                          {
                            name: t('new.ai.chat3.name'),
                            message: t('new.ai.chat3.message'),
                            time: t('new.ai.chat3.time')
                          },
                          {
                            name: t('new.ai.chat4.name'),
                            message: t('new.ai.chat4.message'),
                            time: t('new.ai.chat4.time')
                          },
                          {
                            name: t('new.ai.chat5.name'),
                            message: t('new.ai.chat5.message'),
                            time: t('new.ai.chat5.time')
                          }
                        ].map((chat, i) => (
                          <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                            <div 
                              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold" 
                              style={{ backgroundColor: `hsl(${142 + i * 40}, 60%, 45%)` }}
                            >
                              {chat.name.charAt(0)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-baseline">
                                <p className="font-semibold text-sm truncate">{chat.name}</p>
                                <span className="text-xs text-muted-foreground ml-2">{chat.time}</span>
                              </div>
                              <p className="text-sm text-muted-foreground truncate">{chat.message}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Центр - ИИ модуль */}
                <div className="relative flex justify-center">
                  {/* Стрелка слева */}
                  <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 translate-x-2">
                    <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse"></div>
                    <Card className="border-4 border-primary bg-background relative z-10">
                      <CardContent className="p-8">
                        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl animate-pulse"></div>
                          <Brain className="w-12 h-12 text-primary relative z-10" />
                        </div>
                        <p className="text-center font-bold mt-4">{t('new.ai.segmentation')}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Стрелка справа */}
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 -translate-x-2">
                    <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
                  </div>
                </div>

                {/* Правая часть - Сегменты */}
                <div className="space-y-4">
                  <Card className="border-2 bg-gradient-to-br from-green-500/10 to-green-600/5 hover:shadow-lg transition-all">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Tag className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{t('new.ai.segment1.title')}</h4>
                        <p className="text-sm text-muted-foreground">{t('new.ai.segment1.desc')}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 bg-gradient-to-br from-orange-500/10 to-orange-600/5 hover:shadow-lg transition-all">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Tag className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{t('new.ai.segment2.title')}</h4>
                        <p className="text-sm text-muted-foreground">{t('new.ai.segment2.desc')}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 bg-gradient-to-br from-blue-500/10 to-blue-600/5 hover:shadow-lg transition-all">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Tag className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{t('new.ai.segment3.title')}</h4>
                        <p className="text-sm text-muted-foreground">{t('new.ai.segment3.desc')}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. СКРЫТЫЕ ДЕНЬГИ */}
      <section className="py-20 bg-muted relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 shadow-2xl bg-background overflow-hidden">
              <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 p-12 md:p-16 text-center space-y-6">
                <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  {t('new.money.title')}
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  {t('new.money.subtitle')}
                </p>
                <div className="pt-6 flex justify-center">
                  <Button size="lg" onClick={() => navigate("/auth")} className="h-14 md:h-16 text-base md:text-lg bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-xl hover:shadow-2xl transition-all px-6 md:px-12">
                    {t('new.money.cta')}
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. CASES */}
      <section id="cases" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                {t('new.cases.title')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('new.cases.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 hover:shadow-xl transition-all bg-background">
                <CardContent className="p-8 space-y-4">
                  <div className="text-5xl font-bold text-primary">{t('new.cases.case1.value')}</div>
                  <h3 className="text-xl font-bold">{t('new.cases.case1.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('new.cases.case1.desc')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all bg-background">
                <CardContent className="p-8 space-y-4">
                  <div className="text-5xl font-bold text-primary">{t('new.cases.case2.value')}</div>
                  <h3 className="text-xl font-bold">{t('new.cases.case2.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('new.cases.case2.desc')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all bg-background">
                <CardContent className="p-8 space-y-4">
                  <div className="text-5xl font-bold text-primary">{t('new.cases.case3.value')}</div>
                  <h3 className="text-xl font-bold">{t('new.cases.case3.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('new.cases.case3.desc')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRICING */}
      <section id="pricing" className="py-20 bg-muted relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                {t('new.pricing.title')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('new.pricing.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Start Tariff */}
              <Card className="border-2 hover:shadow-xl transition-all bg-background">
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{t('new.pricing.starter.name')}</h3>
                    <p className="text-muted-foreground">{t('new.pricing.starter.desc')}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="text-5xl font-bold">5 000 ₸</div>
                      <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                        Trial – 3 days
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{t('new.pricing.starter.period')}</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{t('new.pricing.starter.feature1')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{t('new.pricing.starter.feature2')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{t('new.pricing.starter.feature3')}</span>
                    </li>
                  </ul>
                  <Button onClick={() => navigate("/auth")} variant="outline" className="w-full h-12">
                    {t('new.pricing.starter.cta')}
                  </Button>
                </CardContent>
              </Card>

              {/* Business Tariff - Black Friday Sale */}
              <Card className="border-4 border-primary hover:shadow-2xl transition-all relative overflow-hidden group">
                <div 
                  className="absolute inset-0 opacity-90 gradient-wave-hover"
                  style={{
                    background: 'linear-gradient(135deg, #2781F5 0%, #31DDA9 50%, #56E727 100%)'
                  }}
                />
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                  Black Friday –50%
                </div>
                <CardContent className="p-8 space-y-6 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">{t('new.pricing.business.name')}</h3>
                    <p className="text-white/90 drop-shadow">{t('new.pricing.business.desc')}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-medium text-white/70 line-through">50 000 ₸</div>
                    <div className="text-5xl font-bold text-white drop-shadow-lg">25 000 ₸</div>
                    <p className="text-white/90 drop-shadow">{t('new.pricing.business.period')}</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0 drop-shadow" />
                      <span className="text-white drop-shadow">{t('new.pricing.business.feature1')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0 drop-shadow" />
                      <span className="text-white drop-shadow">{t('new.pricing.business.feature2')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0 drop-shadow" />
                      <span className="text-white drop-shadow">{t('new.pricing.business.feature3')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0 drop-shadow" />
                      <span className="text-white drop-shadow">{t('new.pricing.business.feature4')}</span>
                    </li>
                  </ul>
                  <Button onClick={() => navigate("/auth")} className="w-full h-12 bg-white text-gray-900 hover:bg-white/90 shadow-xl font-bold">
                    {t('new.pricing.business.cta')}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                {t('new.faq.title')}
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border-2 rounded-2xl px-6 bg-background">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  {t('new.faq.q1')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {t('new.faq.a1')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-2 rounded-2xl px-6 bg-background">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  {t('new.faq.q2')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {t('new.faq.a2')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-2 rounded-2xl px-6 bg-background">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  {t('new.faq.q3')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {t('new.faq.a3')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-2 rounded-2xl px-6 bg-background">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  {t('new.faq.q4')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {t('new.faq.a4')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-2 rounded-2xl px-6 bg-background">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  {t('new.faq.q5')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {t('new.faq.a5')}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer CTA with Animation */}
      <section className="py-20 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 animate-pulse-slow"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold animate-fade-in">
              {t('new.footercta.title')}
            </h3>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              {t('new.footercta.subtitle')}
            </p>
            <div className="pt-4 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <Button size="lg" onClick={() => navigate("/auth")} className="h-16 text-lg bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-xl hover:shadow-2xl transition-all px-12 hover:scale-105">
                {t('new.footercta.cta')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted border-t relative z-10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="text-3xl font-bold text-primary">SalemBot</div>
              <p className="text-muted-foreground">
                {t('new.footer.tagline')}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg">{t('new.footer.product')}</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                    {t('new.footer.features')}
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                    {t('new.footer.pricing')}
                  </a>
                </li>
                <li>
                  <a href="#cases" className="text-muted-foreground hover:text-primary transition-colors">
                    {t('new.footer.cases')}
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg">{t('new.footer.contacts')}</h4>
              <ul className="space-y-3">
                <li>
                  <a href="https://wa.me/+77064204638" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span>{t('new.footer.whatsapp')}</span>
                  </a>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>support@salembot.kz</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+77064204638" className="hover:text-primary transition-colors">+7 (706) 420-46-38</a>
                </li>
              </ul>
            </div>
          </div>

          
        </div>
      </footer>
    </div>;
};
export default New;