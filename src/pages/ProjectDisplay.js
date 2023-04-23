import React from 'react'
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube'; 
import "../styles/ProjectDisplay.css";


function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return <div className="project">
    <h1>{project.name}</h1>
    <img src={project.image} />
    <p><b>Skills:</b> {project.skills}</p>
    <p><b>Link: </b> {project.code}</p>
    <p><b>Demo: </b> {project.demo}</p>

    <div className="social-icons">
      <a href={project.youtube} rel="noopener noreferrer" target="_blank">
      <YouTubeIcon />
      </a>

      <a href={project.github} rel="noopener noreferrer" target="_blank">
      <GitHubIcon />
      </a>
    </div>

  </div>;
  
}

export default ProjectDisplay;