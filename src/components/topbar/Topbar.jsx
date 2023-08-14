import "./topbar.scss";

import GetAppIcon from '@material-ui/icons/GetApp';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div id="nav-menu" className={"topbar " + (menuOpen && "active")} >
      <div className="wrapper ">
        <div className="left">
          <a href="#intro" className="logo">
            <img className="my-logo" src="assets/icon1.png" alt="" />
          </a>
          <div className="option">
            <div className="itemContainer,option nav-link home">
           <span> <a href="#intro">Home</a></span>                     
          </div>

          <div className="itemContainer nav-link ">
           <span>  <a href="#about">AboutMe</a></span>                     
          </div>

          <div className="itemContainer nav-link ">
           <span>  <a href="#skills">Skills</a></span>                     
          </div>

          <div className="itemContainer nav-link ">
            <span> <a href="#projects">Projects</a></span>
                     
                  </div>
                   <div className="itemContainer nav-link ">
            <span> <a href="#contact">Contact</a></span>
          
            
            </div>
               <div className="itemContainer nav-link resume" onClick={() => window.open("assets/fw12_119-Bala-Murugan-Resume.pdf", "_blank")}>
              <span style={{ display: "flex" }}><GetAppIcon style={{height:"18px",margin:"2px",borderBottom:"none"}}/>  Resume</span>
          
            
            </div>
            </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
