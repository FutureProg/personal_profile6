import React from 'react';
import {connect} from 'react-redux';

import NavigationBar from '../Navigation/NavigationBar';
import HeroBottomArrow from '../Navigation/HeroBottomArrow';

import './Home.css';
import LightHouse from '../img/lighthouse.jpg';
import ProfilePic from '../img/profile.jpg';

class Home extends React.Component{
	render(){
		return (
			<div id="home">
				<div className="banner" style={{backgroundImage:LightHouse}}>
					<div style={{position:'absolute',width:'100%',height:'100%',background:'rgba(0,0,0,0.3)'}}></div>
					<div className="tagline">
						<h1>Nickolas Morrison</h1>
						<tag>UX Designer, Software Developer</tag>
					</div>								
					<HeroBottomArrow/>			
				</div>
				<NavigationBar/>

				<div className="content">
					<h2> About </h2>
					<img src={ProfilePic} alt="Nick Morrison" style={{opacity:'0.75', float:'left',marginRight:'20px'}} width="12%"/>
					<p>
						My name is Nickolas Morrison. I'm a third year Computer Science student specializing in Business Informatics at McMaster University.
						I have a strong passion for technology and its advancement, including how it can be integrated in our society through government,
						health, and education. My dream is to create technology and services that can impact humanity on a global scale. With over six
						years of mobile, desktop, and web programming under my belt (as well as my knowledge of the tech industry) I am still learning what I
						need in order to accomplish that goal. I believe that one day, I can do it.	
					</p>
					<p>
						
					</p>					
				</div>
			</div>
		)
	}
}
export default connect(null)(Home);