import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Cases from "@/components/Cases";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Cases />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
