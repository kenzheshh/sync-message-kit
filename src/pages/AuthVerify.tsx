import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AuthVerify = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const phoneNumber = location.state?.phoneNumber || "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (otp.length === 6) {
      // Simulate verification
      if (otp === "123456") {
        toast({
          title: "Success!",
          description: "Your code has been verified.",
        });
        navigate("/onboarding");
      } else {
        toast({
          variant: "destructive",
          title: "Invalid code",
          description: "Please try again.",
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 animate-fade-in">
      <Card className="w-full max-w-md p-8 shadow-lg">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-primary rounded-full p-4 mb-4">
            <MessageCircle className="w-12 h-12 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Enter Code</h1>
          <p className="text-muted-foreground text-center">
            We sent you a code on WhatsApp to
          </p>
          <p className="text-foreground font-medium">{phoneNumber}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center">
            <InputOTP maxLength={6} value={otp} onChange={setOtp}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <Button 
            type="submit" 
            className="w-full text-base h-12"
            disabled={otp.length !== 6}
          >
            Confirm
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            Didn't receive a code?{" "}
            <button
              type="button"
              onClick={() => navigate("/auth")}
              className="text-primary hover:underline"
            >
              Resend
            </button>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default AuthVerify;
