import React from "react";
import "./contact.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

export default function Contact() {
  return (
    <div className="main" id="contact">
      <div className="contactCSS">
        <h1>Contact</h1>
        <div className="line"></div>
        <div className="contact_inf">
          <div className="parag">
            <h2>Just say Hi</h2>
            <p>
            Open for collaboration and eager to explore projects or brainstorm fresh concepts.
            </p>
            <p> Let's connect and craft remarkable solutions that bring your vision to life.</p>

            <div className="contact_icon">
              <div className="call" id="contact-phone">
                <div>Call me at: <span style={{color:"white"}}>8778118819</span></div>
              </div>
              <div className="call" id="contact-email">
                <div>Mail me at: <span style={{color:"white"}}>anburaj2203@gmail.com</span></div>
              </div>
            </div>
            <div className="icoL">
              <div className="icoL_icon">
                <a href="mailto:anburaj2203@gmail.com">
                  <EmailIcon style={{ width: "60px", height: "50px" }} />
                </a>
              </div>

              <div id="contact-linkedin" className="icoL_icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/anburaj-s-551bba18a/"
                >
                  <LinkedInIcon style={{ width: "60px", height: "50px" }} />
                </a>
              </div>

              <div id="contact-github" className="icoL_icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Anburaj07"
                >
                  <GitHubIcon style={{ width: "60px", height: "45px" }} />
                </a>
              </div>
            </div>
          </div>
          {/* <div className="gif">
            <img src={"assets/email1.gif"} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
