import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto ">
      <Nav />
      <div id="hero" className="hero-section px-8 pt-[100px]">
        <div className="max-w-7xl mx-auto">
          <Hero />
        </div>
      </div>
      <Marquee />
      <div className="px-8  max-w-7xl mx-auto ">
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </div>
      <About />
      <div className="px-8  max-w-7xl mx-auto ">
        <div id="faq">
          <FAQ />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}
