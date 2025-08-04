import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="font-inter">
      <Hero />
      <About />
      <Pricing />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  );
}
