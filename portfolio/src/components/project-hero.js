import React from 'react'

const ProjectHero = props => (
  	<div className="ProjectHero" style={{ backgroundImage: `url(${props.background})`, backgroundPosition: 'center'}}>
      <div className="ProjectHeroContainer">
		<div className="ProjectHeroInfo">
	    	<img className="ProjectHeroLogo" src={props.logo} alt="project hero logo" />
	    	<h1>{props.title}</h1>
	     	<h2>{props.description}</h2>
	    </div>
      </div>
  	</div>
	
)

export default ProjectHero