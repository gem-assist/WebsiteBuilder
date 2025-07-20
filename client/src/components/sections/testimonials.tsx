import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael Chen",
      role: "CEO, TechCorp Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      content: "GEM Platform's cybersecurity automation saved our company from a major breach. Their 24/7 monitoring and instant response capabilities are unmatched in the industry.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Investor",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b6c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      content: "After losing significant cryptocurrency in a scam, GEM Platform's asset recovery team successfully recovered 85% of our funds. Professional and results-driven.",
      rating: 5
    },
    {
      name: "David Rodriguez",
      role: "CFO, Global Finance Inc",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      content: "The financial growth strategies provided by GEM Platform increased our portfolio returns by 40% while maintaining security. Highly recommended.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-cyber-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Client <span className="text-cyber-cyan">Testimonials</span></h2>
          <p className="text-lg text-cyber-gray/80 max-w-2xl mx-auto">
            Hear from our satisfied clients who trust GEM Platform with their cybersecurity and financial needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-effect border-cyber-gray/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-cyber-cyan">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-cyber-gray mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h5 className="font-semibold text-white">{testimonial.name}</h5>
                    <p className="text-sm text-cyber-gray/70">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}