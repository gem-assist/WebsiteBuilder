import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { value: "50+", label: "Years Experience" },
    { value: "1000+", label: "Clients Protected" },
    { value: "24/7", label: "Security Monitoring" },
    { value: "99.9%", label: "Success Rate" }
  ];

  return (
    <section className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Professional cybersecurity team working with advanced technology"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              About <span className="text-cyber-cyan">GEM Platform</span>
            </h2>
            <p className="text-lg text-cyber-gray leading-relaxed">
              GEM Cyber & Finance Platform represents the next evolution in cybersecurity and financial technology. Founded by industry veterans with over 50 years of combined experience, we provide comprehensive solutions for the modern digital landscape.
            </p>
            <p className="text-cyber-gray leading-relaxed">
              Our mission is to empower businesses and individuals with cutting-edge cybersecurity automation, professional asset recovery services, and strategic financial growth solutions that drive success in the digital economy.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <h4 className="text-2xl font-bold text-cyber-cyan mb-2">{stat.value}</h4>
                  <p className="text-sm text-cyber-gray">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <Button asChild className="cyan-gradient text-cyber-dark px-8 py-3 font-semibold hover:scale-105 transition-transform">
              <a href="/about">
                Learn More <ChevronDown className="ml-2 h-4 w-4 rotate-270" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}