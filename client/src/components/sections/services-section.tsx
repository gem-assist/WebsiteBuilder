import { Shield, Coins, TrendingUp, CheckCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesSection() {
  const services = [
    {
      icon: Shield,
      title: "Cybersecurity Automation",
      description: "Advanced AI-powered threat detection, automated incident response, and 24/7 monitoring to protect your digital assets.",
      features: [
        "Real-time threat monitoring",
        "Automated incident response",
        "Vulnerability assessments",
        "Compliance reporting"
      ]
    },
    {
      icon: Coins,
      title: "Asset Recovery",
      description: "Professional recovery services for cryptocurrency, digital assets, and financial instruments through legal and technical expertise.",
      features: [
        "Cryptocurrency recovery",
        "Fraud investigation",
        "Legal support",
        "Blockchain analysis"
      ]
    },
    {
      icon: TrendingUp,
      title: "Financial Growth",
      description: "Strategic investment planning, portfolio management, and fintech solutions to maximize your financial potential.",
      features: [
        "Investment strategies",
        "Portfolio optimization",
        "Risk management",
        "Market analysis"
      ]
    }
  ];

  return (
    <section className="py-20 bg-cyber-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our <span className="text-cyber-cyan">Services</span></h2>
          <p className="text-lg text-cyber-gray/80 max-w-2xl mx-auto">
            Comprehensive solutions for cybersecurity, asset recovery, and financial growth in the digital economy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-effect border-cyber-gray/20 hover:scale-105 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="text-cyber-cyan text-4xl mb-6 group-hover:animate-pulse">
                  <service.icon className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-cyber-gray mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 text-sm text-cyber-gray/80">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-cyber-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="cyan-gradient text-cyber-dark px-8 py-3 font-semibold hover:scale-105 transition-transform">
            <a href="/services">
              View All Services <ChevronDown className="ml-2 h-4 w-4 rotate-270" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}