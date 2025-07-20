import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      
      const response = await fetch("https://formsubmit.co/gemfirm@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get In <span className="text-cyber-cyan">Touch</span></h2>
          <p className="text-lg text-cyber-gray/80 max-w-2xl mx-auto">
            Ready to secure your digital assets and grow your financial future? Contact our expert team today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 cyan-gradient rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-cyber-dark" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <div className="space-y-1">
                      <a 
                        href="mailto:gemfirm@gmail.com"
                        className="text-cyber-cyan hover:text-cyan-400 transition-colors block"
                      >
                        gemfirm@gmail.com
                      </a>
                      <a 
                        href="mailto:Channel-Group@gemcybersecurityassist.com"
                        className="text-cyber-cyan hover:text-cyan-400 transition-colors block"
                      >
                        Channel-Group@gemcybersecurityassist.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 cyan-gradient rounded-lg flex items-center justify-center mr-4">
                    <MessageCircle className="h-6 w-6 text-cyber-dark" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Join Our Telegram</h4>
                    <div className="space-y-1">
                      <a 
                        href="https://t.me/+CyberWealthSecure"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyber-cyan hover:text-cyan-400 transition-colors block"
                      >
                        🔗 Join CyberWealthSecure Channel
                      </a>
                      <a 
                        href="https://t.me/joinchat/wellfoudwellnessassist"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyber-cyan hover:text-cyan-400 transition-colors block"
                      >
                        🔗 Join Wellness Assist Group
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 cyan-gradient rounded-lg flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-cyber-dark" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Support Hours</h4>
                    <p className="text-cyber-gray">24/7 Emergency Support</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                alt="Modern cybersecurity operation center with multiple monitors"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <Card className="glass-effect border-cyber-gray/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="Contact Form - GEM Platform" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        className="bg-cyber-dark border-cyber-gray/30 text-white focus:border-cyber-cyan"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="bg-cyber-dark border-cyber-gray/30 text-white focus:border-cyber-cyan"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-white">Service Interest</Label>
                    <Select name="service">
                      <SelectTrigger className="bg-cyber-dark border-cyber-gray/30 text-white focus:border-cyber-cyan">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-cyber-dark border-cyber-gray/30">
                        <SelectItem value="cybersecurity">Cybersecurity Automation</SelectItem>
                        <SelectItem value="asset-recovery">Asset Recovery</SelectItem>
                        <SelectItem value="financial-growth">Financial Growth</SelectItem>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="bg-cyber-dark border-cyber-gray/30 text-white focus:border-cyber-cyan resize-none"
                      placeholder="Tell us about your needs..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full cyan-gradient text-cyber-dark font-semibold hover:scale-105 transition-transform"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}