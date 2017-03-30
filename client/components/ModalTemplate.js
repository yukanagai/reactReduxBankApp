import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import ButtonWithIcon from '../components/ButtonWithIcon.js';

// MODAL TEMPLATE USED FOR DEPOSIT/WITHDRAW SCREENS

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
			    	<ButtonWithIcon
							id='cancel'
							buttonText='Cancel'
							onClickAction={this.handleLeftButtonAction.bind(this)} />
			    </Link>
			    <Link to='/'>
			    	<ButtonWithIcon
							id='submit'
							buttonText='Submit'
							onClickAction={this.handleRightButtonAction.bind(this)} />
			    </Link>
			  </div>
			</div>
		);
	}
};

ModalTemplate.propTypes = {
  handleLeftButtonAction: PropTypes.func.isRequired,
  handleRightButtonAction: PropTypes.func.isRequired,
  headerText: PropTypes.string.isRequired,
};


export default ModalTemplate;