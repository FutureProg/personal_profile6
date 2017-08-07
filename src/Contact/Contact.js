import React from 'react';

import NavigationBar from '../Navigation/NavigationBar';

import './Contact.css';

class Contact extends React.Component{
	render(){
		return (
			<div id="contact">
				<div className="banner">
					<div style={{position:'absolute',width:'100%',height:'100%',background:'rgba(0,0,0,0.3)'}}></div>
					<div style={{position:'absolute',width:'100%',height:'100%',background:'linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)'}}></div>
					<div className="tagline">
						<h1>Contact</h1>											
						<tag>I <span style={{color:'yellow'}}>love</span> those connections that make this big old world feel like a little village. </tag>
						<div style={{textAlign:'right',paddingRight:'18%'}}><small>&ndash; Gina Bellman </small></div>
					</div>																			
				</div>				
				<NavigationBar/>
				<div className="content">
					<ul>
						<li><p>Email: <a href="mailto:nickmorrison0@gmail.com">nickmorrison09@gmail.com</a></p></li>
						<li><p>Twitter: <a href="http://www.twitter.com/tr3jak">Tr3jak</a></p></li>
						<li><p>Medium: <a href="https://medium.com/@nickolas">@Nickolas</a></p></li>
						<li><p>Github: <a href="https://www.github.com/FutureProg">FutureProg</a></p></li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Contact;