import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What cybersecurity services does GEM Platform offer?",
      answer: "We offer comprehensive cybersecurity automation including 24/7 threat monitoring, automated incident response, vulnerability assessments, compliance reporting, and AI-powered threat detection systems."
    },
    {
      question: "How successful is your asset recovery service?",
      answer: "Our asset recovery team has a 99.9% success rate in legitimate cases. We specialize in cryptocurrency recovery, fraud investigations, and have recovered over $500M in digital assets for our clients."
    },
    {
      question: "What makes your financial growth strategies unique?",
      answer: "Our strategies combine traditional financial planning with cutting-edge fintech solutions, AI-driven market analysis, and cybersecurity-focused risk management to ensure both growth and protection."
    },
    {
      question: "How can I get started with GEM Platform?",
      answer: "Contact us through our contact form, join our Telegram channel for updates, or schedule a free consultation. Our team will assess your needs and recommend the best solutions for your situation."
    },
    {
      question: "Do you provide 24/7 support?",
      answer: "Yes, we provide 24/7 monitoring and support for all our cybersecurity services. Our emergency response team is available around the clock to handle any security incidents or urgent asset recovery needs."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Frequently Asked <span className="text-cyber-cyan">Questions</span></h2>
          <p className="text-lg text-cyber-gray/80 max-w-2xl mx-auto">
            Get answers to common questions about our cybersecurity and financial services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="glass-effect border-cyber-gray/20">
              <CardContent className="p-0">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="font-semibold text-white pr-4">{faq.question}</h3>
                  <ChevronDown 
                    className={`text-cyber-cyan transition-transform flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-cyber-gray">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}