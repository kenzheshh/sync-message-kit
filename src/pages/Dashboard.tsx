import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  MessageCircle, 
  Users, 
  Plus, 
  Trash2,
  CheckCircle2,
  ChevronDown
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import whatsappPattern from "@/assets/whatsapp-pattern.png";

const Dashboard = () => {
  const { toast } = useToast();
  const [connectionCode] = useState("WXYZ");
  const [isConnected, setIsConnected] = useState(false);
  const [showConnectionDialog, setShowConnectionDialog] = useState(false);
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [showQRCode, setShowQRCode] = useState(false);
  const [blacklistNumber, setBlacklistNumber] = useState("");
  const [blacklist, setBlacklist] = useState<string[]>([]);
  
  const exportedContacts = 1247;
  const totalContacts = 2500;
  const exportProgress = (exportedContacts / totalContacts) * 100;
  
  const [numbers, setNumbers] = useState([
    { phone: "+1 777 123 4567", active: true },
    { phone: "+1 701 987 6543", active: false },
    { phone: "+1 705 555 1122", active: false },
  ]);

  const activeNumber = numbers.find(n => n.active) || numbers[0];

  const handleNumberSwitch = (selectedPhone: string) => {
    setNumbers(numbers.map(n => ({ ...n, active: n.phone === selectedPhone })));
    toast({
      title: "Number switched",
      description: `Now using ${selectedPhone}`,
    });
  };

  const handleStartConnection = () => {
    setShowConnectionDialog(true);
  };

  const handleSubmitNumber = () => {
    if (whatsappNumber) {
      setShowConnectionDialog(false);
      setShowQRCode(true);
      toast({
        title: "Номер принят",
        description: "Теперь подключите ваш WhatsApp аккаунт",
      });
    }
  };

  const handleConnect = () => {
    setIsConnected(true);
    setShowQRCode(false);
    toast({
      title: "WhatsApp Connected!",
      description: "Your account is now ready to send messages.",
    });
  };

  const addToBlacklist = () => {
    if (blacklistNumber && !blacklist.includes(blacklistNumber)) {
      setBlacklist([...blacklist, blacklistNumber]);
      setBlacklistNumber("");
      toast({
        title: "Number added",
        description: "Number added to blacklist successfully.",
      });
    }
  };

  const removeFromBlacklist = (number: string) => {
    setBlacklist(blacklist.filter(n => n !== number));
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in relative" style={{
      backgroundImage: `url(${whatsappPattern})`,
      backgroundRepeat: 'repeat',
      backgroundSize: '400px'
    }}>
      <div className="absolute inset-0 bg-background/95" />
      {/* Header with active number and dropdown */}
      <header className="sticky top-0 z-50 bg-background border-b relative">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary rounded-full p-2">
              <MessageCircle className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="font-mono text-sm font-medium text-foreground">
              {activeNumber.phone}
            </div>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                My Numbers
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {numbers.map((number) => (
                <DropdownMenuItem
                  key={number.phone}
                  onClick={() => handleNumberSwitch(number.phone)}
                  className="font-mono text-sm"
                >
                  <div className="flex items-center justify-between w-full">
                    <span>{number.phone}</span>
                    {number.active && (
                      <Badge variant="default" className="bg-success text-white ml-2">
                        Active
                      </Badge>
                    )}
                  </div>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem className="text-primary">
                <Plus className="w-4 h-4 mr-2" />
                Add Number
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-4 pb-20 space-y-6 relative">
        {/* Page Title */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Manage your WhatsApp campaigns</p>
        </div>

        {/* WhatsApp Connection */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <MessageCircle className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold">WhatsApp Connection</h2>
          </div>
          
          {!isConnected && !showQRCode ? (
            <div className="text-center py-8">
              <p className="text-lg mb-4">Добро пожаловать!</p>
              <p className="text-muted-foreground mb-6">
                Создайте подключение WhatsApp и авторизуйте его, чтобы синхронизировать номер.
              </p>
              <Button onClick={handleStartConnection} className="w-full max-w-md">
                Создать подключение
              </Button>
            </div>
          ) : !isConnected && showQRCode ? (
            <>
              <div className="text-center py-8 space-y-4">
                <div className="inline-block bg-accent p-6 rounded-lg">
                  <p className="text-5xl font-bold text-accent-foreground tracking-wider">
                    {connectionCode}
                  </p>
                </div>
                <p className="text-lg font-medium">Enter this code in WhatsApp</p>
                <ol className="text-left max-w-md mx-auto space-y-2 text-muted-foreground">
                  <li>1. Open WhatsApp</li>
                  <li>2. Go to Settings → Linked Devices</li>
                  <li>3. Enter code {connectionCode}</li>
                </ol>
              </div>
              <Button onClick={handleConnect} className="w-full">
                I've entered the code
              </Button>
            </>
          ) : (
            <div className="flex items-center gap-3 p-4 bg-accent rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-success" />
              <div>
                <p className="font-medium text-foreground">Connected Successfully</p>
                <p className="text-sm text-muted-foreground">Your WhatsApp is ready to send messages</p>
              </div>
            </div>
          )}
        </Card>

        {/* WhatsApp Connection Dialog */}
        <Dialog open={showConnectionDialog} onOpenChange={setShowConnectionDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl">
                🔗 Подключите рабочий WhatsApp
              </DialogTitle>
              <DialogDescription className="text-base pt-2">
                👉 Введите номер, чтобы связать <span className="font-semibold">SalemBot</span> с вашим <span className="font-semibold">рабочим WhatsApp</span>, через который вы общаетесь с клиентами
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="whatsapp-number" className="text-sm font-medium">
                  Номер WhatsApp:
                </Label>
                <Input
                  id="whatsapp-number"
                  placeholder="+7 771 234 5678"
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                  className="font-mono"
                />
              </div>
            </div>
            <DialogFooter className="flex-col gap-3 sm:flex-col">
              <Button onClick={handleSubmitNumber} className="w-full">
                Подключить аккаунт
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Вы уже вошли как пользователь, теперь подключите WhatsApp вашего бизнеса
              </p>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Contacts Database */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold">Contacts Database</h2>
          </div>
          <div className="space-y-3">
            <p className="text-lg text-foreground">
              We exported chats of <span className="font-bold text-primary">{exportedContacts}</span> out of <span className="font-bold">{totalContacts}</span> contacts
            </p>
            <Progress value={exportProgress} className="h-3" />
            <p className="text-sm text-muted-foreground text-right">
              {exportProgress.toFixed(0)}% complete
            </p>
          </div>
        </Card>

        {/* Blacklist */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Blacklist</h2>
          <div className="space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="+1 (555) 000-0000"
                value={blacklistNumber}
                onChange={(e) => setBlacklistNumber(e.target.value)}
              />
              <Button onClick={addToBlacklist}>
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            
            {blacklist.length > 0 ? (
              <div className="space-y-2">
                {blacklist.map((number) => (
                  <div
                    key={number}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <p className="font-mono">{number}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFromBlacklist(number)}
                    >
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-8">
                No numbers in blacklist
              </p>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
