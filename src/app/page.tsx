import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Products from "@/components/Products";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Features />
      <Products />
      <Stats />
      <Process />
      <ServiceAreas />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
