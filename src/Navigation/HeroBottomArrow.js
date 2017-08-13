import React from 'react';
import ReactDOM from 'react-dom';

class HeroBottomArrow extends React.Component{

	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);		
	}

	onClick(){
		const trgt = ReactDOM.findDOMNode(document.getElementsByClassName("content")[0]);
		if(!trgt || this.interval != null)return;			
		var start = window.scrollY;
		const end = Math.min(trgt.offsetTop, document.body.scrollHeight - window.innerHeight);
		this.interval = window.setInterval(()=>{
			const delta = Math.abs(end - start) * 0.05;
			start = start + delta;			
			window.scrollTo(window.scrollX,start);
			if(start >= end-2){
				window.clearInterval(this.interval);
				this.interval = null;
			}
		},1);
	}

	render(){
		return (
		<div className="bottom-arrow" onClick={this.onClick}>
			<svg width="50" height="50" viewBox="0 0 2 1" fill="none">
				<polyline points="0 0 1 1 2 0" stroke="#FFFFFF" strokeWidth="0.05" strokeLinejoin="round" strokeLinecap="round"/>
			</svg>
		</div>
		)
	}


}

export default HeroBottomArrow;