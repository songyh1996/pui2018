import React from 'react'
import Footer from '../components/footer'
import AboutHero from '../components/about-hero'
import Paragraph from '../components/paragraph'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <AboutHero 
      background={require('../images/about.jpg')}
      title="About Me"
      description="Carnegie Mellon University B.S. in Information Systems, double major in Human-Computer Interaction. Class of May 2020"
    />
    <div className="ProjectContent">
  	 	<Paragraph 
	    	category="WELCOME."
	    	title="I'm a UX designer and a design strategist from Carnegie Mellon University."
	    	description="Core guiding principle of my design is to strike the balance between user goals and business goals. While users must be considered first in every design process, business goals must also be taken into consideration in order for the product to create true impact. These business goals include monetization strategies, market analysis, and market strategies. As a design strategist, I also like to focus on envisioning a holistic product ecosystem, where individual features make up a product, and each products work in unison to compose a powerful ecosystem with synergistic influences in people's lives."
    	/>
    </div>
  	<Footer />
  </Layout>
)

export default IndexPage
