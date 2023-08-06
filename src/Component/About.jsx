import React from 'react'
import img from "../image/ab2.gif"
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-scroll";
export const About = () => {
  return (
    <div className='abtContainer'>
      <div className='ab-img'>
        <img src={img} alt="about-img" />
      </div>


   
      <div className='ab-content' id="user-detail-intro">
        <div className='aboutCap'> 
          <p> <span>ABOUT</span>  ME</p>
        </div> 

     <p>
     An ambitious and dedicated Full Stack Web Developer driven to explore diverse tech 
      stacks and environments prevalent in the industry. Proficient in the MERN stack,
       eager to embark on a rewarding career with an organization that 
      fosters continuous skill improvement and growth in alignment with its objectives.

     </p>

<div className='abtContact'>
    
      <a href="https://www.linkedin.com/in/moumita-sarkar-9ab10318b/" target='__blank'  id="contact-linkedin"><div> <BsLinkedin /></div></a>
  
      <a href="https://github.com/MouS0926" target='__blank' id="contact-github"><div><BsGithub/></div></a>
      <a href="mailto:sarkarmoumita314@gmail.com" id="contact-email"><div><BiLogoGmail/></div></a>
   
 
</div>

      </div>
    </div>
  )
}
