import Hero from '@/components/Hero';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';


function App() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Skills /> 
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;