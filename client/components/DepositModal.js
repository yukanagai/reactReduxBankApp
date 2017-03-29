import React from 'react';
import ModalTemplate from './ModalTemplate.js';

class DepositModal extends React.Component {

	constructor(props) {
		super(props);
	}

	handleSubmit(val) {
		this.props.deposit(val);
	}

	handleCancel() {
		this.props.hideModal();
	}

	render() {
		return (
			<ModalTemplate
				headerText='How much would you like to deposit?' 
				handleLeftButtonAction={this.handleCancel.bind(this)}
				handleRightButtonAction={this.handleSubmit.bind(this)}
				{...this.props} />
		);
	}
	
}

export default DepositModal;