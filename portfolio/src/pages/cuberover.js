import React from 'react'
import { Link } from 'gatsby'
import ProjectCard from '../components/project-card'
import Footer from '../components/footer'
import ProjectHero from '../components/project-hero'
import Paragraph from '../components/paragraph'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <ProjectHero 
      background={require('../images/cuberover-hero.jpg')}
      logo={require('../images/cuberover-logo.png')}
      title="CubeRover TeleOperation Interface"
      description="Creating a user interface for the tele-operation control of the CubeRover. Expected to launch to the Moon in 2021 in collaboration with Astrobotic and NASA using Astrobotic’s Peregrine Lander."
    />
    <div class="ProjectContent">
    	<Paragraph 
	    	category="PROJECT BRIEF"
	    	title="The first 2kg light-weight to ever land on the Moon. 🚀"
	    	description="The Pittsburgh-based company Astrobotic, in partnership with Carnegie Mellon University, has won a NASA Phase II Small Business Innovation Research (SBIR) Award to develop this 4.4-lb. (2 kilograms) rover platform capable of small-scale science and exploration on the moon and other planetary surfaces."
    	/>
    	<div class="full-width-image">
    		<img id="shadow" src={require('../images/rover.png')} />
    	</div>

    	<Paragraph 
	    	category="CHALLENGES"
	    	title="The lunar environment is incredibly hostile and simple mistakes can end the mission."
	    	description="There will be a 3-8 second delay between when the rover transmits data to when we receive it. Also, we can transmit up to 40kbps of data meaning single images take at least 10 seconds of time to transmit on top of the delay. Finally, our rover is very small and may struggle to traverse the terrain and can easily lose sight of the lander."
    	/>


    	<Paragraph 
	    	category="ABSOLUTE LOCALIZATION"
	    	title="Location correction by taking picture of the Peregrine Lander."
	    	description="The rover compresses and crops image from lander to reduce file-size to 41KB (10s of transmission). Then it measurs a distance on the lander which is of a known size and extrapolate that to estimate width of FOV at the lander. It will use the width of the FOV to estimate the rover’s distance from lander. Then it will combine distance with known or estimated rotation data to find absolute location."
    	/>
    	<div class="full-width-image">
    		<img id="shadow" src={require('../images/absolute.png')} />
    	</div>

    	<Paragraph 
	    	category="RELATIVE LOCALIZATION"
	    	title="Location correction by compaing two sets of images."
	    	description="On earth feature recognition is performed on a series of two or more overlapping images sent back from each move the rover makes. From those features we use a Simultaneous Localization And Mapping algorithm to determine how much and in what direction or rotation the rover moved. Each move is added to the last to give a best estimate of our current location relative to the lander."
    	/>
    	<div class="full-width-image">
    		<img id="shadow" src={require('../images/relative.png')} />
    	</div>

  	 	<Paragraph 
	    	category="COMPLETE USE CASES"
	    	title="A set of minimum viable product (MVP) use cases were developed."
	    	description="These use cases include 6 different core features the tele-operations team will require in order to successfully carry out a remote mission."
    	/>
    	<div class="full-width-image">
    		<img id="shadow" src={require('../images/mvp.png')} />
    	</div>

  	 	<Paragraph 
	    	category="SHARED MAP INTERFACE"
	    	title="The map is a shared editable document which allows users to plan and view routes for the rover."
	    	description="Users can indicate hazards or highlight areas of interest. The map is updated real-time to show live progress as the localization software continuously estimates the rover’s position."
    	/>
    	<div class="full-width-image">
    		<img id="shadow" src={require('../images/map.gif')} />
    	</div>

  	 	<Paragraph 
	    	category="TO BE CONTINUED"
	    	title="The project is currently an on-going effort. 🚀"
	    	description="A lot of our progress is protected under NDA. I will release updates as soon as they become available for public sharing. See you soon on the Moon!"
    	/>
    </div>
  	<Footer />
  </Layout>
)

export default IndexPage
