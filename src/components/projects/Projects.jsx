import React from "react";
import "./projects.css";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
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

      <div className="pcards">
        <div className="pimg">
          <img src={"assets/faballey.png"} alt="" />
        </div>
        <div className="pinf">
          <h3>Faballey</h3>
          <p>We had to clone the faballey.com, which is e-commerce website.</p>

          <div className="features">
            <p>Feature</p>
            <ul>
              <li>Product page having sorting function</li>
              <li>Product details page having addto cart funtionality</li>
              <li> Shopping cart</li>
            </ul>
          </div>

          <h4>Tech Stack</h4>
          <p>
            HTML5 . CSS3 . Javascript(ES6) . React . Redux . Mongoose . Express{" "}
          </p>
          <div className="card_btn">
            <button>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://faballey-clone-project.vercel.app/"
              >
                DEMO
              </a>
            </button>
            <button>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Sachi4496/faballey-clone"
              >
                {" "}
                CODE
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="pcards">
        <div className="pimg">
          <img src={"assets/pepperfry1.jpg"} alt="" />
        </div>
        <div className="pinf">
          <h3>Pepperfry</h3>
          <p>
            We had to clone the pepperfry.com website. We have tried to clone
            the pixel-perfect website and Implemented the back-end of the clone
          </p>

          <div className="features">
            <p>Feature</p>
            <ul>
              <li>Product details getting from backend</li>
              <li>checking login credential using mangodb </li>
            </ul>
          </div>

          <h4>Tech Stack</h4>
          <p>HTML5 . CSS3 . JavaScript . MongoDb . Mongoose . Express</p>
          <div className="card_btn">
            <button>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://pepperfry-clone-project.vercel.app/"
              >
                DEMO
              </a>
            </button>
            <button>
              <a
                target="_blank"
                href="https://github.com/ravi-bala13/pepperfryCloneProject"
              >
                {" "}
                CODE
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="pcards">
        <div className="pimg">
          <img src={"assets/FeedApp.png"} alt="" />
        </div>
        <div className="pinf">
          <h3>Feed App</h3>
          <p>A Social media kind of platform.</p>

          <div className="features">
            <p>Feature</p>
            <ul>
              <li>Can create post</li>
              <li>Can add comments for the posts</li>
              <li>Can like and dislike the post</li>
              <li>Can chat with other users</li>
            </ul>
          </div>

          <h4>Tech Stack</h4>
          <p>
            HTML . css . React . Material-UI . NodeJs . MongoDB . Express .
            BootStrap
          </p>
          <div className="card_btn">
            <button>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://feed-app-react.vercel.app/"
              >
                DEMO
              </a>
            </button>
            <button>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/ravi-bala13/FeedAppReact"
              >
                {" "}
                CODE
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="pcards">
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
      </div>
    </div>
  );
}
