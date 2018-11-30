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
      background={require('../images/refer-a-friend-hero.png')}
      logo={require('../images/paypal-logo.png')}
      title="Refer a Friend"
      description="Refer a Friend is a revival of PayPal's legendary friend invitation program. It still is the most effective and organic way to increase the PayPal user base. I had the chance to recreate the core friend referral experience for the native PayPal mobile application."
    />

    <div class="ProjectContent">
    	<Paragraph 
	    	category="PROJECT BACKGROUND"
	    	title="The legendary PayPal referral program has been reincorporated into the brand new PayPal app."
	    	description="PayPal's referral program has brought up PayPal since its beginning. From the initial user base of 24 people, the referral program achieved 7% daily growth with a cost of $20 per acquired user. The user base doubled every 10 days since the introduction of the referral program, and PayPal managed to attract thousands of users in just five months."
    	/>
    	<div class="mobile-width-image">
    		<img src={require('../images/refer-a-friend.gif')} />
    	</div>

    	<Paragraph 
	    	category="PROJECT SCOPE"
	    	title="Brand new design language, a new home for the referral program."
	    	description="Previous development of the Refer a Friend experience was outsourced to a third-party developer, and it was not consistent with PayPal's new design language which launched in 2015.

	    	The Value Added Commerce team decided to make a strategic move of reincorporating the friend referral program with the new PayPal design pushed in early 2016, and to enhance the friend referral distribution stream."
    	/>
    	<div class="full-width-image">
    		<img id="shadow" src={require('../images/refer-a-friend-history.png')} />
    	</div>

    	<Paragraph 
	    	category="PROCESS"
	    	title="Competitive analysis"
	    	description="First, I conducted a competitive analysis on other friend referral programs of other services that achieved similar type of organic viral growth. This allowed me to get a sense of the different referral distribution streams and decide which ones are popular these days and what's outdated."
    	/>
    	<div class="full-width-image">
    		<img id="shadow" src={require('../images/competitive-analysis.jpg')} />
    	</div>

    	<Paragraph 
	    	category=""
	    	title="User flow"
	    	description="PayPal friend referral program is dependent on a 'Member-Get-Member' (MGM) Promotion. Only when the MGM promotion is active will the user receive the $25 PayPal credit for each sign ups. To compensate for this limitation, I carefully constructed a user flow which includes the MGM Promotion variation and also the different referral distribution streams."
    	/>
    	<div class="full-width-image">
    		<img id="shadow" src={require('../images/user-flow.png')} />
    	</div>

    	<Paragraph 
	    	category=""
	    	title="Hi-fi wireframe workflow"
	    	description="After I finalized the hi-fi wireframes, I organized the wireframes into the workflow format, so that I could present the product to other designers and engineers and explain how the product works logically and effectively."
    	/>
    	<div class="full-width-image">
    		<img id="shadow" src={require('../images/hi-fi.png')} />
    	</div>


    	<Paragraph 
	    	category="EMAIL INVITE"
	    	title="Easily add multiple recipients and bulk-send email invites to your contacts."
	    	description=""
    	/>
    	<div class="mobile-width-image">
    		<img src={require('../images/email.gif')} />
    	</div>

    	<Paragraph 
	    	category="COPY LINK"
	    	title="Same referral link. Two ways to copy the referral."
	    	description=""
    	/>
    	<div class="mobile-width-image">
    		<img src={require('../images/copy.gif')} />
    	</div>

    	<Paragraph 
	    	category="SOCIAL MEDIA"
	    	title="Influential? Let your referrals make a real difference for you."
	    	description=""
    	/>
    	<div class="mobile-width-image">
    		<img src={require('../images/social.gif')} />
    	</div>

    	<Paragraph 
	    	category="REWARD TRACKING"
	    	title="Track your rewards easily. Earn your $25 effortlessly."
	    	description=""
    	/>
    	<div class="mobile-width-image">
    		<img src={require('../images/reward.gif')} />
    	</div>

    </div>
  	<Footer />
  </Layout>
)

export default IndexPage
