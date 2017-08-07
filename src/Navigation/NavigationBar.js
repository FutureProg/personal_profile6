import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import 'material-design-icons';
import './NavigationBar.css';

class NavigationBar extends React.Component{
	render(){
		return (
			<div id="navigation-bar">
				<ul>
					<li>
						<NavLink activeClassName="active" exact to="/">						
						<span>Home</span>
						</NavLink>
					</li>					
					<li>
						<NavLink to="/design">						
							<span>Design</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/code">
							<span>Code</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/contact">
							<span>Contact</span>
						</NavLink>
					</li>
				</ul>
			</div>
		)
	}

}

const mapStateToProps = state =>({
	loacation: state.routing.location
})

export default connect(mapStateToProps)(NavigationBar);