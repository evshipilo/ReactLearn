import React from 'react';
import {IncreaseBtn} from '../component3/component3';
import {DecreaseBtn} from '../component4/component4';
import {ResetBtn} from '../component5/component5';

export class Counter extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			count: 0
		}
		this.handleIncrease = this.handleIncrease.bind(this);
		this.handleDecrease = this.handleDecrease.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}

	handleIncrease(){
		this.setState((state)=>({count : state.count + 1}))
	}

	handleDecrease(){
		this.setState((state)=>({count : state.count - 1}))
	}

	handleReset(){
		this.setState((state)=>({count : 0}))
	}


	render() {
		return (
			<>
		<div>{this.state.count}</div>
				<IncreaseBtn increase={this.handleIncrease} />
				<DecreaseBtn decrease={this.handleDecrease} />
				<ResetBtn reset={this.handleReset} />
		</>
		)
	}
}
