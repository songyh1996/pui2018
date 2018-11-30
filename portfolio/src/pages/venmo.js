import React from 'react'
import Footer from '../components/footer'
import ProjectHero from '../components/project-hero'
import Paragraph from '../components/paragraph'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <ProjectHero 
      background={require('../images/venmo-hero.jpg')}
      logo={require('../images/venmo-logo.png')}
      title="Rediscovering the Users"
      description="Refer a Friend is a revival of PayPal's legendary friend invitation program. It still is the most effective and organic way to increase the PayPal user base. I had the chance to recreate the core friend referral experience for the native PayPal mobile application."
    />
    <div className="ProjectContent">
		<Paragraph 
	    	category="PROBLEM STATEMENT"
	    	title="Venmo needs a clear communication hierarchy for effective marketing, and a new set of personas to drive innovation and future strategies."
	    	description="Venmo was at a pivotal stage of coming up ways to generate profit. To do so, Venmo needed to establish a clear line of communication for marketing purposes, and a new set of personas to reflect their current users and to decide future product development pipeline. I've synthesized the results in two different ways: one by the value proposition types, and the other by consumer segmentation. This resulted in a more insightful research results, going well above sample message engagement rates, about each segments' holistic views and opinions about the value proposition themselves."
    	/>
    	<Paragraph 
	    	category="RESEARCH PROMPTS"
	    	title="I performed two different types of user research analysis for Venmo, each with a different purpose."
	    	description=""
    	/>
    	<div className="two-column-grid">
    		<Paragraph 
	    	category="RESEARCH #1 - QUALITATIVE"
	    	title="Which Venmo value propositions resonate well with whom?"
	    	description="The goal of the value proposition research was to establish an optimal communication hierarchy with the aim of making the users choose Venmo over other competitors. My task was to analyze the research done by The Sound, and to come up with possible consumer segmentation and strategies for each of those segments."
    		/>
    		<Paragraph 
	    	category="RESEARCH #2 - QUANTITATIVE"
	    	title="Who are the people that use Venmo? What are they like?"
	    	description="The goal of Venmo persona research analysis was to use the quantitative data points to define Venmo's persona set. We surveyed over 1,000 users on their opinions about various fintech features, graphed their preference ratings and grouped them by different filters such as gender, occupation, income, and more."
    		/>
    	</div>

		<Paragraph 
	    	category="RESEARCH #1"
	    	title="Which Venmo value propositions resonate well with whom?"
	    	description="The value proposition testing was executed by The Sound to discover how the users react to each of the value propositions. The research was conducted based on sample messaging prompts for each value propositions. Test was conducted on 14 Venmo users and 14 non-Venmo users by asking each users their opinions on each of the value proposition prompts. Comments on the prompts helped us to improve the wordings and the messaging of the prompts for better ad-targeting and marketing performances, but the synthesis helped us gather a better understanding of which values each of the segments believe in the most and why, giving us a guidance on future product development pipeline and innovation strategies."
    	/>

		<Paragraph 
	    	category="PROCESS"
	    	title="Synthesis by value proposition types"
	    	description="Four value propositions have been tested. The four value propositions were Fun & Social, Control, Ease & Convenience, and Safety. Fun & Social was the most effective value proposition overall, but it posed an interesting dilemma where it also performed the most poorly among some people, based on their segments."
    	/>
    	<div className="full-width-image">
    		<img src={require('../images/scale.png')} alt="value proposition scale" />
    	</div>


		<Paragraph 
	    	category=""
	    	title="Affinity diagramming"
	    	description="I've analyzed the research done by The Sound using affinity diagram. It helped Venmo understand how the current-users and non-current users differ in their financial behaviors and what they expect from Venmo as a financial platform."
    	/>
    	<div className="full-width-image">
    		<img src={require('../images/affinity.jpg')} alt="affinity diagram" />
    	</div>



		<Paragraph 
	    	category="RESEARCH #2"
	    	title="Who are the people that use Venmo? What are they like?"
	    	description="Consumer segmentation research is based on quantitative data points. Venmo conducted interviews with over 1,000 interviewees on their preferences towards a set of fintech features that came up in a sprint session. I analyzed the raw data and charts to elaborate on the five consumer segments which were derived from PayPal's Consumer Segmentation Research 2016, and synthesized on their financial personalities to develop a customized Venmo's core personas in the future, and to decide on Venmo's future product development strategies."
    	/>

		<Paragraph 
	    	category="PROCESS"
	    	title="Quantitative data synthesis"
	    	description="Base demographics establishment. Venmo has established a basic set of facts about the five segments they used prior to the quantitative interview. The initial five segments were derived from PayPal's Consumer Segmentation Research 2016. I have written key facts about these segments and started an affinity diagram."
    	/>

		<Paragraph 
	    	category=""
	    	title="Fintech feature catalog"
	    	description="These 36 fintech features were selected for interviewing. They were brainstormed during Venmo's design sprint session, in an effort to determine future product innovation strategies."
    	/>
   		<div className="full-width-image">
    		<img id="shadow" src={require('../images/fintech.png')} alt="fintech survey results" />
    	</div>


		<Paragraph 
	    	category=""
	    	title="Data management"
	    	description="Interview responses were recorded on a scale of 1-7, with 1 being low engagement and 7 being high engagement. Over thousand responses were recorded."
    	/>
   		<div className="full-width-image">
    		<img src={require('../images/excel.png')} alt="interview excel response records" />
    	</div>

		<Paragraph 
	    	category=""
	    	title="Response graphing"
	    	description="I proceeded with pattern analysis. Our team has graphed the responses with features on the x-axis and the engagement points on the y-axis, and with each line representing the segmentation we initially defined. The most exciting part of this analysis, which also yielded the most valuable insight was to identify the deviations from the common pattern, and to track down why those deviations were happening, and who the people were that caused the deviation."
    	/>
   		<div className="full-width-image">
    		<img id="shadow" src={require('../images/graph.png')} alt="response graphing" />
    	</div>

   	</div>
  	<Footer />
  </Layout>
)

export default IndexPage
