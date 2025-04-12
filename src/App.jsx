import { Route, Routes } from "react-router-dom";
import "./App.css";

import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";

import ProjectDetails from "./Components/MicroComponents/ProjectDetails";
import Nav from "./Components/Nav";
import PersonalinfoCard from "./Components/PersonalinfoCard";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";
import { FlipText } from "./Components/magicui/flip-text";
import { Particles } from "./Components/magicui/particles";
import CanvasCursor from "./Components/CanvasCursor";
import { ScrollProgress } from "./Components/magicui/scroll-progress";

function App() {
  return (
    <>
      <ScrollProgress className="top-[0px] h-1 bg-gradient-to-r dark:from-(--font-1) dark:to-(--font-2) from-(--lightfont1) to-(--lightfont2)" />
      <CanvasCursor />
      <PersonalinfoCard />
      <Nav />
      <Home />
      <Portfolio />
      <About />
      <Resume />
      <Contact />

      <Routes>
        <Route path="/details/:id" element={<ProjectDetails />} />
        {/* <ProjectDetails/> */}
      </Routes>
    </>
  );
}

export default App;
