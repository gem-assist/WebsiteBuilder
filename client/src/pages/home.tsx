import Hero from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services-section";
import AboutSection from "@/components/sections/about-section";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import Newsletter from "@/components/sections/newsletter";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesSection />
      <AboutSection />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <ContactSection />
    </div>
  );
}
