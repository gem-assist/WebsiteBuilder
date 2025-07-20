import { Shield, Coins, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: "Cybersecurity Automation",
      description: "Advanced AI-powered threat detection, automated incident response, and 24/7 monitoring to protect your digital assets.",
      features: [
        "Real-time threat monitoring",
        "Automated incident response",
        "Vulnerability assessments",
        "Compliance reporting",
        "AI-powered threat detection",
        "24/7 security operations center"
      ]
    },
    {
      icon: Coins,
      title: "Asset Recovery",
      description: "Professional recovery services for cryptocurrency, digital assets, and financial instruments through legal and technical expertise.",
      features: [
        "Cryptocurrency recovery",
        "Fraud investigation",
        "Legal support and consultation",
        "Blockchain analysis",
        "International asset tracing",
        "Forensic accounting"
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
        "Market analysis",
        "Fintech solutions",
        "Wealth preservation"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-cyber-dark">
      {/* Header */}
      <section className="py-20 bg-cyber-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Our <span className="text-cyber-cyan">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-cyber-gray/80 max-w-3xl mx-auto">
            Comprehensive solutions for cybersecurity, asset recovery, and financial growth in the digital economy.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-cyber-darker">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className="glass-effect border-cyber-gray/20">
                    <CardContent className="p-8">
                      <div className="text-cyber-cyan text-4xl mb-6">
                        <service.icon className="h-12 w-12" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                        {service.title}
                      </h3>
                      <p className="text-cyber-gray mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-cyber-gray">
                            <CheckCircle className="h-5 w-5 text-cyber-cyan mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={`https://images.unsplash.com/photo-${
                      index === 0 
                        ? '1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600' 
                        : index === 1 
                        ? '1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
                        : '1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
                    }`}
                    alt={service.title}
                    className="rounded-2xl shadow-2xl w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild className="cyan-gradient text-cyber-dark px-8 py-3 font-semibold hover:scale-105 transition-transform">
              <a href="/contact">Get Started Today</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
