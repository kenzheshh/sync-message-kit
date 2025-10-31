import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, CreditCard, RefreshCw, Shield, TrendingUp, Users, CheckCircle, Check, MessageCircle, Mail, Phone, Brain, ArrowRight, Tag } from "lucide-react";
import networkVisual from "@/assets/network-visual.png";
const New = () => {
  const navigate = useNavigate();
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
          <Button size="lg" onClick={() => navigate("/auth")} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-medium text-xl">Войти</Button>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Возвращаем всех, кто когда-либо писал вам в WhatsApp
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Продавайте тем, кто уже знает вас – без риска блокировок и дорогой рекламы.
          </p>
          
          <div className="pt-6">
            <Button size="lg" onClick={() => navigate("/auth")} className="h-16 text-lg bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-xl hover:shadow-2xl transition-all px-[36px]">👉 Вернуть клиентов сейчас</Button>
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
                Новые клиенты стоят в 10 раз дороже, чем те, кто уже был у вас.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 hover:shadow-xl transition-all bg-background">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <CreditCard className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Дешевле, чем таргет</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Не нужно тратить бюджет на холодную аудиторию.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all bg-background">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <RefreshCw className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Повторные продажи</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Возвращаем клиентов, о которых вы уже забыли.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all bg-background">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Без блокировок</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Пишем только тем, кто уже был в переписке – WhatsApp не жалуется.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-xl text-muted-foreground italic">
                Ваши забытые чаты – это спящие деньги. Мы поможем их пробудить.
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
                4 шага, чтобы вернуть ваших клиентов
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
                  <h3 className="text-xl font-bold">Войдите в личный кабинет</h3>
                  <p className="text-muted-foreground">
                    Быстрая регистрация за 30 секунд
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
                  <h3 className="text-xl font-bold">Подключите рабочий WhatsApp</h3>
                  <p className="text-muted-foreground">
                    Безопасное подключение в один клик
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
                  <h3 className="text-xl font-bold">Мы анализируем вашу базу</h3>
                  <p className="text-muted-foreground">
                    Находим всех забытых клиентов
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
                  <h3 className="text-xl font-bold">Запустите рассылку в 1 клик</h3>
                  <p className="text-muted-foreground">
                    Автоматическая персонализация
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground">
                Больше никаких сложных интеграций – всё автоматизировано.
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
                ИИ сегментирует вашу клиентскую базу
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Мы сканируем чаты в WhatsApp, определяем типы клиентов и автоматически создаём теги, чтобы вы могли запускать точные рассылки по каждому сегменту.
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
                        Чаты WhatsApp
                      </h3>
                      <div className="space-y-3">
                        {[{
                        name: "Алия К.",
                        message: "Спасибо за помощь!",
                        time: "14:23"
                      }, {
                        name: "Марат Б.",
                        message: "Когда доставка?",
                        time: "13:45"
                      }, {
                        name: "Динара М.",
                        message: "Заказываю второй раз 👍",
                        time: "12:18"
                      }, {
                        name: "Асхат Т.",
                        message: "Отличное качество",
                        time: "11:07"
                      }, {
                        name: "Сауле Ж.",
                        message: "Можно уточнить цену?",
                        time: "Вчера"
                      }].map((chat, i) => <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold" style={{
                          backgroundColor: `hsl(${142 + i * 40}, 60%, 45%)`
                        }}>
                              {chat.name.charAt(0)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-baseline">
                                <p className="font-semibold text-sm truncate">{chat.name}</p>
                                <span className="text-xs text-muted-foreground ml-2">{chat.time}</span>
                              </div>
                              <p className="text-sm text-muted-foreground truncate">{chat.message}</p>
                            </div>
                          </div>)}
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
                        <p className="text-center font-bold mt-4">Сегментация</p>
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
                        <h4 className="font-bold text-lg">Постоянные</h4>
                        <p className="text-sm text-muted-foreground">Активные клиенты</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 bg-gradient-to-br from-orange-500/10 to-orange-600/5 hover:shadow-lg transition-all">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Tag className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Неактивные</h4>
                        <p className="text-sm text-muted-foreground">Спящие клиенты</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 bg-gradient-to-br from-blue-500/10 to-blue-600/5 hover:shadow-lg transition-all">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Tag className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Новые</h4>
                        <p className="text-sm text-muted-foreground">Недавние контакты</p>
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
                  У вас закопаны деньги в виде забытых чатов
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Каждое неотвеченное сообщение, старый клиент или пропавший контакт – это шанс на продажу, который можно вернуть. Мы просто делаем это за вас.
                </p>
                <div className="pt-6">
                  <Button size="lg" onClick={() => navigate("/auth")} className="h-16 text-lg bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-xl hover:shadow-2xl transition-all px-12">
                    Начать возвращать клиентов
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
                Реальные результаты наших клиентов
              </h2>
              <p className="text-xl text-muted-foreground">
                Бизнесы, которые уже вернули своих клиентов
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 hover:shadow-xl transition-all bg-background">
                <CardContent className="p-8 space-y-4">
                  <div className="text-5xl font-bold text-primary">850K₸</div>
                  <h3 className="text-xl font-bold">Сервисный центр</h3>
                  <p className="text-muted-foreground">
                    Дополнительный доход за месяц от клиентов, которые давно не обращались за ремонтом.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all bg-background">
                <CardContent className="p-8 space-y-4">
                  <div className="text-5xl font-bold text-primary">193 клиента</div>
                  <h3 className="text-xl font-bold">Фитнес-клуб</h3>
                  <p className="text-muted-foreground">
                    Вернулись за первый месяц после рассылки по неактивной базе.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all bg-background">
                <CardContent className="p-8 space-y-4">
                  <div className="text-5xl font-bold text-primary">1.4M₸</div>
                  <h3 className="text-xl font-bold">Цветочный магазин</h3>
                  <p className="text-muted-foreground">
                    Продажи букетов клиентам, которые не заказывали более полугода — без затрат на рекламу.
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
                Простые и честные цены
              </h2>
              <p className="text-xl text-muted-foreground">
                Платите только за результат. Без скрытых комиссий.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 hover:shadow-xl transition-all bg-background">
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Старт</h3>
                    <p className="text-muted-foreground">Попробуйте бесплатно</p>
                  </div>
                  <div>
                    <div className="text-5xl font-bold">₸0</div>
                    <p className="text-muted-foreground">тестовые 10 сообщений</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>До 10 сообщений бесплатно</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Автоматический анализ базы</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Базовая аналитика</span>
                    </li>
                  </ul>
                  <Button onClick={() => navigate("/auth")} variant="outline" className="w-full h-12">
                    Начать бесплатно
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-4 border-primary hover:shadow-2xl transition-all bg-background relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                  Популярный
                </div>
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Бизнес</h3>
                    <p className="text-muted-foreground">Для активных продаж</p>
                  </div>
                  <div>
                    <div className="text-5xl font-bold">50,000₸</div>
                    <p className="text-muted-foreground">Безлимитные сообщения</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Безлимитные сообщения</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Умная персонализация</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Расширенная аналитика</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Приоритетная поддержка</span>
                    </li>
                  </ul>
                  <Button onClick={() => navigate("/auth")} className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90">
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all bg-background">
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Про</h3>
                    <p className="text-muted-foreground">Максимальный масштаб</p>
                  </div>
                  <div>
                    <div className="text-5xl font-bold">100,000₸</div>
                    <p className="text-muted-foreground">безлимитные сообщения</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Безлимитные сообщения</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>AI-помощник для текстов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Мультиакаунт (до 5 номеров)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Выделенный менеджер</span>
                    </li>
                  </ul>
                  <Button onClick={() => navigate("/auth")} variant="outline" className="w-full h-12">
                    Выбрать план
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
                Частые вопросы
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border-2 rounded-2xl px-6 bg-background">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Это легально? WhatsApp не заблокирует?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  Да, это полностью легально. Мы отправляем сообщения только тем контактам, с которыми у вас уже был диалог в WhatsApp. Это не спам – это возвращение к существующим клиентам. Риск блокировки минимален.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-2 rounded-2xl px-6 bg-background">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Как быстро я увижу результаты?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  Первые ответы приходят в течение нескольких часов после запуска рассылки. Обычно наши клиенты видят первые продажи в первые 24-48 часов.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-2 rounded-2xl px-6 bg-background">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Нужно ли мне писать текст самому?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  Нет, наш AI-помощник создаст персонализированные сообщения автоматически. Вы можете редактировать их или использовать как есть.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-2 rounded-2xl px-6 bg-background">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Сколько клиентов я смогу вернуть?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  Это зависит от размера вашей базы контактов в WhatsApp. В среднем наши клиенты возвращают 15-25% забытых контактов обратно в активные продажи.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-2 rounded-2xl px-6 bg-background">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Можно ли попробовать бесплатно?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  Да! Мы даём 10 бесплатных сообщений, чтобы вы могли протестировать сервис без рисков и увидеть первые результаты.
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
              Готовы вернуть своих клиентов?
            </h3>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              Присоединяйтесь к сотням бизнесов, которые уже увеличили продажи с SalemBot
            </p>
            <div className="pt-4 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <Button size="lg" onClick={() => navigate("/auth")} className="h-16 text-lg bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-xl hover:shadow-2xl transition-all px-12 hover:scale-105">
                Начать бесплатно
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
                Возвращаем клиентов через WhatsApp без блокировок и рисков
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg">Продукт</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                    Возможности
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                    Цены
                  </a>
                </li>
                <li>
                  <a href="#cases" className="text-muted-foreground hover:text-primary transition-colors">
                    Кейсы
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg">Контакты</h4>
              <ul className="space-y-3">
                <li>
                  <a href="https://wa.me/+77064204638" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp поддержка</span>
                  </a>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>support@salembot.kz</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+7 (706) 420-46-38</span>
                </li>
              </ul>
            </div>
          </div>

          
        </div>
      </footer>
    </div>;
};
export default New;