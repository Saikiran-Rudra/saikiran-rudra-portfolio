import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactBanner from "@/components/ContactBanner";
import ContactForm from "@/components/ContactForm";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="min-h-screen">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactBanner />
      <ContactForm />
    </main>
  );
}
