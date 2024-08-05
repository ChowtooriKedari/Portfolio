import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Navbar_New from "./components/Navbar_New";
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
import Education from "./components/Education";

function App() {
  return (
    <div className="bg-[black] bg-opacity-90">
      <Router>
        <Routes>
          <Route path='/' 
            element={
              <>
              <Navbar />
              <div className="max-w-screen-xl mx-auto">
              <Home />
              <Skills />
              <Education/>
              <Experience />
              <WorkHeader />
              </div>
              </>
          } exact />
          <Route path='/VRProjects' element={
            <>
            <Navbar_New/> 
            <div className="max-w-screen-xl mx-auto">
            <VRProjects />
            </div>
            </>
          } exact />
          <Route path='/TangibleUI' element={ 
            <>
            <Navbar_New/> 
            <div className="max-w-screen-xl mx-auto">
            <TangibleUI />
            </div>
            </>
          } exact />
          <Route path='/WebDevProjects' element={
             <>
            <Navbar_New/> 
            <div className="max-w-screen-xl mx-auto">
            <WebDevProjects />
            </div>
            </>
          } exact />
          <Route path='/ModelingAnimation' element={
            <>
            <Navbar_New/> 
            <div className="max-w-screen-xl mx-auto">
            <ModelingAnimation />
            </div>
            </>
          } exact />
          <Route path='/Photography' element={
            <>
            <Navbar_New/> 
            <div className="max-w-screen-xl mx-auto">
            <Photography />
            </div> 
            </>
          } exact />
          
        </Routes>
      </Router>
      <Contact />
      <Footer />
      </div>

  );
}

export default App;


