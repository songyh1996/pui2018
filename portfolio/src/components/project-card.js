import React from 'react'
import { Link } from 'gatsby'



const ProjectCard = props => (
	<div className="Project-Card">
		<Link to={props.link}><img id="project-card-thumbnail" src={props.thumbnail} alt="project thumbnail"/></Link>
		<div id="project-card-title"><h3>{props.title}</h3></div>
		<div id="project-card-logo-container"><img id="project-card-logo" src={props.logo} alt="project logo"/></div>
		<p className="Project-Card-Description">{props.text}</p>
		<Link id="view-project" to={props.link}>View Project →</Link>
	</div>
)

export default ProjectCard