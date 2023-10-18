import React, { useEffect } from "react";
import "./about.css";
// import "./about.scss";
// var GitHubCalendar = require("github-calendar")
import GitHubCalendar from 'github-calendar';
import { colors } from "@material-ui/core";
// import ReactGithubCalendar from "react-github-calendar";

export default function About() {
  // or enable responsive functionality:
  const username="Anburaj07"
  useEffect(() => {
    const container = document.querySelector('.react-activity-calendar');
    if (container) {
      console.log('sdfsd')
      GitHubCalendar(username, container, { responsive: true });
    }
  }, [username]);

  return (
    <div className="main about section" id="about">
      <div className="aboutCSS">
        <h1>About</h1>
        <div className="line"></div>
        <div className="parCont">
          <div className="para" id="user-detail-intro">
            <h2>Hi , I am Anburaj</h2>
            🏡 I am from Madurai , TamilNadu.
            <br />
            <br />
            A self-motivated, hard-working, and ambitious Full-Stack Web Developer and a good learner with proficiency in JavaScript,ReactJS,NodeJS. Having a Problem-solving mindset, and 1200+ hrs of hands-on experience in developing fully functional E-commerce applications. Looking forward to working as a developer and competent employee in an exciting tech company.
            {/* Passionate and dedicated aspiring full-stack web developer with a
            specialization in MERN stack.
            <br />
            <br />
            Keen to build and develop high-quality user-friendly platforms by
            using my technical knowledge and skills.
            {/* I am always curious about learning new technologies, and love to
            develop scalable web applications. */}
            <br />
            <br />
            {/* Eager to obtain a challenging position at a dynamic company to
            enhance my learning and contribute to exciting projects.  */}

          </div>
          <div className="parImg">
            <img src="assets/aboutImg.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className="skillsCSS" id="skills">
        <h1 >Languages</h1>
        <div className="line"></div>
        <div className="options">
          <div className="icons">
            <div className="mainCO skills-card">
              <div className="iconContainer">
                <img className="skills-card-img" src={"assets/html5.png"} alt="" />
              </div>
              <div className="name skills-card-name">HTML</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO skills-card">
              <div className="iconContainer">
                <img className="skills-card-img" src={"assets/css3.png"} alt="" />
              </div>
              <div className="name skills-card-name">CSS</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO skills-card">
              <div className="iconContainer">
                <img className="skills-card-img" src={"assets/JavaScript.png"} alt="" />
              </div>
              <div className="name skills-card-name">Javascript</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO skills-card">
              <div className="iconContainer">
                <img className="skills-card-img" src={"assets/React.png"} alt="" />
              </div>
              <div className="name skills-card-name">React</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO skills-card">
              <div className="iconContainer">
                <img className="skills-card-img" src={"assets/redux.png"} alt="" />
              </div>
              <div className="name skills-card-name">Redux</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO skills-card">
              <div className="iconContainer">
                <img className="skills-card-img" src={"assets/typescript.png"} alt="" />
              </div>
              <div className="name skills-card-name">Typescript</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO skills-card">
              <div className="iconContainer">
                <img className="skills-card-img" src={"assets/node.jpg"} alt="" />
              </div>
              <div className="name skills-card-name">Node.js</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO skills-card">
              <div className="iconContainer">
                <img className="skills-card-img" src={"assets/express.png"} alt="" />
              </div>
              <div className="name skills-card-name">Express.js</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO skills-card">
              <div className="iconContainer">
                <img className="skills-card-img" src={"assets/mongodb.png"} alt="" />
              </div>
              <div className="name skills-card-name">MongoDB</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO">
              <div className="iconContainer" id="material-ui">
                <img src={"assets/tailwindCSS.png"} alt="" />
              </div>
              <div className="name">Tailwind-CSS</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO skills-card">
              <div className="iconContainer">
                <img className="skills-card-img" src={"assets/chakra.jpg"} alt="" />
              </div>
              <div className="name skills-card-name">Chakra-UI</div>
            </div>
          </div>

          {/* <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"assets/bitbucket.png"} alt="" />
              </div>
              <div className="name">Bitbucket</div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="skillsCSS" id="tools">
        <h1 >Tools</h1>
        <div className="line"></div>
        <div className="options">
          <div className="icons">
            <div className="mainCO skills-card">
              <div className="iconContainer">
                <img className="skills-card-img" src={"assets/postman.png"} alt="" />
              </div>
              <div className="name skills-card-name">Postman</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO skills-card">
              <div className="iconContainer">
                <img className="skills-card-img" src={"assets/npm.png"} alt="" />
              </div>
              <div className="name skills-card-name">NPM</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO skills-card">
              <div className="iconContainer">
                <img className="skills-card-img" src={"assets/netlify.png"} alt="" />
              </div>
              <div className="name skills-card-name">Netlify</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO skills-card">
              <div className="iconContainer">
                <img className="skills-card-img" src={"assets/github.png"} alt="" />
              </div>
              <div className="name skills-card-name">GIT</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO skills-card">
              <div className="iconContainer">
                <img className="skills-card-img" src={"assets/render.jpg"} alt="" />
              </div>
              <div className="name skills-card-name">Render</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO skills-card">
              <div className="iconContainer">
                <img className="skills-card-img" src={"assets/vercel.png"} alt="" />
              </div>
              <div className="name skills-card-name">Vercel</div>
            </div>
          </div>

        </div>
      </div>

      <div className="about github-cal">
        <h1 style={{textAlign:"center"}}>GitHub Contribution</h1>
        <div className="line"></div>
        <div className="react-activity-calendar">
          {/* <ReactGithubCalendar
            username={"shivakrishnak13"}
            style={{ width: "95%", margin: "auto" }}
            // className="calender-git"
            // classForValue={(value) => `contribution-level-${value.count}`}
          /> */}
          <img src={"assets/calender.PNG"} alt="" />
        </div>
        <div className="github">
        <div >
        <img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=Anburaj07&&hide_border=false&include_all_commits=false&count_private=false" alt="GitHub Stats" />
        </div>
        <div >
        <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com/?user=Anburaj07&hide_border=false" alt="GitHub Stats" />
        </div>
        <div >
        <img id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Anburaj07&hide_border=false&include_all_commits=false&count_private=false&layout=compact" alt="GitHub Stats" />
        </div>
        </div>
      </div>
    </div>
  );
}
