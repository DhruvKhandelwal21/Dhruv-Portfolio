import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import {isMobile} from 'react-device-detect'
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-hidden">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        {!isMobile&&<Tech />}
        <Works />
        <div className="relative z-0">
          <Contact />
          {!isMobile&&<StarsCanvas />}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
