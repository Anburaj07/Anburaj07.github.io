import "./topbar.scss";

import GetAppIcon from '@material-ui/icons/GetApp';
import resume from "../Resume/Anburaj-Resume.pdf"

export default function Topbar({ menuOpen, setMenuOpen }) {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.setAttribute('download', 'resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="nav-menu" className={"topbar " + (menuOpen && "active")} >
      <div className="wrapper ">
      <a href="#intro" className="logo" style={{width:"60px"}}>
            <img className="my-logo" src="assets/logo1.png" alt="" />
          </a>
        <div className="left" style={{fontSize:"30px"}} >
          {/* <a href="#intro" className="logo">
            <img className="my-logo" src="assets/logo1.png" alt="" />
          </a> */}
          <div className="option" >
            <div className="itemContainer,option nav-link home">
           <span> <a href="#intro" >Home</a></span>                     
          </div>

          <div className="itemContainer nav-link about">
           <span>  <a href="#about">AboutMe</a></span>                     
          </div>
          <div className="itemContainer nav-link skills">
           <span>  <a href="#skills">Skills</a></span>                     
          </div>

          <div className="itemContainer nav-link projects">
            <span> <a href="#projects">Projects</a></span>
                     
                  </div>
                   <div className="itemContainer nav-link contact">
            <span> <a href="#contact">Contact</a></span>
          
            
            </div>
               <div id="resume-button-1" className="itemContainer nav-link resume" > 
              {/* <span style={{ display: "flex" }}><GetAppIcon style={{height:"18px",margin:"2px",borderBottom:"none"}}/>  Resume</span>  */}
              <button class="nav-resume-button type1" onClick={handleDownload} style={{fontSize:"18px"}}>RESUME</button>
              {/* onClick={() => window.open("assets/Anburaj-Resume.pdf", "_blank")} */}
          
            
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
