import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work/Work";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="bg-[black] bg-opacity-90">
    <Navbar />
    <div className="max-w-screen-xl mx-auto">
      <Home />
      <Skills />
      <Experience/>
      <Work />
      <Contact />
      <Footer/>
    </div>
    </div>
  );
}

export default App;
