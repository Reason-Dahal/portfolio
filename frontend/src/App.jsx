import Hero from '@/components/Hero';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Skills /> 
        <Projects />
        <Contact/>
      </main>
      <Footer />
    </>
  );
}

export default App;