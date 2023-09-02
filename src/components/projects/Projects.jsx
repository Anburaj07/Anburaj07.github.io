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

          {/* <div className="features">
            <p>Feature</p>
            <ul>
              <li>Product details getting from backend</li>
              <li>checking login credential using mangodb </li>
            </ul>
          </div> */}

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

          {/* <div className="features">
            <p>Feature</p>
            <ul>
              <li>Can create post</li>
              <li>Can add comments for the posts</li>
              <li>Can like and dislike the post</li>
              <li>Can chat with other users</li>
            </ul>
          </div> */}

          <h4 className="project-tech-stack">Tech Stack</h4>
          <p>
          React | Chakra UI 
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

      {/* <div className="pcards">
        <div className="pimg">
          <img src={"assets/TodoApp.png"} alt="" />
        </div>
        <div className="pinf">
          <h3>Todo App</h3>
          <p>A Basic Todo app to make a todo list for a day.</p>
          <h4>Tech Stack</h4>
          <p>HTML . css . React . Material-UI</p>
          <div className="card_btn">
            <button>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://todo-app-nine-blond.vercel.app/"
              >
                DEMO
              </a>
            </button>
            <button>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/ravi-bala13/Todo-app"
              >
                {" "}
                CODE
              </a>
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}
