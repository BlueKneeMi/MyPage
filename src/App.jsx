
import {ReactLenis} from 'lenis/react'
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useGSAP} from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger);

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from './components/Experience';
import Education from './components/Education';
import Languages from "./components/Languages";
import Technologies from './components/Technologies';
import MiscSkills from './components/MiscSkills';
import Work from "./components/Work";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    });
  });
  return (

    <ReactLenis root>
      <Header/>
      <main>
        <Hero />
        <About />
        <Experience />
        <Education/>
        <Languages />
        <MiscSkills />
        <Work />
        <Publications />
        <Contact />
     </main>
     <Footer />
    </ReactLenis>
  )
}

// Blog ideas:
// Dirst hackathon
// calculation of interest rate (difference equations)
// Tournament algorithm
// confidence interval for quantity with no data
// Solving ODE with fourier

export default App;