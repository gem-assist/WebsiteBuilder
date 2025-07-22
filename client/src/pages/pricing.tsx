import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Shield, DollarSign, TrendingUp } from "lucide-react";

export default function Pricing() {
  const services = [
    {
      id: 1,
      name: "Cybersecurity Basic",
      icon: Shield,
      price: 99900, // $999 in cents
      duration: "monthly",
      description: "Essential cybersecurity monitoring and automated threat detection for small businesses.",
      features: [
        "24/7 Threat Monitoring",
        "Automated Incident Response",
        "Monthly Security Reports",
        "Email Support",
        "Basic Vulnerability Scans"
      ]
    },
    {
      id: 2,
      name: "Asset Recovery Service",
      icon: DollarSign,
      price: 299900, // $2999 in cents
      duration: "one-time",
      description: "Professional cryptocurrency and digital asset recovery with forensic investigation.",
      features: [
        "Forensic Investigation",
        "Legal Documentation",
        "Blockchain Analysis",
        "Recovery Coordination",
        "Success-based Pricing",
        "24/7 Case Support"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Financial Growth Premium",
      icon: TrendingUp,
      price: 199900, // $1999 in cents
      duration: "monthly",
      description: "Advanced financial planning with AI-driven market analysis and portfolio management.",
      features: [
        "AI-Driven Market Analysis",
        "Portfolio Optimization",
        "Risk Assessment",
        "Monthly Strategy Sessions",
        "Custom Investment Plans",
        "Priority Support"
      ]
    }
  ];

  const handleGetStarted = (serviceName: string) => {
    // Redirect to contact page with service pre-selected
    window.location.href = `/contact?service=${encodeURIComponent(serviceName)}`;
  };

  return (
    <div className="min-h-screen py-20 bg-cyber-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Choose Your <span className="text-cyber-cyan">Security Plan</span>
          </h1>
          <p className="text-lg text-cyber-gray/80 max-w-2xl mx-auto">
            Professional cybersecurity, asset recovery, and financial growth services tailored to your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className={`glass-effect border-cyber-gray/20 relative ${service.popular ? 'ring-2 ring-cyber-cyan' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="cyan-gradient text-cyber-dark px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 cyan-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-cyber-dark" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-2">{service.name}</CardTitle>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-cyber-cyan">
                      ${(service.price / 100).toLocaleString()}
                    </span>
                    <span className="text-cyber-gray ml-2">
                      {service.duration === 'monthly' ? '/month' : service.duration === 'annual' ? '/year' : 'one-time'}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-cyber-gray mb-6 text-center">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-cyber-gray">
                        <Check className="h-5 w-5 text-cyber-cyan mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={() => handleGetStarted(service.name)}
                    className={`w-full py-3 font-semibold transition-all ${
                      service.popular 
                        ? 'cyan-gradient text-cyber-dark hover:scale-105' 
                        : 'bg-transparent border-2 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-dark'
                    }`}
                  >
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-white mb-4">Need a Custom Solution?</h3>
          <p className="text-cyber-gray mb-6">
            Contact our team for enterprise-level security solutions and custom pricing.
          </p>
          <Button asChild variant="outline" className="border-2 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-dark">
            <a href="/contact">Contact Sales</a>
          </Button>
        </div>
      </div>
    </div>
  );
}