import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CreditCard, RefreshCw, Shield, TrendingUp, Users, CheckCircle } from "lucide-react";
import networkVisual from "@/assets/network-visual.png";

const New = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
      {/* Organic blob shapes */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] opacity-20 animate-blob">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="hsl(142, 76%, 36%)" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.3,84.9C-23.4,82.2,-38.8,73.8,-52.4,63.2C-66,52.6,-77.8,39.8,-83.7,24.8C-89.6,9.8,-89.6,-7.4,-84.4,-22.9C-79.2,-38.4,-68.8,-52.2,-55.4,-59.6C-42,-67,-25.6,-68,-10.4,-70.4C4.8,-72.8,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute top-20 right-0 w-[500px] h-[500px] opacity-25 animate-blob" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="hsl(142, 76%, 36%)" d="M39.5,-66.3C51.4,-58.5,61.3,-48.3,68.4,-36.2C75.5,-24.1,79.8,-10.1,80.1,4.2C80.4,18.5,76.7,33.1,68.5,45.2C60.3,57.3,47.6,66.9,33.6,72.8C19.6,78.7,4.3,80.9,-10.7,78.8C-25.7,76.7,-40.4,70.3,-53.2,61.2C-66,52.1,-76.9,40.3,-82.4,26.4C-87.9,12.5,-88,-3.5,-82.7,-17.4C-77.4,-31.3,-66.7,-43.1,-53.8,-50.5C-40.9,-57.9,-26.8,-60.9,-13.4,-64.1C0,-67.3,27.6,-74.1,39.5,-66.3Z" transform="translate(100 100)" />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="text-4xl font-bold text-primary">SalemBot</div>
        </div>
        <div className="flex gap-4 items-center">
          <Button variant="ghost" onClick={() => navigate("/auth")}>Войти</Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full" onClick={() => navigate("/auth")}>
            Регистрация
          </Button>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Возвращаем всех, кто когда-либо писал вам в WhatsApp
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Продавайте тем, кто уже знает вас — без риска блокировок и дорогой рекламы.
          </p>
          
          <div className="pt-6">
            <Button 
              size="lg" 
              onClick={() => navigate("/auth")} 
              className="h-16 text-lg bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-xl hover:shadow-2xl transition-all px-12"
            >
              🟩 Вернуть клиентов сейчас
            </Button>
          </div>
          
          <div className="pt-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl opacity-50 animate-pulse-slow"></div>
            <img 
              src={networkVisual} 
              alt="Визуализация возврата клиентов через WhatsApp" 
              className="rounded-3xl shadow-2xl border-2 border-border mx-auto max-w-4xl w-full relative z-10" 
            />
          </div>
        </div>
      </section>

      {/* 2. ПОЧЕМУ ЭТО ВАЖНО */}
      <section className="py-32 bg-muted relative z-10">
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
                    Пишем только тем, кто уже был в переписке — WhatsApp не жалуется.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-xl text-muted-foreground italic">
                Ваши забытые чаты — это спящие деньги. Мы поможем их пробудить.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. КАК ЭТО РАБОТАЕТ */}
      <section className="py-32 relative z-10">
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
                Больше никаких сложных интеграций — всё автоматизировано.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. СКРЫТЫЕ ДЕНЬГИ */}
      <section className="py-32 bg-muted relative z-10">
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
                  Каждое неотвеченное сообщение, старый клиент или пропавший контакт — это шанс на продажу, который можно вернуть. Мы просто делаем это за вас.
                </p>
                <div className="pt-6">
                  <Button 
                    size="lg" 
                    onClick={() => navigate("/auth")} 
                    className="h-16 text-lg bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-xl hover:shadow-2xl transition-all px-12"
                  >
                    Начать возвращать клиентов
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold">
              Готовы вернуть своих клиентов?
            </h3>
            <p className="text-xl text-muted-foreground">
              Присоединяйтесь к сотням бизнесов, которые уже увеличили продажи с SalemBot
            </p>
            <Button 
              size="lg" 
              onClick={() => navigate("/auth")} 
              className="h-16 text-lg bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-xl hover:shadow-2xl transition-all px-12"
            >
              Начать бесплатно
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default New;
