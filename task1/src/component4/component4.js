import React from 'react';

export class DecreaseBtn extends React.PureComponent{

	constructor(props) {
		super(props);
	}

	render() {
		return <button onClick={this.props.decrease}>decrease</button>
	}

}
