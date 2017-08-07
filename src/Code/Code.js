import React from 'react';
import NavigationBar from '../Navigation/NavigationBar';

import './Code.css';

class Code extends React.Component{
	render(){
		return (
			<div id="code">
				<div className="banner">
					
					<div style={{position:'absolute',width:'100%',height:'100%',background:'linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)'}}></div>
					<div className="tagline">
						<h1>Code</h1>
						<tag><i>"Always code as if the guy who ends up maintaining your code will be a
violent psychopath who knows where you live.  Code for <span style={{color:'yellow'}}>readability</span>."</i></tag>
						<div style={{textAlign:'right',paddingRight:'18%'}}><small>&ndash; <a href="https://groups.google.com/d/msg/comp.lang.c++/rYCO5yn4lXw/oITtSkZOtoUJ">John F Woods</a></small></div>
					</div>					
				</div>
				<NavigationBar/>
				<div className="content">
					<h2>My Work</h2>
					<ul>
						<li>
							<p><a href="https://www.github.com/FutureProg/Caster">Caster</a> &nbsp; - An audio sharing platform focused on Podcasts. Currently features a website and an android app.</p>
						</li>
						<li>
							<p><a href='https://github.com/FutureProg/GeneticsSimulation'>Genetics Simulation</a> &nbsp; - A java app I created in high school that simulates genetic traits being passed down through generations.</p>
						</li>
						<li>
							<p><a href="https://github.com/FutureProg/LocalCommunities">Local Communities</a> &nbsp; - A Firebase Android App that allows you to communicate with the communities of people in your area</p>
						</li>							
					</ul>
				</div>
			</div>
		)
	}
}

export default Code;