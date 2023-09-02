  
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
    //"linear-gradient(to bottom left,rgba(15,12,20,0.678),rgba(18,10,22,0.863)),url(https://refactored-waddle.vercel.app/static/media/home-bg.dc52d5d4.jpg)"
    <div className="app" style={{background:"url(https://img.freepik.com/free-photo/copy-space-background-curved-sheets-paper_23-2148319072.jpg?w=740&t=st=1693653183~exp=1693653783~hmac=b43265896fcd1da67527a3b2422c2990da42b2c2ea75bf92a6ca462af4bf8b11)",backgroundSize:"cover,contain"}}>
     {/* <div className="app"> */}
     {/*  */}
      <Topbar  menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     
     <div className="sections" id="home">
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
