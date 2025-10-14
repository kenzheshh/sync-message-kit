import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { 
  MessageCircle, 
  Users, 
  Plus, 
  Trash2, 
  Calendar,
  Send,
  CheckCircle2,
  AlertCircle,
  ChevronDown
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Dashboard = () => {
  const { toast } = useToast();
  const [connectionCode] = useState("WXYZ");
  const [isConnected, setIsConnected] = useState(false);
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

  const handleConnect = () => {
    setIsConnected(true);
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
    <div className="min-h-screen bg-background animate-fade-in">
      {/* Header with active number and dropdown */}
      <header className="sticky top-0 z-50 bg-background border-b">
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

      <div className="max-w-4xl mx-auto p-4 pb-20 space-y-6">
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
          
          {!isConnected ? (
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

        {/* Launch Campaign */}
        <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent border-primary/20">
          <div className="flex items-center gap-2 mb-6">
            <Send className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold">Launch Campaign</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <Label className="text-base mb-3 block">Select Tags</Label>
              <div className="space-y-2">
                {["Customers", "Leads", "VIP Clients"].map((tag) => (
                  <div key={tag} className="flex items-center space-x-3">
                    <Checkbox id={tag} />
                    <Label htmlFor={tag} className="cursor-pointer text-base">
                      {tag}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="start-date" className="text-sm mb-2 block">Start Date</Label>
                <Input type="date" id="start-date" />
              </div>
              <div>
                <Label htmlFor="end-date" className="text-sm mb-2 block">End Date</Label>
                <Input type="date" id="end-date" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="start-time" className="text-sm mb-2 block">Start Time</Label>
                <Input type="time" id="start-time" defaultValue="10:00" />
              </div>
              <div>
                <Label htmlFor="end-time" className="text-sm mb-2 block">End Time</Label>
                <Input type="time" id="end-time" defaultValue="18:00" />
              </div>
            </div>

            <div className="flex items-start gap-2 p-3 bg-accent/50 rounded-lg">
              <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                Messages will be evenly distributed during the selected period
              </p>
            </div>

            <Button className="w-full h-12 text-base" size="lg">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Campaign
            </Button>
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
