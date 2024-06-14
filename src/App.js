import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import WorkHeader from "./components/Work/WorkHeader";
import VRProjects from "./components/Work/VRProjects";
import TangibleUI from "./components/Work/TangibleUI";
import WebDevProjects from "./components/Work/WebDevProjects";
import ModelingAnimation from "./components/Work/ModelingAnimation";
import Photography from "./components/Work/Photography";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Switch, Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="bg-[black] bg-opacity-90">
    <Navbar />
    <div className="max-w-screen-xl mx-auto">
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <Home />
              <Skills />
              <Experience />
              <WorkHeader />
            </>
          } exact />
          <Route path='/VRProjects' element={<VRProjects />} exact />
          <Route path='/TangibleUI' element={<TangibleUI />} exact />
          <Route path='/WebDevProjects' element={<WebDevProjects />} exact />
          <Route path='/ModelingAnimation' element={<><ModelingAnimation /></>} exact />
          <Route path='/Photography' element={<><Photography /></>} exact />
        </Routes>
      </Router>
      <Contact />
      <Footer />
    </div>
  </div>

  );
}

export default App;
