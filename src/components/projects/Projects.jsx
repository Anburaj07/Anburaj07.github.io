import React from "react";
import "./projects.css";

export default function Projects() {
  return (
    <div className="projectsCSS" id="projects">
      <h1 style={{color:"#F5F5F5"}}>Projects</h1>
      <div className="line"></div>
      {/* <div className="pcards">
        <div className="pimg">
          <img src={"assets/fashanova1.JPG"} alt="" />
        </div>
        <div className="pinf">
          
          <h3>Fashanova.com(clone)</h3>
          <p>We had to clone a Fashanova.com, which is e-commerce website.</p>

          <div className="features">
            <p>Feature</p>
            <ul>
              <li>Sign-in/Sign-up</li>
              <li>Clothes gallery based on age and gender</li>
              <li>Add products to a shopping bag</li>
            </ul>
          </div>

          
          <h4>Tech Stack</h4>
          <p>HTML5 . CSS3 . JAVACRIPT</p>
          <div className="card_btn">
            <button>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://mehtab39.github.io/projectfashionnova/root/index.html"
              >
                DEMO
              </a>
            </button>
            <button>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/mehtab39/projectfashionnova"
              >
                {" "}
                CODE
              </a>
            </button>
          </div>
        </div>
      </div> */}

      <div className="pcards project-card">
        <div className="pimg">
          <img src={"assets/Trado.png"} alt="" />
        </div>
        <div className="pinf">
          <h3 className="project-title">Trado</h3>
          <p className="project-description">An e-commerce platform where you can browse diverse clothing categories, utilize sorting and filtering, and effortlessly add items to your cart make payment methods seamlessly</p>

          {/* <div className="features">
            <p>Feature</p>
            <ul>
              <li>Product page having sorting function</li>
              <li>Product details page having addto cart funtionality</li>
              <li> Shopping cart</li>
            </ul>
          </div> */}

          <h4 className="project-tech-stack">Tech Stack</h4>
          <p >
            HTML5  | CSS3  | Javascript 
          </p>
          <div className="card_btn">
            <button className="project-deployed-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://647a0037bb188e11f328ebc9--subtle-phoenix-ecd1f2.netlify.app/"
              >
                DEMO
              </a>
            </button>
            <button className="project-github-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Anburaj07/concerned-angle-3494"
              >
                {" "}
                CODE
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="pcards project-card">
        <div className="pimg">
          <img src={"assets/Travelo.png"} alt="" />
        </div>
        <div className="pinf">
          <h3 className="project-title">Travelo</h3>
          <p className="project-description">
          A website for a travel agency that features stunning destinations and tour packages from around the world. It enables individuals to book their dream destinations within their budgets.
          </p>

          <h4 className="project-tech-stack">Tech Stack</h4>
          <p>HTML5  | CSS3  | Javascript | Bootstrap</p>
          <div className="card_btn">
            <button className="project-deployed-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://vogue-pocket-8479-sooty.vercel.app/"
              >
                DEMO
              </a>
            </button>
            <button className="project-github-link">
              <a
                // target="_blank"
                href="https://github.com/Anburaj07/vogue-pocket-8479"
              >
                {" "}
                CODE
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="pcards project-card">
        <div className="pimg">
          <img src={"assets/CareMe.png"} alt="" />
        </div>
        <div className="pinf">
          <h3 className="project-title">Care Me</h3>
          <p className="project-description">An innovative online doctor appointment platform that empowers users to find and schedule appointments with specialist doctors from various medical fields conveniently
             </p>

          <h4 className="project-tech-stack">Tech Stack</h4>
          <p>
          React | Chakra UI | HTML5  | CSS3  | Javascript
          </p>
          <div className="card_btn">
            <button className="project-deployed-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://tested-bulb-6829.vercel.app/"
              >
                DEMO
              </a>
            </button>
            <button className="project-github-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Anburaj07/tested-bulb-6829"
              >
                {" "}
                CODE
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="pcards project-card">
        <div className="pimg">
          <img src={"assets/Quickloan.png"} alt="" />
        </div>
        <div className="pinf">
          <h3 className="project-title">Quick loan</h3>
          <p className="project-description">Your trusted online hub for diverse loan options with competitive rates and a hassle-free application process, ensuring financial support tailored to your needs
             </p>

          <h4 className="project-tech-stack">Tech Stack</h4>
          <p>
          React | Chakra UI | Redux | HTML5  | CSS3  | Javascript 
          </p>
          <div className="card_btn">
            <button className="project-deployed-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://quickloan-app.vercel.app/"
              >
                DEMO
              </a>
            </button>
            <button className="project-github-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Anburaj07/parsimonious-clover-8073"
              >
                {" "}
                CODE
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="pcards project-card">
        <div className="pimg">
          <img src={"assets/PrepareBePro.png"} alt="" />
        </div>
        <div className="pinf">
          <h3 className="project-title">PrepareBePro</h3>
          <p className="project-description">Transforming interview preparation with an integrated OpenAI platform for seamless skill-building
             </p>

          <h4 className="project-tech-stack">Tech Stack</h4>
          <p>
          React | TypeScript | Tailwind CSS | Spring Boot  | Core Java 
          </p>
          <div className="card_btn">
            <button className="project-deployed-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://byte-wave-sand.vercel.app/"
              >
                DEMO
              </a>
            </button>
            <button className="project-github-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Anburaj07/PrepareBePro"
              >
                {" "}
                CODE
              </a>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
