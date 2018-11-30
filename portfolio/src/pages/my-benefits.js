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
      background={require('../images/my-benefits-hero.png')}
      logo={require('../images/paypal-logo.png')}
      title="My Benefits"
      description="My Benefits offer a comprehensive and easy-to-use dashboard that summarizes all available PayPal benefits for the users. It aims to increase user engagement with various PayPal benefits."
    />
    <div class="ProjectContent">
    	<Paragraph 
	    	category="PROBLEM STATEMENT"
	    	title="Many consumers displayed confusion towards PayPal’s benefits."
	    	description="According to PayPal's 2016 Consumer Segmentation research, many consumers think that PayPal is confusing because of the fragmented experience, making it difficult for the existing and non-users to discover and fully realize the benefits of using PayPal as their primary payment method. Solving this issue is expected to increase the onboarding figures and engagement rate for PayPal."
    	/>
    	<Paragraph 
	    	category="PROJECT SCOPE"
	    	title="I was tasked to create modules that accommodate for the three possible user types: potential, new, and existing users."
	    	description="2016 PayPal Consumer Segmentation Research Data Distillation revealed a total of six major consumer segmentation within the PayPal user base. Among the six segments, I selected three highest performing consumer segments to tailor the My Benefits experience to."
    	/>
    	<Paragraph 
	    	category="USER RESEARCH"
	    	title="I analyzed PayPal's 2016 Consumer Segmentation research data to fully understand where the confusion was coming from."
	    	description="2016 PayPal Consumer Segmentation Research Data Distillation revealed a total of six major consumer segmentation within the PayPal user base. Among the seven segments, I selected three highest performing consumer segments to tailor the My Benefits experience to."
    	/>
    	<Paragraph 
	    	category="RESEARCH FOCUS"
	    	title="Top 3 Customer Segments"
	    	description="The top 3 customer segments were selected by two metrics: monthly discretionary spending and PayPal usage."
    	/>
    	<div class="full-width-image">
    		<img src={require('../images/customer-segments.png')} />
    	</div>

    	<Paragraph 
	    	category="SYNTHESIS CONCLUSION"
	    	title="A coherent theme present across the three segments."
	    	description="A coherent theme present across the three segments was that they would appreciate convenient ways to see multiple financial options and advice that would help them make better financial decisions."
    	/>
    	<div class="full-width-image">
    		<img src={require('../images/synthesis-conclusion.png')} />
    	</div>


    	<Paragraph 
	    	category="PROJECT DIRECTION"
	    	title="Create a cohesive dashboard with all of PayPal benefits."
	    	description="Based on the segmentation synthesis results, we decided to create a dashboard that would help users discover new benefits, track their benefits' progress, and to easily activate / deactivate particular benefits."
    	/>

    	<Paragraph 
	    	category=""
	    	title="Feature Hierarchy"
	    	description="I first identified all types of available PayPal benefits, and explored the different sub-elements for each of the benefits. For example, Purchase Protection feature would consist of several sub-elements such as: enrollment status, open a dispute and dispute progress. The features were then customized with the three types of users in mind: Potential, New, and Existing."
    	/>
    	 <div class="full-width-image" id="shadow">
    		<img src={require('../images/feature-hierarchy.png')} />
    	</div>


    	<Paragraph 
	    	category=""
	    	title="My Benefits Module Designs"
	    	description="My Benefits page includes multiple modules that each represent a single PayPal benefit. The modules include real-time data and actionable CTAs to allow management of your PayPal benefits."
    	/>
    	 <div class="full-width-image">
    		<img src={require('../images/module-designs.png')} />
    	</div>

    	<Paragraph 
	    	category="FINAL PRODUCT"
	    	title="The go-to dashboard for all PayPal benefits."
	    	description="Pay After Delivery. Purchase Protection. Free Return Shipping."
    	/>
    	<div class="full-width-image">
    		<img src={require('../images/my-benefits-final.gif')} />
    	</div>
    </div>
  	<Footer />
  </Layout>
)

export default IndexPage
