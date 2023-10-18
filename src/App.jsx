  
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
    // style={{background:"url(https://img.freepik.com/free-photo/copy-space-background-curved-sheets-paper_23-2148319072.jpg?w=740&t=st=1693653183~exp=1693653783~hmac=b43265896fcd1da67527a3b2422c2990da42b2c2ea75bf92a6ca462af4bf8b11)",backgroundSize:"cover,contain"}}
    // <div className="app" style={{background: 'linear-gradient(to right, #ff7e5f, #feb47b, #ffeda7)'}}>
    <div className="app" style={{background: 'linear-gradient(to right, #3498db, #5dade2, #85c1e9)'}}>
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
