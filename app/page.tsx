import Hero from "./_sections/Hero";
import Marquee from "./_components/Marquee";
import Skills from "./_sections/Skills";
import Projects from "./_sections/Projects";
import About from "./_sections/About";
import FAQ from "./_sections/FAQ";
import Contact from "./_sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto ">
      <div id="home" className="hero-section px-6 sm:px-8 pt-[100px]">
        <div className="max-w-7xl mx-auto">
          <Hero />
        </div>
      </div>
      <Marquee />
      <div className="px-6 sm:px-8 max-w-7xl mx-auto ">
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </div>
      <div id="about">
        <About />
      </div>
      <div className="px-6 sm:px-8 max-w-7xl mx-auto ">
        <div id="faqs">
          <FAQ />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}
