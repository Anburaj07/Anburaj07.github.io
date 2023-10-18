import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import resume from "../Resume/Anburaj-Resume.pdf"

import DescriptionIcon from "@material-ui/icons/Description";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Software Engineer", "Full-Stack Web Developer"],
    });
  }, []);

  const handleDownload = async() => {

    const response= await fetch("assets/Anburaj-Resume.pdf");
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);

    
    const link = document.createElement('a');
    link.id='resume-link-2'
    link.href = blobUrl;
    link.target = '_blank';
    link.setAttribute('download', 'Anburaj-Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);    
    window.open(blobUrl, '_blank');
  };

  return (
    <div className="intro" id="intro" >
      <div className="right1">
        <div className="wrapper" style={{color:"whitesmoke"}}>
          <h2 >
            Hi There, I'm{" "}
            <span style={{ height: "20px", width: "20px"}}>
              <img
                style={{ height: "30px" }}
                src="https://twemoji.maxcdn.com/2/72x72/1f44b.png"
                alt=""
              />
            </span>
          </h2>
          <h1 id="user-detail-name" className="my-name" >Anburaj</h1>
          <h3 >
            a <span ref={textRef}></span>
          </h3>
          <h3 style={{ marginTop: "10px",color:"#E0E0E0" }}>I'm from Madurai, TamilNadu</h3>
          <button
          id="resume-button-2"
            className="btn"
            onClick={handleDownload}            
          >
            Resume 
          </button>
        </div>
      </div>
      <div className="left1">
        <div className="imgContainer ">
          <img className="home-img" src="assets/myPhoto.png" alt="" />
        </div>
      </div>
    </div>
  );
}
