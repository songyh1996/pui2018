import React from 'react'
import { Link } from 'gatsby'
import ProjectCard from '../components/project-card'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
  	<div className="Hero">
  		<div className="HeroGroup">
  			<h1>Carnegie Mellon University '20 <br/> Information Systems + Human-Computer Interaction <br/>User Experience Designer</h1>
   			<h2>Previously @PayPal, Venmo, and Apple.</h2>
  		</div>
  	</div>
  	<div className="Projects">
  		<div className="ProjectsGroup">
  			<ProjectCard 
  				thumbnail={require('../images/my-benefits-thumbnail.png')}
  				title="My Benefits"
  				logo={require('../images/paypal-logo.png')}
  				text="My Benefits offer a comprehensive and easy-to-use dashboard that summarizes all available PayPal benefits for the users."
  				link={'/my-benefits'}
  			/>
  			<ProjectCard 
  				thumbnail={require('../images/my-benefits-thumbnail.png')}
  				title="CubeRover TeleOperation Interface"
  				logo={require('../images/paypal-logo.png')}
  				text="My Benefits offer a comprehensive and easy-to-use dashboard that summarizes all available PayPal benefits for the users."
  				link={'/my-benefits'}
  			/>
  		</div>
  	</div>
  </Layout>
)

export default IndexPage
