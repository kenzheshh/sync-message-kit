import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Calendar,
  Send,
  AlertCircle,
  Image as ImageIcon,
  FileText,
  Video,
  X,
  Plus,
  PlayCircle,
  CheckCircle2,
  Save,
  CheckCircle,
  AlertTriangle,
  XCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import whatsappPattern from "@/assets/whatsapp-pattern.png";

interface Campaign {
  id: string;
  name: string;
  status: "running" | "done";
  message: string;
  audience: string[];
  startDate: string;
  progress: number;
  sent: number;
  total: number;
}

const Campaigns = () => {
  const { toast } = useToast();
  const [dialogOpen, setDialogOpen] = useState(false);
  
  // Campaign form state
  const [campaignName, setCampaignName] = useState("");
  const [message, setMessage] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [recipientTag, setRecipientTag] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("10:00");
  const [endTime, setEndTime] = useState("12:00");
  const [selectedDays, setSelectedDays] = useState<string[]>(["fri", "sat"]);
  const [maxPerDay, setMaxPerDay] = useState("300");
  const [sendingSpeed, setSendingSpeed] = useState("1");
  
  // Mock data for recipient tags
  const recipientTags = [
    { value: "active-clients", label: "Active Clients", count: 5000 },
    { value: "vip", label: "VIP", count: 250 },
    { value: "new-subscribers", label: "New Subscribers", count: 1200 },
    { value: "customers", label: "Customers", count: 3500 },
    { value: "leads", label: "Leads", count: 800 },
  ];
  
  const daysOfWeek = [
    { value: "mon", label: "Mon" },
    { value: "tue", label: "Tue" },
    { value: "wed", label: "Wed" },
    { value: "thu", label: "Thu" },
    { value: "fri", label: "Fri" },
    { value: "sat", label: "Sat" },
    { value: "sun", label: "Sun" },
  ];
  
  // Auto-detect timezone
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
  // Calculate reach
  const reachCalculation = useMemo(() => {
    const selectedTagData = recipientTags.find(tag => tag.value === recipientTag);
    const totalContacts = selectedTagData?.count || 0;
    
    if (!startDate || !endDate || selectedDays.length === 0) {
      return {
        totalContacts,
        willBeSent: 0,
        percentage: 0,
        remaining: totalContacts,
        status: "incomplete"
      };
    }
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    const daysDiff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    
    const startHour = parseInt(startTime.split(":")[0]);
    const startMinute = parseInt(startTime.split(":")[1]);
    const endHour = parseInt(endTime.split(":")[0]);
    const endMinute = parseInt(endTime.split(":")[1]);
    
    const minutesPerDay = (endHour * 60 + endMinute) - (startHour * 60 + startMinute);
    const maxByTime = minutesPerDay * parseInt(sendingSpeed);
    const maxByLimit = parseInt(maxPerDay);
    const effectiveMaxPerDay = Math.min(maxByTime, maxByLimit);
    
    const activeDaysCount = Math.ceil(daysDiff * (selectedDays.length / 7));
    const willBeSent = Math.min(effectiveMaxPerDay * activeDaysCount, totalContacts);
    const percentage = totalContacts > 0 ? (willBeSent / totalContacts) * 100 : 0;
    const remaining = totalContacts - willBeSent;
    
    let status = "good";
    if (percentage < 50) status = "warning";
    if (percentage < 100) status = "partial";
    if (willBeSent === 0) status = "error";
    
    return {
      totalContacts,
      willBeSent,
      percentage,
      remaining,
      status,
      activeDaysCount,
      effectiveMaxPerDay,
      minutesPerDay
    };
  }, [recipientTag, startDate, endDate, startTime, endTime, selectedDays, maxPerDay, sendingSpeed]);
  
  const toggleDay = (day: string) => {
    setSelectedDays(prev => 
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const [campaigns] = useState<Campaign[]>([
    {
      id: "1",
      name: "Spring Sale Campaign",
      status: "running",
      message: "🌸 Spring Sale! Get 30% off on all products. Limited time offer!",
      audience: ["Customers", "VIP Clients"],
      startDate: "2025-10-12",
      progress: 65,
      sent: 650,
      total: 1000,
    },
    {
      id: "2",
      name: "Welcome Series",
      status: "done",
      message: "Welcome to our community! We're excited to have you with us.",
      audience: ["Leads"],
      startDate: "2025-10-01",
      progress: 100,
      sent: 500,
      total: 500,
    },
  ]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    const files = Array.from(e.target.files || []);
    setSelectedFiles([...selectedFiles, ...files]);
    toast({
      title: "Files added",
      description: `${files.length} ${type} file(s) added to campaign`,
    });
  };

  const removeFile = (index: number) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
  };

  const handleLaunchCampaign = () => {
    toast({
      title: "Campaign launched!",
      description: "Your campaign has been scheduled successfully.",
    });
    resetForm();
    setDialogOpen(false);
  };
  
  const handleSaveDraft = () => {
    toast({
      title: "Draft saved!",
      description: "Your campaign has been saved as a draft.",
    });
    resetForm();
    setDialogOpen(false);
  };
  
  const resetForm = () => {
    setCampaignName("");
    setMessage("");
    setSelectedFiles([]);
    setRecipientTag("");
    setStartDate("");
    setEndDate("");
    setStartTime("10:00");
    setEndTime("12:00");
    setSelectedDays(["fri", "sat"]);
    setMaxPerDay("300");
    setSendingSpeed("1");
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in pb-20 relative" style={{
      backgroundImage: `url(${whatsappPattern})`,
      backgroundRepeat: 'repeat',
      backgroundSize: '400px'
    }}>
      <div className="absolute inset-0 bg-background/95" />
      <div className="max-w-4xl mx-auto p-4 space-y-6 relative">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Campaigns</h1>
            <p className="text-muted-foreground">Manage your WhatsApp campaigns</p>
          </div>
          
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg">
                <Plus className="w-5 h-5 mr-2" />
                Add Campaign
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">💬 WhatsApp Campaign Launch</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6 mt-4">
                {/* 1. Main Parameters */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">1. Main Parameters</h3>
                  
                  <div>
                    <Label htmlFor="campaign-name">Campaign Name</Label>
                    <Input
                      id="campaign-name"
                      placeholder="For example: Autumn Sale"
                      value={campaignName}
                      onChange={(e) => setCampaignName(e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Any WhatsApp message text. You can use variables: {{name}}, {{promo_code}}"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-[120px] resize-none mt-2"
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      {message.length} characters • Variables: {"{"}{"{"} name {"}"}{"}"}, {"{"}{"{"} promo_code {"}"}{"}"} 
                    </p>
                  </div>
                  
                  <div>
                    <Label htmlFor="recipient-tag">Recipient Tag</Label>
                    <Select value={recipientTag} onValueChange={setRecipientTag}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a tag from the database" />
                      </SelectTrigger>
                      <SelectContent>
                        {recipientTags.map(tag => (
                          <SelectItem key={tag.value} value={tag.value}>
                            {tag.label} ({tag.count.toLocaleString()} contacts)
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-start gap-2 p-3 bg-accent rounded-lg">
                    <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      📱 Messages will be sent from the WhatsApp number you've previously selected in your settings. The number is not displayed because it's already linked to your account.
                    </p>
                  </div>
                </div>

                {/* 2. Scheduling */}
                <div className="space-y-4 border-t pt-6">
                  <h3 className="text-lg font-semibold">2. Scheduling</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="start-date">Start Date</Label>
                      <Input 
                        type="date" 
                        id="start-date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="start-time-input">Start Time</Label>
                      <Input 
                        type="time" 
                        id="start-time-input"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="end-date">End Date</Label>
                      <Input 
                        type="date" 
                        id="end-date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="end-time-input">End Time</Label>
                      <Input 
                        type="time" 
                        id="end-time-input"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label>Days of the Week</Label>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {daysOfWeek.map(day => (
                        <Button
                          key={day.value}
                          type="button"
                          variant={selectedDays.includes(day.value) ? "default" : "outline"}
                          size="sm"
                          onClick={() => toggleDay(day.value)}
                          className="min-w-[60px]"
                        >
                          {selectedDays.includes(day.value) ? "✅" : "☐"} {day.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Sending Window</Label>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-sm">⏰ from</span>
                        <span className="font-medium">{startTime}</span>
                        <span className="text-sm">to</span>
                        <span className="font-medium">{endTime}</span>
                      </div>
                    </div>
                    <div>
                      <Label>Time Zone</Label>
                      <p className="text-sm text-muted-foreground mt-2">
                        Automatically determined: <span className="font-medium">{timezone}</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 p-3 bg-accent rounded-lg">
                    <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      💡 All times are calculated according to your local time zone. If clients are located in other regions, the campaign still follows <em>your</em> time zone.
                    </p>
                  </div>
                </div>
                
                {/* 3. Limits */}
                <div className="space-y-4 border-t pt-6">
                  <h3 className="text-lg font-semibold">3. Limits</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="max-per-day">Maximum per day</Label>
                      <Input 
                        type="number" 
                        id="max-per-day"
                        value={maxPerDay}
                        onChange={(e) => setMaxPerDay(e.target.value)}
                        className="mt-2"
                        min="1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="sending-speed">Sending speed (messages/minute)</Label>
                      <Input 
                        type="number" 
                        id="sending-speed"
                        value={sendingSpeed}
                        onChange={(e) => setSendingSpeed(e.target.value)}
                        className="mt-2"
                        min="1"
                        max="60"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 p-3 bg-accent rounded-lg">
                    <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      If not finished: The remaining messages will be carried over to the next allowed day ✅
                    </p>
                  </div>
                </div>

                {/* 4. Automatic Reach Calculation */}
                {recipientTag && startDate && endDate && (
                  <div className="space-y-4 border-t pt-6">
                    <h3 className="text-lg font-semibold">4. Automatic Reach Calculation</h3>
                    
                    <div className="bg-gradient-to-br from-primary/10 to-accent border border-primary/20 rounded-lg p-4 space-y-3">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Contacts by tag:</span>
                          <span className="font-semibold ml-2">{reachCalculation.totalContacts.toLocaleString()}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Period:</span>
                          <span className="font-semibold ml-2">{startDate} – {endDate}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Sending days:</span>
                          <span className="font-semibold ml-2">{selectedDays.map(d => daysOfWeek.find(day => day.value === d)?.label).join(", ")}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Window:</span>
                          <span className="font-semibold ml-2">{startTime} – {endTime} ({reachCalculation.minutesPerDay} min)</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Speed:</span>
                          <span className="font-semibold ml-2">{sendingSpeed} message/min</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Daily limit:</span>
                          <span className="font-semibold ml-2">{maxPerDay}</span>
                        </div>
                      </div>
                      
                      <div className="border-t border-border pt-3">
                        <div className="flex items-center gap-2">
                          {reachCalculation.status === "good" && <CheckCircle className="w-5 h-5 text-green-500" />}
                          {reachCalculation.status === "partial" && <AlertTriangle className="w-5 h-5 text-orange-500" />}
                          {reachCalculation.status === "warning" && <AlertTriangle className="w-5 h-5 text-orange-500" />}
                          {reachCalculation.status === "error" && <XCircle className="w-5 h-5 text-red-500" />}
                          <span className={`text-lg font-bold ${
                            reachCalculation.status === "good" ? "text-green-500" : 
                            reachCalculation.status === "partial" || reachCalculation.status === "warning" ? "text-orange-500" : 
                            "text-red-500"
                          }`}>
                            {reachCalculation.willBeSent.toLocaleString()} out of {reachCalculation.totalContacts.toLocaleString()} will be sent ({reachCalculation.percentage.toFixed(1)}%)
                          </span>
                        </div>
                        
                        {reachCalculation.remaining > 0 && (
                          <p className="text-sm text-muted-foreground mt-2">
                            ❗ The remaining {reachCalculation.remaining.toLocaleString()} won't fit into the specified period.
                          </p>
                        )}
                      </div>
                      
                      {reachCalculation.status !== "good" && (
                        <div className="bg-accent/50 p-3 rounded">
                          <p className="text-sm">
                            <strong>💬 Tip:</strong> To reach everyone, increase the window (for example, to 10:00–18:00) or extend the campaign period.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {/* 5. Summary Before Launch */}
                {recipientTag && startDate && endDate && (
                  <div className="space-y-4 border-t pt-6">
                    <h3 className="text-lg font-semibold">5. Summary Before Launch</h3>
                    
                    <div className="border rounded-lg overflow-hidden">
                      <table className="w-full text-sm">
                        <tbody className="divide-y">
                          <tr className="hover:bg-accent/50">
                            <td className="p-3 font-medium text-muted-foreground">📦 Recipients by tag</td>
                            <td className="p-3">{reachCalculation.totalContacts.toLocaleString()}</td>
                          </tr>
                          <tr className="hover:bg-accent/50">
                            <td className="p-3 font-medium text-muted-foreground">🕓 Period</td>
                            <td className="p-3">{startDate} – {endDate}</td>
                          </tr>
                          <tr className="hover:bg-accent/50">
                            <td className="p-3 font-medium text-muted-foreground">🗓️ Days</td>
                            <td className="p-3">{selectedDays.map(d => daysOfWeek.find(day => day.value === d)?.label).join(", ")}</td>
                          </tr>
                          <tr className="hover:bg-accent/50">
                            <td className="p-3 font-medium text-muted-foreground">⏰ Time window</td>
                            <td className="p-3">{startTime} – {endTime}</td>
                          </tr>
                          <tr className="hover:bg-accent/50">
                            <td className="p-3 font-medium text-muted-foreground">🌍 Time zone</td>
                            <td className="p-3">{timezone} (auto-detected)</td>
                          </tr>
                          <tr className="hover:bg-accent/50">
                            <td className="p-3 font-medium text-muted-foreground">🚦 Sending speed</td>
                            <td className="p-3">{sendingSpeed} message/min</td>
                          </tr>
                          <tr className="hover:bg-accent/50">
                            <td className="p-3 font-medium text-muted-foreground">📊 Daily limit</td>
                            <td className="p-3">{maxPerDay}</td>
                          </tr>
                          <tr className="hover:bg-accent/50 bg-accent/30">
                            <td className="p-3 font-bold">📈 Will be sent</td>
                            <td className="p-3 font-bold">{reachCalculation.willBeSent.toLocaleString()} messages ({reachCalculation.percentage.toFixed(1)}%)</td>
                          </tr>
                          <tr className="hover:bg-accent/50">
                            <td className="p-3 font-medium text-muted-foreground">🕐 Campaign end</td>
                            <td className="p-3">{endDate} {endTime}</td>
                          </tr>
                          {reachCalculation.remaining > 0 && (
                            <tr className="hover:bg-accent/50 bg-orange-500/10">
                              <td className="p-3 font-medium text-orange-600">🧩 Remaining</td>
                              <td className="p-3 text-orange-600">{reachCalculation.remaining.toLocaleString()} (won't be sent)</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                
                {/* 6. Status Tips */}
                <div className="space-y-3 border-t pt-6">
                  <h3 className="text-lg font-semibold">6. Status Tips</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>🟢 All good</strong> — all recipients will get the message.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span><strong>🟠 Partial</strong> — some won't receive it; consider extending the window or period.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span><strong>🔴 Won't launch</strong> — campaign parameters must be adjusted.</span>
                    </div>
                  </div>
                </div>
                
                {/* 7. Control Buttons */}
                <div className="flex gap-3 border-t pt-6">
                  <Button 
                    onClick={handleLaunchCampaign} 
                    className="flex-1 h-12 text-base"
                    disabled={!campaignName || !message || !recipientTag || !startDate || !endDate || reachCalculation.willBeSent === 0}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    ✅ Launch campaign
                  </Button>
                  <Button 
                    onClick={handleSaveDraft}
                    variant="outline"
                    className="flex-1 h-12 text-base"
                    disabled={!campaignName}
                  >
                    <Save className="w-5 h-5 mr-2" />
                    💾 Save as draft
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Campaigns List */}
        <div className="space-y-4">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                  {campaign.status === "running" ? (
                    <PlayCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  ) : (
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  )}
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{campaign.name}</h3>
                    <p className="text-muted-foreground text-sm">Started: {campaign.startDate}</p>
                  </div>
                </div>
                <Badge variant={campaign.status === "running" ? "default" : "secondary"}>
                  {campaign.status === "running" ? "Running" : "Completed"}
                </Badge>
              </div>

              <p className="text-foreground mb-4">{campaign.message}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {campaign.audience.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">
                    {campaign.sent} / {campaign.total} sent ({campaign.progress}%)
                  </span>
                </div>
                <div className="w-full bg-accent rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${campaign.progress}%` }}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
