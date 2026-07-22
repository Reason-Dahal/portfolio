import Hero from '@/components/Hero';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Skills from './components/Skills';
import SkillTag from './components/SkillTag';

function App() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Skills /> 
      </main>
      <Footer />
    </>
  );
}

export default App;