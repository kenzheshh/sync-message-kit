import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Calendar,
  Send,
  AlertCircle,
  Image as ImageIcon,
  FileText,
  Video,
  X
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Campaigns = () => {
  const { toast } = useToast();
  const [message, setMessage] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

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
      title: "Campaign scheduled!",
      description: "Your campaign has been scheduled successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in pb-20">
      <div className="max-w-4xl mx-auto p-4 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Launch Campaign</h1>
          <p className="text-muted-foreground">Create and schedule your WhatsApp campaign</p>
        </div>

        {/* Message Editor */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold">Message</h2>
          </div>
          <Textarea
            placeholder="Type your campaign message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[200px] resize-none"
          />
          <p className="text-sm text-muted-foreground mt-2">
            {message.length} characters
          </p>
        </Card>

        {/* Media Upload */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <ImageIcon className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold">Media</h2>
          </div>
          
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div>
              <Input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => handleFileUpload(e, "image")}
                className="hidden"
                id="image-upload"
              />
              <Label htmlFor="image-upload" className="cursor-pointer">
                <div className="flex flex-col items-center justify-center p-4 border-2 border-dashed rounded-lg hover:bg-accent transition-colors">
                  <ImageIcon className="w-6 h-6 text-primary mb-2" />
                  <span className="text-sm text-muted-foreground">Photos</span>
                </div>
              </Label>
            </div>

            <div>
              <Input
                type="file"
                accept=".pdf,.doc,.docx,.txt"
                multiple
                onChange={(e) => handleFileUpload(e, "document")}
                className="hidden"
                id="file-upload"
              />
              <Label htmlFor="file-upload" className="cursor-pointer">
                <div className="flex flex-col items-center justify-center p-4 border-2 border-dashed rounded-lg hover:bg-accent transition-colors">
                  <FileText className="w-6 h-6 text-primary mb-2" />
                  <span className="text-sm text-muted-foreground">Files</span>
                </div>
              </Label>
            </div>

            <div>
              <Input
                type="file"
                accept="video/*"
                multiple
                onChange={(e) => handleFileUpload(e, "video")}
                className="hidden"
                id="video-upload"
              />
              <Label htmlFor="video-upload" className="cursor-pointer">
                <div className="flex flex-col items-center justify-center p-4 border-2 border-dashed rounded-lg hover:bg-accent transition-colors">
                  <Video className="w-6 h-6 text-primary mb-2" />
                  <span className="text-sm text-muted-foreground">Videos</span>
                </div>
              </Label>
            </div>
          </div>

          {/* Selected Files List */}
          {selectedFiles.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-medium">Selected files:</p>
              {selectedFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-accent rounded-lg"
                >
                  <span className="text-sm truncate flex-1">{file.name}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile(index)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* Target Audience */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Target Audience</h2>
          <div className="space-y-3">
            {["Customers", "Leads", "VIP Clients"].map((tag) => (
              <div key={tag} className="flex items-center space-x-3">
                <Checkbox id={tag} />
                <Label htmlFor={tag} className="cursor-pointer text-base">
                  {tag}
                </Label>
              </div>
            ))}
          </div>
        </Card>

        {/* Schedule */}
        <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent border-primary/20">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold">Schedule</h2>
          </div>
          
          <div className="space-y-4">
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

            <Button onClick={handleLaunchCampaign} className="w-full h-12 text-base" size="lg">
              <Send className="w-5 h-5 mr-2" />
              Schedule Campaign
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Campaigns;
