import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

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

  return (
    <div className="intro" id="intro" >
      <div className="right">
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
            onClick={() =>
              window.open("assets/Anburaj-Resume.pdf", "_blank")
            }
          >
            <span>
              <DescriptionIcon style={{ height: "17px", width: "20px" }} />
            </span>
            Resume
          </button>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
      <div className="left">
        <div className="imgContainer ">
          <img className="home-img" src="assets/myPhoto.png" alt="" />
        </div>
      </div>
    </div>
  );
}
