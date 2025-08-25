import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto ">
      <div className="hero-section px-8">
        <div className="max-w-7xl mx-auto">
          <Nav />
          <Hero />
        </div>
      </div>
      <Marquee />
      <div className="px-8  max-w-7xl mx-auto ">
        <Skills />
        <Projects />
      </div>
      <About />
    </div>
  );
}
