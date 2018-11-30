import React from 'react'
import { Link } from 'gatsby'
import ProjectCard from '../components/project-card'
import Footer from '../components/footer'

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
  				thumbnail={require('../images/cuberover-thumbnail.png')}
  				title="CubeRover TeleOperation Interface"
  				logo={require('../images/cuberover-logo.png')}
  				text="Creating a user interface for the tele-operation control of the CubeRover. Expected to launch to the Moon in 2020 in collaboration with Astrobotic and NASA using Astrobotic’s Peregrine Lander."
  				link={'/cuberover'}
  			/>
  			<ProjectCard 
  				thumbnail={require('../images/refer-a-friend-thumbnail.png')}
  				title="Refer a Friend"
  				logo={require('../images/paypal-logo.png')}
  				text="Refer a Friend is a revival of PayPal's legendary friend invitation program. It still is the most effective and organic way to increase the PayPal user base."
  				link={'/refer-a-friend'}
  			/>
  			<ProjectCard 
  				thumbnail={require('../images/venmo-thumbnail.png')}
  				title="Rediscovering the Users"
  				logo={require('../images/venmo-logo.png')}
  				text="In order to identify the most effective value proposition for each of the user segments and to guide their innovation strategies, I've conduced an analysis on Venmo's value proposition testings and user segmentation research."
  				link={'/venmo'}
  			/>
  		</div>
  	</div>
  	<Footer />
  </Layout>
)

export default IndexPage
