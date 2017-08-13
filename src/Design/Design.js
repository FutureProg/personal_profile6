import React from 'react';

import NavigationBar from '../Navigation/NavigationBar';
import HeroBottomArrow from '../Navigation/HeroBottomArrow';

import './Design.css';

class Design extends React.Component{
	render(){
		return (
			<div id="design">
				<div className="banner">
					<div style={{position:'absolute',width:'100%',height:'100%',background:'rgba(0,0,0,0.3)'}}></div>
					<div style={{position:'absolute',width:'100%',height:'100%',background:'linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)'}}></div>
					<div className="tagline">
						<h1>Design</h1>
						<tag><i>"When creating content, be <span style={{color:'yellow'}}>empathetic</span> above all else. Try to live the lives of your audience."</i></tag>
						<div style={{textAlign:'right',paddingRight:'18%'}}><small>&ndash; Rand Fishkin, Founder at Moz</small></div>
					</div>
					<HeroBottomArrow/>
				</div>
				<NavigationBar/>

				<div className="content">
					<h2>My Work</h2>
					<h3> Case Studies </h3>
					<p> Reviews and improvements for already existing products <br/> &mdash; coming soon &mdash; </p>										
					<h3> Design Experiments </h3>
					<p>Ideas for new UI components and UX conventions</p>					
					<ul>
						<li><a href="https://medium.com/@nickolas/ux-floating-navigation-button-64a4f42a7c84">Floating Navigation Button</a>
						&nbsp; - my first experiment, and a possible alternate to tab navigation
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Design;