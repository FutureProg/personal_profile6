import React from 'react';
import {connect} from 'react-redux';

class Credits extends React.Component{

	render(){
		return (
			<div id="credits">
				<h1>Credits</h1>
				<h3>Banner Photos</h3>
				<a href="https://unsplash.com/@janus?photo=30fTBWZv-2c">Lighthouse</a> by Janus Y on Unsplash<br/>
				<a href="https://unsplash.com/@jaywennington?photo=loAgTdeDcIU">Laptop, Macbook</a> by Jay Wennington on Unsplash<br/>
				<a href="https://unsplash.com/photos/h8nxGssjQXs">Observing Space</a> by Jonatan Pie on Unsplash<br/>
				<a href="https://unsplash.com/photos/XpEIpQ6JDKY">Lightbulbs</a> by Luis Tosta on Unsplash
				<br/><br/>
				<a href="" onClick={()=>this.props.history.goBack()}>&lt; Go Back</a>
			</div>
		)
	}

}

export default connect(null,)(Credits);