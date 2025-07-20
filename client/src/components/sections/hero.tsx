import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, Rocket, Play } from "lucide-react";
import Counter from "@/components/ui/counter";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center cyber-gradient relative overflow-hidden">
      {/* Geometric patterns background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyber-cyan/20 rotate-45 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-cyber-cyan/15 rotate-12 animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10 pt-20">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Next-Gen <span className="cyan-gradient bg-clip-text text-transparent">Cyber Security</span> & Finance Platform
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90 text-cyber-gray">
            Advanced cybersecurity automation, professional asset recovery, and strategic financial growth solutions for the digital age.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="cyan-gradient text-cyber-dark px-8 py-4 font-semibold hover:scale-105 transition-all animate-pulse-glow">
              <Rocket className="mr-2 h-5 w-5" />
              Get Started
            </Button>
            <Button variant="outline" className="border-2 border-cyber-cyan text-cyber-cyan px-8 py-4 font-semibold hover:bg-cyber-cyan hover:text-cyber-dark transition-all">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          {/* Stats Counter */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="glass-effect border-cyber-gray/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyber-cyan mb-2">
                  <Counter end={99.9} suffix="%" />
                </div>
                <div className="text-sm uppercase tracking-wide text-cyber-gray">Security Success Rate</div>
              </CardContent>
            </Card>
            
            <Card className="glass-effect border-cyber-gray/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyber-cyan mb-2">
                  <Counter end={500} suffix="M+" />
                </div>
                <div className="text-sm uppercase tracking-wide text-cyber-gray">Assets Recovered</div>
              </CardContent>
            </Card>
            
            <Card className="glass-effect border-cyber-gray/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyber-cyan mb-2">
                  <Counter end={24} suffix="" />
                </div>
                <div className="text-sm uppercase tracking-wide text-cyber-gray">Countries Served</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="text-cyber-cyan animate-bounce text-2xl" />
      </div>
    </section>
  );
}