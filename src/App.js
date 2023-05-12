import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work/Work";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Experience/>
      <Work />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
