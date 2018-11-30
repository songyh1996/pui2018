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
    </div>
  	<Footer />
  </Layout>
)

export default IndexPage
