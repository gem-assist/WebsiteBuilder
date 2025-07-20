import { Shield, Users, Award, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function About() {
  const stats = [
    { icon: Users, value: "50+", label: "Years Experience" },
    { icon: Shield, value: "1000+", label: "Clients Protected" },
    { icon: Clock, value: "24/7", label: "Security Monitoring" },
    { icon: Award, value: "99.9%", label: "Success Rate" }
  ];

  const team = [
    {
      name: "Dr. Michael Chen",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      bio: "Former NSA cybersecurity specialist with 20+ years in digital forensics and threat intelligence."
    },
    {
      name: "Sarah Rodriguez",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b6c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      bio: "Blockchain expert and former Goldman Sachs quantitative analyst specializing in asset recovery."
    },
    {
      name: "David Kim",
      role: "Head of Security Operations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      bio: "Certified ethical hacker and incident response specialist with Pentagon consulting experience."
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-cyber-dark">
      {/* Header */}
      <section className="py-20 bg-cyber-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            About <span className="text-cyber-cyan">GEM Platform</span>
          </h1>
          <p className="text-lg md:text-xl text-cyber-gray/80 max-w-3xl mx-auto">
            Leading the future of cybersecurity and financial technology with innovation, expertise, and unwavering commitment to our clients.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-cyber-darker">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Professional cybersecurity team"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our Mission
              </h2>
              <p className="text-cyber-gray leading-relaxed">
                GEM Cyber & Finance Platform represents the next evolution in cybersecurity and financial technology. Founded by industry veterans with over 50 years of combined experience, we provide comprehensive solutions for the modern digital landscape.
              </p>
              <p className="text-cyber-gray leading-relaxed">
                Our mission is to empower businesses and individuals with cutting-edge cybersecurity automation, professional asset recovery services, and strategic financial growth solutions that drive success in the digital economy.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-cyber-cyan mb-2">
                      <stat.icon className="h-8 w-8 mx-auto" />
                    </div>
                    <h4 className="text-2xl font-bold text-cyber-cyan mb-1">{stat.value}</h4>
                    <p className="text-sm text-cyber-gray">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-cyber-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our <span className="text-cyber-cyan">Leadership Team</span>
            </h2>
            <p className="text-cyber-gray/80 max-w-2xl mx-auto">
              Meet the experts who lead our mission to secure and grow your digital future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="glass-effect border-cyber-gray/20 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-cyber-cyan font-medium mb-4">{member.role}</p>
                  <p className="text-cyber-gray text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cyber-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our <span className="text-cyber-cyan">Core Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Security First",
                description: "Every solution is built with security as the foundation, not an afterthought."
              },
              {
                title: "Innovation",
                description: "Constantly pushing the boundaries of what's possible in cybersecurity and fintech."
              },
              {
                title: "Transparency",
                description: "Clear communication and honest practices in all our client relationships."
              },
              {
                title: "Excellence",
                description: "Unwavering commitment to delivering the highest quality solutions and service."
              }
            ].map((value, index) => (
              <Card key={index} className="glass-effect border-cyber-gray/20 text-center">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-cyber-gray text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="cyan-gradient text-cyber-dark px-8 py-3 font-semibold hover:scale-105 transition-transform">
              <a href="/contact">Work With Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
