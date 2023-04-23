import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home"> 
      <div className="about"> 
        <h2> Hi, My Name is Gurmol  </h2>
        <div className="prompt"> 
          <p> 
            I am a Data Scientist with a Biology background who is passionate about learning and coding.
            </p> 
            
            <a href="https://www.linkedin.com/in/gurmol-s/" rel="noopener noreferrer" target="_blank">
            <LinkedInIcon /> 
            </a>

            <a href= "mailto:gurmolsofly12@gmail.com" rel="noopener noreferrer" target="_blank">
            <EmailIcon />
            </a>
           
            <a href= "https://github.com/gu12934" rel="noopener noreferrer" target="_blank">
            <GithubIcon />
            </a>
          </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJS, HTML, CSS, NPM, Yarn</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, MySQL, MongoDB, MS SQL</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span> JavaScript, Python, R </span>
          </li>

        </ol>
      </div>
    </div>
  );
}

export default Home