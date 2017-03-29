import React from 'react';
import { Link } from 'react-router';

class ModalTemplate extends React.Component {

	constructor(props) {
		super(props);
	}

	handleLeftButtonAction() {
		if (this.props.handleLeftButtonAction instanceof Function) {
			this.props.handleLeftButtonAction();
		}
	}

	handleRightButtonAction() {
		let val = (this.refs.input.value);
		if (this.props.handleRightButtonAction instanceof Function) {
			this.props.handleRightButtonAction(val);
		}
	}

	render() {
		return (
			<div className='home'>
				<div className='content'>
					<h3>{this.props.headerText}</h3>
					<input className='ui input' type='number' ref='input' placeholder='numbers only' maxLength="10"></input>
				</div>
				<div className="buttonSection">
			    <Link to='/'>
			    	<div className="ui button" onClick={this.handleLeftButtonAction.bind(this)}>Cancel</div>
			    </Link>
			    <Link to='/'>
			    	<div className="ui button" onClick={this.handleRightButtonAction.bind(this)}>Submit</div><
			    /Link>
			  </div>
			</div>
		);
	}
};

export default ModalTemplate;