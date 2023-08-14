  
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Menu from "./components/menu/Menu";
import "./App.scss"
import { useState } from "react";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Copyright from "./components/copyright/Copyright"


function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app" style={{background:"linear-gradient(to bottom left,rgba(15,12,20,0.678),rgba(18,10,22,0.863)),url(https://refactored-waddle.vercel.app/static/media/home-bg.dc52d5d4.jpg)"}}>
     {/* <div className="app"> */}
      <Topbar  menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     
     <div className="sections">
        <Intro />
        <About />
        <Projects/>
        <Contact/>
        <Copyright/>      
     </div>
    </div>
  );
}

export default App;
