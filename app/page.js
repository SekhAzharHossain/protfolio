import About from "./_components/About";
import Contact from "./_components/Contact";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-inter w-full" suppressHydrationWarning={true}>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
