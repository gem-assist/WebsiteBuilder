import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, DollarSign, TrendingUp, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Shield,
      title: "Cybersecurity Automation",
      description: "Advanced AI-powered threat detection, automated incident response, and 24/7 security monitoring to protect your digital assets.",
      features: ["Real-time Threat Detection", "Automated Response", "Compliance Reporting", "Vulnerability Assessments"]
    },
    {
      icon: DollarSign,
      title: "Asset Recovery",
      description: "Professional cryptocurrency and digital asset recovery services with a 99.9% success rate in legitimate cases.",
      features: ["Cryptocurrency Recovery", "Fraud Investigation", "Legal Support", "Forensic Analysis"]
    },
    {
      icon: TrendingUp,
      title: "Financial Growth",
      description: "Strategic financial planning combined with cutting-edge fintech solutions to maximize your wealth while ensuring security.",
      features: ["Portfolio Management", "Risk Assessment", "Market Analysis", "Investment Strategies"]
    }
  ];

  return (
    <section className="py-20 bg-cyber-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our <span className="text-cyber-cyan">Services</span></h2>
          <p className="text-lg text-cyber-gray/80 max-w-2xl mx-auto">
            Comprehensive solutions for cybersecurity, asset recovery, and financial growth in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="glass-effect border-cyber-gray/20 hover:border-cyber-cyan/50 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 cyan-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-8 w-8 text-cyber-dark" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                  <p className="text-cyber-gray mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-cyber-gray">
                        <div className="w-2 h-2 bg-cyber-cyan rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-3">
                    <Button asChild className="w-full bg-transparent border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-dark transition-all">
                      <a href="/services">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild className="w-full cyan-gradient text-cyber-dark font-semibold hover:scale-105 transition-transform">
                      <a href="/pricing">
                        View Pricing
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}